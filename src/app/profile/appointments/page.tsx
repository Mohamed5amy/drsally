import React from 'react'
import MyProfile from '@/sections/Profile/MyProfile'
import { cookies } from 'next/headers'
import { getProfileData } from '@/APIs/user'
import Sidebar from '@/components/custom/Sidebar'
import MyAppointments from '@/sections/Profile/MyAppointments'

const page = async () => {
    
  return (
    <div className='container'>
      <MyAppointments />
    </div>
    
  )
}

export default page