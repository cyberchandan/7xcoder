import React, { useEffect, useState } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame to optimize rendering performance
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Outer blurred aura trailing slightly behind */}
      <div 
        className="cursor-aura" 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {/* Inner sharp glowing dot staying exactly on cursor */}
      <div 
        className="cursor-core" 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
    </>
  );
};

export default CursorGlow;
