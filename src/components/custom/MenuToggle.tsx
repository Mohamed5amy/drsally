"use client";

import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap";

export type MenuToggleRef = {
  close: () => void;
};

const MenuToggle = forwardRef(({ active, setActive }: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}, ref) => {
  const topLine = useRef<HTMLDivElement>(null);
  const bottomLine = useRef<HTMLDivElement>(null);

  const animateOpen = () => {
    gsap.to(topLine.current, {
      rotate: 45,
      y: 6,
      background: "#E8A67A",
      duration: 0.3,
      transformOrigin: "center",
    });
    gsap.to(bottomLine.current, {
      rotate: -45,
      y: -6,
      background: "#E8A67A",
      duration: 0.3,
      transformOrigin: "center",
    });
  };

  const animateClose = () => {
    gsap.to(topLine.current, { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(bottomLine.current, { rotate: 0, y: 0, duration: 0.3 });
  };

  const toggleMenu = () => {
    if (!active) {
      animateOpen();
    } else {
      animateClose();
    }
    setActive(!active);
  };

  // Expose a `close` method
  useImperativeHandle(ref, () => ({
    close: () => {
      animateClose();
      setActive(false);
    }
  }));

  return (
    <div onClick={toggleMenu} className="cursor-pointer w-8 h-8 flex lg:hidden flex-col justify-center items-center relative z-50">
      <div ref={topLine} className="w-8 h-1 bg-primaryText mb-1 rounded" />
      <div ref={bottomLine} className="w-8 h-1 bg-primaryText mt-1 rounded" />
    </div>
  );
});

export default MenuToggle;
