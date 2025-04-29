import Button from "@/components/custom/Button"
import { calenderIcon } from "@/icons"
import Image from "next/image"

const Main = () => {
  return (
    <div className="container pt-10 pb-20 flex items-center gap-14 justify-between">
        <div className="flex-[1.2]">
            <h1 className="text-primaryText text-[60px] font-bold mb-2 leading-[80px]">Feeling Overwhelmed and Stuck? You're Not Alone.</h1>
            <p className="text-lightText text-2xl mb-10"> Do you ever feel like life's demands are relentless, leaving you stuck and overwhelmed? I understand deeply. As a certified therapist, I'm here to help you break free from those frustrating cycles and rediscover your path forward. </p>
            <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
        </div>
        <div className="flex-[1]">
            <Image src={"/main1.svg"} alt="Dr Sally Image" width={650} height={600} />
        </div>
    </div>
  )
}

export default Main