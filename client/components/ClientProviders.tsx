"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import ScrollProgress from "./ScrollProgress";
import WhatsAppButton from "./WhatsAppButton";
import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";
import { VideoPlayerProvider } from "../contexts/VideoPlayerContext";

export function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <VideoPlayerProvider>
          <Preloader />
          <Toaster />
          <Sonner />
          {children}
          <CustomCursor />
          <ScrollProgress />
          <WhatsAppButton 
            phoneNumber="923008468758" 
            message="Hello! I'd like to know more about your services." 
          />
        </VideoPlayerProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}