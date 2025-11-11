"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../../client/components/Navbar';
import Footer from '../../../client/components/Footer';
import EventsSection from '../../../client/components/EventsSection';
import { events } from '../../../client/data/services';

export default function EventsPageClient() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    // Scroll to top on page load to prevent auto-scrolling to hash anchors
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12 overflow-x-hidden w-full">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page-scoped wrapper so we can override card sizing/grid only on this page */}
          <div className="events-page">
            <EventsSection items={events as any} smallHeadings />
          </div>
        </div>

        {/* Page-only CSS overrides (scoped via a parent selector). */}
        <style jsx global>{`
          /* Force two columns at md and up (overrides the component's md:grid-cols-3) */
          @media (min-width: 768px) {
            .events-page .mt-16.grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          /* Reduce the image / cover height for more rectangular cards */
          .events-page .mt-16.grid article > .relative {
            height: 18rem !important; /* ~288px - reduced from 28rem */
          }

          /* Make titles moderately sized inside these cards */
          .events-page .mt-16.grid article h4 {
            font-size: 1.5rem !important; /* ~24px */
            line-height: 1.25 !important;
            font-weight: 700 !important;
            letter-spacing: -0.25px !important;
          }

          /* Adjust padding for overlay panel */
          .events-page .mt-16.grid article .absolute.inset-x-0.bottom-0.p-5 {
            padding: 1rem !important;
          }

          /* Increase the gap between cards for better spacing */
          .events-page .mt-16.grid {
            gap: 2rem !important;
          }

          /* Hide the 'See more' link inside EventsSection on this page */
          .events-page a[href="/services/events"] {
            display: none !important;
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}