import { getDays } from '@/APIs/appointments'
import { getProfileData } from '@/APIs/user'
import Step1 from '@/sections/Appointments/Step1'
import Step2 from '@/sections/Appointments/Step2'
import Step3 from '@/sections/Appointments/Step3'
import Step4 from '@/sections/Appointments/Step4'
import Step5 from '@/sections/Appointments/Step5'
import Stepper from '@/sections/Appointments/Stepper'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

// Get Next Week Date
function getNextWeekDate(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date();
  date.setDate(date.getDate() + 7);
  return date.toISOString().split('T')[0]; // format: YYYY-MM-DD
}

// Get Next Month Date
function getNextMonthDate(dateString?: string): string {
    const date = dateString ? new Date(dateString) : new Date();
    const currentDay = date.getDate();

    // Move to next month
    date.setMonth(date.getMonth() + 1);

    // Handle cases where next month has fewer days
    // (e.g., Jan 31 → Feb 28/29)
    if (date.getDate() < currentDay) {
        // date auto-adjusted to last day of month
    }

    return date.toISOString().split('T')[0]; // format: YYYY-MM-DD
}
  

const page = async ({searchParams} : {searchParams : Promise<{step : number}>}) => {

  const token = (await cookies()).get("_auth")?.value

  if (!token) {
    redirect("/")
  }

  const {step = 1} = await searchParams

  const days = await getDays(getNextWeekDate() , getNextMonthDate() , "90" , token || "")
  const profile = await getProfileData(token || "")
  
  return (
    <div className='py-12 pb-16'>
        <Stepper currentStep={step} bookings={profile?.bookings?.length} />
        {step == 1 && <Step1 />}
        {step == 2 && <Step2 days={days.availability} bookings={profile?.bookings?.length} />}
        {step == 3 && <Step3 />}
        {step == 4 && <Step4 bookings={profile?.bookings?.length} />}
        {step == 5 && <Step5 />}
    </div>
  )
}

export default page