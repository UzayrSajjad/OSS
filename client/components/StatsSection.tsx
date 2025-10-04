"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Events Delivered' },
  { value: '50+', label: 'Global Brands' },
  { value: '15+', label: 'Countries Covered' },
  { value: '98%', label: 'Client Satisfaction' },
];

function parseNumber(text: string) {
  // extract numeric portion and suffix
  const m = text.match(/^([0-9]+)([^0-9]*)/);
  if (!m) return { num: 0, suffix: text };
  return { num: Number(m[1]), suffix: m[2] || '' };
}

function useCountUp(target: number, enabled: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }

    const duration = 900; // ms
    const start = performance.now();
    const from = 0;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutQuad
      const eased = 1 - (1 - t) * (1 - t);
      const current = Math.round(from + (target - from) * eased);
      setValue(current);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, enabled]);

  return value;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Count-up and motion should run once when first entering view
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl px-4 py-8 sm:px-10 sm:py-12 grid grid-cols-1 sm:grid-cols-4 gap-6 bg-zinc-900/80 shadow-2xl border border-[hsl(var(--border))]">
          {stats.map((s, i) => {
            const { num, suffix } = parseNumber(s.value);
            const enabled = inView && !prefersReducedMotion;
            const count = useCountUp(num, enabled);

            return (
              <motion.div
                key={s.label}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-gradient-to-b from-zinc-900/90 to-zinc-800/80 border border-zinc-800 shadow-lg hover:shadow-[0_8px_32px_rgba(183,28,45,0.10)] transition-all group"
              >
                <div className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-[hsl(var(--accent))] drop-shadow-lg mb-2 group-hover:scale-105 transition-transform">
                  {prefersReducedMotion ? s.value : `${count}${suffix}`}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-white font-semibold tracking-wide text-center mb-1 group-hover:text-[hsl(var(--accent))] transition-colors">{s.label}</div>
              </motion.div>
            );
          })}

          {/* optional CTA card */}
          <div className="col-span-1 sm:col-span-4 mt-2">
            <div className="mt-4 text-center">
              <a href="#services" className="inline-block px-6 py-3 rounded-full bg-[hsl(var(--accent))] text-white font-semibold shadow-lg hover:scale-[1.02] transform transition">See our work & cases</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
