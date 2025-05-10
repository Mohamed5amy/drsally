import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import Parallax from "@/components/Parallax"
import { calenderIcon } from "@/icons"
import Image from "next/image"

const Background = () => {
  return (
    <div className="py-8 sm:py-20 flex-col lg:flex-row container flex gap-16 items-center">
        {/* Content */}
        <div className="flex-[1.1]">
            <Parallax distance={150} direction="up" end="bottom center">
              <AnimatedTitle className="text-xl md:text-3xl font-bold pb-2"> My Background </AnimatedTitle>
              <p className="text-lightText text-[16px] md:text-xl mb-10">
                I am a Licensed Psychotherapist and Registered Member of the International Council of Psychotherapists in the UK.
                <span className="block h-2"></span>
                My family and I have been travelling around the world since I was a child and I've had the amazing opportunity to experience different cultures and countries. Seeing how people from all walks of life live, think and feel has been an eye-opening experience for me and it's been a major factor in why I chose to pursue a career as a psychotherapist.
                <span className="block h-2"></span>
                I am passionate about creating a welcoming environment for clients where they can freely express themselves without judgement or fear. Having experienced so many different cultures has made me more understanding and accepting of others, which is something I always strive to bring into my practice. 
                <span className="block h-2"></span>
                If you're looking for someone to talk to, please don't hesitate to reach out. I'm here for everyone who needs someone to listen.
              </p>
            </Parallax>
        </div>
        {/* Image */}
        <div className="flex-1">
          <Parallax distance={150} direction="down" end="bottom center">
            <Image src={"/main3.svg"} alt="Dr Sally Image" width={700} height={600} />
          </Parallax>
        </div>
    </div>
  )
}

export default Background