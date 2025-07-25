"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import NormalButton from "@/components/custom/NormalButton";
import { EmailVerificationRequest, ForgetPasswordRequest } from "@/APIs/auth"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { useTranslations } from "next-intl";

const ForgetPassword = () => { 
  const router = useRouter()
  const isAuth = useIsAuthenticated()
  const t = useTranslations()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  // Email Verification Function 
  const handleForgetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check if the field is filled 
    if (!email) {
      toast.error(t("Please fill in your account email"));
      return;
    }
    setLoading(true);
    try {
      const response = await ForgetPasswordRequest(email as string);
      if (response) {
        toast.success(t("Kindly check your email for a reset link"));
        setDone(true)
      } else {
        toast.error(t("Invalid email"));
      }
    } catch (err) {
      console.log(err);
      toast.error(t("Unexpected error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    isAuth && router.push("/")
  } , [isAuth])
  
  return (
    done ? <p className="text-lg text-center font-semibold">{t("You can close this tab now")}</p> : <div>
        <p className="text-3xl font-bold mb-2 text-center"> {t("Forgot Your Password?")} </p>
        <p className="opacity-70 font-medium mb-6 text-center"> {t("Don't worry just write your email and we will send you a link to reset your password")} </p>
        {/* email */}
        <div className="flex flex-col gap-3 mb-6">
            <label htmlFor="email">{t("contact_email")}</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" placeholder={t("Enter your account email")} className="p-4 focus:border-primary gradiantInput rounded-md border border-[#676767]" onKeyDown={e => e.key === 'Enter' && handleForgetPassword(e)} />
        </div>
        {/* Button */}
        <div onClick={e => handleForgetPassword(e)}>
         <NormalButton label={t("Submit")} styles="w-full" loading={loading} /> 
        </div>
    </div>
  )
}

export default ForgetPassword