"use client"

// HoverLottie.tsx
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";

const HoverLottie = ({icon , w , h , play} : {icon : {} , w : number , h : number , play ? : boolean }) => {
  const lottieRef : any = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  useEffect(() => {
    if (play) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  } , [play])

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: w, height: h, cursor: "pointer" , transition : ".5s" }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={icon}
        autoplay={false}
        loop={false}
        className="transition-all"
      />
    </div>
  );
};

export default HoverLottie;
