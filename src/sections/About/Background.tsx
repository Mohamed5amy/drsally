
import AnimatedTitle from "@/components/AnimatedTitle"
import Parallax from "@/components/Parallax"
import Image from "next/image"
import { getTranslations } from 'next-intl/server';

const Background = async () => {
  const t = await getTranslations();
  return (
    <div className="py-8 sm:py-20 flex-col lg:flex-row container flex gap-16 items-center">
        {/* Content */}
        <div className="flex-[1.1]">
            <Parallax distance={150} direction="down" end="bottom center">
              <AnimatedTitle className="text-xl md:text-3xl font-bold pb-2">{t('about_bg_title')}</AnimatedTitle>
              <p className="text-lightText text-[16px] md:text-xl mb-10">
                {t('about_bg_p1')}
                <span className="block h-2"></span>
                {t('about_bg_p2')}
                <span className="block h-2"></span>
                {t('about_bg_p3')}
                <span className="block h-2"></span>
                {t('about_bg_p4')}
              </p>
            </Parallax>
        </div>
        {/* Image */}
        <div className="flex-1">
          <Parallax distance={150} direction="up" end="bottom center">
            <Image src={"/main3.svg"} alt="Dr Sally Image" width={700} height={600} />
          </Parallax>
        </div>
    </div>
  )
}

export default Background