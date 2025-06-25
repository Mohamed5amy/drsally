"use client"

import { ArrowRight, Camera, CircleX, Eye, EyeClosed, Loader, Lock, Mail } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { useRouter } from 'next/navigation'
import { editProfile, getProfileData } from '@/APIs/user'
import NormalButton from '@/components/custom/NormalButton'

type Inputs = {
    name: string
    phone : string
    password : string
    email : string
    password_confirmation: string
}

const EditProfile = () => {

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
    // Get Profile Data
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
    } , [reset , token])

    // Change Data with password
    const handleChangePassword = async (data : Inputs) => {
        if (data.password !== data.password_confirmation) {
            toast.error("Make sure the password confirmation matches the password")
        } else if (!data.password_confirmation) {
            toast.error("Make sure to add the password confirmation")
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
                    toast.success("Updated Successfully, Please login again")
                    logOut()
                    router.push("/")
                } else {
                    toast.error("Ops, something went wrong please try again later")
                    console.log(res)
                }
                setLoading(false)
            } catch {
                setLoading(false)
                toast.error("Ops, something went wrong please try again later")
            }
        }
    }

    // Change Data without password
    const handleChangeData = async (data : Inputs) => {
        setLoading(true)
        try {
            const res = await editProfile(token || "" , {
                name : data.name, 
                phone : data.phone,
                email : authUser.email
            })
            console.log(res)
            if (res.code === 201) {
                toast.success("Updated Successfully")
                router.push("/profile")
            } else {
                toast.error("Ops, something went wrong please try again later")
                console.log(res)
            }
            setLoading(false)
        } catch {
            setLoading(false)
            toast.error("Ops, something went wrong please try again later")
        }
    }

    // Handle update profile
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
                <p className="button">Edit Personal information</p>
            </div>
            {/* Form */}
            <form className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6'>
                {/*  Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="fName" className="body">Name</label>
                    <div className="flex items-start gap-1 h-14 relative">
                        <input id='fName' type="text" {...register("name", { required: true })} className="h-full bg-bg flex-1 rounded-3xl pr-3 pl-3 border" placeholder="Full Name" />
                    </div>
                    {errors?.name && <p className='text-red-600 text-xs font-medium flex items-center gap-1'><CircleX size={14} /> This Field Is Required </p> }
                </div>
                {/* Number */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="body">Phone Number</label>
                    <div className="flex items-start gap-1 h-14 relative">
                        <input id='phone' type="tel" {...register("phone", { required: true })} className="h-full bg-bg flex-1 rounded-3xl pr-3 pl-3 border" placeholder="Phone Number" />
                    </div>
                    {errors?.name && <p className='text-red-600 text-xs font-medium flex items-center gap-1'><CircleX size={14} /> This Field Is Required </p> }
                </div>
            </form>
        </div>

        <div className='p-6 pt-4 bg-white rounded-3xl w-full mb-6'>
            <div className='pb-2 border-b mb-4'>
                <p className="button">Change password</p>
            </div>
            {/* Form */}
            <form className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6'>
                {/* Password */}
                <div className="flex flex-col gap-2">
                <label htmlFor="number" className="body">Password *</label>
                <div className="flex items-start gap-1 h-14 relative">
                    <input type={isPassword ? "password" : "text"} {...register("password")} className="h-full bg-bg flex-1 rounded-3xl px-3 border" placeholder="*********" />
                    {isPassword ? <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword(false)}><Eye /></span> : <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword(true)}><EyeClosed /></span>}
                </div>
                </div>
                {/* Confirm Password */}
                <div className="flex flex-col gap-2">
                <label htmlFor="number" className="body">Confirm Password *</label>
                <div className="flex items-start gap-1 h-14 relative">
                    <input type={isPassword2 ? "password" : "text"} {...register("password_confirmation")} className="h-full bg-bg flex-1 rounded-3xl px-3 border" placeholder="*********" />
                    {isPassword2 ? <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword2(false)}><Eye /></span> : <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setIsPassword2(true)}><EyeClosed /></span>}
                </div>
                </div>
            </form>
        </div>

        {/* Button */}
        <div className="flex justify-end mb-10">
            <NormalButton onClick={handleSubmit(onSubmit)} loading={loading} label='Update' />
        </div>
    </>
  )
}

export default EditProfile