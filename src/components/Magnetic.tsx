// components/Magnetic.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // How "strong" the magnetic pull is
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.2 }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const moveX = (relX - rect.width / 2) * strength;
      const moveY = (relY - rect.height / 2) * strength;

      tl.current?.kill();
      tl.current = gsap.to(wrapper, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const onMouseLeave = () => {
      tl.current?.kill();
      tl.current = gsap.to(wrapper, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    };

    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseleave', onMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
      tl.current?.kill();
    };
  }, [strength]);

  return (
    <div ref={wrapperRef} style={{ display: 'inline-block', willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Magnetic;
