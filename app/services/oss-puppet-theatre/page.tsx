"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../../client/components/Navbar';
import Footer from '../../../client/components/Footer';
import Modal from '../../../client/components/Modal';
import { entertainment } from '../../../client/data/services';
import LazyImage from '../../../client/components/LazyImage';
import OverlayVideo from '../../../client/components/OverlayVideo';

type EntItem = { id: number; title: string; image: string; short?: string; long?: string };

export default function OSSPuppetTheatrePage(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<EntItem | null>(null);
  // booking modal state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPdf, setBookingPdf] = useState<string | null>(null);
  const [bookingTitle, setBookingTitle] = useState<string | null>(null);

  // LACAS Puppet Show Gallery state
  const lacasGallery = [
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604815/4_ahjyom.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604814/3_ds7ugd.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604813/8_ltepog.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604820/2_qqmpyi.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604839/9_yeua58.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604803/1_fx2cra.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604832/10_a8h2fc.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604836/5_dehw8z.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604827/6_vddcus.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759604812/7_nnkk9t.jpg',
  ];
  const [lacasSelected, setLacasSelected] = useState(0);
  const lacasStripRef = useRef<HTMLDivElement | null>(null);
  const [lacasThumbWidth, setLacasThumbWidth] = useState<number | null>(null);

  // Mid City Housing Family Fest Gallery state
  const midCityGallery = [
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606957/1_eis2cn.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606958/3_ut8wcy.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606959/4_ugpaaf.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606959/2_yqcwsm.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606960/5_ykcpvl.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606962/6_ghj2l0.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606962/7_zvngzm.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606963/8_mpuks7.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606964/9_y1mlxt.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1759606965/10_t3ljmk.jpg',
  ];
  const [midCitySelected, setMidCitySelected] = useState(0);
  const midCityStripRef = useRef<HTMLDivElement | null>(null);
  const [midCityThumbWidth, setMidCityThumbWidth] = useState<number | null>(null);

  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [shouldAnimate, setShouldAnimate] = useState(prefersReducedMotion ? true : false);
  
  useEffect(() => {
    // Force scroll to top immediately on mount
    if (typeof window !== 'undefined') {
      // Disable browser's scroll restoration
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      // Force scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // Also set it again after a brief delay to ensure it takes effect
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 0);
    }
  }, []);
  
  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setTimeout(() => setShouldAnimate(true), 300);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  // LACAS gallery scroll behavior
  useEffect(() => {
    const node = lacasStripRef.current?.children[lacasSelected] as HTMLElement | undefined;
    if (node && lacasStripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [lacasSelected]);

  // Mid City gallery scroll behavior
  useEffect(() => {
    const node = midCityStripRef.current?.children[midCitySelected] as HTMLElement | undefined;
    if (node && midCityStripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [midCitySelected]);

  // Calculate thumbnail widths for galleries
  useEffect(() => {
    const compute = () => {
      // LACAS thumbnail width
      if (lacasStripRef.current) {
        const containerWidth = lacasStripRef.current.offsetWidth;
        const gap = 12;
        const visibleCount = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 4 : 3;
        const totalGaps = (visibleCount - 1) * gap;
        const ltw = (containerWidth - totalGaps) / visibleCount;
        setLacasThumbWidth(ltw);
      }
      // Mid City thumbnail width
      if (midCityStripRef.current) {
        const containerWidth = midCityStripRef.current.offsetWidth;
        const gap = 12;
        const visibleCount = window.innerWidth >= 1024 ? 5 : window.innerWidth >= 768 ? 4 : 3;
        const totalGaps = (visibleCount - 1) * gap;
        const mtw = (containerWidth - totalGaps) / visibleCount;
        setMidCityThumbWidth(mtw);
      }
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const headingVariants = {
    initial: { opacity: 1, y: 12 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const leftVariants = {
    initial: { opacity: 1, x: -18 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const rightVariants = {
    initial: { opacity: 1, x: 18 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  return (
    <>
      <Navbar />
  <main className="min-h-screen bg-[hsl(var(--background))] pb-12 overflow-x-hidden w-full">
  {/* Hero slider — full-bleed and pulled up behind the fixed navbar */}
  <section className="relative w-full z-0">
          {/* full-width slider */}
    <HeroSlider />

          {/* overlay title removed as requested */}
        </section>

        {/* Insert landing OSS Puppet Theatre block below the hero */}
        <div className="pt-28 md:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} initial={prefersReducedMotion ? 'visible' : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold brand-headline text-center mx-auto max-w-4xl mb-14">
              <span className="gradient-text">OSS Puppet Theatre</span>
            </motion.h2>

            {/* Kids Kampus 50th Anniversary Section */}
            <motion.h3 
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.4 }} 
              transition={{ duration: 0.6 }} 
              className="mt-32 text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-6 max-w-5xl mx-auto tracking-wider uppercase"
            >
              🎉 Kids Kampus 50th Anniversary @ Polo Ground
            </motion.h3>
            <div className="prose max-w-none text-[hsl(var(--muted-gray))] mx-auto mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl leading-relaxed text-center">OSS proudly organized the 50th Anniversary Celebration of Kids Kampus at the iconic Polo Ground, marking five decades of learning and joy. The event featured colorful performances, engaging activities, and a lively atmosphere that brought together students, parents, and teachers in celebration of the school's remarkable journey.</p>
              <p className="text-lg sm:text-xl leading-relaxed text-center mt-4">From concept to execution, OSS ensured a seamless, vibrant, and memorable experience — honoring Kids Kampus's legacy with creativity and excellence.</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <OverlayVideo
                containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
                src="https://res.cloudinary.com/djetoiflq/video/upload/v1759001886/KK_Karnival_Polo_Ground_qrtinr.mov"
                poster="https://res.cloudinary.com/djetoiflq/image/upload/v1759606594/Screenshot_From_2025-10-05_00-36-16_bzhxah.png"
                posterAlt="Kids Kampus 50th Anniversary thumbnail"
                buttonAriaLabel="Play Kids Kampus 50th Anniversary video"
              />
            </div>

            {/* LACAS Puppet Show Section */}
            <motion.h3 
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.4 }} 
              transition={{ duration: 0.6 }} 
              className="mt-32 text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-8 max-w-5xl mx-auto tracking-wider uppercase"
            >
              🎭 Puppet Show at LACAS
            </motion.h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
              {/* Left: Description */}
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.35 }} 
                transition={{ duration: 0.6 }} 
                className="order-1 md:order-1"
              >
                <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                  <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Bringing Stories to Life Through Art and Imagination</p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">OSS had the pleasure of organizing a delightful Puppet Show at LACAS, designed to spark creativity, laughter, and curiosity among young learners. The event combined entertainment with education, allowing children to experience storytelling in a magical and interactive way.</p>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">Colorful puppets, engaging scripts, and lively performances brought beloved characters to life on stage — capturing the attention of every student in the audience. Our team handled complete event management, including stage setup, sound and lighting design, puppet coordination, and show flow supervision to ensure a seamless and memorable experience.</p>
                  <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                    <p className="text-lg sm:text-xl leading-relaxed mb-0">The Puppet Show not only entertained but also encouraged imagination, teamwork, and expression — aligning perfectly with LACAS's vision of nurturing creativity in education. OSS was proud to deliver a production that left smiles on faces and stories in hearts, creating a joyful day the students will remember for a long time.</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Image Gallery with Video */}
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.35 }} 
                transition={{ duration: 0.6 }} 
                className="order-2 md:order-2"
              >
                <div className="rounded-lg overflow-hidden bg-black relative">
                  <div className="relative">
                    <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative">
                      {lacasSelected === lacasGallery.length ? (
                        <OverlayVideo
                          containerClassName="w-full h-full"
                          src="https://res.cloudinary.com/djetoiflq/video/upload/v1759605739/LACAS_1_mdbnw8.mp4"
                          poster="https://res.cloudinary.com/djetoiflq/image/upload/v1759604814/3_ds7ugd.jpg"
                          posterAlt="LACAS Puppet Show video thumbnail"
                          buttonAriaLabel="Play LACAS Puppet Show video"
                        />
                      ) : (
                        // Show image
                        <>
                          <LazyImage src={lacasGallery[lacasSelected]} alt={`LACAS image ${lacasSelected+1}`} className="w-full h-full object-cover" />
                          
                          {/* Left navigation button */}
                          <button 
                            aria-label="Previous LACAS item" 
                            type="button" 
                            onClick={() => setLacasSelected((s) => (s - 1 + (lacasGallery.length + 1)) % (lacasGallery.length + 1))} 
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>

                          {/* Right navigation button */}
                          <button 
                            aria-label="Next LACAS item" 
                            type="button" 
                            onClick={() => setLacasSelected((s) => (s + 1) % (lacasGallery.length + 1))} 
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 py-2 relative">
                    <div ref={lacasStripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full min-w-full">
                      {/* Image thumbnails */}
                      {lacasGallery.map((g, i) => {
                        let marginClass = '';
                        if (i === 0) marginClass = 'mr-3';
                        else marginClass = 'mx-1.5';
                        const fixedWidth = lacasThumbWidth ?? 160;
                        return (
                          <button 
                            key={g + i} 
                            onClick={() => setLacasSelected(i)} 
                            aria-label={`Select LACAS image ${i+1}`} 
                            className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${marginClass} ${i===lacasSelected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none`} 
                            style={{ width: `${fixedWidth}px`, height: '6.5rem' }}
                          >
                            <LazyImage src={g} alt={`lacas-thumb-${i+1}`} className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                      
                      {/* Video thumbnail as last item */}
                      <button 
                        onClick={() => setLacasSelected(lacasGallery.length)} 
                        aria-label="Play LACAS video"
                        className={`rounded-md overflow-hidden flex-shrink-0 snap-start border mx-1.5 ml-3 ${lacasSelected === lacasGallery.length ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none relative`} 
                        style={{ width: `${lacasThumbWidth ?? 160}px`, height: '6.5rem' }}
                      >
                        <LazyImage src="https://res.cloudinary.com/djetoiflq/image/upload/v1759604814/3_ds7ugd.jpg" alt="video-thumb" className="w-full h-full object-cover" />
                        {/* Play icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mid City Housing Family Fest Section */}
            <motion.h3 
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.4 }} 
              transition={{ duration: 0.6 }} 
              className="mt-32 text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-8 max-w-5xl mx-auto tracking-wider uppercase"
            >
              🎡 Mid City Housing Family Fest
            </motion.h3>

            {/* Video First */}
            <div className="max-w-5xl mx-auto mb-10">
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.4 }} 
                transition={{ duration: 0.6 }} 
                className="relative"
              >
                <OverlayVideo
                  containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
                  src="https://res.cloudinary.com/djetoiflq/video/upload/v1759002209/fd9704cd-1fa9-42b2-9a92-21699c5a651a_wltcdk.mov"
                  poster="https://res.cloudinary.com/djetoiflq/image/upload/v1759606964/9_y1mlxt.jpg"
                  posterAlt="Mid City Housing Family Fest thumbnail"
                  buttonAriaLabel="Play Mid City Housing Family Fest video"
                />
              </motion.div>
            </div>

            {/* Left Description and Right Images */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
              {/* Left: Description */}
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.35 }} 
                transition={{ duration: 0.6 }} 
                className="order-1 md:order-1"
              >
                <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">OSS successfully organized the Mid City Housing Family Fest, a vibrant community event filled with entertainment, food, and family fun. The festival brought together residents and visitors for a day of laughter, music, and togetherness — celebrating the spirit of community living.</p>
                  <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                    <p className="text-lg sm:text-xl leading-relaxed mb-0">From event design and coordination to stage management and on-ground execution, OSS ensured a seamless and memorable experience for everyone.</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Image Gallery */}
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.35 }} 
                transition={{ duration: 0.6 }} 
                className="order-2 md:order-2"
              >
                <div className="rounded-lg overflow-hidden bg-black relative">
                  <div className="relative">
                    <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative">
                      <LazyImage src={midCityGallery[midCitySelected]} alt={`Mid City image ${midCitySelected+1}`} className="w-full h-full object-cover" />
                      
                      {/* Left navigation button */}
                      <button 
                        aria-label="Previous Mid City image" 
                        type="button" 
                        onClick={() => setMidCitySelected((s) => (s - 1 + midCityGallery.length) % midCityGallery.length)} 
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Right navigation button */}
                      <button 
                        aria-label="Next Mid City image" 
                        type="button" 
                        onClick={() => setMidCitySelected((s) => (s + 1) % midCityGallery.length)} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 py-2 relative">
                    <div ref={midCityStripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full min-w-full">
                      {midCityGallery.map((g, i) => {
                        let marginClass = '';
                        if (i === 0 && midCityGallery.length > 1) marginClass = 'mr-3';
                        else if (i === midCityGallery.length - 1 && midCityGallery.length > 1) marginClass = 'ml-3';
                        else if (midCityGallery.length > 1) marginClass = 'mx-1.5';
                        const fixedWidth = midCityThumbWidth ?? 160;
                        return (
                          <button 
                            key={g + i} 
                            onClick={() => setMidCitySelected(i)} 
                            aria-label={`Select Mid City image ${i+1}`} 
                            className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${marginClass} ${i===midCitySelected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none`} 
                            style={{ width: `${fixedWidth}px`, height: '6.5rem' }}
                          >
                            <LazyImage src={g} alt={`midcity-thumb-${i+1}`} className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

            {/* Featured by Discover Pakistan - moved to end */}
            <div className="mt-32 max-w-5xl mx-auto px-4 sm:px-6">
              <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-extrabold text-center mx-auto max-w-4xl mb-6 text-[#AE1D36] uppercase tracking-wider">FEATURED BY DISCOVER PAKISTAN</motion.h3>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <OverlayVideo
                  containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
                  src="https://res.cloudinary.com/djetoiflq/video/upload/v1759002936/Discover_Pakistan_pce1so.mov"
                  poster="https://res.cloudinary.com/djetoiflq/image/upload/v1759003023/disocver_pak_jfe4lj.png"
                  posterAlt="Discover Pakistan feature thumbnail"
                  buttonAriaLabel="Play Discover Pakistan feature video"
                />
              </motion.div>
            </div>
        </div>

  {/* Booking Information section */}
  <div className="pt-40 xl:pt-56">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.h2 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-[Outfit] font-bold text-center mx-auto max-w-4xl mb-6 text-red-600 uppercase tracking-wider">BOOKING INFORMATION</motion.h2>
            <p className="text-center text-[hsl(var(--muted-gray))] mb-8">OSS provides tailored options to suit your event:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 - School Trips */}
              <motion.div initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <button type="button" onClick={() => { setBookingPdf('/pdfs/OSSPT Day-Tour.pdf'); setBookingTitle('BOOK YOUR SCHOOL TRIP'); setBookingOpen(true); }} className="group text-left rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] focus:outline-none w-full">
                  <div className="relative h-64 overflow-hidden bg-black">
                    <LazyImage src="https://res.cloudinary.com/djetoiflq/image/upload/v1759006451/Screenshot_from_2025-09-28_01-53-50_geyqxt.png" alt="School Trip preview" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-[Outfit] font-extrabold text-white uppercase mb-2">🎒 School Trips</h3>
                    <p className="text-[hsl(var(--muted-gray))] text-base sm:text-lg leading-relaxed">1 day school trip with amazing entertainment segments.</p>
                  </div>
                </button>
              </motion.div>

              {/* Card 2 - Custom Puppet Show Bookings */}
              <motion.div initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <button type="button" onClick={() => { setBookingPdf('/pdfs/OSSPT Puppet Theatre.pdf'); setBookingTitle('BOOK YOUR PUPPET SHOW'); setBookingOpen(true); }} className="group text-left rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] focus:outline-none w-full">
                  <div className="relative h-64 overflow-hidden">
                    <LazyImage src="https://res.cloudinary.com/djetoiflq/image/upload/v1759006485/Screenshot_from_2025-09-28_01-54-30_kup5cv.png" alt="Puppet Show preview" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-[Outfit] font-extrabold text-white uppercase mb-2">🎭 Custom Puppet Show Bookings</h3>
                    <p className="text-[hsl(var(--muted-gray))] text-base sm:text-lg leading-relaxed">Tailored to festivals, community events, or private functions.</p>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Booking modal */}
  <Modal open={bookingOpen} onClose={() => { setBookingOpen(false); setBookingPdf(null); setBookingTitle(null); }} title={bookingTitle ?? (bookingPdf ? 'Booking PDF' : undefined)}>
          <div className="w-full">
            {bookingPdf ? (
              <div>
                {typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (
                  // Mobile: Show PDF viewer without download
                  <div className="w-full h-[70vh] bg-black rounded-md overflow-hidden">
                    <iframe 
                      src={bookingPdf + '#toolbar=0&navpanes=0'} 
                      className="w-full h-full"
                      title="Booking PDF"
                    />
                  </div>
                ) : (
                  // Desktop: Show PDF preview without download option
                  <div className="w-full h-[70vh] bg-black rounded-md overflow-hidden">
                    <object data={bookingPdf + '#toolbar=0&navpanes=0&scrollbar=1'} type="application/pdf" className="w-full h-full">
                      <iframe 
                        src={bookingPdf + '#toolbar=0&navpanes=0'} 
                        className="w-full h-full"
                        title="Booking PDF"
                      >
                        <p className="text-center text-white p-6">PDF preview not available in your browser.</p>
                      </iframe>
                    </object>
                  </div>
                )}
              </div>
            ) : (
              <p>No PDF selected.</p>
            )}
          </div>
        </Modal>

        <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[hsl(var(--muted-gray))]">{active?.long}</p>
              </div>
              <div className="rounded-md overflow-hidden bg-zinc-900">
                {active && (
                  <LazyImage src={active.image && !active.image.includes('placeholder') ? active.image : `/entertainment/entertainment-1.jpg`} alt={active.title} className="w-full h-80 object-cover rounded-md" />
                )}
              </div>
            </div>
          </div>
        </Modal>
      </main>

      <Footer />
    </>
  );
}

function HeroSlider(){
  // single full-bleed background video with overlay and branding
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
      <video
        src="https://res.cloudinary.com/djetoiflq/video/upload/v1759608287/OSSPT_PROMO_nmhbdt.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
      
      {/* Branding content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Outfit] font-extrabold mb-6 leading-tight">
            <span className="text-[#DC2626]">OSS Puppet Theatre</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-light leading-relaxed max-w-3xl mx-auto">
            Bringing Stories to Life, Inspiring Young Minds
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Through engaging puppet shows, we help students learn real-world values like <span className="text-[hsl(var(--accent))] font-semibold">teamwork</span>, <span className="text-[hsl(var(--accent))] font-semibold">creativity</span>, <span className="text-[hsl(var(--accent))] font-semibold">empathy</span>, and <span className="text-[hsl(var(--accent))] font-semibold">cultural awareness</span> — making education fun, interactive, and memorable.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
              <svg className="w-5 h-5 text-[hsl(var(--accent))]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>For Schools & Festivals</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
              <svg className="w-5 h-5 text-[hsl(var(--accent))]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span>Educational & Entertaining</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm sm:text-base">
              <svg className="w-5 h-5 text-[hsl(var(--accent))]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Memorable Experiences</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
