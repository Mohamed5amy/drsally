"use client"

import { mail } from '@/icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import linkedIn from "@/animatedIcons/linkedIn.json" 
import facebook from "@/animatedIcons/facebook.json" 
import insta from "@/animatedIcons/insta.json" 
import NormalButton from './NormalButton'
import { useTranslations } from 'next-intl'

const HoverLottie = dynamic(() => import('@/components/HoverLottie') , {ssr : false})



const Footer = () => {
  const t = useTranslations();
  return (
    <div className='bg-textPrimary'>
        <div className='container py-6 flex flex-col gap-8'>
            {/* Upper */}
            <div className='flex justify-between flex-wrap gap-10 pb-8 border-b border-[#C8DCD7]'>
                {/* Logo */}
                <div className=''> <Image src={"/footerLogo.svg"} alt='Logo' width={236} height={150} /> </div>
                {/* Pages */}
                <div className='capitalize'>
                    <h4 className='text-xl font-semibold mb-2'>{t('footer_quickLinks')}</h4>
                    <p className='pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>{t('footer_appointments')}</p>
                    <p className='pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>{t('footer_about')}</p>
                    <p className='pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>{t('footer_services')}</p>
                </div>
                {/* Quick Links */}
                <div className='capitalize'>
                    <h4 className='text-xl font-semibold mb-2'>{t('footer_quickLinks')}</h4>
                    <p className='pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>{t('footer_testimonials')}</p>
                    <p className='pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>{t('footer_blog')}</p>
                    <p className='transition-all hover:text-red-600 font-semibold text-lightText'>{t('footer_contact')}</p>
                </div>
                {/* Contact */}
                <div className=''>
                    <h4 className='text-xl font-semibold mb-4'>{t('footer_contactUs')}</h4>
                    {/* Mail */}
                    <Link href={"mailto:sally@sallymounir.com"} className='flex items-center gap-2 font-semibold text-lightText'> {mail} Sally@sallymounir.com </Link>
                    {/* Social */}
                    <h4 className='text-xl font-semibold mb-4 mt-10'>{t('footer_stayInTouch')}</h4>
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
                </div>
                {/* Newsletter */}
                {/* <div className='max-w-[326px]'>
                    <h4 className='text-xl font-semibold mb-4'>{t('footer_subscribe')}</h4>
                    <p className='text-xl text-lightText mb-4'>{t('footer_subscribeDesc')}</p>
                    <div className='relative'>
                        <input type="email" placeholder={t('footer_emailPlaceholder')} className='p-4 rounded-full w-full caret-primary placeholder:text-lightText' />
                        <NormalButton label={t('footer_subscribe')} styles='py-3 px-6 hover:px-7 absolute end-1 top-1' />
                    </div>
                </div> */}
            </div>
            {/* Lower */}
            <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
                <div className='flex flex-col gap-2 md:gap-6 md:flex-row'>
                    <Image src={"/certificate1.svg"} alt='certificate' width={200} height={60} />
                    <Image src={"/certificate2.svg"} alt='certificate' width={200} height={60} />
                </div>
                {/* Rights */}
                <p className='text-lg sm:text-lg font-semibold text-center md:text-start'> © {new Date().getFullYear()} {t('footer_rights')} | {t('footer_poweredBy')} <Link href={"https://www.mssmsolutions.com/"} target='_blank' className='transition-colors hover:text-secondary'>MSSM Solutions</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer