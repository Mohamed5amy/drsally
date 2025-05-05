"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(SplitText , ScrollTrigger);

const AnimatedTitle = ({ children, className = "" , delay } : {children : ReactNode , className : string , delay? : boolean}) => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Make sure we're in the browser and the element exists
    if (titleRef.current) {
      // Create the SplitText instance
      let split = new SplitText(titleRef.current, {
        type: "chars,words", 
        position: "relative"
      });
      
      // Animate them in
      gsap.from(split.chars, {
        duration: 1.5,
        yPercent: "random(100 , -100)",
        rotate : "random(30 , -30)",
        opacity: 0,
        // delay : delay ? 4 : 0,
        stagger: {
            from: "random",
            amount: 0.6,
        },
        ease: "power3.out",
        scrollTrigger : {
            trigger : titleRef.current,
            start: "top bottom-=200",
            end: "bottom top",
        }
      });
    }
    
    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <h3 ref={titleRef} className={className}>
      {children}
    </h3>
  );
};

export default AnimatedTitle;