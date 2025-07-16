"use client"

import { RegisterRequest } from "@/APIs/auth"
import NormalButton from "@/components/custom/NormalButton"
import { AxiosError } from "axios"
import { Eye, EyeClosed } from "lucide-react"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import { toast } from "react-toastify"
import Cookies from 'js-cookie';


const RegisterForm = () => {
  const router = useRouter()
  const isAuth = useIsAuthenticated()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  // Register Function 
  const handleRegister = async (e: React.FormEvent) => {
    
    e.preventDefault();    
    // Check if the field is filled 
    if (!password || !email || !name || !confirmPassword || !phone) {
      toast.error("Kindly make sure to fill all fields")
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match")
    } else {
      setLoading(true)
      // Make the request 
      try {
        const response = await RegisterRequest(name , email , password , phone)
        if (response) {
          toast.success("Account created successfully, Kindly check your email for verification")
          Cookies.set("email", email)
          router.push("/email-verification")
        }
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        toast.error(error.response?.data?.message || "Check credentials")
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
       {/* Name */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="name">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" placeholder="Name" className="p-4 gradiantInput rounded-md border border-[#676767]" />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" placeholder="Email" className="p-4 gradiantInput rounded-md border border-[#676767]" />
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="phone">Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" id="phone" placeholder="Phone" className="p-4 gradiantInput rounded-md border border-[#676767]" />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="password">Password</label>
            <div className="relative flex-1">
              <input value={password} onChange={e => setPassword(e.target.value)} type={showPass ? "text" : "password"} id="password" placeholder="Password" className="w-full p-4 gradiantInput rounded-md border border-[#676767]" />
              {/* Eye Icon */}
              <div className="absolute end-4 top-1/2 -translate-y-1/2 text-logo cursor-pointer" onClick={() => setShowPass(!showPass)}> {showPass ? <EyeClosed /> : <Eye />} </div>
            </div>
        </div>
        {/* Confirm Password */}
        <div className="flex flex-col gap-3 mb-8">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative flex-1">
              <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type={showConfirmPass ? "text" : "password"} id="confirmPassword" placeholder="Confirm Password" className="w-full p-4 gradiantInput rounded-md border border-[#676767]" />
              {/* Eye Icon */}
              <div className="absolute end-4 top-1/2 -translate-y-1/2 text-logo cursor-pointer" onClick={() => setShowConfirmPass(!showConfirmPass)}> {showConfirmPass ? <EyeClosed /> : <Eye />} </div>
            </div>
        </div>
        {/* Button */}
        <div onClick={e => handleRegister(e)}><NormalButton label="Create Account" styles="w-full" loading={loading} /></div>
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
            {/* Forget Password */}
            <div>Already have an account? <Link href={"/login"} className="text-logo transition-colors hover:text-secondary">Login</Link></div>
        </div>
    </div>
  )
}

export default RegisterForm