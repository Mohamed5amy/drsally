import EmailVerification from "@/sections/Auth/EmailVerification"
import { getLocale } from "next-intl/server"


const page = async () => {
  const locale = await getLocale()
  return (
    <div dir="ltr" className="bg-white md:bg-[url('/main2.svg')] bg-fixed bg-cover bg-center h-screen pe-0 md:pe-24 flex items-center justify-center md:justify-end">
        {/* Form */}
        <div dir={locale === "ar" ? "rtl" : "ltr"} className="bg-white p-10 rounded-lg w-full max-w-[500px]"><EmailVerification /></div>
    </div>
  )
}

export default page