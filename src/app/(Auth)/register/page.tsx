import RegisterForm from "@/sections/Auth/RegisterForm"


const page = () => {
  return (
    <div className="bg-white md:bg-[url('/main2.svg')] bg-fixed bg-cover bg-center h-screen pe-0 md:pe-24 flex items-center justify-center md:justify-end">
      {/* Form */}
      <div className="bg-white p-10 rounded-lg w-full max-w-[500px]"><RegisterForm /></div>
  </div>
  )
}

export default page