
import AnimatedTitle from '@/components/AnimatedTitle'
import { homeIcon, rightChevron } from '@/icons'
import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server';

const Header = async () => {
  const t = await getTranslations();
  const locale = await getLocale()
  return (
    <div className="py-16 sm:py-3 relative overflow-hidden bg-[#FBE2D6]">
        <div className='container flex items-center justify-between'>
            <div>
                <AnimatedTitle className="text-[20px] md:text-[36px] xl:text-[56px] font-bold text-[#1C2C2D] mb-2 max-w-[1000px]">
                    {t('about_header_title')}
                </AnimatedTitle>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2">
                    {homeIcon}
                    <span className={locale === "en" ? '' : 'rotate-180'}>{rightChevron}</span>
                    <p className='text-xl font-bold'>{t('about_header_breadcrumb')}</p>
                </div>
            </div>
            <Image className='hidden sm:block' src={"/aboutImage.svg"} alt='Dr Sally About Image' width={366} height={380} data-aos="fade-left" />
        </div>
    </div>
  )
}

export default Header