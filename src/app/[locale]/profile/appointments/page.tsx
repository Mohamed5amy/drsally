import { getProfileData } from '@/APIs/user'
import MyAppointments from '@/sections/Profile/MyAppointments'
import { cookies } from 'next/headers'

const page = async () => {

  const token = (await cookies()).get("_auth")?.value
  const profile = await getProfileData(token || "")
    
  return (
    <div className='container'>
      <MyAppointments bookings={profile.bookings} />
    </div>
    
  )
}

export default page