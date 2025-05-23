"use client"

import Lottie from "lottie-react"
import animationData from "@/animatedIcons/success.json"
import { calenderIcon, clock } from "@/icons"


const Step4 = () => {
  return (
    <div data-aos="fade-up">
        <div className="py-4 px-8 sm:py-10 sm:px-20 bg-textPrimary max-w-[700px] mx-auto flex items-center justify-center flex-col">
            <Lottie animationData={animationData} loop autoplay className="w-full h-[200px] sm:h-[300px]" />
            <h4 className="text-xl sm:text-2xl font-semibold text-center"> Sara, your appointment is confirmed! </h4>
            <div className="flex items-center gap-2 my-3 flex-col sm:flex-row">
                <span className="text-secondary"> {clock} </span>
                <span className="sm:text-lg text-center">1 hour</span>
            </div>
            <div className="flex items-center gap-2 flex-col sm:flex-row mb-8">
                <span className="text-secondary"> {calenderIcon} </span>
                <span className="sm:text-lg text-center">Wednesday, April 30th, 2025 at 3:30 PM EDT</span>
            </div>
            <div className="flex gap-4 w-full flex-col sm:flex-row">
                <button className="rounded-full py-4 flex-1 text-secondary border border-secondary font-semibold transition-all hover:bg-orange-400/20"> Edit Info </button>
                <button className="rounded-full py-4 flex-1 text-primary border border-primary font-semibold transition-all hover:bg-teal-400/20"> Reschedule </button>
                <button className="rounded-full py-4 flex-1 text-secondaryText border border-secondaryText font-semibold transition-all hover:bg-gray-400/20"> Cancel </button>
            </div>
        </div>
    </div>
  )
}

export default Step4