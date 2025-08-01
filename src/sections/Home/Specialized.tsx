import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import Parallax from "@/components/Parallax"
import { calenderIcon } from "@/icons"
import Image from "next/image"
import { getTranslations } from "next-intl/server"

const Specialized = async () => {
  const t = await getTranslations()

  return (
    <div className="py-0 sm:py-20 flex-col lg:flex-row container flex gap-16 items-center">
        {/* Content */}
        <div className="flex-[1.1]">
            <Parallax distance={150} direction="up" end="bottom center">
              <AnimatedTitle className="text-xl md:text-3xl font-bold pb-2">
                {t("specializedTherapyTitle")}
              </AnimatedTitle>
              <p className="text-lightText text-[16px] md:text-xl mb-10">
                {t("specializedTherapyDescription1")}
                <span className="block h-2"></span>
                {t("specializedTherapyDescription2")}
                <span className="block h-2"></span>
                {t("specializedTherapyDescription3")}
              </p>
              <Button type="book" label={t("scheduleConsultation")} icon={calenderIcon} />
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

export default Specialized
