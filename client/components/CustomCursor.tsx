"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor Component - Triangle + Circle Design
 * 
 * A modern cursor effect featuring:
 * 1. Triangle: Red tilted triangle at exact cursor position (instant follow)
 * 2. Circle: Red semi-transparent circular boundary with smooth trailing animation
 * 
 * Features:
 * - Triangle stays perfectly centered inside the circle
 * - Smooth interpolated movement using requestAnimationFrame
 * - Circle follows with easing/lerp for natural delayed motion
 * - Hidden on touch devices
 * - GPU-accelerated transforms
 * - Pointer-events: none for non-interference
 * 
 * Accessibility:
 * - System cursor hidden globally (except form inputs)
 */
export default function CustomCursor() {
  // Refs for DOM elements
  const triangleRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mousePos = useRef({ x: 0, y: 0 }); // Target position (actual mouse)
  const trianglePos = useRef({ x: 0, y: 0 }); // Triangle current position (instant)
  const circlePos = useRef({ x: 0, y: 0 }); // Circle current position (delayed)
  
  // Animation frame reference
  const rafRef = useRef<number>();
  
  // Device detection
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    // Detect mouse device (hide on touch-only devices)
    const hasPointerFine = window.matchMedia('(pointer: fine)').matches;
    const hasTouch = 'ontouchstart' in window;
    const isMouseSupported = hasPointerFine && !hasTouch;
    
    setIsMouseDevice(isMouseSupported);
    
    if (!isMouseSupported) return;

    /**
     * Linear interpolation helper
     * Smoothly interpolates between current and target value
     */
    const lerp = (start: number, end: number, factor: number): number => {
      return start + (end - start) * factor;
    };

    /**
     * Mouse move handler
     * Updates target position for both triangle and circle
     */
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    /**
     * Animation loop using requestAnimationFrame
     * Triangle follows instantly, circle follows with smooth delay
     */
    const animate = () => {
      if (!triangleRef.current || !circleRef.current) return;

      // Triangle follows instantly (lerp factor = 1 for instant follow)
      trianglePos.current.x = lerp(trianglePos.current.x, mousePos.current.x, 1);
      trianglePos.current.y = lerp(trianglePos.current.y, mousePos.current.y, 1);

      // Circle follows with smooth delay (lerp factor = 0.12 for trailing effect)
      circlePos.current.x = lerp(circlePos.current.x, mousePos.current.x, 0.12);
      circlePos.current.y = lerp(circlePos.current.y, mousePos.current.y, 0.12);

      // Apply transforms with GPU acceleration (translate3d)
      // Triangle: exact cursor position, rotated 45deg to the right from upward
      triangleRef.current.style.transform = 
        `translate3d(${trianglePos.current.x}px, ${trianglePos.current.y}px, 0) translate(-50%, -15%) rotate(225deg)`;
      
      // Circle: delayed follow, centered on triangle
      circleRef.current.style.transform = 
        `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0) translate(-50%, -50%)`;

      // Continue loop
      rafRef.current = requestAnimationFrame(animate);
    };

    // Initialize cursor at center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mousePos.current = { x: centerX, y: centerY };
    trianglePos.current = { x: centerX, y: centerY };
    circlePos.current = { x: centerX, y: centerY };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (!isMouseDevice) {
    return null;
  }

  return (
    <>
      {/* Global CSS to hide system cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        /* Show system cursor on form inputs for accessibility */
        input, 
        textarea, 
        select,
        [contenteditable="true"] {
          cursor: text !important;
        }
      `}</style>

      {/* Triangle cursor - instant follow at exact mouse position */}
      <div
        ref={triangleRef}
        className="cursor-triangle"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />

      {/* Circle boundary - delayed smooth follow */}
      <div
        ref={circleRef}
        className="cursor-circle"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
        }}
      />

      {/* Cursor styles */}
      <style jsx>{`
        /* Triangle Cursor - Red tilted triangle at cursor position */
        .cursor-triangle {
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-bottom: 12px solid rgba(220, 38, 38, 1);
          filter: drop-shadow(0 0 6px rgba(220, 38, 38, 0.5))
                  drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
          animation: cursorFadeIn 0.3s ease;
        }

        /* Circle Boundary - Semi-transparent red ring with glow */
        .cursor-circle {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(220, 38, 38, 0.8);
          border-radius: 50%;
          background: rgba(220, 38, 38, 0.1);
          box-shadow: 
            0 0 15px rgba(220, 38, 38, 0.4),
            0 0 25px rgba(220, 38, 38, 0.2),
            inset 0 0 10px rgba(220, 38, 38, 0.1);
          animation: cursorFadeIn 0.4s ease;
        }

        /* Fade in animation on mount */
        @keyframes cursorFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Hide on smaller screens (mobile/tablet) */
        @media (max-width: 768px), (pointer: coarse) {
          .cursor-triangle,
          .cursor-circle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
