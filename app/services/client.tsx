"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../client/components/Navbar';
import Footer from '../../client/components/Footer';
import LazyImage from '../../client/components/LazyImage';
import { services } from '../../client/data/services';

export default function ServicesPageClient() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[hsl(var(--muted-gray))] max-w-4xl mx-auto leading-relaxed">
              From concept to execution, we deliver premium events, captivating entertainment, and impactful marketing solutions — all under one roof.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={
                    service.title === 'EVENTS' ? '/services/events' :
                    service.title === 'Marketing' ? '/services/marketing' :
                    service.title === 'PUPPETRY' ? '/services/oss-puppet-theatre' :
                    '/services/entertainment'
                  }
                  className="block h-full"
                >
                  <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_20px_60px_rgba(174,29,54,0.4)] transform hover:-translate-y-3 transition-all duration-300">
                    {/* Top accent bar */}
                    <div className="h-2 w-full bg-gradient-to-r from-[hsl(var(--accent))] to-pink-600" />

                    {/* Image section */}
                    <div className="relative h-64 overflow-hidden">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Service icon overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[hsl(var(--soft-foreground))] mb-3 font-[Outfit] group-hover:text-[hsl(var(--accent))] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[hsl(var(--muted-gray))] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {service.desc}
                      </p>

                      {/* Call to action */}
                      <div className="mt-4 flex items-center text-[hsl(var(--accent))] font-semibold group-hover:text-pink-400 transition-colors duration-300">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-12 border border-[hsl(var(--border))]"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[Outfit]">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create unforgettable experiences and deliver exceptional results for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn bg-[hsl(var(--accent))] text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-[0_12px_30px_rgba(183,28,45,0.18)]"
              >
                Get Started Today
              </Link>
              <Link
                href="/"
                className="btn border-2 border-[hsl(var(--accent))] text-[hsl(var(--accent))] px-8 py-3 rounded-full font-semibold transform transition-all duration-200 hover:bg-[hsl(var(--accent))] hover:text-white hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}