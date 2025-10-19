"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Modal from './Modal';
import EventGallery from './EventGallery';
import LazyImage from './LazyImage';
import OverlayVideo from './OverlayVideo';

export type Item = { id: number; title: string; image?: string; short?: string; long?: string; images?: string[] };

export default function EventsSection({ items, smallHeadings = false }: { items: Item[]; smallHeadings?: boolean }){
  // prefer local event images from /public/events and fall back to provided item images
  const localEvents = [
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964441/be13_mcco5k.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964445/be5_jxa941.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964442/be3_x44oyo.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964446/be_p5ej3w.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964441/be9_jpa53y.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964440/be11_entylz.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964440/be7_bxn4hl.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964440/be10_di01x3.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964438/be8_ijaljv.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758961687/be4_ekrgfo.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964445/be6_tq4pvk.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758964445/be2_dan5ml.png',
  ];  // use only the local event images for the right-side gallery
  const gallery = [...localEvents];

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const [thumbWidth, setThumbWidth] = useState<number | null>(null);
  const leftBtnRef = useRef<HTMLButtonElement | null>(null);
  const [leftBtnLeft, setLeftBtnLeft] = useState<number | null>(null);

  const sufiGallery = [
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972707/sm1_zvjayu.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972707/sm2_hjwlir.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972596/sm3_xurcjr.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972699/sm5_tekfxj.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972696/sm4_jmrsyt.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972693/sm7_ivq4lz.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972692/sm6_wotrhc.png',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1758972691/sm8_njcfhv.png',
  ];
  const [sufiSelected, setSufiSelected] = useState(0);
  const sufiStripRef = useRef<HTMLDivElement | null>(null);
  const [sufiThumbWidth, setSufiThumbWidth] = useState<number | null>(null);
  
  const wildlifeGallery = [
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344039/w9_mohngt.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344042/w6_f1rnrk.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344041/w3_sffb4w.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344041/w5_x856kw.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344041/w4_mcowkb.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760344040/w10_xm7hdb.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760345665/w16_1_atwkdr.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760345924/w7_1_khf6sy.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344038/w12_fbyawt.jpg',
    'https://res.cloudinary.com/djetoiflq/image/upload/v1760344040/w8_vf1q8l.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760345288/w14_1_eamfnw.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760344038/w11_ixc8ry.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760345452/w15_1_ymuaam.jpg',
  'https://res.cloudinary.com/djetoiflq/image/upload/v1760345544/w13_1_t0leij.jpg',
  ];
  const [wildlifeSelected, setWildlifeSelected] = useState(0);
  const wildlifeStripRef = useRef<HTMLDivElement | null>(null);
  const [wildlifeThumbWidth, setWildlifeThumbWidth] = useState<number | null>(null);
  
  const mountedRef = useRef(false);

  React.useEffect(() => {
    // avoid scrolling on initial mount
    if (!mountedRef.current) { mountedRef.current = true; return; }
    // ensure the selected thumbnail is visible
    const node = stripRef.current?.children[selected] as HTMLElement | undefined;
    if (node && stripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }, [selected]);

  // compute left button position so it centers over the first thumbnail
  React.useEffect(() => {
    const computeLeft = () => {
      if (!stripRef.current || !leftBtnRef.current) return setLeftBtnLeft(null);
      const parent = stripRef.current.parentElement as HTMLElement | null;
      const first = stripRef.current.children[0] as HTMLElement | undefined;
      if (!parent || !first) return setLeftBtnLeft(null);
      const parentRect = parent.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const btnRect = leftBtnRef.current.getBoundingClientRect();
      const left = (firstRect.left - parentRect.left) + (firstRect.width / 2) - (btnRect.width / 2);
      setLeftBtnLeft(Math.max(8, Math.round(left))); // ensure some min offset
    };

    computeLeft();
    window.addEventListener('resize', computeLeft);
    return () => window.removeEventListener('resize', computeLeft);
  }, [thumbWidth, gallery.length]);

  React.useEffect(() => {
    const node = sufiStripRef.current?.children[sufiSelected] as HTMLElement | undefined;
    if (node && sufiStripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }, [sufiSelected]);

  React.useEffect(() => {
    const node = wildlifeStripRef.current?.children[wildlifeSelected] as HTMLElement | undefined;
    if (node && wildlifeStripRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }, [wildlifeSelected]);

  // compute thumbnail width so an exact number of thumbnails fit the visible strip
  React.useEffect(() => {
    const gap = 12; // gap-3 => 0.75rem => 12px
    const compute = () => {
      const w = stripRef.current?.clientWidth ?? 0;
      // decide visible count by breakpoint
      const win = typeof window !== 'undefined' ? window.innerWidth : 0;
      let visibleCount = 3; // default small screens
      if (win >= 1024) visibleCount = 5; // large screens
      else if (win >= 768) visibleCount = 4; // md screens

      if (w > 0 && visibleCount > 0) {
        const totalGaps = gap * (visibleCount - 1);
        const tw = Math.floor((w - totalGaps) / visibleCount);
        setThumbWidth(tw);
      }
      // compute for sufi strip as well
      const sw = sufiStripRef.current?.clientWidth ?? 0;
      if (sw > 0 && visibleCount > 0) {
        const totalGaps2 = gap * (visibleCount - 1);
        const stw = Math.floor((sw - totalGaps2) / visibleCount);
        setSufiThumbWidth(stw);
      }
      // compute for wildlife strip as well
      const ww = wildlifeStripRef.current?.clientWidth ?? 0;
      if (ww > 0 && visibleCount > 0) {
        const totalGaps3 = gap * (visibleCount - 1);
        const wtw = Math.floor((ww - totalGaps3) / visibleCount);
        setWildlifeThumbWidth(wtw);
      }
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const prev = () => setSelected((s) => (s - 1 + gallery.length) % gallery.length);
  const next = () => setSelected((s) => (s + 1) % gallery.length);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <section id="events" className="py-12 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline text-center mx-auto max-w-4xl font-[Playfair]">
          <span className="gradient-text events-headline">EVENTS</span>
        </motion.h2>

        {/* Embedded YouTube video below heading */}
        <div className="mt-8">
          <div className="max-w-5xl mx-auto">
            <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-4 max-w-5xl tracking-wider uppercase">WELCOME DINNER @ BRITISH HIGH COMMISSION</motion.h3>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <OverlayVideo
                containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
                src="https://res.cloudinary.com/djetoiflq/video/upload/v1758960981/British_High_Commission_-_Nov_2024_ze5iou.mp4"
                poster="https://res.cloudinary.com/djetoiflq/image/upload/v1758961687/be4_ekrgfo.png"
                posterAlt="British High Commission corporate dinner thumbnail"
                buttonAriaLabel="Play British High Commission corporate dinner video"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: only description (keeps additional context if needed) */}
          <motion.div initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="order-1 md:order-1">
            <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
              <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Immersive, Impactful, Flawless</p>
              <p className="text-lg sm:text-xl leading-relaxed mb-4">The British High Commission recently served as the distinguished venue for an exclusive corporate dinner, masterfully curated and executed by OSS. The event embodied sophistication and refinement, bringing together high-profile dignitaries and esteemed guests in an atmosphere that blended cultural elegance with professional excellence. Every element, from the meticulously designed ambiance to the flawless flow of the evening, reflected OSS’s unparalleled expertise in orchestrating world-class gatherings.</p>
              <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                <p className="text-lg sm:text-xl leading-relaxed mb-0">This prestigious occasion was not merely a dinner but a testament to OSS’s ability to deliver experiences of international standards, where precision, attention to detail, and seamless coordination stood at the forefront. By successfully managing such a high-caliber event within a globally recognized diplomatic setting, OSS once again reinforced its reputation as a premier name in the industry, demonstrating our commitment to excellence and our capability to elevate corporate engagements into truly memorable milestones.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: image gallery */}
          <motion.div initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="order-2 md:order-2 min-w-0">
            <div className="rounded-lg bg-black relative min-w-0">
              <div className="relative">
                {/* Main gallery image with navigation buttons overlaid */}
                <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative overflow-hidden rounded-lg">
                  <LazyImage src={gallery[selected]} alt={`Event image ${selected+1}`} className="w-full h-full object-cover" />
                  
                  {/* Left navigation button on main image */}
                  <button aria-label="Previous image" type="button" onClick={prev} className="absolute top-1/2 -translate-y-1/2 z-20 left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AE1D36] backdrop-blur-md hover:bg-[#8B1729] hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Right navigation button on main image */}
                  <button aria-label="Next image" type="button" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AE1D36] backdrop-blur-md hover:bg-[#8B1729] hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-3 py-2 relative overflow-hidden">
                <div ref={stripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full gap-3 px-0 min-w-0">
                  {gallery.map((g, i) => {
                      const fixedWidth = thumbWidth ?? 160;
                      return (
                        <button key={g + i} onClick={() => setSelected(i)} aria-label={`Select image ${i+1}`} className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${i===selected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none h-16 sm:h-20 md:h-24`} style={{ width: `${fixedWidth}px`, minWidth: `${fixedWidth}px`, maxWidth: `${fixedWidth}px` }}>
                          <LazyImage src={g} alt={`thumb-${i+1}`} className="w-full h-full object-cover" />
                        </button>
                      );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

  {/* Below gallery: show 3 event cards */}

  <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-48 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-8 max-w-5xl mx-auto tracking-wider uppercase">REVIVAL OF THE SUFI MUSIC</motion.h3>
  <motion.p initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="text-center text-sm sm:text-base text-[hsl(var(--muted-gray))] mb-2 max-w-3xl mx-auto">A collaboration between OSS and Walled City Lahore Authority</motion.p>
  <motion.p initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="text-center text-sm sm:text-base text-[hsl(var(--muted-gray))] mb-6 max-w-3xl mx-auto">Masjid Wazir Khan over 400 years old venue</motion.p>
  <div className="mt-8">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <OverlayVideo
          containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
          src="https://res.cloudinary.com/djetoiflq/video/upload/v1758972598/sn-promo2_rumaqa.mp4"
          poster="https://res.cloudinary.com/djetoiflq/image/upload/v1758972707/sm1_zvjayu.png"
          posterAlt="Sufi Night promo thumbnail"
          buttonAriaLabel="Play Sufi Night promo video"
        />
      </motion.div>
    </div>
  </div>

  {/* Sufi left/right panels (placed under the Sufi video) */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    {/* Left: textual description for Sufi Night */}
    <div className="order-1 md:order-1">
      <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
        <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Immersive, Spiritual, Timeless</p>
        <p className="text-lg sm:text-xl leading-relaxed mb-4">OSS had the distinct honor of hosting and arranging a mesmerizing Sufi Night at the historic Chowk Masjid Wazir Khan, an event that beautifully blended spiritual heritage with cultural grandeur. Against the breathtaking backdrop of centuries-old Mughal architecture, the evening unfolded as a soulful journey, where the mysticism of Sufi traditions was brought to life through captivating performances and an ambiance that radiated serenity and reverence.</p>
        <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
          <p className="text-lg sm:text-xl leading-relaxed mb-0">The gathering stood as a true celebration of Pakistan’s rich cultural tapestry, thoughtfully curated by OSS with seamless precision and elegance. From the immersive atmosphere to the flawless event flow, every detail reflected OSS’s commitment to excellence and its unique ability to elevate traditional experiences into unforgettable moments of collective harmony. The Sufi Night not only honored the timeless legacy of Wazir Khan Mosque but also reaffirmed OSS’s reputation as a pioneer in crafting events that inspire, connect, and leave a lasting imprint.</p>
        </div>
      </div>
    </div>

    {/* Right: image panel with main image + thumbnail strip */}
    <div className="order-2 md:order-2 min-w-0">
      <div className="rounded-lg bg-black relative">
        <div className="relative">
          <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative overflow-hidden rounded-lg">
            <LazyImage src={sufiGallery[sufiSelected]} alt={`Sufi image ${sufiSelected+1}`} className="w-full h-full object-cover" />
            
            {/* Left navigation button on main image */}
            <button aria-label="Previous Sufi image" type="button" onClick={() => setSufiSelected((s) => (s - 1 + sufiGallery.length) % sufiGallery.length)} className="absolute top-1/2 -translate-y-1/2 z-20 left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AE1D36] backdrop-blur-md hover:bg-[#8B1729] hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Right navigation button on main image */}
            <button aria-label="Next Sufi image" type="button" onClick={() => setSufiSelected((s) => (s + 1) % sufiGallery.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AE1D36] backdrop-blur-md hover:bg-[#8B1729] hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-3 py-2 relative overflow-hidden">
          <div ref={sufiStripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full gap-3 px-0 min-w-0">
            {sufiGallery.map((g, i) => {
              const sfFixedWidth = sufiThumbWidth ?? 160;
              return (
                <button key={g + i} onClick={() => setSufiSelected(i)} aria-label={`Select sufi image ${i+1}`} className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${i===sufiSelected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none h-16 sm:h-20 md:h-24`} style={{ width: `${sfFixedWidth}px`, minWidth: `${sfFixedWidth}px`, maxWidth: `${sfFixedWidth}px` }}>
                  <LazyImage src={g} alt={`sufi-thumb-${i+1}`} className="w-full h-full object-cover" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>

      {/* Exclusive HUM TV coverage block (moved above cards) */}
      <div className="mt-12 max-w-5xl mx-auto px-4 sm:px-6">
  <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-6 tracking-wider uppercase">EXCLUSIVE COVERAGE BY HUM NEWS</motion.h3>
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <OverlayVideo
            containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
            src="https://res.cloudinary.com/djetoiflq/video/upload/v1758990823/sufi-night-humtv-coverage_ioexrw.mp4"
            poster="https://res.cloudinary.com/djetoiflq/image/upload/v1758990897/Screenshot_from_2025-09-27_21-34-24_sjg35n.png"
            posterAlt="HUM News exclusive coverage thumbnail"
            buttonAriaLabel="Play HUM News exclusive coverage video"
          />
        </motion.div>
      </div>

      {/* BHC Wildlife World's Exhibition 2025 */}
      <div className="mt-12 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-6 tracking-wider uppercase">BHC Wild Life World's Exhibition 2025 – Media Coverage</motion.h3>
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <OverlayVideo
            containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
            src="https://res.cloudinary.com/djetoiflq/video/upload/v1760344049/BHC_CITY_42_valuis.mov"
            poster="https://res.cloudinary.com/djetoiflq/image/upload/v1760345007/w1_1_rgq2oq.jpg"
            posterAlt="BHC Wildlife Exhibition 2025 Media Coverage thumbnail"
            buttonAriaLabel="Play BHC Wildlife Exhibition 2025 Media Coverage video"
          />
        </motion.div>

        {/* Wildlife Gallery */}
        <div className="mt-10">
          <div className="rounded-lg bg-black relative">
            <div className="relative">
              <div className="w-full h-64 sm:h-[420px] md:h-[520px] block relative min-w-0 overflow-hidden rounded-lg">
                <LazyImage src={wildlifeGallery[wildlifeSelected]} alt={`Wildlife image ${wildlifeSelected+1}`} className="w-full h-full object-cover" />
                
                {/* Left navigation button */}
                <button aria-label="Previous wildlife image" type="button" onClick={() => setWildlifeSelected((s) => (s - 1 + wildlifeGallery.length) % wildlifeGallery.length)} className="absolute top-1/2 -translate-y-1/2 z-20 left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AE1D36] backdrop-blur-md hover:bg-[#8B1729] hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Right navigation button */}
                <button aria-label="Next wildlife image" type="button" onClick={() => setWildlifeSelected((s) => (s + 1) % wildlifeGallery.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AE1D36] backdrop-blur-md hover:bg-[#8B1729] hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-white ring-0 focus:outline-none focus:ring-2 focus:ring-white/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-3 py-2 relative overflow-hidden">
              <div ref={wildlifeStripRef} className="flex overflow-x-auto no-scrollbar py-1 snap-x snap-mandatory bg-black rounded-none mx-0 w-full gap-3 px-0 min-w-0">
                {wildlifeGallery.map((g, i) => {
                  const wfFixedWidth = wildlifeThumbWidth ?? 160;
                  return (
                    <button key={g + i} onClick={() => setWildlifeSelected(i)} aria-label={`Select wildlife image ${i+1}`} className={`rounded-md overflow-hidden flex-shrink-0 snap-start border ${i===wildlifeSelected ? 'ring-2 ring-[hsl(var(--accent))]' : 'border-[hsl(var(--border))]'} focus:outline-none h-16 sm:h-20 md:h-24`} style={{ width: `${wfFixedWidth}px`, minWidth: `${wfFixedWidth}px`, maxWidth: `${wfFixedWidth}px` }}>
                      <LazyImage src={g} alt={`wildlife-thumb-${i+1}`} className="w-full h-full object-cover" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Faletti's Grand Gulberg Launching Ceremony */}
  <div className="mt-12 max-w-5xl mx-auto px-4 sm:px-6">
    <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-6 tracking-wider uppercase">FALETTI'S GRAND GULBERG LAUNCHING CEREMONY</motion.h3>
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <OverlayVideo
        containerClassName="w-full aspect-video rounded-xl overflow-hidden shadow-lg min-h-[200px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]"
        src="https://res.cloudinary.com/djetoiflq/video/upload/v1760367228/Faletti_s_Grand_Gulberg_Launching_hxi8tn.mp4"
        poster="https://res.cloudinary.com/djetoiflq/image/upload/v1760367989/flc_1_dsbrlv.jpg"
        posterAlt="Faletti's Grand Gulberg Launching Ceremony thumbnail"
        buttonAriaLabel="Play Faletti's Grand Gulberg Launching Ceremony video"
      />
    </motion.div>
  </div>

  <div className="mt-10"></div>
  <motion.h3 initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="mt-32 text-2xl sm:text-3xl md:text-4xl font-[Outfit] font-extrabold text-center text-[#AE1D36] mb-6 tracking-wider uppercase">EXPLORE MORE EVENTS</motion.h3>
  <div className="mt-6" />
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {items.map((it, idx) => {
            const cover = (it.images && it.images.length > 0) ? it.images[0] : (it.image || '/placeholder.svg');
            return (
              <article key={it.id} role="button" tabIndex={0} onClick={() => { setSelected(idx); setOpen(true); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setSelected(idx); setOpen(true); } }} className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-all duration-200 cursor-pointer my-0">
                <div className="relative h-60 overflow-hidden rounded-t-2xl">
                  <LazyImage src={cover} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h4 className={smallHeadings ? "text-base text-white font-extrabold mb-1 drop-shadow font-[Outfit]" : "text-2xl text-white font-extrabold mb-1 drop-shadow font-[Outfit]"}>{it.title}</h4>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/services/events" aria-label="See more EVENTS" className="btn bg-[hsl(var(--accent))] text-white px-6 py-2 rounded-full transform transition-transform duration-200 hover:scale-105 shadow-lg hover:shadow-[0_12px_30px_rgba(183,28,45,0.18)] focus:outline-none focus:ring-4 focus:ring-[rgba(183,28,45,0.12)]">See more</Link>
        </div>
      </div>

      {/* HUM TV block removed (kept only above the cards) */}

        <Modal open={open} onClose={() => setOpen(false)} title={items[selected] ? items[selected].title : ''}>
          <div>
            <div className="flex flex-col gap-6">
              <div>{items[selected] && <p className="text-[hsl(var(--muted-gray))]">{items[selected].long || (items[selected] as any).description || items[selected].short}</p>}</div>

              <div>
                {items[selected] && (items[selected].images && items[selected].images.length > 0) ? (
                  <EventGallery images={items[selected].images} large={true} />
                ) : (
                  items[selected] && items[selected].image ? (
                    <div className="rounded-md overflow-hidden bg-zinc-900">
                      <LazyImage src={items[selected].image} alt={items[selected].title} className="w-full h-80 object-cover rounded-md" />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </Modal>
      </section>
    </>
  );
}