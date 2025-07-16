"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { toast } from "react-toastify"
import NormalButton from "@/components/custom/NormalButton";
import Link from "next/link"
import { LoginRequest } from "@/APIs/auth"
import Cookies from 'js-cookie';


const LoginForm = () => { 
  const signIn = useSignIn();
  const router = useRouter()
  const isAuth = useIsAuthenticated()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Login Function 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Check if the field is filled 
    if (!password || !email) {
      toast.error("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await LoginRequest(email, password);
      
      if (response.success) {
        const isSignIn = signIn({
          auth: {
            token: response.data.data.token,
            type: 'Bearer'
          },
          userState: {
            id: response.data.data.user.id,
            name: response.data.data.user.name,
            email: response.data.data.user.email,
            phone: response.data.data.user.phone,
            token: response.data.data.token
          }
        });
        
        if (isSignIn) {
          toast.success("Welcome " + response.data.data.user.name);
          if (typeof window !== "undefined") {
            const url = Cookies.get("url");
            if (url) {
              router.push(url)
              Cookies.remove("url")
            } else {
              router.push("/")
            }
          } else {
            router.push("/")
          }
        } else {
          toast.error("Something went wrong");
        }
      } else {
        // Handle different error types
        switch (response.errorType) {
          case "email_not_verified":
            toast.error("Email not verified, kindly check your email for verification code");
            Cookies.set("email", email)
            router.push("/email-verification")
            break;
          case "invalid_email":
            toast.error("Invalid email");
            break;
          case "invalid_password":
            toast.error("Invalid password");
            break;
          case "network":
            toast.error("Network error");
            break;
          default:
            toast.error(response.error || "Login failed");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) {
      if (typeof window !== "undefined") {
        const url = Cookies.get("url");
        if (url) {
          router.push(url)
          Cookies.remove("url")
        } else {
          router.push("/")
        }
      } else {
        router.push("/")
      }
    }
  } , [isAuth])
  
  return (
    <div>
        {/* Email */}
        <div className="flex flex-col gap-3 mb-6">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" placeholder="Email" className="p-4 focus:border-primary gradiantInput rounded-md border border-[#676767]" onKeyDown={e => e.key === 'Enter' && handleLogin(e)} />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-3 mb-3">
            <label htmlFor="password">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" placeholder="Password" className="p-4 focus:border-primary gradiantInput rounded-md border border-[#676767]" onKeyDown={e => e.key === 'Enter' && handleLogin(e)} />
        </div>
        {/* Remember && Forget Password */}
        <div className="flex flex-row gap-4 items-center justify-between mb-8">
            {/* Forget Password */}
            <Link href={"/forget-password"} className="text-logo transition-colors hover:text-secondary">Forget Password?</Link>
        </div>
        {/* Button */}
        <div onClick={e => handleLogin(e)}> <NormalButton label="Login" styles="w-full" loading={loading} /> </div>
        {/* Dont have account */}
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
            <div>Don't have an account? <Link href={"/register"} className="text-logo transition-colors hover:text-secondary">Register</Link></div>
        </div>
    </div>
  )
}

export default LoginForm