"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Our Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const makeHref = (href: string) => {
    // If link is an in-page hash, turn into '/#anchor' when not on the home page
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`;
    }
    return href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link 
            href="/" 
            className="flex items-center flex-shrink-0 lg:pl-2" 
            onClick={(e: React.MouseEvent) => {
              // If we're already on the homepage, just scroll to top smoothly.
              if (pathname === '/') {
                e.preventDefault();
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                // Otherwise force a full navigation to the homepage so we land at the top.
                e.preventDefault();
                if (typeof window !== 'undefined') window.location.href = '/';
              }
            }}
          >
            <img 
              src="https://res.cloudinary.com/djetoiflq/image/upload/v1759552918/oss-logo_veijqu.png" 
              alt="One Stop Solutions - Premium Events & Entertainment"
              className="h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 xl:h-16 w-auto object-contain transition-all duration-200 max-w-[120px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]" 
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="Primary">
            {links.map((l) => {
              const resolved = makeHref(l.href);
              const handleClick = (e: React.MouseEvent) => {
                if (l.href.startsWith('#') && pathname !== '/') {
                  e.preventDefault();
                  window.location.href = `/${l.href}`.replace('//', '/');
                }
              };

              return (
                <Link 
                  key={l.href} 
                  href={resolved} 
                  onClick={handleClick} 
                  className="text-gray-700 hover:text-[hsl(var(--accent))] font-medium transition-colors duration-200 text-xs xl:text-sm orbitron-ui uppercase"
                >
                  {l.label}
                </Link>
              );
            })}

                <Link 
                  href={makeHref('#contact')} 
                  onClick={(e) => {
                    if (pathname !== '/') { 
                      e.preventDefault(); 
                      window.location.href = '/#contact'; 
                    }
                  }} 
                  className="ml-2 xl:ml-4 bg-[hsl(var(--accent))] text-white px-5 py-2.5 rounded-lg font-semibold text-sm xl:text-base hover:bg-[hsl(var(--accent))]/90 transition-all duration-200 shadow-sm hover:shadow-md orbitron-ui uppercase"
                >
                  Get in touch
                </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(o => !o)} 
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden p-2 -mr-2 sm:mr-0 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
          >
            {open ? (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {links.map((l) => (
              <Link 
                key={l.href} 
                href={makeHref(l.href)} 
                onClick={(e) => {
                  setOpen(false);
                  if (l.href.startsWith('#') && pathname !== '/') {
                    e.preventDefault();
                    window.location.href = `/${l.href}`.replace('//', '/');
                  }
                }} 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[hsl(var(--accent))] rounded-lg font-medium text-sm transition-colors duration-200 orbitron-ui uppercase"
              >
                {l.label}
              </Link>
            ))}
            <Link 
              href={makeHref('#contact')} 
              onClick={(e) => { 
                setOpen(false); 
                if (pathname !== '/') { 
                  e.preventDefault(); 
                  window.location.href = '/#contact'; 
                } 
              }} 
              className="block mx-4 mt-4 bg-[hsl(var(--accent))] text-white px-5 py-3 rounded-lg text-center font-semibold hover:bg-[hsl(var(--accent))]/90 transition-all duration-200 orbitron-ui uppercase"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
