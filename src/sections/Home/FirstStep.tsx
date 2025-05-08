"use client"

import AnimatedTitle from "@/components/AnimatedTitle"
import NormalButton from "@/components/custom/NormalButton"
import ScaleBlurReveal from "@/components/ScaleBlurReveal"
import Image from "next/image"

const FirstStep = () => {
  return (
    <div className="py-28 flex flex-col items-center relative overflow-hidden">
        <AnimatedTitle className="text-[20px] md:text-[36px] xl:text-[56px] font-bold text-[#1C2C2D] mb-2 text-center"> Let's Take That First Step Together </AnimatedTitle>
        <h4 className="text-[16px] md:text-2xl font-semibold text-center max-w-[1020px] mb-8">It's never too late to prioritize your well-being. Whether you're feeling stuck, overwhelmed, or simply seeking growth, I'm here to support you on your journey.</h4>
        {/* Buttons */}
        <div className="flex items-center flex-col sm:flex-row justify-center gap-4">
            <NormalButton label="Book a Consultation" />
            <NormalButton label="Contact me" styles="px-[70px] !bg-[rgba(250,251,251,0.60)] hover:!bg-secondary !text-primary border border-primary hover:px-[85px]" />
        </div>
        {/* Image */}
        <div className="absolute inset-0 z-[-1]"> 
          <ScaleBlurReveal>
            <Image src={"/main5.svg"} alt="Dr Sally Image" width={1500} height={470} className="w-full h-full object-cover" /> 
          </ScaleBlurReveal>
        </div>
    </div>
  )
}

export default FirstStep