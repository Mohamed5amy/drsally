import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import Parallax from "@/components/Parallax"
import { calenderIcon, star } from "@/icons"
import Image from "next/image"
import { getTranslations } from "next-intl/server"

const Flexible = async () => {
  const t = await getTranslations()

  return (
    <div className="py-20 container flex-col-reverse lg:flex-row flex gap-16 items-center">
        {/* Image */}
        <div className="flex-1">
          <Parallax distance={150} direction="down" end="bottom center">
            <Image src={"/main4.svg"} alt="Dr Sally Image" width={700} height={600} />
          </Parallax>
        </div>
        {/* Content */}
        <div className="flex-[1.1]">
          <Parallax distance={150} direction="up" end="bottom center">
            <AnimatedTitle className="text-xl md:text-3xl font-bold pb-2">
              {t("flexibleTherapyTitle")}
            </AnimatedTitle>
            <p className="text-lightText text-[16px] md:text-xl mb-6">
              {t("flexibleTherapyDescription1")}
            </p>
            <div className="text-primaryText text-[16px] md:text-xl flex gap-2 mb-4">
              <div className="flex-1">{star}</div>
              <p>{t("flexibleTherapyBenefit1")}</p>
            </div>
            <div className="text-primaryText text-[16px] md:text-xl flex gap-2 mb-2">
              <div className="flex-1">{star}</div>
              <p>{t("flexibleTherapyBenefit2")}</p>
            </div>
            <p className="text-lightText text-[16px] md:text-xl mb-10">
              {t("flexibleTherapyDescription2")}
              <strong className="text-primaryText">{t("flexibleTherapyCallToAction")}</strong>
            </p>
            <Button type="book" label={t("scheduleConsultation")} icon={calenderIcon} />
          </Parallax>
        </div>
    </div>
  )
}

export default Flexible