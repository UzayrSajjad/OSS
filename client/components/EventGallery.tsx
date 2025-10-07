"use client";

import React, { useState, useRef, useEffect } from 'react';
import LazyImage from './LazyImage';

export default function EventGallery({ images, large = false }: { images: string[], large?: boolean }){
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  // Responsive heights: smaller on mobile, larger on desktop
  const mainHeight = large ? 'auto' : 320;
  const thumbSize = large ? { width: 120, height: 75 } : { width: 120, height: 72 };

  const prevImage = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setIndex((i) => (i + 1) % images.length);

  const stripRef = useRef<HTMLDivElement | null>(null);

  // Reset index to 0 when images array changes (e.g., opening different event)
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // Scroll the selected thumbnail into view when index changes
  useEffect(() => {
    const node = stripRef.current?.children[index] as HTMLElement | undefined;
    if (node && stripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [index]);

  if (!images || images.length === 0) return null;

  return (
    <div className="event-gallery">
      <div className="w-full rounded-md overflow-hidden relative">
        {large ? (
          <LazyImage 
            src={images[index]} 
            alt={`Gallery image ${index+1}`} 
            className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[55vh] lg:max-h-[60vh] object-contain bg-black rounded-md" 
            onClick={() => { if (!large) setOpen(true); }} 
          />
        ) : (
          <LazyImage 
            src={images[index]} 
            alt={`Gallery image ${index+1}`} 
            className="w-full object-cover rounded-md cursor-pointer" 
            style={{ height: '320px' }}
            onClick={() => setOpen(true)} 
          />
        )}
          {large && (
            <>
              <button aria-label="Prev image" onClick={prevImage} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/6 backdrop-blur-md hover:scale-105 transform transition-shadow transition-transform shadow-md hover:shadow-lg flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-4 focus:ring-[rgba(0,0,0,0.12)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-[18px] sm:h-[18px]">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button aria-label="Next image" onClick={nextImage} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/6 backdrop-blur-md hover:scale-105 transform transition-shadow transition-transform shadow-md hover:shadow-lg flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-4 focus:ring-[rgba(0,0,0,0.12)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white sm:w-[18px] sm:h-[18px]">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

      <div ref={stripRef} className={`mt-3 flex gap-2 overflow-x-auto ${large ? 'no-scrollbar' : ''} pb-2`}>
        {images.map((img, i) => (
          <button 
            key={img + i} 
            onClick={() => setIndex(i)} 
            className={`flex-shrink-0 rounded-md overflow-hidden border ${i===index ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-[72px] lg:w-32 lg:h-20`}
          >
            <LazyImage src={img} alt={`thumb-${i+1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {open && !large && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 z-60 text-white text-2xl">✕</button>
          <LazyImage src={images[index]} alt={`Lightbox ${index+1}`} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </div>
  );
}
