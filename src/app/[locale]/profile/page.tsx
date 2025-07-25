import React from 'react'
import Sidebar from '@/components/custom/Sidebar'
import MyProfile from '@/sections/Profile/MyProfile'
import { cookies } from 'next/headers'
import { getProfileData } from '@/APIs/user'
import { getTranslations } from 'next-intl/server'

const Page = async () => {
  const token = (await cookies()).get("_auth")?.value
  const profile = await getProfileData(token || "")

  const t = await getTranslations()

  return (
    <div className='container'>
      <div className="flex gap-10 px flex-col md:flex-row">
        <Sidebar page={t("sidebar_profile")} />
        <div className="flex-1">
          <p className="title mb-3">{t("profile_page_title")}</p>
          <MyProfile profile={profile} />
        </div>
      </div>
    </div>
  )
}

export default Page
