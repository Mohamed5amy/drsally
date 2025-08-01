
"use client"

import AnimatedTitle from '@/components/AnimatedTitle'
import NormalButton from '@/components/custom/NormalButton'
import Parallax from '@/components/Parallax'
import { correct } from '@/icons'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation'


const Boxes = () => {
  const t = useTranslations();
  return (
    <div className='py-8 sm:py-20 container'>
        <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] font-bold'>
          {t('services_boxes_title')}
        </AnimatedTitle>
        <p className='text-lightText text-sm md:text-xl mb-12'>
          {t('services_boxes_desc1')}<br />
          {t('services_boxes_desc2')}<br />
          {t('services_boxes_desc3')}
        </p>
        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-10 mb-10">
          <div className='flex-1'>
            <Parallax direction='up' distance={150} end='top center'>
              <div className="py-6 px-6 md:px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative group overflow-hidden">
                  <h1 className="text-lg md:text-2xl font-semibold">{t('services_boxes_individual_title')}</h1>
                  <p className="text-sm md:text-lg text-start mb-4 relative z-10">{t('services_boxes_individual_desc')}</p>
                  {/* Features */}
                  <div className='flex flex-col gap-2 mb-6'>
                      <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_individual_feature1')} </div>
                      <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_individual_feature2')} </div>
                      <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_individual_feature3')} </div>
                  </div>
                  {/* Book Session */}
                  <Link href={"/appointments"}><NormalButton label={t('services_boxes_btn')} /></Link>
                  {/* Flower */}
                  <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute end-0 bottom-0 group-hover:end-20 z-0 group-hover:scale-[2] group-hover:bottom-8 transition-all duration-1000' />
              </div>
            </Parallax>
          </div>
          <div className='flex-1'>
            <Parallax direction='up' distance={100} end='top center'>
              <div className="py-6 px-6 md:px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative group overflow-hidden">
                  <h1 className="text-lg md:text-2xl font-semibold">{t('services_boxes_specialized_title')}</h1>
                  <p className="text-sm md:text-lg text-start mb-4 relative z-10">{t('services_boxes_specialized_desc')}</p>
                  {/* Features */}
                  <div className='flex flex-col gap-2 mb-6'>
                      <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_specialized_feature1')} </div>
                      <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_specialized_feature2')} </div>
                      <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_specialized_feature3')} </div>
                  </div>
                  {/* Book Session */}
                  <Link href={"/appointments"}><NormalButton label={t('services_boxes_btn')} /></Link>
                  {/* Flower */}
                  <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute end-0 bottom-0 group-hover:end-20 z-0 group-hover:scale-[2] group-hover:bottom-8 transition-all duration-1000' />
              </div>
            </Parallax>
          </div>
        </div>
    </div>
  )
}

export default Boxes