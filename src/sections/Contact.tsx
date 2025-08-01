'use client';

import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/custom/Button';
import Magnetic from '@/components/Magnetic';
import { arrow, mail } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Parallax from '@/components/Parallax';
import { useTranslations } from 'next-intl';

import linkedIn from '@/animatedIcons/linkedIn.json';
import facebook from '@/animatedIcons/facebook.json';
import insta from '@/animatedIcons/insta.json';
import { useEffect, useState } from 'react';
import { sendContactRequest } from '@/APIs/others';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { toast } from 'react-toastify';

const HoverLottie = dynamic(() => import('@/components/HoverLottie'), { ssr: false });

const Contact = () => {
  const t = useTranslations();

  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    name : "",
    email : "",
    phone : "",
    message : "",
  })

  const user : any = useAuthUser()
  
  useEffect(() => {
    if (user) {
      setData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        message : ""
      })
    }
  } , [])

  const handleSubmit = async () => {
    setLoading(true)
    
    if (!data.name || !data.email || !data.phone || !data.message) {
      toast.error(t("Please make sure to fill all the fields"))
      setLoading(false)
      return;
    }

    const res = await sendContactRequest(data)
    if (res.status == 200) {
      toast.success(t("Thanks for your message I will get back to you ASAP"))
      setData({
        name : "",
        email : "",
        phone : "",
        message : "",
      })
    } else {
      toast.error(t("Something went wrong, Kindly try again later"))
    }
    
    setLoading(false)
  }

  return (
    <div className="py-20 container">
      <AnimatedTitle className="text-primaryText mb-2 text-[24px] md:text-[32px] lg:text-[56px] font-bold text-center">
        {t('contact_title')}
      </AnimatedTitle>
      <p className="text-xl text-secondaryText text-center mb-10">
        {t('contact_subtitle')}
      </p>
      {/* Form & Image */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Box */}
        <div className="flex-[1.2] w-full">
          <div className="p-6 bg-textPrimary rounded-3xl">
            <AnimatedTitle className="text-primaryText text-[24px] md:text-[32px] font-bold mb-10">
              {t('contact_form_title')}
            </AnimatedTitle>

            {/* Name */}
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name">
                {t('contact_name')}
                <span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: e.target.value })}
                className="p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors"
                placeholder={t('contact_name_placeholder')}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="email">
                {t('contact_email')}
                <span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                id="email"
                value={data.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, email: e.target.value })}
                className="p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors"
                placeholder={t('contact_email_placeholder')}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="phone">
                {t('contact_phone')}
                <span className="text-red-600"> *</span>
              </label>
              <input
                type="text"
                id="phone"
                value={data.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, phone: e.target.value })}
                className="p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors"
                placeholder={t('contact_phone_placeholder')}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 mb-10">
              <label htmlFor="message">
                {t('contact_message')}
                <span className="text-red-600"> *</span>
              </label>
              <textarea
                rows={4}
                id="message"
                value={data.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData({ ...data, message: e.target.value })}
                className="p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors outline-none"
                placeholder={t('contact_message_placeholder')}
              />
            </div>

            {/* Button */}
            <Button type='' label={t('contact_send')} disabled={loading} icon={arrow} onClick={handleSubmit} />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 hidden lg:flex">
          <Magnetic strength={0.02}>
            <Image
              src="/main1.svg"
              alt="Dr Sally Image"
              width={650}
              height={600}
            />
          </Magnetic>
        </div>
      </div>

      {/* Socials */}
      <Link
        href="mailto:sally@sallymounir.com"
        className="flex mt-10 mb-6 items-center gap-2 text-xl font-semibold text-lightText"
      >
        {mail} Sally@sallymounir.com
      </Link>

      <div className='flex gap-4'>
          <Link href={"https://www.linkedin.com/in/sally-mounir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"} target='_blank' className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
              <HoverLottie icon={linkedIn} w={30} h={30} /> 
          </Link>
          <Link href={"https://www.instagram.com/sallymounir.youmatter?igsh=ejY1aWQ1MWhtd3hr&utm_source=qr"} target='_blank' className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
              <HoverLottie icon={insta} w={30} h={30} /> 
          </Link>
          <Link href={"https://www.facebook.com/share/18qL4g4BVK/?mibextid=wwXIfr"} target='_blank' className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
              <HoverLottie icon={facebook} w={30} h={30} /> 
          </Link>
      </div>

      {/* Map */}
      <div className="mt-20">
        <Parallax direction="up" end="bottom top">
          <div className="rounded-3xl overflow-hidden border-4 border-[#C8DCD7] grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44180.52394803417!2d6.143038949999999!3d46.20483005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2seg!4v1752668436179!5m2!1sen!2seg"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Contact;
