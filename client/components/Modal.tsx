"use client";

import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ open, onClose, children, title }: { open: boolean; onClose: () => void; children?: React.ReactNode; title?: string }){
  const scrollYRef = React.useRef(0);
  const portalElRef = React.useRef<HTMLElement | null>(null);

  // create a container element in the document body for the portal
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    const el = document.createElement('div');
    portalElRef.current = el;
    document.body.appendChild(el);
    return () => {
      if (portalElRef.current && portalElRef.current.parentNode) portalElRef.current.parentNode.removeChild(portalElRef.current);
      portalElRef.current = null;
    };
  }, []);

  // Lock scroll when modal opens, restore on close
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const body = document.body;
    const html = document.documentElement;

    if (open) {
      // Save current scroll position
      scrollYRef.current = window.scrollY;
      
      // Lock body scroll using overflow hidden only
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`; // Prevent layout shift from scrollbar
    } else {
      // Restore body scroll
      body.style.overflow = '';
      body.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [open]);

  const content = (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[hsl(var(--background))]/70" onClick={onClose} />

          {/* dialog: responsive sizing, allow internal scrolling on small screens */}
          <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-4 sm:mx-6 bg-black p-4 sm:p-6 md:p-8 rounded-lg border border-[hsl(var(--border))] shadow-2xl max-h-[85vh] sm:max-h-[90vh] overflow-auto">
            <button onClick={onClose} aria-label="Close dialog" className="absolute right-3 top-3 sm:right-4 sm:top-4 text-[hsl(var(--muted-gray))] p-2 rounded-md hover:bg-white/3 text-xl sm:text-2xl z-10">✕</button>
            {title && <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 pr-8 text-[#AE1D36]">{title}</h3>}
            <div className="w-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined' || !portalElRef.current) {
    // Server render or portal not ready — render nothing
    return null;
  }

  return createPortal(content, portalElRef.current);
}
