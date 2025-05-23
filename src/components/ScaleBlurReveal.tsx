// components/ScaleBlurReveal.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScaleBlurRevealProps {
  children: React.ReactNode;
  start?: string; // e.g., 'top 80%'
  end?: string;   // e.g., 'top 30%'
  scaleFrom?: number;
  blurFrom?: number;
}

const ScaleBlurReveal: React.FC<ScaleBlurRevealProps> = ({
  children,
  start = 'top bottom',
  end = 'bottom top',
  scaleFrom = 1.5,
  blurFrom = 10,
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        scale: scaleFrom,
        filter: `blur(${blurFrom}px)`,
      },
      {
        scale: 1,
        filter: 'blur(0px)',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [start, end, scaleFrom, blurFrom]);

  return (
    <div ref={elRef} style={{ willChange: 'transform, filter' }} className='w-full h-full'>
      {children}
    </div>
  );
};

export default ScaleBlurReveal;
