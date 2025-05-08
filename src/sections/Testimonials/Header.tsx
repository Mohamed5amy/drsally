import AnimatedTitle from '@/components/AnimatedTitle'
import { homeIcon, rightChevron } from '@/icons'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="py-36 relative overflow-hidden">
        <div className='container'>
            <AnimatedTitle className="text-[20px] md:text-[36px] xl:text-[56px] font-bold text-[#1C2C2D] mb-2 max-w-[1000px]">
            Testimonials 
            </AnimatedTitle>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2">
                {homeIcon}
                {rightChevron}
                <p className='text-xl font-bold'>Testimonials</p>
            </div>
        </div>
        {/* Image */}
        <div className="absolute inset-0 z-[-1]"> 
        <Image src={"/headphones.svg"} alt="Dr Sally Image" width={1500} height={470} className="w-full h-full object-cover" /> 
        </div>
    </div>
  )
}

export default Header