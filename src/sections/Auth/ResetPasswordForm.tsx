"use client"

import { RegisterRequest, ResetPasswordRequest } from "@/APIs/auth"
import Button from "@/components/custom/Button"
import { AxiosError } from "axios"
import { Eye, EyeClosed } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { toast } from "react-toastify"
import { useTranslations } from 'next-intl'

const ResetPasswordForm = ({code} : {code? : string}) => {
  const t = useTranslations('Auth')
  const router = useRouter()
  const isAuth = useIsAuthenticated()

  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [loading, setLoading] = useState(false)

  // Handle if no code
  useEffect(() => {
    !code && redirect("/")
  } , [])

  // Forget PAssword Function 
  const handleForgetPassword = async (e: React.FormEvent) => {
    
    e.preventDefault();    
    // Check if the field is filled 
    if (!password || !password2) {
      toast.error(t('resetPassword.errors.fillFields'))
    } else if (password !== password2) {
      toast.error(t('resetPassword.errors.passwordsNotMatch'))
    } else {
      setLoading(true)
      // Make the request 
      try {
        const response = await ResetPasswordRequest(password , code || "")
        if (response) {
          toast.success(t('resetPassword.passwordUpdated'))
          router.push("/login")
        }
        console.log(response)
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        toast.error(error.response?.data?.message || t('resetPassword.errors.somethingWrong'))
      } finally {
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    isAuth && redirect("/")
  } , [])

  // Password reveal
  const [showPass, setShowPass] = useState(false)
  const [showPass2, setShowPass2] = useState(false)

  return (
    <div className="w-full max-w-[500px]">
        {/* Password */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="password">{t('resetPassword.newPassword')}</label>
            <div className="relative flex-1">
              <input value={password} onChange={e => setPassword(e.target.value)} type={showPass ? "text" : "password"} id="password" placeholder={t('resetPassword.newPasswordPlaceholder')} className="w-full p-4 gradiantInput rounded-md border border-[#676767]" />
              {/* Eye Icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-logo cursor-pointer" onClick={() => setShowPass(!showPass)}> {showPass ? <EyeClosed /> : <Eye />} </div>
            </div>
        </div>
        {/* confirm Password */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="password2">{t('resetPassword.confirmPassword')}</label>
            <div className="relative flex-1">
              <input value={password2} onChange={e => setPassword2(e.target.value)} type={showPass2 ? "text" : "password"} id="password2" placeholder={t('resetPassword.confirmPasswordPlaceholder')} className="w-full p-4 gradiantInput rounded-md border border-[#676767]" />
              {/* Eye Icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-logo cursor-pointer" onClick={() => setShowPass2(!showPass2)}> {showPass2 ? <EyeClosed /> : <Eye />} </div>
            </div>
        </div>
        {/* Button */}
        <div onClick={e => handleForgetPassword(e)}><Button label={t('resetPassword.submitButton')} loading={loading} className="py-4 w-full bg-[#000] mt-7" /></div>
    </div>
  )
}

export default ResetPasswordForm