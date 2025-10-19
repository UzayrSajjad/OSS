"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for a brief moment to ensure layout is ready
    // Maximum 1.5 seconds, regardless of asset loading
    const maxLoadTime = 1500;
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, 800 - elapsed); // Minimum 800ms for smooth UX
      
      setTimeout(() => {
        setIsLoading(false);
        // Add loaded class to body to restore scroll
        document.body.classList.add('loaded');
      }, remainingTime);
    };

    // Check if DOM is ready first
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', finishLoading);
    } else {
      finishLoading();
    }

    // Force hide preloader after max time even if DOM isn't ready
    const maxTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, maxLoadTime);

    return () => {
      document.removeEventListener('DOMContentLoaded', finishLoading);
      clearTimeout(maxTimeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
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
                alt="OneStop Solutions" 
                className="h-20 sm:h-24 md:h-28 w-auto"
              />
            </motion.div>

            {/* Animated Loading Bar */}
            <div className="w-48 sm:w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#AE1D36] to-[#DC2626] rounded-full"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-gray-600 text-sm sm:text-base font-[Outfit] tracking-wider"
            >
              Loading Experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
