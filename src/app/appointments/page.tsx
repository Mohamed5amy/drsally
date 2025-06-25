import { getDays } from '@/APIs/appointments'
import Step1 from '@/sections/Appointments/Step1'
import Step2 from '@/sections/Appointments/Step2'
import Step3 from '@/sections/Appointments/Step3'
import Step4 from '@/sections/Appointments/Step4'
import Stepper from '@/sections/Appointments/Stepper'
import { cookies } from 'next/headers'
import React from 'react'

const page = async ({searchParams} : {searchParams : Promise<{step : number}>}) => {

  const {step = 1} = await searchParams
  const token = (await cookies()).get("_auth")?.value

  
  // const days = await getDays("2025-06-21" , "2025-06-29" , "90" , token || "")

  // console.log(days)
  
  return (
    <div className='py-12 pb-16'>
        <Stepper currentStep={step} />
        {step == 1 && <Step1 />}
        {step == 2 && <Step2 />}
        {step == 3 && <Step3 />}
        {step == 4 && <Step4 />}
    </div>
  )
}

export default page