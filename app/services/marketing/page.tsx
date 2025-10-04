"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../../client/components/Navbar';
import Footer from '../../../client/components/Footer';
import Modal from '../../../client/components/Modal';
import { marketing } from '../../../client/data/services';

export default function MarketingPage(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<any>(null);
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Control animation start after a short delay so page content is visible immediately
  const [shouldAnimate, setShouldAnimate] = useState(prefersReducedMotion ? true : false);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setTimeout(() => setShouldAnimate(true), 300);
    return () => clearTimeout(t);
  }, [prefersReducedMotion]);

  const headingVariants = {
    initial: { opacity: 1, y: 12 }, // visible immediately but slightly offset
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

      <main className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12 overflow-x-hidden w-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline text-center mx-auto max-w-4xl font-[Playfair]"
            variants={headingVariants}
            initial="initial"
            animate={shouldAnimate ? 'enter' : 'initial'}
          >
            <span className="gradient-text font-[Playfair]">Marketing</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-center text-[hsl(var(--muted-gray))]"
            initial={{ opacity: 1, y: 8 }}
            animate={shouldAnimate ? { opacity: 1, y: 0, transition: { duration: 0.5 } } : { opacity: 1, y: 8 }}
          >
            Integrated campaigns and activations that move audiences.
          </motion.p>

          <div className="mt-10 space-y-12">
            {marketing.slice(0,2).map((it, idx) => (
              <div
                key={it.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start ${idx === 0 ? 'mb-24' : ''} ${idx === 1 ? 'mb-20' : ''}`}
              >
                {/* For the second section, image left and description right */}
                {idx === 1 ? (
                  <>
                    {/* Image left */}
                    <motion.div className="order-1 md:order-1"
                      variants={leftVariants}
                      initial="initial"
                      animate={shouldAnimate ? 'enter' : 'initial'}
                    >
                      <div className="rounded-lg overflow-hidden bg-black relative">
                        {/* Main image should not open modal on click */}
                        <div className="w-full h-64 sm:h-[420px] md:h-[520px] block">
                          <img src={it.image && !it.image.includes('placeholder') ? it.image : `/marketing/marketing-${idx+1}.jpg`} alt={it.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </motion.div>
                    {/* Description right */}
                    <motion.div className="order-2 md:order-2"
                      variants={rightVariants}
                      initial="initial"
                      animate={shouldAnimate ? 'enter' : 'initial'}
                    >
                      <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                        <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Strategic, Creative, Measurable</p>
                        <h2 className="text-3xl font-bold text-[hsl(var(--soft-foreground))] mb-3 font-[Outfit]">{it.title}</h2>
                        <p className="text-lg sm:text-xl leading-relaxed mb-4">{it.long}</p>
                        <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                          <p className="text-lg sm:text-xl leading-relaxed mb-0">{it.short}</p>
                        </div>
                        <div className="mt-4">
                          <button onClick={() => { setActive(it); setOpen(true); }} className="btn bg-[hsl(var(--accent))] text-white px-4 py-2 rounded-full">View details</button>
                        </div>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Description left */}
                    <motion.div className="order-1 md:order-1"
                      variants={leftVariants}
                      initial="initial"
                      animate={shouldAnimate ? 'enter' : 'initial'}
                    >
                      <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                        <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Strategic, Creative, Measurable</p>
                        <h2 className="text-3xl font-bold text-[hsl(var(--soft-foreground))] mb-3 font-[Outfit]">{it.title}</h2>
                        <p className="text-lg sm:text-xl leading-relaxed mb-4">{it.long}</p>
                        <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                          <p className="text-lg sm:text-xl leading-relaxed mb-0">{it.short}</p>
                        </div>
                        <div className="mt-4">
                          <button onClick={() => { setActive(it); setOpen(true); }} className="btn bg-[hsl(var(--accent))] text-white px-4 py-2 rounded-full">View details</button>
                        </div>
                      </div>
                    </motion.div>
                    {/* Image right */}
                    <motion.div className="order-2 md:order-2"
                      variants={rightVariants}
                      initial="initial"
                      animate={shouldAnimate ? 'enter' : 'initial'}
                    >
                      <div className="rounded-lg overflow-hidden bg-black relative">
                        {/* Main image should not open modal on click */}
                        <div className="w-full h-64 sm:h-[420px] md:h-[520px] block">
                          <img src={it.image && !it.image.includes('placeholder') ? it.image : `/marketing/marketing-${idx+1}.jpg`} alt={it.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {marketing.map((it, idx) => {
                const isPlaceholder = !it.image || it.image.includes('placeholder');
                const cover = isPlaceholder ? `/marketing/marketing-${(idx % 6) + 1}.jpg` : it.image;
                return (
                  <article
                    key={it.id}
                    className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_12px_40px_rgba(183,28,45,0.25)] hover:-translate-y-2 transition-all duration-200 cursor-pointer my-6"
                    onClick={() => { setActive(it); setOpen(true); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${it.title}`}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setActive(it); setOpen(true); } }}
                  >
                      <div className="h-3 w-full" />
                    <div className="relative h-72 overflow-hidden rounded-t-2xl">
                      <img src={cover} alt={it.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-x-0 bottom-0 p-7 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h4 className="text-2xl text-white font-extrabold mb-2 truncate drop-shadow font-[Outfit]">{it.title}</h4>
                        <p className="text-lg text-white/90 leading-relaxed line-clamp-3 font-medium">{it.short}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/"
                aria-label="Back to home"
                className="btn bg-[hsl(var(--accent))] text-white px-6 py-2 rounded-full transform transition-transform duration-200 hover:scale-105 shadow-lg hover:shadow-[0_12px_30px_rgba(183,28,45,0.18)] focus:outline-none focus:ring-4 focus:ring-[rgba(183,28,45,0.12)]"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>

        <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[hsl(var(--muted-gray))]">{active?.long}</p>
              </div>
              <div className="rounded-md overflow-hidden bg-zinc-900">
                {active && (
                  <img
                    src={(!active.image || active.image.includes('placeholder'))
                      ? `/marketing/marketing-${((marketing.findIndex(m => m.id === active.id) % 6) + 1)}.jpg`
                      : active.image}
                    alt={active.title}
                    className="w-full h-80 object-cover rounded-md"
                  />
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
