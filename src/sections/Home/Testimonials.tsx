"use client"

import { quotation } from "@/icons"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

    const sectionRef : any = useRef(null);
    const containerRef : any = useRef(null);

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
    <div className="py-20 overflow-hidden relative mb-36" ref={sectionRef}>
        <h3 className='text-primaryText mb-2 text-[32px] font-bold text-center'> Client Experiences </h3>
        <p className='text-lightText text-xl mb-8 text-center'>Hear from others who have worked with me on their journey toward healing and growth.</p>
        {/* Boxes */}
        <div className="flex gap-10" ref={containerRef}>
            {[...Array(10)].map((_, idx) => (
            <div
                key={idx}
                className="min-w-[45vw] max-w-[45vw] py-12 px-10 rounded-2xl bg-textPrimary relative testimonial-box"
            >
                <div className="absolute top-4 left-3"> {quotation} </div>
                <p className="text-lg mb-2">
                “Working with Sally has been a transformational experience. I learn tools to better manage periods of anxiety and mental fatigue. Every session I feel at ease to share and work through concerns that are big and small. At times where I’ve had to make tough decisions, speaking through the situation with clarity helped me make choices that are healthier for my overall well-being. Her patience, care and ability to go the extra mile is something I’ll always be grateful for..
                </p>
                <h4 className="text-2xl font-semibold text-secondaryText">— HV</h4>
                <div className="absolute bottom-4 right-3 rotate-180"> {quotation} </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials