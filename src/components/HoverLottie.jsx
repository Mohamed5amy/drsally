"use client"

// HoverLottie.tsx
import React, { useRef } from "react";
import Lottie from "lottie-react";

const HoverLottie = ({icon , w , h}) => {
  const lottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

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
