
import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import { calenderIcon } from "@/icons"
import { getTranslations } from 'next-intl/server';

const MyPhilosophy = async () => {
  const t = await getTranslations();
  return (
    <div className="bg-[url('/main2.svg')] bg-fixed bg-cover bg-center relative">
        <div className="container pb-32 pt-24">
            <div className="max-w-[624px]">
                <AnimatedTitle className="text-[32px] font-bold text-primaryText mb-2">{t('about_philosophy_title')}</AnimatedTitle>
                <p className="text-xl text-lightText mb-2">
                    {t('about_philosophy_p1')}
                </p>
                <p className="text-xl text-lightText mb-2">
                   {t('about_philosophy_p2')}
                </p>
                <p className="text-xl text-lightText mb-2">
                   {t('about_philosophy_p3')}
                </p>
                <p className="text-xl text-lightText mb-2">
                   {t('about_philosophy_p4')}
                </p>
                <p className="text-xl text-lightText mb-10">
                   {t('about_philosophy_p5')}
                </p>
                <Button label={t('about_philosophy_btn')} icon={calenderIcon} />
            </div>
        </div>
    </div>
  )
}

export default MyPhilosophy