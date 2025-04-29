"use client"

import dynamic from "next/dynamic"
import clab from "@/animatedIcons/clab.json" 
import prize from "@/animatedIcons/prize.json" 

const HoverLottie = dynamic(() => import('@/components/HoverLottie'))


const Credentials = () => {
  return (
    <div className='text-center pb-20 container'>
        <h3 className='text-primaryText mb-2 text-[32px] font-bold'> Professional Credentials </h3>
        <p className='text-lightText text-xl mb-12'>Certified and licensed by leading therapeutic associations, ensuring you receive the highest standard of care.</p>
        {/* Boxes */}
        <div className="flex gap-10 mb-10">
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-center bg-textPrimary flex-1">
                <HoverLottie icon={clab} w={60} h={60} />
                <h1 className="text-2xl font-semibold">Association of Psychotherapists and Counsellors</h1>
                <p className="text-lg"> Licensed member of the Association of Psychotherapists and Counsellors in Singapore </p>
            </div>
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-center bg-textPrimary flex-1">
                <HoverLottie icon={prize} w={60} h={60} />
                <h1 className="text-2xl font-semibold">Association of Integrative Psychotherapists</h1>
                <p className="text-lg"> Certified member of the Association of Integrative Psychotherapists in the UK </p>
            </div>
        </div>
        {/* Button */}
        <button className="text-textPrimary font-semibold transition-all hover:bg-secondary hover:px-14 py-4 px-10 rounded-full bg-primary">
            Get in Touch
        </button>
    </div>
  )
}

export default Credentials