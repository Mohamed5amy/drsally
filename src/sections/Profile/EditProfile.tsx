"use client"

import { CircleX, Eye, EyeClosed } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { useRouter } from 'next/navigation'
import { editProfile, getProfileData } from '@/APIs/user'
import NormalButton from '@/components/custom/NormalButton'
import { useTranslations } from 'next-intl'

type Inputs = {
    name: string
    phone : string
    password : string
    email : string
    password_confirmation: string
}

const EditProfile = () => {
    const t = useTranslations()
    const logOut = useSignOut()
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    const [isPassword, setIsPassword] = useState(true)
    const [isPassword2, setIsPassword2] = useState(true)

    const authUser : any = useAuthUser()
    const token = authUser?.token

    useEffect(() => {
        const fetchProfile = async () => {
            try {
              const data = await getProfileData(token || "");
                reset({
                    name : data.name,
                    phone: data.phone,
                    email : authUser.email
                });
            } catch (err) {
              console.error('Failed to fetch profile:', err);
            }
        };
        fetchProfile();
    }, [reset , token])

    const handleChangePassword = async (data : Inputs) => {
        if (data.password !== data.password_confirmation) {
            toast.error(t("edit_password_mismatch"))
        } else if (!data.password_confirmation) {
            toast.error(t("edit_password_required"))
        } else {
            setLoading(true)
            try {
                const res = await editProfile(token || "" , {
                    name : data.name , 
                    phone : data.phone,
                    password : data.password,
                    email : authUser.email
                })
                if (res.code === 201) {
                    toast.success(t("edit_success_login_again"))
                    logOut()
                    router.push("/")
                } else {
                    toast.error(t("edit_generic_error"))
                }
                setLoading(false)
            } catch {
                setLoading(false)
                toast.error(t("edit_generic_error"))
            }
        }
    }

    const handleChangeData = async (data : Inputs) => {
        setLoading(true)
        try {
            const res = await editProfile(token || "" , {
                name : data.name, 
                phone : data.phone,
                email : authUser.email
            })
            if (res.code === 201) {
                toast.success(t("edit_success"))
                router.push("/profile")
            } else {
                toast.error(t("edit_generic_error"))
            }
            setLoading(false)
        } catch {
            setLoading(false)
            toast.error(t("edit_generic_error"))
        }
    }

    const onSubmit: SubmitHandler<Inputs> = async (data : Inputs) => {
        if (data.password) {
            handleChangePassword(data)
        } else {
            handleChangeData(data)
        }
    }

    return (
        <>
            <div className='p-6 pt-4 bg-white rounded-3xl w-full mb-3'>
                <div className='pb-2 border-b mb-4'>
                    <p className="button">{t("edit_personal_info")}</p>
                </div>
                <form className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6'>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fName" className="body">{t("edit_name")}</label>
                        <div className="flex items-start gap-1 h-14 relative">
                            <input id='fName' type="text" {...register("name", { required: true })} className="h-full bg-bg flex-1 rounded-3xl pr-3 pl-3 border" placeholder={t("edit_full_name")} />
                        </div>
                        {errors?.name && <p className='text-red-600 text-xs font-medium flex items-center gap-1'><CircleX size={14} /> {t("edit_required_field")} </p> }
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="body">{t("edit_phone_number")}</label>
                        <div className="flex items-start gap-1 h-14 relative">
                            <input id='phone' type="tel" {...register("phone", { required: true })} className="h-full bg-bg flex-1 rounded-3xl pr-3 pl-3 border" placeholder={t("edit_phone_number")} />
                        </div>
                        {errors?.name && <p className='text-red-600 text-xs font-medium flex items-center gap-1'><CircleX size={14} /> {t("edit_required_field")} </p> }
                    </div>
                </form>
            </div>

            <div className='p-6 pt-4 bg-white rounded-3xl w-full mb-6'>
                <div className='pb-2 border-b mb-4'>
                    <p className="button">{t("edit_change_password")}</p>
                </div>
                <form className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6'>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="body">{t("edit_password_label")}</label>
                        <div className="flex items-start gap-1 h-14 relative">
                            <input type={isPassword ? "password" : "text"} {...register("password")} className="h-full bg-bg flex-1 rounded-3xl px-3 border" placeholder="*********" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword(!isPassword)}>
                                {isPassword ? <Eye /> : <EyeClosed />}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password_confirmation" className="body">{t("edit_confirm_password_label")}</label>
                        <div className="flex items-start gap-1 h-14 relative">
                            <input type={isPassword2 ? "password" : "text"} {...register("password_confirmation")} className="h-full bg-bg flex-1 rounded-3xl px-3 border" placeholder="*********" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword2(!isPassword2)}>
                                {isPassword2 ? <Eye /> : <EyeClosed />}
                            </span>
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex justify-end mb-10">
                <NormalButton onClick={handleSubmit(onSubmit)} loading={loading} label={t("edit_update")} />
            </div>
        </>
    )
}

export default EditProfile
