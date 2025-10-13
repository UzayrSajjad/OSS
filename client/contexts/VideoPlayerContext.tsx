"use client";

import React, { createContext, useContext, useRef, useCallback } from 'react';

interface VideoPlayerContextType {
  registerVideo: (videoId: string, videoElement: HTMLVideoElement) => void;
  unregisterVideo: (videoId: string) => void;
  playVideo: (videoId: string) => void;
}

const VideoPlayerContext = createContext<VideoPlayerContextType | undefined>(undefined);

export function VideoPlayerProvider({ children }: { children: React.ReactNode }) {
  const videosRef = useRef<Map<string, HTMLVideoElement>>(new Map());

  const registerVideo = useCallback((videoId: string, videoElement: HTMLVideoElement) => {
    videosRef.current.set(videoId, videoElement);
  }, []);

  const unregisterVideo = useCallback((videoId: string) => {
    videosRef.current.delete(videoId);
  }, []);

  const playVideo = useCallback((videoId: string) => {
    // Pause all other videos
    videosRef.current.forEach((video, id) => {
      if (id !== videoId && !video.paused) {
        video.pause();
      }
    });
  }, []);

  return (
    <VideoPlayerContext.Provider value={{ registerVideo, unregisterVideo, playVideo }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  const context = useContext(VideoPlayerContext);
  if (context === undefined) {
    throw new Error('useVideoPlayer must be used within a VideoPlayerProvider');
  }
  return context;
}
