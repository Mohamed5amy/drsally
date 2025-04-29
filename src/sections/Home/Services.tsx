import NormalButton from '@/components/custom/NormalButton'
import { correct } from '@/icons'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='py-20 container'>
        <h3 className='text-primaryText mb-2 text-[32px] font-bold text-center'> Services I Offer </h3>
        <p className='text-lightText text-xl mb-12 text-center'>Tailored therapeutic support to help you navigate life's challenges and discover your path to well-being.</p>
        {/* Boxes */}
        <div className="flex gap-10 mb-10">
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative">
                <h1 className="text-2xl font-semibold">Individual Therapy</h1>
                <p className="text-lg text-start mb-4"> One-on-one sessions focused on your specific needs and goals. Together, we'll work through challenges such as anxiety, depression, stress, relationship issues, or major life transitions. </p>
                {/* Features */}
                <div className='flex flex-col gap-2 mb-6'>
                    <div className=' flex items-center gap-2'> <p className='min-w-6'> {correct} </p> 60-minute sessions tailored to your needs </div>
                    <div className=' flex items-center gap-2'> <p className='min-w-6'> {correct} </p> Available in-person or via secure video call </div>
                    <div className=' flex items-center gap-2'> <p className='min-w-6'> {correct} </p> Flexible scheduling options </div>
                </div>
                {/* Book Session */}
                <NormalButton label='Book a Session' />
                {/* Flower */}
                <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute right-0 bottom-0' />
            </div>
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative">
                <h1 className="text-2xl font-semibold">Specialized Support</h1>
                <p className="text-lg text-start mb-4"> Focused therapeutic approaches for specific challenges you may be facing, including expat adjustment, cultural transition, and identity exploration. </p>
                {/* Features */}
                <div className='flex flex-col gap-2 mb-6'>
                    <div className=' flex items-center gap-2'> <p className='min-w-6'> {correct} </p> Expat adjustment and cultural transition support </div>
                    <div className=' flex items-center gap-2'> <p className='min-w-6'> {correct} </p> Career transition and work-life balance </div>
                    <div className=' flex items-center gap-2'> <p className='min-w-6'> {correct} </p> Identity exploration and personal growth </div>
                </div>
                {/* Book Session */}
                <NormalButton label='Book a Session' />
                {/* Flower */}
                <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute right-0 bottom-0' />
            </div>
        </div>
        {/* Button */}
    </div>
  )
}

export default Services