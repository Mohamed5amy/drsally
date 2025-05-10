"use client"

import { mail } from '@/icons'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import linkedIn from "@/animatedIcons/linkedIn.json" 
import facebook from "@/animatedIcons/facebook.json" 
import insta from "@/animatedIcons/insta.json" 
import x from "@/animatedIcons/x.json" 
import NormalButton from './NormalButton'

const HoverLottie = dynamic(() => import('@/components/HoverLottie') , {ssr : false})



const Footer = () => {
  return (
    <div className='bg-textPrimary'>
        <div className='container py-6 flex flex-col gap-8'>
            {/* Upper */}
            <div className='flex justify-between flex-wrap gap-10 pb-8 border-b border-[#C8DCD7]'>
                {/* Logo */}
                <div className=''> <Image src={"/footerLogo.svg"} alt='Logo' width={236} height={150} /> </div>
                {/* Quick Links */}
                <div className='capitalize'>
                    <h4 className='text-xl font-semibold mb-2'>quick links</h4>
                    <p className='text-xl pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>Appointments</p>
                    <p className='text-xl pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>About</p>
                    <p className='text-xl pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>Services</p>
                    <p className='text-xl pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>Testimonials</p>
                    <p className='text-xl pb-2 transition-all hover:text-red-600 font-semibold text-lightText'>Blog</p>
                    <p className='text-xl transition-all hover:text-red-600 font-semibold text-lightText'>Contact</p>
                </div>
                {/* Contact */}
                <div className=''>
                    <h4 className='text-xl font-semibold mb-4'>Contact Us</h4>
                    {/* Mail */}
                    <Link href={"mailto:sally@sallymounir.com"} className='flex items-center gap-2 text-xl font-semibold text-lightText'> {mail} Sally@sallymounir.com </Link>
                    {/* Social */}
                    <h4 className='text-xl font-semibold mb-4 mt-10'>Stay In Touch</h4>
                    <div className='flex gap-4'>
                        <div className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
                            <HoverLottie icon={linkedIn} w={30} h={30} /> 
                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
                            <HoverLottie icon={insta} w={30} h={30} /> 
                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
                            <HoverLottie icon={facebook} w={30} h={30} /> 
                        </div>
                        <div className='w-12 h-12 rounded-full bg-[#C8DCD7] flex items-center justify-center transition-all hover:scale-150'>
                            <HoverLottie icon={x} w={30} h={30} /> 
                        </div>
                    </div>
                </div>
                {/* Newsletter */}
                <div className='max-w-[326px]'>
                    <h4 className='text-xl font-semibold mb-4'>Subscribe</h4>
                    <p className='text-xl text-lightText mb-4'> Sign up with your email address to receive news and updates. </p>
                    <div className='relative'>
                        <input type="email" placeholder='Email Address' className='p-4 rounded-full w-full caret-primary placeholder:text-lightText' />
                        <NormalButton label='Subscribe' styles='py-3 px-6 hover:px-7 absolute right-1 top-1' />
                    </div>
                </div>
            </div>
            {/* Lower */}
            <div className='flex flex-col gap-4 md:flex-row items-center justify-between'>
                <div className='flex flex-col gap-2 md:gap-6 md:flex-row'>
                    <Image src={"/certificate1.svg"} alt='certificate' width={200} height={60} />
                    <Image src={"/certificate2.svg"} alt='certificate' width={200} height={60} />
                </div>
                {/* Rights */}
                <p className='text-xl font-semibold text-center md:text-start'> © {new Date().getFullYear()} All Rights Reserved | Powered by <Link href={"https://www.mssmsolutions.com/"} target='_blank' className='transition-colors hover:text-secondary'>MSSM</Link> Solutions </p>
            </div>
        </div>
    </div>
  )
}

export default Footer