"use client";

import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor Component - Dual Circle Design
 * 
 * A polished cursor effect featuring two circles:
 * 1. Core: Small solid red circle perfectly centered on pointer
 * 2. Halo: Larger semi-transparent ring following with smooth delay
 * 
 * Features:
 * - Smooth interpolated movement using requestAnimationFrame
 * - Velocity-based stretching for motion feedback
 * - Interactive hover states (enlarge + glow)
 * - Mousedown pressed animation
 * - Hidden on touch devices
 * - GPU-accelerated transforms
 * - CSS variables for easy theming
 * 
 * Accessibility:
 * - To disable custom cursor, add data-no-custom-cursor="true" to <body>
 * - System cursor shown on form inputs automatically
 */
export default function CustomCursor() {
  // Refs for DOM elements
  const coreRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mousePos = useRef({ x: 0, y: 0 }); // Target position (actual mouse)
  const corePos = useRef({ x: 0, y: 0 }); // Core current position (instant)
  const haloPos = useRef({ x: 0, y: 0 }); // Halo current position (delayed)
  
  // Velocity tracking for stretch effect
  const velocity = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  
  // Animation frame reference
  const rafRef = useRef<number>();
  
  // Interaction states
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    // Check if user prefers custom cursor (accessibility)
    const noCustomCursor = document.body.dataset.noCustomCursor === 'true';
    if (noCustomCursor) return;

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
     * Updates target position and calculates velocity
     */
    const handleMouseMove = (e: MouseEvent) => {
      // Update target position
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Calculate velocity for stretch effect
      velocity.current = {
        x: e.clientX - prevMousePos.current.x,
        y: e.clientY - prevMousePos.current.y,
      };
      
      prevMousePos.current = { x: e.clientX, y: e.clientY };
    };

    /**
     * Mouse down handler
     * Triggers pressed state for compression animation
     */
    const handleMouseDown = () => {
      setIsPressed(true);
    };

    /**
     * Mouse up handler
     * Releases pressed state
     */
    const handleMouseUp = () => {
      setIsPressed(false);
    };

    /**
     * Hover detection for interactive elements
     * Enlarges cursor when hovering clickable elements
     */
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      const isInteractive = target.closest(
        'a, button, [role="button"], [onclick], .clickable, summary, [tabindex]:not([tabindex="-1"])'
      );
      
      setIsHovering(!!isInteractive);
    };

    /**
     * Reset hover state when leaving interactive elements
     */
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;
      
      const wasInteractive = target.closest(
        'a, button, [role="button"], [onclick], .clickable, summary, [tabindex]:not([tabindex="-1"])'
      );
      const isStillInteractive = relatedTarget?.closest(
        'a, button, [role="button"], [onclick], .clickable, summary, [tabindex]:not([tabindex="-1"])'
      );
      
      if (wasInteractive && !isStillInteractive) {
        setIsHovering(false);
      }
    };

    /**
     * Animation loop using requestAnimationFrame
     * Creates smooth cursor movement with different interpolation speeds
     * for core (instant) and halo (delayed)
     */
    const animate = () => {
      if (!coreRef.current || !haloRef.current) return;

      // Core follows instantly (high lerp factor = fast response)
      corePos.current.x = lerp(corePos.current.x, mousePos.current.x, 1);
      corePos.current.y = lerp(corePos.current.y, mousePos.current.y, 1);

      // Halo follows with delay (low lerp factor = smooth trailing)
      haloPos.current.x = lerp(haloPos.current.x, mousePos.current.x, 0.15);
      haloPos.current.y = lerp(haloPos.current.y, mousePos.current.y, 0.15);

      // Calculate velocity-based stretch
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
      const maxSpeed = 50; // Threshold for maximum stretch
      const stretchFactor = Math.min(speed / maxSpeed, 1) * 0.15; // Max 15% stretch
      
      // Calculate stretch direction (perpendicular to motion)
      const angle = Math.atan2(velocity.current.y, velocity.current.x);
      const scaleX = 1 + stretchFactor * Math.abs(Math.cos(angle));
      const scaleY = 1 + stretchFactor * Math.abs(Math.sin(angle));

      // Apply transforms with GPU acceleration (translate3d)
      coreRef.current.style.transform = 
        `translate3d(${corePos.current.x}px, ${corePos.current.y}px, 0)`;
      
      haloRef.current.style.transform = 
        `translate3d(${haloPos.current.x}px, ${haloPos.current.y}px, 0) scale(${scaleX}, ${scaleY})`;

      // Decay velocity for smooth stop
      velocity.current.x *= 0.9;
      velocity.current.y *= 0.9;

      // Continue loop
      rafRef.current = requestAnimationFrame(animate);
    };

    // Initialize cursor at center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mousePos.current = { x: centerX, y: centerY };
    corePos.current = { x: centerX, y: centerY };
    haloPos.current = { x: centerX, y: centerY };
    prevMousePos.current = { x: centerX, y: centerY };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      
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
      {/* CSS Variables for easy theming */}
      <style jsx global>{`
        :root {
          --cursor-core-size: 36px;
          --cursor-core-color: rgba(220, 38, 38, 0.8);
          --cursor-halo-size: 36px;
          --cursor-halo-color: rgba(220, 38, 38, 0.3);
          --cursor-hover-scale-core: 1;
          --cursor-hover-scale-halo: 1;
          --cursor-pressed-scale: 0.85;
        }
        
        /* Hide default cursor globally */
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
        
        /* Show system cursor on disabled elements */
        [disabled],
        .disabled {
          cursor: not-allowed !important;
        }
      `}</style>

      {/* Core circle - instant follow */}
      <div
        ref={coreRef}
        className={`cursor-core ${isHovering ? 'hovering' : ''} ${isPressed ? 'pressed' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />

      {/* Halo circle - delayed follow with stretch */}
      <div
        ref={haloRef}
        className={`cursor-halo ${isHovering ? 'hovering' : ''} ${isPressed ? 'pressed' : ''}`}
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
        /* Core Circle Styles */
        .cursor-core {
          width: var(--cursor-core-size);
          height: var(--cursor-core-size);
          background: var(--cursor-core-color);
          border: 2px solid rgba(220, 38, 38, 1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: 
            width 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            height 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            background 0.2s ease,
            border 0.2s ease;
          box-shadow: 
            0 0 10px rgba(220, 38, 38, 0.5),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 0 10px rgba(255, 255, 255, 0.2);
          mix-blend-mode: normal;
        }

        /* Halo Circle Styles */
        .cursor-halo {
          width: var(--cursor-halo-size);
          height: var(--cursor-halo-size);
          background: var(--cursor-halo-color);
          border: 1px solid rgba(220, 38, 38, 0.4);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: 
            width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            background 0.25s ease,
            box-shadow 0.3s ease,
            border 0.25s ease;
          box-shadow: 
            0 0 20px rgba(220, 38, 38, 0.3),
            0 0 35px rgba(220, 38, 38, 0.2);
          backdrop-filter: blur(2px);
          mix-blend-mode: normal;
        }

        /* Hover State - Glow only (no size change) */
        .cursor-core.hovering {
          background: rgba(220, 38, 38, 0.95);
          border-color: rgba(220, 38, 38, 1);
          box-shadow: 
            0 0 20px rgba(220, 38, 38, 0.7),
            0 2px 12px rgba(0, 0, 0, 0.3),
            inset 0 0 15px rgba(255, 255, 255, 0.3);
        }

        .cursor-halo.hovering {
          background: rgba(220, 38, 38, 0.4);
          border-color: rgba(220, 38, 38, 0.6);
          box-shadow: 
            0 0 30px rgba(220, 38, 38, 0.5),
            0 0 50px rgba(220, 38, 38, 0.35),
            0 0 70px rgba(220, 38, 38, 0.2);
        }

        /* Pressed State - Compress */
        .cursor-core.pressed {
          width: calc(var(--cursor-core-size) * var(--cursor-pressed-scale));
          height: calc(var(--cursor-core-size) * var(--cursor-pressed-scale));
          transition: 
            width 0.1s cubic-bezier(0.4, 0, 1, 1),
            height 0.1s cubic-bezier(0.4, 0, 1, 1);
        }

        .cursor-halo.pressed {
          width: calc(var(--cursor-halo-size) * var(--cursor-pressed-scale));
          height: calc(var(--cursor-halo-size) * var(--cursor-pressed-scale));
          transition: 
            width 0.1s cubic-bezier(0.4, 0, 1, 1),
            height 0.1s cubic-bezier(0.4, 0, 1, 1);
        }

        /* Fade in animation on mount */
        @keyframes cursorFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cursor-core,
        .cursor-halo {
          animation: cursorFadeIn 0.4s ease;
        }

        /* Hide on smaller screens (mobile/tablet) */
        @media (max-width: 768px), (pointer: coarse) {
          .cursor-core,
          .cursor-halo {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
