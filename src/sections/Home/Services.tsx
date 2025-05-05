"use client"

import AnimatedTitle from '@/components/AnimatedTitle'
import NormalButton from '@/components/custom/NormalButton'
import { correct } from '@/icons'
import Image from 'next/image'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from 'react'

const Services = () => {

    const leftBox = useRef(null)
    const rightBox = useRef(null)

    const leftFlower = useRef(null)
    const rightFlower = useRef(null)
      
    
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
    <div className='py-8 sm:py-20 container'>
        <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] font-bold text-center'> Services I Offer </AnimatedTitle>
        <p className='text-lightText text-sm md:text-xl mb-12 text-center'>Tailored therapeutic support to help you navigate life's challenges and discover your path to well-being.</p>
        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="py-6 px-6 md:px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative group overflow-hidden" ref={leftBox}>
                <h1 className="text-lg md:text-2xl font-semibold">Individual Therapy</h1>
                <p className="text-sm md:text-lg text-start mb-4 relative z-10"> One-on-one sessions focused on your specific needs and goals. Together, we'll work through challenges such as anxiety, depression, stress, relationship issues, or major life transitions. </p>
                {/* Features */}
                <div className='flex flex-col gap-2 mb-6'>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> 60-minute sessions tailored to your needs </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> Available in-person or via secure video call </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> Flexible scheduling options </div>
                </div>
                {/* Book Session */}
                <NormalButton label='Book a Session' />
                {/* Flower */}
                <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute right-0 bottom-0 group-hover:right-20 z-0 group-hover:scale-[2] group-hover:bottom-8 transition-all duration-1000' />
            </div>
            <div className="py-6 px-6 md:px-10 rounded-2xl flex flex-col gap-2 items-start bg-textPrimary flex-1 relative group overflow-hidden" ref={rightBox}>
                <h1 className="text-lg md:text-2xl font-semibold">Specialized Support</h1>
                <p className="text-sm md:text-lg text-start mb-4 relative z-10"> Focused therapeutic approaches for specific challenges you may be facing, including expat adjustment, cultural transition, and identity exploration. </p>
                {/* Features */}
                <div className='flex flex-col gap-2 mb-6'>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> Expat adjustment and cultural transition support </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> Career transition and work-life balance </div>
                    <div className=' flex items-center gap-2 text-xs md:text-[16px]'> <p className='min-w-6'> {correct} </p> Identity exploration and personal growth </div>
                </div>
                {/* Book Session */}
                <NormalButton label='Book a Session' />
                {/* Flower */}
                <Image src={"/flower.svg"} alt='flower image' width={136} height={180} className='absolute right-0 bottom-0 group-hover:right-20 z-0 group-hover:scale-[2] group-hover:bottom-8 transition-all duration-1000' />
            </div>
        </div>
        {/* Button */}
    </div>
  )
}

export default Services