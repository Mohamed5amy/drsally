"use client"

import AnimatedTitle from "@/components/AnimatedTitle";
import { testimonials } from "@/data/testimonials";
import { quotation } from "@/icons"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocale, useTranslations } from "next-intl";
import { comment } from "postcss";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

    const sectionRef : any = useRef(null);
    const containerRef : any = useRef(null);

    const t = useTranslations()
    const locale = useLocale()

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
    
        const scrollAmount = container?.scrollWidth - section?.offsetWidth;

        let proxy = { skew: 0 };
        const skewSetter = gsap.quickSetter(".testimonial-box", "skewX", "deg");
        const clamp = gsap.utils.clamp(-20, 20);
    
        gsap.to(container, {
          x: -scrollAmount,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${scrollAmount}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
          },
        });

        // Listen to scroll velocity and apply skew
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${scrollAmount}`,
            scrub: true,
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -200); // adjust divisor to control intensity
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {
                        skew: 0,
                        duration: 0.8,
                        ease: "power3",
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew),
                    });
                }
            },
        });
    
        return () => {
          ScrollTrigger.getAll().forEach(t => t.kill());
        };
      }, []);
    
  return (
    <div dir="ltr" className="py-4 sm:py-8 lg:py-20 overflow-hidden relative mb-0 md:mb-36" ref={sectionRef}>
        <AnimatedTitle className='text-primaryText mb-2 text-[32px] font-bold text-center'>
          {t("clientExperiencesTitle")}
        </AnimatedTitle>
        <p className='text-lightText text-xl mb-8 text-center'>
          {t("clientExperiencesDescription")}
        </p>
        {/* Boxes */}
        <div className="flex gap-10" ref={containerRef}>
            {testimonials.slice(0 , 10).map((testimonial, idx) => (
            <div
                key={idx}
                className="min-w-[90vw] max-w-[90vw] md:min-w-[45vw] md:max-w-[45vw] py-12 px-10 rounded-2xl bg-textPrimary relative testimonial-box"
            >
                <div className="absolute top-4 left-3"> {quotation} </div>
                <p className="text-sm lg:text-lg mb-2">
                {locale === "en" ? testimonial.comment : testimonial.commentAr}
                </p>
                <h4 className="text-2xl font-semibold text-secondaryText">— {testimonial.name}</h4>
                <div className="absolute bottom-4 right-3 rotate-180"> {quotation} </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials