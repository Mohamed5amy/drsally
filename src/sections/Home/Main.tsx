import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import Magnetic from "@/components/Magnetic"
import { calenderIcon } from "@/icons"
import { getTranslations } from "next-intl/server"
import Image from "next/image"

const Main = async () => {

  const t = await getTranslations()

  return (
    <div className="container pt-10 pb-20 flex flex-col md:flex-row items-center gap-14 justify-between overflow-hidden">
        <div className="flex-[1.2]">
            <AnimatedTitle delay className="text-primaryText text-[32px] md:text-[48px] xl:text-[60px] font-bold mb-2 leading-[40px] md:leading-[60px] xl:leading-[80px]">{t("Ready to Break Free?")}</AnimatedTitle>
            <p className="text-lightText text-[16px] md:text-[20px] xl:text-[24px] mb-10"> {t("Feeling overwhelmed")} </p>
            <Button type="book" label={t("about_philosophy_btn")} icon={calenderIcon} />
        </div>
        <div className="flex-[1]">
            <Magnetic strength={0.02}> <Image src={"/main1.svg"} alt="Dr Sally Image" width={650} height={600} /> </Magnetic>
        </div>
    </div>
  )
}

export default Main