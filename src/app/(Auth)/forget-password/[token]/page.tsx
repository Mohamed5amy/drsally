import LoginForm from "@/sections/Auth/LoginForm"
import EmailVerification from "@/sections/Auth/EmailVerification"
import ForgetPassword from "@/sections/Auth/ForgetPassword"
import ResetPassword from "@/sections/Auth/ResetPassword"


const page = async ({params} : {params : Promise<{token : string}>}) => {
    const {token} = await params
  return (
    <div className="bg-white md:bg-[url('/main2.svg')] bg-fixed bg-cover bg-center h-screen pe-0 md:pe-24 flex items-center justify-center md:justify-end">
        {/* Form */}
        <div className="bg-white p-10 rounded-lg w-full max-w-[500px]"><ResetPassword token={token} /></div>
    </div>
  )
}

export default page