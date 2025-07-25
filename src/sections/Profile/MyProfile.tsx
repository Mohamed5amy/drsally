"use client"

import { editIcon } from '../../icons'
import Link from 'next/link'
import React from 'react'
import user from "@/animatedIcons/user.json"
import email from "@/animatedIcons/email.json"
import call from "@/animatedIcons/call.json"
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

const HoverLottie = dynamic(() => import('@/components/HoverLottie'), { ssr: false })

const MyProfile = ({ profile }: { profile: { name: string; email: string; phone: string } }) => {
  const t = useTranslations();

  return (
    <div className='p-6 pt-4 bg-white rounded-3xl w-full mb-10 md:mb-52'>
      <div className='pb-2 border-b mb-4 flex items-center gap-4 justify-between'>
        <p className="button">{t("profile_personal_information")}</p>
        <Link href={"/profile/edit"}>
          <div className='flex items-center gap-2 cursor-pointer group'>
            <span className='text-secondary'>{editIcon}</span>
            <p className="button group-hover:text-secondary transition-colors">{t("profile_edit")}</p>
          </div>
        </Link>
      </div>

      {/* Data */}
      <div className='flex justify-between gap-2 flex-wrap'>
        <div className='flex flex-row items-center gap-2 justify-center'>
          <HoverLottie icon={user} w={50} h={50} />
          <div className='flex flex-col gap-0'>
            <div className="body text-sm text-lightText">{t("profile_full_name")}</div>
            <div className="body">{profile.name}</div>
          </div>
        </div>

        <div className='flex flex-row items-center gap-2 justify-center'>
          <HoverLottie icon={email} w={50} h={50} />
          <div className='flex flex-col gap-0'>
            <div className="body text-sm text-lightText">{t("profile_email_address")}</div>
            <div className="body">{profile.email}</div>
          </div>
        </div>

        <div className='flex flex-row items-center gap-2 justify-center'>
          <HoverLottie icon={call} w={50} h={50} />
          <div className='flex flex-col gap-0'>
            <div className="body text-sm text-lightText">{t("profile_phone_number")}</div>
            <div className="body">{profile.phone}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
