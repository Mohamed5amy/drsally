"use client"

import AnimatedTitle from "@/components/AnimatedTitle";
import Magnetic from "@/components/Magnetic";
import { quotation } from "@/icons"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {

  const leftBox = useRef(null)
  const rightBox = useRef(null)
  
  useEffect(() => {
    const box1 = leftBox.current;
    const box2 = rightBox.current;
    
    if (!box1 || !box2) return;

    gsap.to(
      box1,
      {
        y : 50,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: box1,
          start : "top top",
          end : "bottom top",
          scrub: true,
        },
      }
    );

    gsap.to(
        box2,
        {
          y : -200,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: box2,
            start : "top top",
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
    <div className="py-20 relative bg-[rgba(251,226,214,0.20)]">
        <div className="container">
          <AnimatedTitle className='text-primaryText mb-2 text-[32px] font-bold text-center'> Clients that have pursued therapy know they are in good hands with me. Here is what some of them have to say: </AnimatedTitle>
          <p className='text-lightText text-xl mb-8 text-center'>Hear from others who have worked with me on their journey toward healing and growth.</p>
          {/* 2 Cols */}
          <div className="flex gap-10">
            {/* Boxes */}
            <div className="flex flex-col gap-10" ref={leftBox}>
                {[...Array(8)].map((_, idx) => (
                <Magnetic strength={0.03} key={idx}>
                  <div
                      key={idx}
                      className="py-12 px-10 rounded-2xl bg-textPrimary relative"
                  >
                      <div className="absolute top-4 left-3"> {quotation} </div>
                      <p className="text-lg mb-2">
                      “Working with Sally has been a transformational experience. I learn tools to better manage periods of anxiety and mental fatigue. Every session I feel at ease to share and work through concerns that are big and small. At times where I’ve had to make tough decisions, speaking through the situation.
                      </p>
                      <h4 className="text-2xl font-semibold text-secondaryText">— HV</h4>
                      <div className="absolute bottom-4 right-3 rotate-180"> {quotation} </div>
                  </div>
                </Magnetic>
                ))}
            </div>
            {/* Boxes */}
            <div className="flex flex-col gap-10" ref={rightBox}>
                {[...Array(8)].map((_, idx) => (
                <Magnetic strength={0.03} key={idx}>
                  <div
                      key={idx}
                      className="py-12 px-10 rounded-2xl bg-textPrimary relative"
                  >
                      <div className="absolute top-4 left-3"> {quotation} </div>
                      <p className="text-lg mb-2">
                      “Working with Sally has been a transformational experience. I learn tools to better manage periods of anxiety and mental fatigue. Every session I feel at ease to share and work through concerns that are big and small. At times where I’ve had to make tough decisions, speaking through the situation.
                      </p>
                      <h4 className="text-2xl font-semibold text-secondaryText">— HV</h4>
                      <div className="absolute bottom-4 right-3 rotate-180"> {quotation} </div>
                  </div>
                </Magnetic>
                ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonials