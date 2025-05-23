import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import Magnetic from "@/components/Magnetic"
import { calenderIcon } from "@/icons"
import Image from "next/image"

const Main = () => {
  return (
    <div className="container pt-10 pb-20 flex flex-col md:flex-row items-center gap-14 justify-between overflow-hidden">
        <div className="flex-[1.2]">
            <AnimatedTitle delay className="text-primaryText text-[32px] md:text-[48px] xl:text-[60px] font-bold mb-2 leading-[40px] md:leading-[60px] xl:leading-[80px]">Feeling Overwhelmed and Stuck? You're Not Alone.</AnimatedTitle>
            <p className="text-lightText text-[16px] md:text-[20px] xl:text-[24px] mb-10"> Do you ever feel like life's demands are relentless, leaving you stuck and overwhelmed? I understand deeply. As a certified therapist, I'm here to help you break free from those frustrating cycles and rediscover your path forward. </p>
            <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
        </div>
        <div className="flex-[1]">
            <Magnetic strength={0.02}> <Image src={"/main1.svg"} alt="Dr Sally Image" width={650} height={600} /> </Magnetic>
        </div>
    </div>
  )
}

export default Main