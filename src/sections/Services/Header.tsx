import AnimatedTitle from '@/components/AnimatedTitle'
import { homeIcon, rightChevron } from '@/icons'
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image'

const Header = async () => {
  const t = await getTranslations();
  const locale = await getLocale()
  return (
    <div className="py-28 relative overflow-hidden">
        <div className='container'>
            <AnimatedTitle className="text-[20px] md:text-[36px] xl:text-[56px] font-bold text-[#1C2C2D] mb-2 max-w-[1000px]">
                {t('services_header_title')}
            </AnimatedTitle>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2">
                {homeIcon}
                <span className={locale === "en" ? "" : "rotate-180"}>{rightChevron}</span>
                <p className='text-xl font-bold'>{t('services_header_breadcrumb')}</p>
            </div>
        </div>
        {/* Image */}
        <div className="absolute inset-0 z-[-1]"> 
        <Image src={"/main5.svg"} alt="Dr Sally Image" width={1500} height={470} className="w-full h-full object-cover" /> 
        </div>
    </div>
  )
}

export default Header