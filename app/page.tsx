"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../client/components/Navbar';
import Hero from '../client/components/Hero';
import TrustedBy from '../client/components/TrustedBy';
import ServiceCard from '../client/components/ServiceCard';
import WorkShowcase from '../client/components/WorkShowcase';
import EventsSection from '../client/components/EventsSection';
import CategorySection from '../client/components/CategorySection';
import ContactForm from '../client/components/ContactForm';
import StatsSection from '../client/components/StatsSection';
import Footer from '../client/components/Footer';

import { events, entertainment, marketing, services } from '../client/data/services';

export default function HomePage(){
  useEffect(() => {
    // Scroll to top on page load to prevent auto-scrolling to hash anchors
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />
      <main>
        <Hero />

        <TrustedBy />

        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* headings should animate only once and respect reduced-motion */}
            <motion.h2 initial={typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline text-center mx-auto max-w-4xl">
              <span className="gradient-text">Our Services</span>
            </motion.h2>
            <p className="mt-4 text-[hsl(var(--muted-gray))] text-sm sm:text-base text-center mx-auto max-w-2xl">Three pillars to elevate your brand moments.</p>

            <div className="mt-10 p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {services.map((s, idx)=> (
                  <ServiceCard key={s.title} index={idx} title={s.title} desc={s.desc} image={s.image} icon={s.icon} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <WorkShowcase />

        {/* New Category Sections: Events, Entertainment, Marketing */}
        <div className="mt-8">
          {/* On the landing page we show only the first 3 event cards */}
          {/* Cast to any/Item[] to satisfy the component's expected type (data IDs are mixed types in services.ts) */}
          <EventsSection items={events.slice(0, 3) as any} />
          <CategorySection title="OSS Puppet Theatre" items={entertainment} isLanding={true} sectionId="puppet-theatre" />
          <CategorySection title="Marketing" items={marketing} sectionId="marketing" />
        </div>

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            {/* left: text */}
            <LeftWho />

            {/* right: video */}
            <RightWho />
          </div>
        </section>

        <StatsSection />

        <ContactForm />

        <Footer />
      </main>
    </div>
  );
}

function LeftWho(){
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold brand-headline no-dash text-[hsl(var(--accent))] mb-4"
      >
        Who We Are
      </motion.h2>
      <p className="mt-4 text-[color:rgb(141,139,139)]">One Stop Solutions is an elite production house focused on cinematic storytelling, strategic marketing and unforgettable live performances. We blend creativity, craft and meticulous planning.</p>
      <div className="mt-6">
        <ul className="text-[color:rgb(141,139,139)] space-y-2">
          <li>• Founded with a mission to craft premium experiences</li>
          <li>• Team of industry veterans across events, marketing & entertainment</li>
          <li>• Global partnerships and local excellence</li>
        </ul>
      </div>
    </motion.div>
  );
}

function RightWho(){
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-lg overflow-hidden bg-zinc-900 flex items-center justify-center"
    >
      <img
        src="https://res.cloudinary.com/djetoiflq/image/upload/v1759013295/osss_shguh4.jpg"
        alt="Who We Are"
        className="w-full h-auto object-contain"
      />
    </motion.div>
  );
}
