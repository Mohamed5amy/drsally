"use client"; 
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientAOS() {
  useEffect(() => {
    AOS.init({ duration: 2000 , once : true });
  }, []);

  return null; // No UI, just runs AOS
}
