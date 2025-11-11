"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../client/components/Navbar';
import Footer from '../../../client/components/Footer';
import Modal from '../../../client/components/Modal';
import { entertainment } from '../../../client/data/services';

type EntItem = { id: number; title: string; image: string; short?: string; long?: string };

export default function OSSPuppetTheatrePageClient() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<EntItem | null>(null);

  // Filter to get only puppet theatre related items
  const puppetItems = entertainment.filter(item =>
    item.title.toLowerCase().includes('puppet') ||
    item.title.toLowerCase().includes('shadow play')
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12 overflow-x-hidden w-full">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold brand-headline text-center mx-auto max-w-4xl font-[Outfit]">
            <span className="gradient-text font-[Outfit]">OSS Puppet Theatre</span>
          </h1>
          <p className="mt-4 text-center text-[hsl(var(--muted-gray))]">Bringing stories to life with captivating puppet performances and immersive theatrical experiences.</p>

          <div className="mt-10 space-y-12">
            {/* Featured Puppet Theatre Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start mb-24">
              <div className="order-1 md:order-1">
                <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                  <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Magical, Immersive, Timeless</p>
                  <h2 className="text-3xl font-bold text-[hsl(var(--soft-foreground))] mb-3 font-[Outfit]">Puppet Theatre</h2>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">A modern take on classic puppetry with cinematic lighting, original score, and immersive staging that brings stories to life for audiences of all ages.</p>
                  <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                    <p className="text-lg sm:text-xl leading-relaxed mb-0">A whimsical, cinematic puppet show that combines traditional puppetry with contemporary storytelling techniques.</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        const puppetItem = entertainment.find(item => item.title.toLowerCase().includes('puppet'));
                        if (puppetItem) {
                          setActive(puppetItem);
                          setOpen(true);
                        }
                      }}
                      className="btn bg-[hsl(var(--accent))] text-white px-4 py-2 rounded-full"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-2">
                <div className="rounded-lg overflow-hidden bg-black relative">
                  <button
                    onClick={() => {
                      const puppetItem = entertainment.find(item => item.title.toLowerCase().includes('puppet'));
                      if (puppetItem) {
                        setActive(puppetItem);
                        setOpen(true);
                      }
                    }}
                    className="w-full h-64 sm:h-[420px] md:h-[520px] block"
                  >
                    <img
                      src="/puppet-show/puppet-6.jpg"
                      alt="OSS Puppet Theatre"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Shadow Play Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start mb-20">
              <div className="order-1 md:order-1">
                <div className="rounded-lg overflow-hidden bg-black relative">
                  <button
                    onClick={() => {
                      const shadowItem = entertainment.find(item => item.title.toLowerCase().includes('shadow'));
                      if (shadowItem) {
                        setActive(shadowItem);
                        setOpen(true);
                      }
                    }}
                    className="w-full h-64 sm:h-[420px] md:h-[520px] block"
                  >
                    <img
                      src="/puppet-show/puppet-3.jpg"
                      alt="Shadow Play Performance"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </div>
              <div className="order-2 md:order-2">
                <div className="prose max-w-none text-[hsl(var(--muted-gray))]">
                  <p className="text-2xl font-semibold text-[hsl(var(--accent))] mb-4">Enchanting, Mystical, Captivating</p>
                  <h2 className="text-3xl font-bold text-[hsl(var(--soft-foreground))] mb-3 font-[Outfit]">Shadow Play</h2>
                  <p className="text-lg sm:text-xl leading-relaxed mb-4">A magical performance using intricate shadow puppetry, creative lighting, and live narration to bring timeless tales to life for all ages.</p>
                  <div className="bg-zinc-900/70 rounded-lg p-6 mt-3">
                    <p className="text-lg sm:text-xl leading-relaxed mb-0">Enchanting stories told with light and shadow in a mesmerizing theatrical experience.</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        const shadowItem = entertainment.find(item => item.title.toLowerCase().includes('shadow'));
                        if (shadowItem) {
                          setActive(shadowItem);
                          setOpen(true);
                        }
                      }}
                      className="btn bg-[hsl(var(--accent))] text-white px-4 py-2 rounded-full"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Puppet Theatre Performances */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {puppetItems.map((it, idx) => {
                const cover = it.image && !it.image.includes('placeholder') ? it.image : `/puppet-show/puppet-${(idx % 6) + 1}.jpg`;
                return (
                  <article
                    key={it.id}
                    className="group rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-[hsl(var(--border))] shadow-2xl hover:shadow-[0_12px_40px_rgba(183,28,45,0.25)] hover:-translate-y-2 transition-all duration-200 cursor-pointer my-6"
                  >
                    <div className="h-3 w-full bg-gradient-to-r from-[hsl(var(--accent))] to-pink-600" />
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
          <div className="space-y-4">
            <img src={active?.image} alt={active?.title} className="w-full h-64 object-cover rounded-md" />
            <p className="text-[hsl(var(--muted-gray))]">{active?.long}</p>
          </div>
        </Modal>
      </main>

      <Footer />
    </>
  );
}