"use client"

import dynamic from "next/dynamic"
import clab from "@/animatedIcons/clab.json" 
import prize from "@/animatedIcons/prize.json" 
import NormalButton from "@/components/custom/NormalButton"
import AnimatedTitle from "@/components/AnimatedTitle"

const HoverLottie = dynamic(() => import('@/components/HoverLottie') , {ssr : false})


const Credentials = () => {
  return (
    <div className='text-center pb-20 container'>
        <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] font-bold'> Professional Credentials </AnimatedTitle>
        <p className='text-lightText text-sm md:text-xl mb-12'>Certified and licensed by leading therapeutic associations, ensuring you receive the highest standard of care.</p>
        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-center bg-textPrimary flex-1">
                <HoverLottie icon={clab} w={60} h={60} />
                <h1 className="text-lg md:text-2xl font-semibold">Association of Psychotherapists and Counsellors</h1>
                <p className="text-sm md:text-lg"> Licensed member of the Association of Psychotherapists and Counsellors in Singapore </p>
            </div>
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-center bg-textPrimary flex-1">
                <HoverLottie icon={prize} w={60} h={60} />
                <h1 className="text-lg md:text-2xl font-semibold">Association of Integrative Psychotherapists</h1>
                <p className="text-sm md:text-lg"> Certified member of the Association of Integrative Psychotherapists in the UK </p>
            </div>
        </div>
        {/* Button */}
        <NormalButton label="Get In Touch" />
    </div>
  )
}

export default Credentials