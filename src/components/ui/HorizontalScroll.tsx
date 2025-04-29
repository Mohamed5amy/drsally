'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionRef : any = useRef(null);
  const containerRef : any = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    const totalWidth = container?.scrollWidth;
    const sectionWidth = section?.offsetWidth;

    gsap.to(container, {
      x: () => `-${totalWidth - sectionWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth - sectionWidth}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden relative bg-gray-100">
      <div ref={containerRef} className="flex w-max h-full">
        {['1', '2', '3', '4'].map(num => (
          <div
            key={num}
            className="box w-screen h-full flex items-center justify-center text-4xl bg-blue-200 border border-white"
          >
            Box {num}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
