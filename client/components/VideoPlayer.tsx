"use client";

import React from 'react';

type PreloadSetting = "auto" | "metadata" | "none";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: PreloadSetting;
  className?: string;
  style?: React.CSSProperties;
}

const getMimeType = (src: string): string => {
  const extension = src.split('?')[0]?.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'webm':
      return 'video/webm';
    case 'ogg':
    case 'ogv':
      return 'video/ogg';
    case 'mov':
      return 'video/quicktime';
    case 'm4v':
    case 'mp4':
    default:
      return 'video/mp4';
  }
};

const buildMp4Fallback = (src: string): string | null => {
  if (!src.includes('/upload/')) return null;
  const [base, rest] = src.split('/upload/');
  if (!rest) return null;

  const [path, query] = rest.split('?');
  const mp4Path = path.replace(/\.mov($|\?)/i, '.mp4$1');
  const mp4Url = `${base}/upload/f_mp4/${mp4Path}`;
  return query ? `${mp4Url}?${query}` : mp4Url;
};

export default function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  controls = true,
  loop = false,
  muted,
  playsInline = true,
  preload = 'metadata',
  className = '',
  style
}: VideoPlayerProps) {
  const mergedStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: 'black',
    ...style,
  };

  const effectiveMuted = muted ?? autoPlay;
  const fallbackSrc = src.toLowerCase().endsWith('.mov') ? buildMp4Fallback(src) : null;

  return (
    <video
      className={className}
      poster={poster}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      muted={effectiveMuted}
      playsInline={playsInline}
      preload={preload}
      style={mergedStyle}
    >
      <source src={src} type={getMimeType(src)} />
      {fallbackSrc ? <source src={fallbackSrc} type="video/mp4" /> : null}
      Your browser does not support the video tag.
    </video>
  );
}
