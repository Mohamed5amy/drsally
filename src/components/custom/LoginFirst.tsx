"use client"

import { Link, useRouter } from "@/i18n/navigation"
import Image from "next/image"
import Button from "./Button"
import { homeIcon } from "@/icons"


const LoginFirst = () => {

    const router = useRouter()
    
  return (
    <div className='w-full h-[70vh] flex items-center justify-center flex-col'>
        <Image src={"/icon.svg"} alt='Dr Sally Logo' width={300} height={300} />
        <p className='text-lg mt-10 font-medium text-center mb-1'> To book your session, Kindly login first. </p>
        <p className='text-sm font-medium text-center mb-4'> First time? <Link onClick={() => localStorage.setItem("redirectUrl" , "/appointments")} href={"/register"} className="text-primary underline transition-colors hover:text-secondary">Create your account</Link> </p>
        <Button label='Login' icon={homeIcon} onClick={() => {
        localStorage.setItem("redirectUrl" , "/appointments")
        router.push("/login")
        }} />
      </div>
  )
}

export default LoginFirst