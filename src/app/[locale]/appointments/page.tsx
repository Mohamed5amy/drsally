import { getDays } from '@/APIs/appointments'
import { getProfileData } from '@/APIs/user'
import LoginFirst from '@/components/custom/LoginFirst'
import Step1 from '@/sections/Appointments/Step1'
import Step2 from '@/sections/Appointments/Step2'
import Step3 from '@/sections/Appointments/Step3'
import Step4 from '@/sections/Appointments/Step4'
import Step5 from '@/sections/Appointments/Step5'
import Stepper from '@/sections/Appointments/Stepper'
import { cookies } from 'next/headers'

// Get Next 4 Days Date
function getNextWeekDate(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date();
  date.setDate(date.getDate() + 5);
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
    return (
      <LoginFirst />
    )
  }

  const {step = 1} = await searchParams

  const days = await getDays(getNextWeekDate() , getNextMonthDate() , "90" , token || "")
  const profile = await getProfileData(token || "")
  const bookings = profile?.bookings?.length
  
  return (
    <div className='py-12 pb-16'>
        <Stepper currentStep={step} bookings={bookings} />
        {step == 1 && <Step1 bookings={bookings} />}
        {step == 2 && <Step2 days={days.availability} bookings={bookings} />}
        {step == 3 && <Step3  bookings={bookings} />}
        {step == 4 && <Step4 bookings={bookings} />}
        {step == 5 && <Step5 />}
    </div>
  )
}

export default page