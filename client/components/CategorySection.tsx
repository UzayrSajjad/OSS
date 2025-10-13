"use client";

import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Modal from './Modal';
import LazyImage from './LazyImage';
import OverlayVideo from './OverlayVideo';

export type Item = { id: number; title: string; image: string; short: string; long: string };

export default function CategorySection({ title, items, isLanding = false, sectionId }: { title: string; items: Item[]; isLanding?: boolean; sectionId?: string }){
  // choose local gallery based on the section title
  const localPuppet = [
    '/puppet-show/puppet-4.jpg',
    '/puppet-show/puppet-6.jpg',
    '/puppet-show/puppet-1.jpg',
    '/puppet-show/puppet-2.jpg',
    '/puppet-show/puppet-3.jpg',
    '/puppet-show/puppet-5.jpg',
  ];

  const localMarketing = [
    '/marketing/marketing-6.jpg',
    '/marketing/marketing-1.jpg',
    '/marketing/marketing-2.jpg',
    '/marketing/marketing-3.jpg',
    '/marketing/marketing-4.jpg',
    '/marketing/marketing-5.jpg',
  ];

  const gallery = title === 'OSS Puppet Theatre' ? localPuppet : title === 'Marketing' ? localMarketing : items.map(i => i.image);

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Item | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [thumbWidth, setThumbWidth] = useState<number | null>(null);

  const onOpen = (it: Item) => { setActive(it); setOpen(true); };

  const prev = () => setSelected((s) => (s - 1 + gallery.length) % gallery.length);
  const next = () => setSelected((s) => (s + 1) % gallery.length);

  const mountedRef = useRef(false);

  React.useEffect(() => {
    if (!mountedRef.current) { mountedRef.current = true; return; }
    const node = stripRef.current?.children[selected] as HTMLElement | undefined;
    if (node && stripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selected]);

  // compute thumbnail width so an exact number fit
  React.useEffect(() => {
    const gap = 12;
    const compute = () => {
      const w = stripRef.current?.clientWidth ?? 0;
      const win = typeof window !== 'undefined' ? window.innerWidth : 0;
      let visibleCount = 3;
      if (win >= 1024) visibleCount = 5;
      else if (win >= 768) visibleCount = 4;
      if (w > 0 && visibleCount > 0) {
        const totalGaps = gap * (visibleCount - 1);
        const tw = Math.floor((w - totalGaps) / visibleCount);
        setThumbWidth(tw);
      }
      // compute for LACAS strip as well
      const lw = lacasStripRef.current?.clientWidth ?? 0;
      if (lw > 0 && visibleCount > 0) {
        const totalGaps3 = gap * (visibleCount - 1);
        const ltw = Math.floor((lw - totalGaps3) / visibleCount);
        setLacasThumbWidth(ltw);
      }
      // compute for Mid City strip as well
      const mw = midCityStripRef.current?.clientWidth ?? 0;
      if (mw > 0 && visibleCount > 0) {
        const totalGaps4 = gap * (visibleCount - 1);
        const mtw = Math.floor((mw - totalGaps4) / visibleCount);
        setMidCityThumbWidth(mtw);
      }
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const description = title === 'OSS Puppet Theatre' ?
    'OSS Puppet Theatre presents richly staged, narrative-led productions that blend cinematic lighting, bespoke puppet design, live scoring and immersive staging. Our work spans intimate family shows to large-scale outdoor spectacles — each production is tailored with dramaturgy, original music and audience interaction in mind. We collaborate with writers, composers, scenic artists and technical crews to craft memorable moments that move audiences emotionally, foster community participation through workshops and outreach, and scale for touring or one-off festival activations. Safety, accessibility and theatrical craft are central to our process, and we consult closely with clients to align story, branding and logistics for every performance.' :
    title === 'Marketing' ?
    'We deliver integrated marketing campaigns that combine strategic brand positioning, creative storytelling and measurable activation across digital and physical channels. From audience research and creative concepting to content production, influencer partnerships, paid media, experiential activations and CRM-driven retention, our approach is full-funnel and results-focused. Campaigns are designed to amplify launches, cultivate long-term loyalty and deliver clear KPIs — reach, engagement, conversion and ROI — with ongoing optimization powered by analytics and A/B testing. We also provide cross-market coordination for regional and global rollouts, ensuring consistent brand narrative while adapting to local audiences.' :
    '';

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headingInitial = prefersReducedMotion ? 'visible' : 'hidden';
  const contentInitial = prefersReducedMotion ? 'visible' : 'hidden';

  // determine which element will be visually left on md+ (OSS flips order)
  const imageIsLeft = title === 'OSS Puppet Theatre';


  // LACAS Puppet Show Gallery
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
  const [lacasModalOpen, setLacasModalOpen] = useState(false);
  const [lacasModalType, setLacasModalType] = useState<'video' | 'image'>('image');

  React.useEffect(() => {
    const node = lacasStripRef.current?.children[lacasSelected] as HTMLElement | undefined;
    if (node && lacasStripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [lacasSelected]);

  // Mid City Housing Family Fest Gallery
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
  const [midCityModalOpen, setMidCityModalOpen] = useState(false);

  React.useEffect(() => {
    const node = midCityStripRef.current?.children[midCitySelected] as HTMLElement | undefined;
    if (node && midCityStripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [midCitySelected]);

  return (
    <section id={sectionId} className="py-12 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 variants={headingVariants} initial={headingInitial} whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold brand-headline text-center mx-auto max-w-4xl ${title === 'OSS Puppet Theatre' ? 'mb-14' : ''}`}>
          <span className="gradient-text events-headline">{title}</span>
        </motion.h2>

        {/* If on the landing page and this is the Puppet section, show a single video player like other videos */}
        {title === 'OSS Puppet Theatre' && isLanding ? (
          <div className="mt-8">
            <div className="prose max-w-none text-[hsl(var(--muted-gray))] mx-auto mb-6">
              {/* Intro paragraph removed per request */}
            </div>
            <motion.h3 
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.4 }} 
              transition={{ duration: 0.6 }} 
              className="mt-16 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-6 max-w-5xl mx-auto tracking-wider uppercase"
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
                poster="https://res.cloudinary.com/djetoiflq/image/upload/v1759606959/2_yqcwsm.jpg"
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
              className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-8 max-w-5xl mx-auto tracking-wider uppercase"
            >
              🎭 Puppet Show at LACAS
            </motion.h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
              {/* Left: Video with autoplay, loop, mute */}
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.35 }} 
                transition={{ duration: 0.6 }} 
                className="order-1 md:order-1"
              >
                <div 
                  className="rounded-lg bg-black relative cursor-pointer group"
                  onClick={() => {
                    setLacasModalType('video');
                    setLacasModalOpen(true);
                  }}
                >
                  <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative overflow-hidden rounded-lg">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      src="https://res.cloudinary.com/djetoiflq/video/upload/v1759605739/LACAS_1_mdbnw8.mp4"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>

              {/* Right: Image Gallery */}
              <motion.div 
                initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.35 }} 
                transition={{ duration: 0.6 }} 
                className="order-2 md:order-2 min-w-0"
              >
                <div className="rounded-lg bg-black relative">
                  <div className="relative">
                    <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative overflow-hidden rounded-lg">
                      <div 
                        className="w-full h-full cursor-pointer group"
                        onClick={() => {
                          setLacasModalType('image');
                          setLacasModalOpen(true);
                        }}
                      >
                        <LazyImage 
                          src={lacasGallery[lacasSelected]} 
                          alt={`LACAS image ${lacasSelected+1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                      </div>
                    
                      {/* Left navigation button */}
                      <button 
                        aria-label="Previous LACAS image" 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); setLacasSelected((s) => (s - 1 + lacasGallery.length) % lacasGallery.length); }} 
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Right navigation button */}
                      <button 
                        aria-label="Next LACAS image" 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); setLacasSelected((s) => (s + 1) % lacasGallery.length); }} 
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 py-2 relative">
                    <div ref={lacasStripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full gap-3 px-0">
                      {/* Image thumbnails only */}
                      {lacasGallery.map((g, i) => {
                        const fixedWidth = lacasThumbWidth ?? 160;
                        return (
                          <button 
                            key={g + i} 
                            onClick={() => setLacasSelected(i)} 
                            aria-label={`Select LACAS image ${i+1}`} 
                            className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${i===lacasSelected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none h-16 sm:h-20 md:h-24`} 
                            style={{ width: `${fixedWidth}px` }}
                          >
                            <LazyImage src={g} alt={`lacas-thumb-${i+1}`} className="w-full h-full object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* LACAS Modal */}
            <Modal 
              open={lacasModalOpen} 
              onClose={() => setLacasModalOpen(false)}
              title="🎭 Puppet Show at LACAS"
            >
              {lacasModalType === 'video' ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls
                  className="w-full rounded-lg"
                  src="https://res.cloudinary.com/djetoiflq/video/upload/v1759605739/LACAS_1_mdbnw8.mp4"
                />
              ) : (
                <div className="relative">
                  <LazyImage 
                    src={lacasGallery[lacasSelected]} 
                    alt={`LACAS image ${lacasSelected+1}`} 
                    className="w-full rounded-lg" 
                  />
                  
                  {/* Modal Navigation Buttons */}
                  <button 
                    aria-label="Previous image" 
                    type="button" 
                    onClick={() => setLacasSelected((s) => (s - 1 + lacasGallery.length) % lacasGallery.length)} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button 
                    aria-label="Next image" 
                    type="button" 
                    onClick={() => setLacasSelected((s) => (s + 1) % lacasGallery.length)} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm sm:text-base">
                    {lacasSelected + 1} / {lacasGallery.length}
                  </div>
                </div>
              )}
            </Modal>

            <div>
              {/* Mid City Housing Family Fest Section */}
              <motion.h3 
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.4 }} 
                transition={{ duration: 0.6 }} 
                className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-12 max-w-5xl mx-auto tracking-wider uppercase"
              >
                🎡 Mid City Housing Family Fest
              </motion.h3>

              {/* Centralized Video */}
              <div className="max-w-5xl mx-auto">
                <OverlayVideo
                  containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
                  src="https://res.cloudinary.com/djetoiflq/video/upload/v1759002209/fd9704cd-1fa9-42b2-9a92-21699c5a651a_wltcdk.mov"
                  poster="https://res.cloudinary.com/djetoiflq/image/upload/v1759606964/9_y1mlxt.jpg"
                  posterAlt="Mid City Housing Family Fest thumbnail"
                  buttonAriaLabel="Play Mid City Housing Family Fest video"
                />
              </div>

              {/* Image Gallery with Navigation */}
              <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">
                <div className="rounded-lg bg-black relative">
                  <div className="relative">
                    <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative min-w-0 overflow-hidden rounded-lg">
                        <div 
                          className="w-full h-full cursor-pointer group"
                          onClick={() => {
                            setMidCityModalOpen(true);
                          }}
                        >
                          <LazyImage 
                            src={midCityGallery[midCitySelected]} 
                            alt={`Mid City image ${midCitySelected+1}`} 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                        </div>
                      
                        {/* Left navigation button */}
                        <button 
                          aria-label="Previous Mid City image" 
                          type="button" 
                          onClick={(e) => { e.stopPropagation(); setMidCitySelected((s) => (s - 1 + midCityGallery.length) % midCityGallery.length); }} 
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
                          onClick={(e) => { e.stopPropagation(); setMidCitySelected((s) => (s + 1) % midCityGallery.length); }} 
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 py-2 relative">
                      <div ref={midCityStripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full gap-3 px-0">
                        {/* Image thumbnails */}
                        {midCityGallery.map((g, i) => {
                          const fixedWidth = midCityThumbWidth ?? 160;
                          return (
                            <button 
                              key={g + i} 
                              onClick={() => setMidCitySelected(i)} 
                              aria-label={`Select Mid City image ${i+1}`} 
                              className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${i===midCitySelected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none h-16 sm:h-20 md:h-24`} 
                              style={{ width: `${fixedWidth}px` }}
                            >
                              <LazyImage src={g} alt={`midcity-thumb-${i+1}`} className="w-full h-full object-cover" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mid City Modal */}
              <Modal 
                open={midCityModalOpen} 
                onClose={() => setMidCityModalOpen(false)}
                title="🎡 Mid City Housing Family Fest"
              >
                <div className="relative">
                  <LazyImage 
                    src={midCityGallery[midCitySelected]} 
                    alt={`Mid City image ${midCitySelected+1}`} 
                    className="w-full rounded-lg" 
                  />
                  
                  {/* Modal Navigation Buttons */}
                  <button 
                    aria-label="Previous image" 
                    type="button" 
                    onClick={() => setMidCitySelected((s) => (s - 1 + midCityGallery.length) % midCityGallery.length)} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button 
                    aria-label="Next image" 
                    type="button" 
                    onClick={() => setMidCitySelected((s) => (s + 1) % midCityGallery.length)} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/50 backdrop-blur-md hover:bg-black/70 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm sm:text-base">
                    {midCitySelected + 1} / {midCityGallery.length}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        ) : title === 'Marketing' ? (
          <div className="mt-10">
            {/* Main Heading */}
            <motion.h3 
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.4 }} 
              transition={{ duration: 0.6 }} 
              className="text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-8 max-w-5xl mx-auto tracking-wider uppercase"
            >
              360 Degree Solutions and Services by OSS @ Solar Exhibition 2025 Expo Center Lahore
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
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
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
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* description column */}
            <motion.div variants={imageIsLeft ? rightVariants : leftVariants} initial={contentInitial} whileInView="visible" viewport={{ once: true, amount: 0.25 }} className={`${title === 'OSS Puppet Theatre' ? 'order-2 md:order-2' : 'order-1 md:order-1'}`}>
              <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                {title === 'OSS Puppet Theatre' ? (
                  <>
                    <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Puppet theatre & live productions</p>
                    <p className="text-lg sm:text-xl leading-relaxed mb-4">OSS Puppet Theatre presents richly staged, narrative-led productions that blend cinematic lighting, bespoke puppet design, live scoring and immersive staging. Our work spans intimate family shows to large-scale outdoor spectacles — each production is tailored with dramaturgy, original music and audience interaction in mind.</p>
                    <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                      <p className="text-lg sm:text-xl leading-relaxed mb-0">We collaborate with writers, composers, scenic artists and technical crews to craft memorable moments that move audiences emotionally, foster community participation through workshops and outreach, and scale for touring or one-off festival activations. Safety, accessibility and theatrical craft are central to our process, and we consult closely with clients to align story, branding and logistics for every performance.</p>
                    </div>
                  </>
                ) : (
                  <p>{description}</p>
                )}
              </div>
            </motion.div>

            {/* image/gallery column */}
            <motion.div variants={imageIsLeft ? leftVariants : rightVariants} initial={contentInitial} whileInView="visible" viewport={{ once: true, amount: 0.25 }} className={`${title === 'OSS Puppet Theatre' ? 'order-1 md:order-1' : 'order-2 md:order-2'}`}>
              <div className="rounded-lg overflow-hidden bg-black relative">
                <div className="relative">
                  {/* Main gallery image with navigation buttons overlaid */}
                  <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative">
                    <LazyImage 
                      src={gallery[selected]} 
                      alt={`${title} image ${selected+1}`} 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Left navigation button on main image */}
                    <button aria-label="Previous image" type="button" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Right navigation button on main image */}
                    <button aria-label="Next image" type="button" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-3 py-2 relative">
                  <div ref={stripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full min-w-full">
                    {gallery.map((g, i) => {
                      let marginClass = '';
                      if (i === 0 && gallery.length > 1) marginClass = 'mr-3';
                      else if (i === gallery.length - 1 && gallery.length > 1) marginClass = 'ml-3';
                      else if (gallery.length > 1) marginClass = 'mx-1.5';
                      return (
                        <button key={g + i} onClick={() => setSelected(i)} aria-label={`Select image ${i+1}`} className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${marginClass} ${i===selected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none h-16 sm:h-20 md:h-24`} style={thumbWidth ? { minWidth: `${thumbWidth}px` } : {}}>
                          <LazyImage src={g} alt={`thumb-${i+1}`} className="w-full h-full object-cover" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {title === 'OSS Puppet Theatre' && isLanding ? (
          <>
            <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6">
              <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center mx-auto max-w-4xl mb-6 text-[#AE1D36] uppercase tracking-wider">FEATURED BY DISCOVER PAKISTAN</motion.h3>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
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

            {/* Historical Days City Tour with TDCP */}
            <div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6">
              <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center mx-auto max-w-4xl mb-6 text-[#AE1D36] uppercase tracking-wider">Historical Days City Tour with TDCP</motion.h3>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <OverlayVideo
                  containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
                  src="https://res.cloudinary.com/djetoiflq/video/upload/v1760374516/Bus-Tour_gkku0l.mp4"
                  poster="https://res.cloudinary.com/djetoiflq/image/upload/v1760374611/bus-tour-thumbnail_kjfanz.png"
                  posterAlt="Historical Days City Tour with TDCP thumbnail"
                  buttonAriaLabel="Play Historical Days City Tour with TDCP video"
                />
              </motion.div>
            </div>
          </>
        ) : title === 'Marketing' ? (
          null
        ) : (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(typeof window === 'undefined' || window.location.pathname === '/')
            ? (title === 'Events n Entertainment'
                ? items.filter((_, idx) => idx < 3).map((it, idx) => {
                    const isPlaceholder = !it.image || it.image.includes('placeholder');
                    const cover = isPlaceholder ? gallery[idx % gallery.length] : it.image;
                    return (
                      <article key={it.id} role="button" tabIndex={0} onClick={() => { setSelected(idx); onOpen(it); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelected(idx); onOpen(it); } }} className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_12px_40px_rgba(183,28,45,0.25)] hover:-translate-y-2 transition-all duration-200 cursor-pointer my-6">
                        <div className="relative h-60 overflow-hidden rounded-t-2xl">
                          <LazyImage src={cover} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <h4 className="text-2xl text-white font-extrabold mb-1 truncate drop-shadow font-[Outfit]">{it.title}</h4>
                          </div>
                        </div>
                      </article>
                    );
                  })
                : items.slice(0, 3).map((it, idx) => {
                    const isPlaceholder = !it.image || it.image.includes('placeholder');
                    const cover = isPlaceholder ? gallery[idx % gallery.length] : it.image;
                    return (
                      <article key={it.id} role="button" tabIndex={0} onClick={() => { setSelected(idx); onOpen(it); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelected(idx); onOpen(it); } }} className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_12px_40px_rgba(183,28,45,0.25)] hover:-translate-y-2 transition-all duration-200 cursor-pointer my-6">
                        <div className="relative h-60 overflow-hidden rounded-t-2xl">
                          <LazyImage src={cover} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                            <h4 className="text-2xl text-white font-extrabold mb-1 truncate drop-shadow font-[Outfit]">{it.title}</h4>
                          </div>
                        </div>
                      </article>
                    );
                  })
              )
            : items.map((it, idx) => {
                const isPlaceholder = !it.image || it.image.includes('placeholder');
                const cover = isPlaceholder ? gallery[idx % gallery.length] : it.image;
                return (
                  <article key={it.id} role="button" tabIndex={0} onClick={() => { setSelected(idx); onOpen(it); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelected(idx); onOpen(it); } }} className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_12px_40px_rgba(183,28,45,0.25)] hover:-translate-y-2 transition-all duration-200 cursor-pointer my-6">
                    <div className="relative h-60 overflow-hidden rounded-t-2xl">
                      <LazyImage src={cover} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h4 className="text-2xl text-white font-extrabold mb-1 truncate drop-shadow font-[Outfit]">{it.title}</h4>
                    <p className="text-base text-white/90 leading-relaxed line-clamp-3 font-medium">{it.short}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        )}

  <div className="mt-12 flex justify-center">
          {/* map friendly slug: OSS Puppet Theatre -> oss-puppet-theatre */}
            <Link href={`/services/${title === 'OSS Puppet Theatre' ? 'oss-puppet-theatre' : title.toLowerCase()}`} aria-label={`See more ${title}`} className="btn bg-[hsl(var(--accent))] text-white px-6 py-2 rounded-full transform transition-transform duration-200 hover:scale-105 shadow-lg hover:shadow-[0_12px_30px_rgba(183,28,45,0.18)] focus:outline-none focus:ring-4 focus:ring-[rgba(183,28,45,0.12)]">See more</Link>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        {/* Left: description; Right: image */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[hsl(var(--muted-gray))]">{active?.long}</p>
            </div>
            <div className="rounded-md overflow-hidden bg-zinc-900">
              {active && (
                <LazyImage
                  src={(!active.image || active.image.includes('placeholder'))
                    ? gallery[items.findIndex(i => i.id === active.id) % gallery.length]
                    : active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
