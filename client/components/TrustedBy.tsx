import React from 'react';

const logos = [
  '/logos/bhc-modified.png',
  '/logos/engro-foods-modified.png',
  '/logos/ghani-modified.png',
  '/logos/loreal-modified.png',
  '/logos/park-view-modified.png',
  '/logos/tetra-modified.png',
  '/logos/tobacco-modified.png',
  '/logos/unilever-modified.png',
  '/logos/walled-removebg-preview.png'
];

export default function TrustedBy() {
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
      
      <section 
        className="py-6 bg-[hsl(var(--background))]" 
        role="region" 
        aria-label="Trusted brands"
      >                         
      <div className="max-w-7xl mx-auto px-1 sm:px-2">
        <div className="text-center">
          <h3 
            style={{ color: '#545555' }} 
            className="text-sm sm:text-base md:text-lg font-medium mt-3 mb-4"
          >
            Trusted by some of the biggest companies globally
          </h3>
        </div>

        <div className="mt-3 marquee-container relative overflow-hidden">
          <div className="edge-fade-left" />
          <div className="edge-fade-right" />

          <div
            aria-hidden
            className="flex items-center animate-scroll"
            style={{
              animation: 'scroll 40s linear infinite',
              width: 'fit-content'
            }}
          >
            {[...logos, ...logos, ...logos].map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-36 sm:w-44 h-24 sm:h-28"
              >
                <img
                  src={src}
                  alt={`Company logo ${i + 1}`}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  style={{
                    filter:
                      'brightness(0) saturate(100%) invert(34%) sepia(3%) saturate(0%) hue-rotate(336deg) brightness(95%) contrast(94%)',
                    opacity: 0.9
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}