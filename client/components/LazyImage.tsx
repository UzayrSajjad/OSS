"use client";

import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  onLoad?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function LazyImage({
  src,
  alt,
  className = '',
  placeholderSrc,
  onLoad,
  onClick,
  style
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate a tiny placeholder from Cloudinary if the image is from Cloudinary
  const getPlaceholder = () => {
    if (placeholderSrc) return placeholderSrc;
    
    // If it's a Cloudinary URL, create a low-quality version
    if (src.includes('cloudinary.com')) {
      return src.replace('/upload/', '/upload/w_50,q_10,e_blur:1000/');
    }
    
    // For local images, use a data URL as placeholder
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3C/svg%3E';
  };

  // Extract object-fit class from className prop
  const objectFitMatch = className.match(/object-(contain|cover|fill|none|scale-down)/);
  const objectFitClass = objectFitMatch ? objectFitMatch[0] : 'object-cover';
  
  // Remove object-fit classes from container className
  const containerClassName = className.replace(/object-(contain|cover|fill|none|scale-down)/g, '').trim();

  return (
    <div ref={imgRef} className={`relative ${containerClassName}`} style={style} onClick={onClick}>
      {/* Placeholder */}
      <img
        src={getPlaceholder()}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full ${objectFitClass} transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(10px)', transform: 'scale(1.1)' }}
      />

      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${objectFitClass} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}

      {/* Loading overlay */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-[#AE1D36] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
