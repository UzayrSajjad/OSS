"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '../../client/components/Navbar';
import Footer from '../../client/components/Footer';

export default function EventManagementLahorePageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Event Management Services Lahore",
            "description": "Professional event management and planning services in Lahore, Pakistan",
            "provider": {
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "addressCountry": "Pakistan"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Lahore"
            },
            "serviceType": "Event Management"
          })
        }}
      />

      <Navbar />

      <div className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline mb-6">
              <span className="gradient-text">Event Management Lahore</span>
            </h1>
            <p className="text-lg sm:text-xl text-[hsl(var(--muted-gray))] max-w-4xl mx-auto mb-8">
              Pakistan's premier event management company based in Lahore. We specialize in corporate event management,
              wedding planning, product launches, and complete event production services across Punjab and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/events"
                className="bg-[#AE1D36] hover:bg-[#8B1729] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200"
              >
                Our Event Services
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-[#AE1D36] text-[#AE1D36] hover:bg-[#AE1D36] hover:text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 shadow-2xl">
              <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mb-6">
                🏢
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Corporate Events</h3>
              <p className="text-[hsl(var(--muted-gray))] mb-6">
                Product launches, conferences, award ceremonies, and corporate gatherings in Lahore.
                Full-service event management with professional execution.
              </p>
              <ul className="text-sm text-[hsl(var(--muted-gray))] space-y-2">
                <li>• Venue selection & setup</li>
                <li>• Audio-visual production</li>
                <li>• Catering coordination</li>
                <li>• Guest management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 shadow-2xl">
              <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mb-6">
                💒
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Wedding Planning</h3>
              <p className="text-[hsl(var(--muted-gray))] mb-6">
                Complete wedding event management in Lahore. From intimate ceremonies to grand celebrations,
                we handle every detail with elegance and precision.
              </p>
              <ul className="text-sm text-[hsl(var(--muted-gray))] space-y-2">
                <li>• Wedding coordination</li>
                <li>• Decor & ambiance</li>
                <li>• Photography & videography</li>
                <li>• Entertainment booking</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 shadow-2xl">
              <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mb-6">
                🎭
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Entertainment Events</h3>
              <p className="text-[hsl(var(--muted-gray))] mb-6">
                Live entertainment, puppet shows, and theatrical productions for events in Lahore.
                Create memorable experiences for all age groups.
              </p>
              <ul className="text-sm text-[hsl(var(--muted-gray))] space-y-2">
                <li>• Puppet theatre productions</li>
                <li>• Live performances</li>
                <li>• Interactive entertainment</li>
                <li>• Family entertainment</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Why Choose OSS for Event Management in Lahore?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🏆
                </div>
                <h3 className="text-xl font-bold text-white mb-2">10+ Years Experience</h3>
                <p className="text-[hsl(var(--muted-gray))] text-sm">
                  Proven track record in Lahore's event industry
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white mb-2">End-to-End Service</h3>
                <p className="text-[hsl(var(--muted-gray))] text-sm">
                  Complete event management from concept to execution
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  💼
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Professional Team</h3>
                <p className="text-[hsl(var(--muted-gray))] text-sm">
                  Expert event planners and coordinators
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  📍
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Local Expertise</h3>
                <p className="text-[hsl(var(--muted-gray))] text-sm">
                  Deep knowledge of Lahore venues and vendors
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Plan Your Perfect Event in Lahore?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-gray))] mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Let's discuss your vision and create an unforgettable event experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+923000000000"
                className="bg-[#AE1D36] hover:bg-[#8B1729] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200"
              >
                Call Now: +92 300 000 0000
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-[#AE1D36] text-[#AE1D36] hover:bg-[#AE1D36] hover:text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}