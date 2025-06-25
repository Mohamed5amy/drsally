import React from 'react'
import Sidebar from '../../components/custom/Sidebar'
import MyProfile from '@/sections/Profile/MyProfile'
import { cookies } from 'next/headers'
import { getProfileData } from '@/APIs/user'

const page = async () => {

  const token = (await cookies()).get("_auth")?.value
  const profile = await getProfileData(token || "")
    
  return (
    <div className='container'>
        <div className="flex gap-10 px flex-col md:flex-row">
            <Sidebar page={"My Profile"} />
            <div className="flex-1">
                <p className="title mb-3"> My Profile </p>
                <MyProfile profile={profile} />
            </div>
        </div>
    </div>
    
  )
}

export default page