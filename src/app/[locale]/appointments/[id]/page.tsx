import { getDays } from '@/APIs/appointments'
import { getProfileData } from '@/APIs/user'
import LoginFirst from '@/components/custom/LoginFirst'
import Step1 from '@/sections/Rebook/Step1'
import Step2 from '@/sections/Rebook/Step2'
import Stepper from '@/sections/Rebook/Stepper'
import { cookies } from 'next/headers'

// Get Next Week Date
function getNextWeekDate(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date();
  date.setDate(date.getDate() + 0);
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

  const {step = 1} = await searchParams
  const token = (await cookies()).get("_auth")?.value

  if (!token) {
    return (
      <LoginFirst />
    )
  }

  const days = await getDays(getNextWeekDate() , getNextMonthDate() , "90" , token || "")
  const profile = await getProfileData(token || "")
  
  return (
    <div className='py-12 pb-16'>
        <Stepper currentStep={step} bookings={profile?.bookings?.length} />
        {step == 1 && <Step1 />}
        {step == 2 && <Step2 days={days.availability} bookings={profile?.bookings?.length} />}
    </div>
  )
}

export default page