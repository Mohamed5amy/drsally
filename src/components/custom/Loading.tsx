"use client"

import { matter, nameA, nameI, nameL, nameM, nameN, nameO, nameR, nameS, nameU, nameY, you } from "@/icons"
import Image from "next/image"
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';


const Loading = () => {

    const boxRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
        gsap.to(boxRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
            gsap.set(boxRef.current, { display: 'none' });
            },
        });
        }, 4000);

        return () => clearTimeout(timeout); // cleanup on unmount
    }, []);
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen overflow-hidden bg-bg" ref={boxRef}>
        <div className="flex items-center gap-3 relative scale-[2]">
            {/* logo */}
            <Image src={"/icon.svg"} alt="Icon" width={54} height={56} data-aos-duration="1500" data-aos="fade-down-right" data-aos-delay="2500" />
            {/* Name */}
            <div className="flex items-center gap-3">
                {/* Sally */}
                <div className="flex items-center gap-1 text-primary">
                    <span data-aos="zoom-in" data-aos-duration="500" data-aos-delay=""> {nameS} </span>
                    <span data-aos="flip-up" data-aos-duration="500" data-aos-delay="500"> {nameA} </span>
                    <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="750"> {nameL} </span>
                    <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="750"> {nameL} </span>
                    <span data-aos="flip-down" data-aos-duration="500" data-aos-delay="1000"> {nameY} </span>
                </div>
                {/* Mounir */}
                <div className="flex items-center gap-1 text-primary">
                    <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000"> {nameM} </span>
                    <span data-aos="fade-left" data-aos-duration="500" data-aos-delay="1250"> {nameO} </span>
                    <span data-aos="fade-left" data-aos-duration="500" data-aos-delay="1500"> {nameU} </span>
                    <span data-aos="fade-left" data-aos-duration="500" data-aos-delay="1750"> {nameN} </span>
                    <span data-aos="fade-left" data-aos-duration="500" data-aos-delay="2000"> {nameI} </span>
                    <span data-aos="fade-down" data-aos-duration="500" data-aos-delay="2250"> {nameR} </span>
                </div>
            </div>
            {/* You Matter */}
            <div className="flex gap-1 items-center absolute -right-12 -bottom-1">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2500"> {you} </div>
                <div className="mb-3" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="3000"> {matter} </div>
            </div>
        </div>
        {/* Flowers */}
        <div className="absolute left-20 bottom-0" data-aos="fade-up">
            <Image src={"/flower.svg"} alt="flower" height={400} width={200} />
        </div>
        <div className="absolute right-20 bottom-0" data-aos="fade-up" data-aos-delay="1000">
            <Image src={"/flower.svg"} alt="flower" height={400} width={200} />
        </div>
    </div>
  )
}

export default Loading