"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * WhatsAppButton Component
 * 
 * A floating WhatsApp contact button that stays fixed at the bottom-right corner.
 * Opens a WhatsApp chat in a new tab when clicked.
 * 
 * Features:
 * - Official WhatsApp green color (#25D366)
 * - Smooth hover effects with scale animation
 * - Tooltip on hover
 * - Responsive sizing for mobile and desktop
 * - Positioned opposite to the scroll progress indicator
 */

interface WhatsAppButtonProps {
  /** WhatsApp phone number in international format (e.g., "923008468758") */
  phoneNumber: string;
  /** Optional pre-filled message */
  message?: string;
}

export default function WhatsAppButton({ 
  phoneNumber, 
  message = "Hello! I'd like to know more about your services." 
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  /**
   * Generate WhatsApp chat URL with optional pre-filled message
   */
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  /**
   * Open WhatsApp chat in new tab
   */
  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip - hidden on mobile, visible on larger screens */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block absolute right-full mr-3 md:mr-4 top-1/2 -translate-y-1/2 px-2.5 py-1.5 md:px-3 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-lg whitespace-nowrap shadow-lg"
              >
                Chat on WhatsApp
                {/* Arrow pointing right */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-6 md:border-8 border-transparent border-l-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] rounded-full bg-[#25D366] shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-green-500/30 group overflow-hidden"
            aria-label="Chat on WhatsApp"
          >
            {/* Background glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-green-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Animated pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* WhatsApp Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white drop-shadow-md group-hover:scale-110 transition-transform duration-200" />
            </div>

            {/* Ripple effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/10"
              initial={{ scale: 0, opacity: 0.5 }}
              whileHover={{ scale: 1, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
