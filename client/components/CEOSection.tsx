"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CEOSection() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold brand-headline no-dash text-[hsl(var(--accent))] mb-4 text-center mx-auto max-w-4xl"
        >
          <span className="events-headline">WHAT OUR CEO SAYS</span>
        </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-transparent md:bg-zinc-900/80 p-6 rounded-2xl border border-[hsl(var(--border))]">
          {/* Mobile header: name left, image right */}
          <div className="flex flex-col items-center md:hidden w-full gap-3 pb-2">
            <div className="flex items-center gap-3 w-full justify-center">
              <picture>
                <source srcSet="/ceo.png" type="image/png" />
                <img src="/ceo.svg" alt="CEO Syed Aamir Hizqeel" className="w-32 h-32 object-contain rounded-lg shadow-lg" />
              </picture>
              <h4 className="text-base font-extrabold text-white uppercase font-[Outfit] tracking-wider text-center leading-tight">
                SYED AAMIR HIZQEEL<br />CHIEF EXECUTIVE
              </h4>
            </div>
          </div>

          {/* Mobile description below header */}
          <div className="md:hidden text-[color:rgb(141,139,139)]">
            <p className="leading-relaxed">
              SA Hizqeel is a visionary leader with extensive experience in marketing, event management, and creative entertainment across Pakistan, the USA, and the Middle East (Qatar). With over 20 years of expertise, he has successfully positioned OneStop Solutions as a trusted and innovative name in the industry. His global exposure enables him to craft strategies that blend international standards with local insights, ensuring impactful results for clients.
            </p>
            <p className="mt-4 leading-relaxed">
              Aamir's leadership has driven the company to deliver exceptional solutions, fostering client relationships and setting new benchmarks in marketing, events, and entertainment. His commitment to excellence and creativity continues to inspire the OneStop Solutions team to achieve new heights.
            </p>
          </div>

          {/* Desktop / md+ layout: left = text, right = image */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="hidden md:flex flex-col justify-center text-[color:rgb(141,139,139)]"
          >
            <h4 className="text-xl font-extrabold text-white mb-2 uppercase font-[Outfit] tracking-wider">SYED AAMIR HIZQEEL – CHIEF EXECUTIVE</h4>
            <p className="leading-relaxed">
              SA Hizqeel is a visionary leader with extensive experience in marketing, event management, and creative entertainment across Pakistan, the USA, and the Middle East (Qatar). With over 20 years of expertise, he has successfully positioned OneStop Solutions as a trusted and innovative name in the industry. His global exposure enables him to craft strategies that blend international standards with local insights, ensuring impactful results for clients.
            </p>
            <p className="mt-4 leading-relaxed">
              Aamir's leadership has driven the company to deliver exceptional solutions, fostering client relationships and setting new benchmarks in marketing, events, and entertainment. His commitment to excellence and creativity continues to inspire the OneStop Solutions team to achieve new heights.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="w-full flex justify-center">
              <picture>
                <source srcSet="/ceo.png" type="image/png" />
                <img src="/ceo.svg" alt="CEO Syed Aamir Hizqeel" className="w-96 sm:w-[420px] md:w-[520px] lg:w-[600px] object-contain rounded-lg shadow-lg" />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
