'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    // Update mouse position on mousemove
    const handleMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
        // Check if we're hovering over text elements
        const element = document.elementFromPoint(e.clientX, e.clientY);
        const isTextElement = element?.tagName === 'P' || 
                            element?.tagName === 'H1' || 
                            element?.tagName === 'H2' || 
                            element?.tagName === 'H3' || 
                            element?.tagName === 'SPAN' ||
                            element?.tagName === 'A';
        
        setIsHoveringText(isTextElement);
    };

    // Handle mouse down event to scale the cursor
    const handleMouseDown = () => {
        setIsClicked(true);
    };

    // Handle mouse up event to return cursor to normal size
    const handleMouseUp = () => {
     setIsClicked(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover class to all text elements
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a');
    textElements.forEach(element => {
        element.classList.add('hover-effect');
    });

    // Smoothly update the trail position with a delay
    const updateTrailPosition = () => {
      setTrailPosition((prev) => {
        const deltaX = (mousePosition.x - prev.x) * 0.1;
        const deltaY = (mousePosition.y - prev.y) * 0.1;
        return { x: prev.x + deltaX, y: prev.y + deltaY };
      });
    };

    const interval = setInterval(updateTrailPosition, 5); // ~60 FPS

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(interval);
        // Clean up hover classes when component unmounts
        textElements.forEach(element => {
            element.classList.remove('hover-effect');
        });
    };
  }, [mousePosition]);

  return (
    <>
      {/* Primary circle (direct follower) */}
      <div className={`fixed w-4 h-4 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform ease-out z-10 duration-500 ${isHoveringText && "hidden"} ${isHoveringText ? "bg-bg" : "bg-primaryText"} ${isClicked ? 'scale-[4]' : 'scale-1'}`} style={{top: `${mousePosition.y}px`, left: `${mousePosition.x}px`}}></div>

      {/* Secondary circle (delayed follower) */}
      <div className={`fixed w-8 h-8 border-2 border-secondary rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out ${isHoveringText && "hidden"}`} style={{top: `${trailPosition.y}px`, left: `${trailPosition.x}px`}}
      ></div>

      {/* Cursor mask layer */}
        <div className={`fixed w-4 h-4 transition-all rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference ${
            isHoveringText ? 'bg-white scale-[5]' : 'bg-transparent'
        } transition-transform duration-300 ease-out ${isClicked && 'scale-[7]'}`}
        style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
        }}
        ></div>
    </>
  );
}
