"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactPlayer to reduce initial bundle size
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-3 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  )
}) as any;

interface LazyVideoProps {
  src: string;
  thumbnail: string;
  thumbnailAlt?: string;
  playing?: boolean;
  controls?: boolean;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  onPlay?: () => void;
  onReady?: () => void;
}

export default function LazyVideo({
  src,
  thumbnail,
  thumbnailAlt = 'Video thumbnail',
  playing = false,
  controls = true,
  width = '100%',
  height = '100%',
  className = '',
  style,
  onPlay,
  onReady
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Don't load the player immediately, just mark as in view
            // Player loads when user clicks play button
          } else {
            setIsInView(false);
          }
        });
      },
      {
        rootMargin: '100px', // Start observing 100px before entering viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayClick = () => {
    setShouldLoad(true);
    setShowPlayer(true);
    onPlay?.();
  };

  // Generate a low-quality Cloudinary thumbnail if available
  const getThumbnailSrc = () => {
    if (thumbnail.includes('cloudinary.com')) {
      return thumbnail.replace('/upload/', '/upload/w_800,q_auto:low/');
    }
    return thumbnail;
  };

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full ${className}`} style={style}>
      {!showPlayer ? (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
          {/* Thumbnail Image - only load when in view */}
          {isInView && (
            <img
              src={getThumbnailSrc()}
              alt={thumbnailAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          
          {/* Play Button */}
          <button
            onClick={handlePlayClick}
            className="relative z-10 play-btn shadow-lg focus:outline-none"
            aria-label="Play video"
          >
            <svg viewBox="0 0 64 64" fill="white" className="w-12 h-12 sm:w-16 sm:h-16">
              <polygon points="24,10 54,32 24,54" fill="white" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {shouldLoad && (
            <ReactPlayer
              url={src}
              playing={playing}
              controls={controls}
              width={width}
              height={height}
              style={{ position: 'absolute', top: 0, left: 0 }}
              onReady={onReady}
            />
          )}
        </div>
      )}
    </div>
  );
}
