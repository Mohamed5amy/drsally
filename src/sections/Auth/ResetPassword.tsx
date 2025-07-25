"use client"

import { ResetPasswordRequest } from "@/APIs/auth"
import NormalButton from "@/components/custom/NormalButton"
import { AxiosError } from "axios"
import { Eye, EyeClosed } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { toast } from "react-toastify"

const ResetPassword = ({token} : {token : string}) => {
  const router = useRouter()
  const isAuth = useIsAuthenticated()
  const t = useTranslations()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Register Function 
  const handleRegister = async (e: React.FormEvent) => {
    
    e.preventDefault();    
    // Check if the field is filled 
    if (!password || !confirmPassword) {
      toast.error(t("Kindly make sure to fill all fields"))
    } else if (password !== confirmPassword) {
      toast.error(t("Passwords do not match"))
    } else {
      setLoading(true)
      // Make the request 
      try {
        const response = await ResetPasswordRequest(password , token)
        if (response) {
          toast.success(t("Password has been resat successfully, You can login now"))
          router.push("/login")
        } else {
          toast.error(t("This link is not valid anymore"))
        }
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        toast.error(error.response?.data?.message || t("Something went wrong"))
      } finally {
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    isAuth && redirect("/")
  } , [isAuth])

  // Password reveal
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  return (
    <div>
        <p className="text-3xl font-bold mb-2 text-center"> {t("Reset Password")} </p>
        <p className="opacity-70 font-medium mb-6 text-center"> {t("Add your new password")} </p>
        {/* Password */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="password">{t("edit_password_label")}</label>
            <div className="relative flex-1">
              <input value={password} onChange={e => setPassword(e.target.value)} type={showPass ? "text" : "password"} id="password" placeholder={t("edit_password_label")} className="w-full p-4 gradiantInput rounded-md border border-[#676767]" />
              {/* Eye Icon */}
              <div className="absolute end-4 top-1/2 -translate-y-1/2 text-logo cursor-pointer" onClick={() => setShowPass(!showPass)}> {showPass ? <EyeClosed /> : <Eye />} </div>
            </div>
        </div>
        {/* Confirm Password */}
        <div className="flex flex-col gap-3 mb-8">
            <label htmlFor="confirmPassword">{t("edit_confirm_password_label")}</label>
            <div className="relative flex-1">
              <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={showConfirmPass ? "text" : "password"} id="confirmPassword" placeholder={t("edit_confirm_password_label")} className="w-full p-4 gradiantInput rounded-md border border-[#676767]" />
              {/* Eye Icon */}
              <div className="absolute end-4 top-1/2 -translate-y-1/2 text-logo cursor-pointer" onClick={() => setShowConfirmPass(!showConfirmPass)}> {showConfirmPass ? <EyeClosed /> : <Eye />} </div>
            </div>
        </div>
        {/* Button */}
        <div onClick={e => handleRegister(e)}><NormalButton label={t("Reset")} styles="w-full" loading={loading} /></div>
    </div>
  )
}

export default ResetPassword