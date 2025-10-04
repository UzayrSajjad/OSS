import React from 'react';

const logos = new Array(8).fill('/placeholder.svg');

export default function LogoCarousel(){
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <div className="flex gap-8 items-center w-[200%] animate-[marquee-x_20s_linear_infinite]">
            {logos.concat(logos).map((src, i) => (
              <div key={i} className="w-40 flex items-center justify-center">
                <img src={src} alt={`logo-${i}`} className="logo-gray w-32 h-12 object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
