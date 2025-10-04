"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollProgress Component
 * 
 * A circular progress indicator that shows page scroll progress (0-100%)
 * and acts as a "Back to Top" button when clicked.
 * 
 * Features:
 * - Circular gauge that fills as user scrolls
 * - Smooth scroll to top on click
 * - Elegant hover effects with tooltip
 * - Only visible after scrolling past initial viewport
 * - Positioned at bottom-left corner
 * - Fully responsive across all devices
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      // Get scroll position and document height
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate percentage (0-100)
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      
      // Show button after scrolling 200px
      setIsVisible(scrollTop > 200);
    };

    // Calculate on mount
    calculateScrollProgress();

    // Recalculate on scroll (throttled using requestAnimationFrame)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  /**
   * Smooth scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate the stroke dashoffset for the circular progress
  const radius = 36; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip - hidden on mobile, visible on larger screens */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block absolute left-full ml-3 md:ml-4 top-1/2 -translate-y-1/2 px-2.5 py-1.5 md:px-3 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-lg whitespace-nowrap shadow-lg"
              >
                Back to Top
                {/* Arrow pointing left */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-6 md:border-8 border-transparent border-r-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button Container - responsive sizing */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-red-500/30 group"
            aria-label="Back to top"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* SVG Progress Circle */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 80 80"
            >
              {/* Background circle (gray track) */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-gray-200"
              />
              
              {/* Progress circle (red gauge) */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                stroke="url(#progressGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-150 ease-out drop-shadow-md sm:drop-shadow-lg"
              />
              
              {/* Gradient definition for progress stroke */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DC2626" /> {/* red-600 */}
                  <stop offset="100%" stopColor="#B91C1C" /> {/* red-700 */}
                </linearGradient>
              </defs>
            </svg>

            {/* Up Arrow Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600 group-hover:text-red-700 transition-colors duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
              
              {/* Percentage text - smaller on mobile */}
              <span className="text-[10px] sm:text-xs font-bold text-gray-700 mt-0.5">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
