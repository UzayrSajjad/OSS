"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ContactForm(){
  const [form, setForm] = useState({ name: '', email: '', service: 'Events n Entertainment', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact submit', form); 
    setSubmitted(true);
  };

  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-12 bg-[hsl(var(--background))]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/80 rounded-2xl shadow-2xl p-8 sm:p-12 border border-[hsl(var(--border))]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold brand-headline no-dash text-[hsl(var(--accent))] mb-2">Contact Us</h2>
          <p className="mb-6 text-[hsl(var(--muted-gray))] text-base sm:text-lg">Reach out for bookings, partnerships, or bespoke experiences.</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="sr-only" htmlFor="name">Your name</label>
            <input id="name" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} className="p-4 bg-zinc-950/80 border border-[hsl(var(--border))] rounded-lg text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-[hsl(var(--accent))] transition" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="Email" value={form.email} onChange={handleChange} className="p-4 bg-zinc-950/80 border border-[hsl(var(--border))] rounded-lg text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-[hsl(var(--accent))] transition" />

            <label className="sr-only" htmlFor="service">Service</label>
            <select id="service" name="service" value={form.service} onChange={handleChange} className="p-4 bg-zinc-950/80 border border-[hsl(var(--border))] rounded-lg text-white focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-[hsl(var(--accent))] transition">
              <option>Events n Entertainment</option>
              <option>Marketing</option>
              <option>OSS Puppet Theatre</option>
            </select>

            <label className="sr-only" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" placeholder="Phone (optional)" className="p-4 bg-zinc-950/80 border border-[hsl(var(--border))] rounded-lg text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-[hsl(var(--accent))] transition" />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" className="sm:col-span-2 p-4 bg-zinc-950/80 border border-[hsl(var(--border))] rounded-lg text-white placeholder:text-zinc-500 min-h-[120px] focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-[hsl(var(--accent))] transition" />

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div className="text-[hsl(var(--muted-gray))] text-sm">Or contact us at <a href="mailto:info@ossolutions.pk" className="text-[hsl(var(--accent))] underline underline-offset-2">info@ossolutions.pk</a></div>
              <button type="submit" className="w-full sm:w-auto btn bg-[hsl(var(--accent))] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-[0_8px_24px_rgba(183,28,45,0.18)] focus:outline-none focus:ring-4 focus:ring-[rgba(183,28,45,0.12)] transition-all">Send Message</button>
            </div>
          </form>

          {submitted && <div className="mt-6 text-[hsl(var(--accent))] text-lg font-semibold">Thanks — we'll get back to you soon.</div>}
        </motion.div>
      </div>
    </section>
  );
}
