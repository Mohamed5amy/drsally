"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

const MenuToggle = () => {
  const [active, setActive] = useState(false);
  const topLine = useRef<HTMLDivElement>(null);
  const bottomLine = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setActive(!active);

    if (!active) {
      // Animate to X
      gsap.to(topLine.current, {
        rotate: 45,
        y: 6,
        background : "#E8A67A",
        duration: 0.3,
        transformOrigin: "center",
      });
      gsap.to(bottomLine.current, {
        rotate: -45,
        y: -6,
        background : "#E8A67A",
        duration: 0.3,
        transformOrigin: "center",
      });
    } else {
      // Animate back to 2 lines
      gsap.to(topLine.current, {
        rotate: 0,
        y: 0,
        duration: 0.3,
      });
      gsap.to(bottomLine.current, {
        rotate: 0,
        y: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <div onClick={toggleMenu} className="cursor-pointer w-8 h-8 flex lg:hidden flex-col justify-center items-center relative z-50">
      <div
        ref={topLine}
        className="w-8 h-1 bg-primaryText mb-1 rounded"
      ></div>
      <div
        ref={bottomLine}
        className="w-8 h-1 bg-primaryText mt-1 rounded"
      ></div>
    </div>
  );
};

export default MenuToggle;
