"use client";

import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

type VideoPlayerProps = React.ComponentProps<typeof VideoPlayer>;

interface OverlayVideoProps extends VideoPlayerProps {
  containerClassName?: string;
  overlayClassName?: string;
  posterAlt?: string;
  buttonAriaLabel?: string;
}

export default function OverlayVideo({
  containerClassName = '',
  overlayClassName = 'absolute inset-0 flex items-center justify-center bg-black',
  poster,
  posterAlt = 'Video thumbnail',
  buttonAriaLabel = 'Play video',
  autoPlay = false,
  controls = true,
  loop = false,
  muted,
  playsInline = true,
  preload = 'metadata',
  className = 'absolute inset-0',
  style,
  ...videoProps
}: OverlayVideoProps) {
  const [showPlayer, setShowPlayer] = useState(autoPlay);
  const shouldAutoPlay = showPlayer || autoPlay;
  const effectiveMuted = muted ?? autoPlay;

  return (
    <div className={`relative group ${containerClassName}`.trim()}>
      {showPlayer ? (
        <VideoPlayer
          {...videoProps}
          poster={poster}
          autoPlay={shouldAutoPlay}
          controls={controls}
          loop={loop}
          muted={effectiveMuted}
          playsInline={playsInline}
          preload={preload}
          className={className}
          style={style}
        />
      ) : (
        <div className={overlayClassName}>
          {poster ? (
            <img
              src={poster}
              alt={posterAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
          ) : null}
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 pointer-events-none" />
          <button
            type="button"
            onClick={() => setShowPlayer(true)}
            className="z-10 play-btn shadow-lg focus:outline-none transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl"
            aria-label={buttonAriaLabel}
          >
            <svg viewBox="0 0 64 64" fill="white" className="w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300">
              <polygon points="24,10 54,32 24,54" fill="white" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
