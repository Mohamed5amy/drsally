// components/Parallax.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ParallaxDirection = 'up' | 'down';

interface ParallaxProps {
  children: React.ReactNode;
  direction?: ParallaxDirection;
  distance?: number;
  start?: string;
  end?: string;
  pin?: boolean; // 👈 Optional pin prop
}

const Parallax: React.FC<ParallaxProps> = ({
  children,
  direction = 'up',
  distance = 100,
  start = 'top bottom',
  end = 'bottom top',
  pin = false, // 👈 default: no pinning
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const fromY = direction === 'up' ? distance : -distance;

    const animation = gsap.fromTo(
      el,
      { y: fromY },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true,
          pin, // 👈 enable pin if true
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [direction, distance, start, end, pin]);

  return (
    <div ref={elRef} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;
