"use client"

import dynamic from "next/dynamic"
import clab from "@/animatedIcons/clab.json" 
import prize from "@/animatedIcons/prize.json" 
import NormalButton from "@/components/custom/NormalButton"
import AnimatedTitle from "@/components/AnimatedTitle"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

const HoverLottie = dynamic(() => import('@/components/HoverLottie') , {ssr : false})

gsap.registerPlugin(ScrollTrigger)

const Credentials = () => {

  const leftBox = useRef(null)
  const rightBox = useRef(null)
  const button = useRef(null)

  const t = useTranslations()
  
  useEffect(() => {
    const box1 = leftBox.current;
    const box2 = rightBox.current;
    const newButton = button.current;
    if (!box1 || !box2 || !newButton) return;

    gsap.from(
      box1,
      {
        scale: .8,
        x : -50,
        y : 50,
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
        scale: .8,
        x : 50,
        y : 50,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: box2,
          start : "top bottom",
          end : "bottom top",
          scrub: true,
        },
      }
    );

    gsap.from(
      newButton,
      {
        scale: .8,
        y : -50,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: newButton,
          start : "top bottom",
          end : "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className='text-center pb-20 container'>
        <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] font-bold'>{t("professionalCredentials")}</AnimatedTitle>
        <p className='text-lightText text-sm md:text-xl mb-12'>{t("credentialsDescription")}</p>
        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-center bg-textPrimary flex-1" ref={leftBox}>
                <HoverLottie icon={clab} w={60} h={60} />
                <h1 className="text-lg md:text-2xl font-semibold">{t("associationPsychotherapists")}</h1>
                <p className="text-sm md:text-lg">{t("licensedMemberDescription")}</p>
            </div>
            <div className="py-6 px-10 rounded-2xl flex flex-col gap-2 items-center bg-textPrimary flex-1" ref={rightBox}>
                <HoverLottie icon={prize} w={60} h={60} />
                <h1 className="text-lg md:text-2xl font-semibold">{t("associationIntegrativePsychotherapists")}</h1>
                <p className="text-sm md:text-lg">{t("certifiedMemberDescription")}</p>
            </div>
        </div>
        {/* Button */}
        <div ref={button}><NormalButton label={t("getInTouch")} /></div>
    </div>
  )
}

export default Credentials
