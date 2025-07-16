"use client"

import gsap from 'gsap'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'

const Test = () => {
    const containerRef = useRef(null)
    const imgRef = useRef(null)
    const imgRef2 = useRef(null)

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.to(containerRef.current, {
          delay : 5,
          width: "90%",
          duration: 5,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.to(imgRef.current, {
              duration: 25,
              y: -6890,
              ease: "power1.linear",
            });
          }
        });
      });

      return () => ctx.revert(); // Cleanup
    }, []);
    
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.to(imgRef2.current, {
              delay : 10,
              duration: 25,
              y: -6220,
              ease: "power1.linear",
            });
      });

      return () => ctx.revert(); // Cleanup
    }, []);
    
  return (
    <div className='w-screen h-[10000px] flex justify-center'>
        <div className='relative w-[130px] overflow-hidden z-20 mt-8' ref={containerRef}>
            <Image src={"/test1.png"} ref={imgRef} className='w-full h-fit absolute left-0 right-0 top-0' width={1500} height={7000} alt='test' />
        </div>
         <div className='absolute h-[7000px] w-full overflow-hidden z-10'>
            <Image src={"/test1.png"} ref={imgRef2} className='w-full opacity-90 h-fit blur-[8px] absolute left-0 right-0 top-0' width={1500} height={7000} alt='test' />
        </div>
    </div>
  )
}

export default Test