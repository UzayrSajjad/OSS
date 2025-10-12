"use client";

import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

export default function ServiceCard({ title, desc, icon, image, index }: { title: string; desc: string; icon?: React.ReactNode; image?: string; index?: number }) {
  // Match titles case-insensitively so renaming (e.g. to ALL CAPS) keeps the accent color
  const accentTitles = new Set([
    'events n entertainment',
    'events',
    'marketing',
    'oss puppet theatre',
    'puppet theatre',
  ]);
  const titleColorClass = accentTitles.has((title || '').toLowerCase()) ? 'text-[hsl(var(--accent))]' : 'text-[#545555]';
  // determine animation direction by index: 0 -> left, 1 -> bottom, 2 -> right (then repeat)
  const dir = typeof index === 'number' ? index % 3 : 1;
  const variants = {
    hiddenLeft: { opacity: 0, x: -80, y: 40, scale: 0.98 },
    hiddenBottom: { opacity: 0, y: 80, scale: 0.98 },
    hiddenRight: { opacity: 0, x: 80, y: 40, scale: 0.98 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.6 } }
  };

  const initialVariant = dir === 0 ? 'hiddenLeft' : dir === 1 ? 'hiddenBottom' : 'hiddenRight';
  // Respect users' reduced motion preference: if they prefer reduced motion, start visible.
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const effectiveInitial = prefersReduced ? 'visible' : initialVariant;

  // Map card titles to their respective section IDs
  const scrollToSection = () => {
    let sectionId = '';
    if (title === 'Events n Entertainment') {
      sectionId = 'events';
    } else if (title === 'OSS Puppet Theatre') {
      sectionId = 'puppet-theatre';
    } else if (title === 'Marketing') {
      sectionId = 'marketing';
    }
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
  <motion.article
  initial={effectiveInitial}
  whileInView="visible"
  // animate only the first time the card enters view
  viewport={{ once: true, amount: 0.35 }}
    variants={variants}
    whileHover={{ scale: 1.03 }}
  onClick={scrollToSection}
  className="group card-hover rounded-3xl overflow-hidden border border-black/20 shadow-[0_30px_80px_rgba(0,0,0,0.55)] transform transition hover:shadow-[0_40px_100px_rgba(0,0,0,0.65)] bg-[#0b0b0b] flex flex-col h-full min-w-0 cursor-pointer"
  >
  <div className="relative h-48 sm:h-60 md:h-72 lg:h-80 w-full bg-[#0f0f10] min-w-0">
        {image ? (
          <LazyImage src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
        ) : (
          <div className="w-full h-full bg-transparent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>
  <div className="p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-[#0b0b0b] flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center min-h-[64px] lg:min-h-[80px]">
            <h3 className={`text-3xl lg:text-4xl font-extrabold tracking-tight text-center uppercase ${titleColorClass}`}>{title}</h3>
          </div>
        </div>
        <p className="mt-5 text-[#545454] text-lg leading-relaxed mb-3 font-light tracking-wide flex-1">{desc}</p>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#545454] to-transparent group-hover:via-[#AE1D36] transition-colors duration-500" />
      </div>
    </motion.article>
  );
}
