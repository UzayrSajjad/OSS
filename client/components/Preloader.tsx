"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
        // Add loaded class to body to restore scroll
        document.body.classList.add('loaded');
      }, 500);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          style={{ pointerEvents: isLoading ? 'auto' : 'none' }}
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8"
            >
              <img 
                src="https://res.cloudinary.com/djetoiflq/image/upload/v1759552918/oss-logo_veijqu.png" 
                alt="One Stop Solutions" 
                className="h-20 sm:h-24 md:h-28 w-auto"
              />
            </motion.div>

            {/* Animated Loading Bar */}
            <div className="w-48 sm:w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#AE1D36] to-[#DC2626] rounded-full"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-white/70 text-sm sm:text-base font-[Outfit] tracking-wider"
            >
              Loading Experience...
            </motion.p>

            {/* Spinning Circle Accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 w-32 h-32 sm:w-40 sm:h-40 border-2 border-[#AE1D36]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 w-40 h-40 sm:w-48 sm:h-48 border-2 border-[#DC2626]/10 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
