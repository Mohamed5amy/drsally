"use client"

import AnimatedTitle from '@/components/AnimatedTitle';
import Button from '@/components/custom/Button';
import Magnetic from '@/components/Magnetic';
import { arrow, mail } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import linkedIn from "@/animatedIcons/linkedIn.json" 
import facebook from "@/animatedIcons/facebook.json" 
import insta from "@/animatedIcons/insta.json" 
import x from "@/animatedIcons/x.json" 
import dynamic from 'next/dynamic';
import Parallax from '@/components/Parallax';


const HoverLottie = dynamic(() => import('@/components/HoverLottie') , {ssr : false})
const Contact = () => {
  

  return (
    <div className='py-20 container'>
        <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] lg:text-[56px] font-bold text-center'> Have a question? </AnimatedTitle>
        <p className='text-xl text-secondaryText text-center mb-10'>You can send your message here and I'll get back to you.</p>
        <div className='flex items-center gap-16'>
            {/* Box */}
            <div className='flex-[1.2]'>
                <div className='p-6 bg-textPrimary rounded-3xl'>
                    <AnimatedTitle className='text-primaryText text-[24px] md:text-[32px] font-bold mb-10'> Send a message </AnimatedTitle>
                    {/* Name */}
                    <div className='flex flex-col gap-2 mb-6'>
                        <label htmlFor="name">Name<span className='text-red-600'> *</span></label>
                        <input type="text" id="name" className='p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors' placeholder='Your Name' />
                    </div>
                    {/* Email */}
                    <div className='flex flex-col gap-2 mb-6'>
                        <label htmlFor="email">Email<span className='text-red-600'> *</span></label>
                        <input type="text" id="email" className='p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors' placeholder='Your Email' />
                    </div>
                    {/* Message */}
                    <div className='flex flex-col gap-2 mb-10'>
                        <label htmlFor="message">Message<span className='text-red-600'> *</span></label>
                        <textarea rows={4} id="message" className='p-4 bg-bg border border-transparent focus:border-primary rounded-2xl transition-colors outline-none' placeholder='Your Message' />
                    </div>
                    {/* Button */}
                    <Button label='Send the message' icon={arrow} />
                </div>
                <Link href={"mailto:sally@sallymounir.com"} className='flex mt-10 mb-6 items-center gap-2 text-xl font-semibold text-lightText'> {mail} Sally@sallymounir.com </Link>
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
            {/* Image */}
            <div className='flex-1'>
                <Magnetic strength={0.02}> <Image src={"/main1.svg"} alt="Dr Sally Image" width={650} height={600} /> </Magnetic>
            </div>
        </div>
        {/* Map */}
        <div className='mt-20'>
            <Parallax direction='up' end='bottom top'>
              <div className='rounded-3xl overflow-hidden border-4 border-[#C8DCD7] grayscale'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184446.9334553032!2d103.8482827375222!3d1.3260135730269416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2seg!4v1746707481314!5m2!1sen!2seg" width="100%" height="450" loading="lazy"></iframe>
              </div>
            </Parallax>
        </div>
    </div>
  );
};

export default Contact;