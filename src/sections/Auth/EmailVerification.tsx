"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import NormalButton from "@/components/custom/NormalButton";
import { EmailVerificationRequest } from "@/APIs/auth"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import Cookies from 'js-cookie';
import { useTranslations } from "next-intl";


const EmailVerification = () => { 
  const router = useRouter()
  const isAuth = useIsAuthenticated()
  const t = useTranslations()

  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)

  // Email Verification Function 
  const handleEmailVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check if the field is filled 
    if (!code) {
      toast.error(t("Please fill in the code"));
      return;
    }
    setLoading(true);
    try {
      const email = Cookies.get("email")
      const response = await EmailVerificationRequest(email as string, code);
      if (response) {
        toast.success(t("Email verified successfully"));
        router.push("/login");
        Cookies.remove("email");
      } else {
        toast.error(t("Invalid code"));
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
    <div>
        {/* Code */}
        <div className="flex flex-col gap-3 mb-6">
            <label htmlFor="code">{t("Code")}</label>
            <input value={code} onChange={e => setCode(e.target.value)} type="text" id="code" placeholder="Code" className="p-4 focus:border-primary gradiantInput rounded-md border border-[#676767]" onKeyDown={e => e.key === 'Enter' && handleEmailVerification(e)} />
            <p className="opacity-70 text-sm">{t("Check your email")} : {Cookies?.get("email")}</p>
        </div>
        {/* Button */}
        <div onClick={e => handleEmailVerification(e)}>
         <NormalButton label={t("Verify")} styles="w-full" loading={loading} /> 
        </div>
    </div>
  )
}

export default EmailVerification