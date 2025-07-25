"use client"

import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import ScaleBlurReveal from "@/components/ScaleBlurReveal"
import { calenderIcon } from "@/icons"
import Image from "next/image"
import { useTranslations } from "next-intl"

const JoinYou = () => {
  const t = useTranslations()

  return (
    <div className="py-28 flex flex-col items-center relative overflow-hidden px-2">
      <AnimatedTitle className="text-[20px] md:text-[36px] xl:text-[56px] font-bold text-[#1C2C2D] leading-snug mb-10 text-center px-8">
        {t("JoinYou_title")}
      </AnimatedTitle>

      {/* Buttons */}
      <Button label={t("JoinYou_button")} icon={calenderIcon} />

      {/* Image */}
      <div className="absolute inset-0 z-[-1]">
        <ScaleBlurReveal end="center center">
          <Image
            src={"/main5.svg"}
            alt="Dr Sally Image"
            width={1500}
            height={470}
            className="w-full h-full object-cover"
          />
        </ScaleBlurReveal>
      </div>
    </div>
  )
}

export default JoinYou
