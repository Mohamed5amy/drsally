"use client"

import { ForgetPasswordRequest, LoginRequest } from "@/APIs/auth"
import Button from "@/components/custom/Button"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { toast } from "react-toastify"
import { useTranslations } from 'next-intl'

const ForgetForm = () => { 
  const t = useTranslations('Auth')
  const router = useRouter()
  const isAuth = useIsAuthenticated()

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  // Login Function 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if the field is filled 
    if (!email) {
      toast.error(t('forgotPassword.errors.fillEmail'));
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await ForgetPasswordRequest(email);
      if (response) {
        toast.success(t('forgotPassword.resetLinkSent'))
      } else {
        toast.error(t('forgotPassword.errors.invalidEmail'))
      }
    } catch (err) {
      console.log(err);
      toast.error(t('forgotPassword.errors.unexpectedError'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    isAuth && redirect("/")
  } , [])
  
  return (
    <div className="w-full max-w-[500px] px-4">
        {/* Email */}
        <div className="flex flex-col gap-3 mb-6">
            <label htmlFor="email">{t('common.email')}</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" placeholder={t('common.emailPlaceholder')} className="p-4 gradiantInput rounded-md border border-[#676767]" />
        </div>
        {/* Button */}
        <div onClick={e => handleLogin(e)}><Button loading={loading} label={t('forgotPassword.sendResetButton')} className="py-4 w-full bg-[#000]" /></div>
    </div>
  )
}

export default ForgetForm