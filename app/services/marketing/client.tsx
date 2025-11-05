"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../../client/components/Navbar';
import Footer from '../../../client/components/Footer';
import LazyImage from '../../../client/components/LazyImage';
import OverlayVideo from '../../../client/components/OverlayVideo';

export default function MarketingPageClient(){
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold brand-headline text-center mx-auto max-w-4xl"
          >
            <span className="gradient-text events-headline">Marketing</span>
          </motion.h2>

          <div className="mt-10">
            {/* Main Heading */}
            <motion.h3
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-8 max-w-5xl mx-auto tracking-wider uppercase"
            >
              Solar Exhibition 2025 Expo Center Lahore
            </motion.h3>

            {/* Two Column Layout: 70% Text, 30% Video */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
              {/* Left: Text Content (70%) */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 order-1"
              >
                <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                    OSS successfully organized the Solar Exhibition 2025 at the Expo Center Lahore, an event that brought together top solar energy companies, industry leaders, and sustainability experts from across the nation. The exhibition showcased the latest advancements in solar technology, renewable energy solutions, and innovative green products shaping the future of clean energy in Pakistan.
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">
                    The event was a huge success, drawing an impressive audience and receiving exceptional feedback from participants and partners alike. It not only strengthened OSS's reputation for excellence in event management but also greatly boosted the company's marketing presence and brand visibility within the energy and technology sectors.
                  </p>
                  <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                    <p className="text-lg sm:text-xl leading-relaxed mb-0">
                      Through strategic planning, creative execution, and flawless coordination, OSS once again demonstrated its ability to deliver impactful and memorable events that drive innovation and industry growth.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Video (30%) */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 order-2"
              >
                <div className="rounded-lg overflow-hidden bg-black relative">
                  <OverlayVideo
                    containerClassName="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg"
                    src="https://res.cloudinary.com/djetoiflq/video/upload/v1760375814/OSS_EXPO_Fabrication_copy_v9tpck.mov"
                    poster="https://res.cloudinary.com/djetoiflq/image/upload/v1760376965/expo-thumbnail_p5l1qp.png"
                    posterAlt="Solar Exhibition 2025 mobile recording thumbnail"
                    buttonAriaLabel="Play Solar Exhibition 2025 mobile recording"
                  />
                </div>
              </motion.div>
            </div>

            {/* Marketing Portfolio Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Heading */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Orbitron']">
                  <span className="gradient-text events-headline">Visit Our Marketing Portfolio</span>
                </h3>
              </motion.div>

              {/* Right: Animated Card */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6 }}
                className="order-2"
              >
                <a
                  href="/marketing-portfolio.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer"
                >
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_20px_60px_rgba(174,29,54,0.4)] transform hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      <LazyImage
                        src="https://res.cloudinary.com/djetoiflq/image/upload/v1760378624/Screenshot_From_2025-10-13_23-03-29_nohobk.png"
                        alt="Marketing Portfolio Preview"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-[#AE1D36] flex items-center justify-center shadow-xl">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <p className="text-white text-lg font-semibold">Click to explore our full portfolio</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}