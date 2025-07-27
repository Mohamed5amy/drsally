"use client"

import AnimatedTitle from '@/components/AnimatedTitle'
import NormalButton from '@/components/custom/NormalButton'
import { correct } from '@/icons'
import Image from 'next/image'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

const Services = () => {

    const leftBox = useRef(null)
    const rightBox = useRef(null)

    const t = useTranslations()
    
    useEffect(() => {
      const box1 = leftBox.current;
      const box2 = rightBox.current;
      
      if (!box1 || !box2) return;
  
      gsap.from(
        box1,
        {
          y : 100,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: box1,
            start : "top bottom",
            end : "bottom top",
            scrub: true,
          },
        }
      );
  
      gsap.from(
          box2,
          {
              y : 100,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: box2,
              start : "top bottom",
              end : "bottom top",
              scrub: true,
            },
          }
        );
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
    
  return (
    <div className='py-6 sm:py-20 container'>
        <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] font-bold text-center'>
          {t("servicesTitle")}
        </AnimatedTitle>
        <p className='text-lightText text-sm md:text-xl mb-12 text-center'>
          {t("servicesDescription")}
        </p>
        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="py-6 px-6 md:px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative group overflow-hidden" ref={leftBox}>
                <h1 className="text-lg md:text-2xl font-semibold">{t('services_boxes_individual_title')}</h1>
                <p className="text-sm md:text-lg text-start mb-4 relative z-10">{t('services_boxes_individual_desc')}</p>
                {/* Features */}
                <div className='flex flex-col gap-2 mb-6'>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_individual_feature1')} </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_individual_feature2')} </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_individual_feature3')} </div>
                </div>
                {/* Book Session */}
                <NormalButton label={t('services_boxes_btn')} />
                {/* Flower */}
                <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute end-0 bottom-0 group-hover:end-20 z-0 group-hover:scale-[2] group-hover:bottom-8 transition-all duration-1000' />
            </div>
            <div className="py-6 px-6 md:px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative group overflow-hidden" ref={rightBox}>
                <h1 className="text-lg md:text-2xl font-semibold">{t('services_boxes_specialized_title')}</h1>
                <p className="text-sm md:text-lg text-start mb-4 relative z-10">{t('services_boxes_specialized_desc')}</p>
                {/* Features */}
                <div className='flex flex-col gap-2 mb-6'>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_specialized_feature1')} </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_specialized_feature2')} </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> {t('services_boxes_specialized_feature3')} </div>
                </div>
                {/* Book Session */}
                <NormalButton label={t('services_boxes_btn')} />
                {/* Flower */}
                <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute right-0 bottom-0 group-hover:right-20 z-0 group-hover:scale-[2] group-hover:bottom-8 transition-all duration-1000' />
            </div>
        </div>
        {/* Button */}
    </div>
  )
}

export default Services