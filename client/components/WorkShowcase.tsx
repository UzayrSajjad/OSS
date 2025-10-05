"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import EventGallery from './EventGallery';
import { events, entertainment } from '../data/services';

// Combine and select best works from events and entertainment
const works = [
  {
    id: 'dunhill-launch',
    title: 'DUNHILL Launching',
    description: 'OSS had the privilege of flawlessly managing the grand launch of Dunhill, an event that embodied sophistication, exclusivity, and luxury.',
    image: 'https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg',
    images: [
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978905/01_Tunnel_c2pamf.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978873/09_Decor_kmrcte.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978873/10_Sitting_ubkpru.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978894/04_Stage_j5q2xd.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978886/05_Mc_ZQ_Ali_Salman_dykmfk.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978885/06_Cigar_Demo_v45dyi.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978884/07_Live_Coverage_on_MM_mhsq0c.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758978875/08_Reception_bxmuaq.jpg',
    ],
    type: 'event'
  },
  {
    id: 'private-dinner-haveli',
    title: 'PRIVATE DINNER — HAVELI ASIF JAH',
    description: 'An intimate private dinner at Haveli Asif Jah curated by OSS, blending timeless heritage with refined hospitality.',
    image: 'https://res.cloudinary.com/djetoiflq/image/upload/v1758981316/pd1_n6oync.png',
    images: [
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981316/pd1_n6oync.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981320/pd2_z6agrw.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981312/pd3_iqgadf.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981310/pd4_qc4lcf.png',
    ],
    type: 'event'
  },
  {
    id: 'chinese-high-commission',
    title: 'NEW YEAR CELEBRATION — CHINESE HIGH COMMISSION',
    description: 'A joyous New Year celebration at the Chinese High Commission highlighting cultural vibrancy and festivity.',
    image: 'https://res.cloudinary.com/djetoiflq/image/upload/v1758981699/ch1_ycekes.png',
    images: [
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981699/ch1_ycekes.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981682/ch5_yk5zg3.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981683/ch8_e7prsv.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981697/ch3_a5ly9d.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981692/ch4_stwhcn.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981691/ch2_d1ylih.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981691/ch6_q8udkt.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758981685/ch7_s10bdo.png',
    ],
    type: 'event'
  },
  {
    id: 'tetrapak-customer-day',
    title: 'TETRAPAK INTERNATIONAL CUSTOMER DAY',
    description: 'Tetra Pak International Customer Day — a high-impact corporate event celebrating global partnerships.',
    image: 'https://res.cloudinary.com/djetoiflq/image/upload/v1758982712/04_Product_Display_ogdh0l.jpg',
    images: [
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982712/04_Product_Display_ogdh0l.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982722/01_Entrance_uexs9t.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982710/03_Ambiance_d1qnzf.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982683/09_Stage_xrzqah.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982678/10_Stage_Theme_jnvdiq.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982675/12_Food_Presentation_ylykfc.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982643/14_BO_Jafar_lchd84.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982621/21_Event_Management_Team_jzvnqo.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982647/18_Ambiance_y0bedu.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982614/20_Ushers_xdi96f.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982674/13_Josh_Band_Live_jb1hjl.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982652/15_Jazz_Band_Live_oodo1i.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982649/17_Guests_qnqujf.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982647/19_Group_Photos_with_TP_mtkcun.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982714/07_Reception_ohi8ny.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982713/06_Product_Testing_ysdwmo.jpg',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758982688/08_Branding_ibmglw.jpg',
    ],
    type: 'event'
  },
  {
    id: 'british-high-commission',
    title: 'CORPORATE DINNER — BRITISH HIGH COMMISSION',
    description: 'An exclusive corporate dinner at the British High Commission, masterfully curated and executed by OSS, embodying sophistication and refinement.',
    image: 'https://res.cloudinary.com/djetoiflq/image/upload/v1758964441/be13_mcco5k.png',
    images: [
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964441/be13_mcco5k.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964445/be5_jxa941.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964442/be3_x44oyo.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964446/be_p5ej3w.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964441/be9_jpa53y.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964440/be11_entylz.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964440/be7_bxn4hl.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964440/be10_di01x3.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964438/be8_ijaljv.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758961687/be4_ekrgfo.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964445/be6_tq4pvk.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758964445/be2_dan5ml.png',
    ],
    type: 'event'
  },
  {
    id: 'sufi-night-wazir-khan',
    title: 'SUFI NIGHT AT THE HISTORIC CHOWK MASJID WAZIR KHAN',
    description: 'A mesmerizing Sufi Night at the historic Chowk Masjid Wazir Khan, blending timeless spiritual heritage with cultural grandeur.',
    image: 'https://res.cloudinary.com/djetoiflq/image/upload/v1758972707/sm1_zvjayu.png',
    images: [
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972707/sm1_zvjayu.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972707/sm2_hjwlir.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972596/sm3_xurcjr.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972699/sm5_tekfxj.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972696/sm4_jmrsyt.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972693/sm7_ivq4lz.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972692/sm6_wotrhc.png',
      'https://res.cloudinary.com/djetoiflq/image/upload/v1758972691/sm8_njcfhv.png',
    ],
    type: 'event'
  },
  {
    id: 'school-puppet-show',
    title: 'SCHOOL PUPPET SHOW',
    description: 'OSS brings learning to life with engaging School Puppet Shows, designed to educate and entertain students in a fun, interactive way.',
    image: '/puppet-show/puppet-6.jpg',
    images: ['/puppet-show/puppet-6.jpg', '/puppet-show/puppet-1.jpg', '/puppet-show/puppet-2.jpg', '/puppet-show/puppet-3.jpg'],
    type: 'entertainment'
  }
];

export default function WorkShowcase(){
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  // Split works into two rows
  const row1Works = works.slice(0, 4); // First 4 works for row 1
  const row2Works = works.slice(4); // Remaining 3 works for row 2

  // Only use the last two rows, and make cards bigger
  const rows = [ 
    { dir: 'rtl', speedClass: 'marquee-slow', works: row1Works }, 
    { dir: 'ltr', speedClass: 'marquee-slow', works: row2Works } 
  ];

  return (
    <section id="works" className="py-12 bg-[hsl(var(--background))]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <motion.h2 initial={typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline text-center mx-auto max-w-4xl">
          <span className="gradient-text">Our Portfolio</span>
        </motion.h2>
        <p className="mt-4 text-[hsl(var(--muted-gray))] text-sm sm:text-base text-center mx-auto max-w-2xl">A curated selection of recent productions, campaigns and performances.</p>

        <div className="mt-6 space-y-6">
          {rows.map((row, rIdx) => (
            <div key={rIdx} className="marquee-container">
              <div className="mx-4 sm:mx-6 lg:mx-8">
                <div className={`marquee ${row.speedClass} ${row.dir === 'rtl' ? 'marquee-reverse' : ''} flex items-stretch`}>
                  {row.works.concat(row.works).concat(row.works).map((work,i)=> (
                    <div key={i + rIdx*100} onClick={()=>{ setActive(works.findIndex(w => w.id === work.id)); setOpen(true); }} onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') { setActive(works.findIndex(w => w.id === work.id)); setOpen(true); } }} role="button" tabIndex={0} className="group min-w-[320px] sm:min-w-[400px] md:min-w-[520px] h-64 sm:h-80 md:h-96 bg-[hsl(var(--background))] rounded-xl overflow-hidden cursor-pointer relative transform transition card-hover">
                          <img src={work.image} alt={work.title} className="w-full h-full object-cover" loading="lazy" />
                          <div className="absolute inset-0 bg-[hsl(var(--background))]/28 opacity-0 group-hover:opacity-100 transition flex items-end p-4 sm:p-5 md:p-6">
                            <div className="transform transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100">
                              <h4 className="text-white font-bold text-base sm:text-lg md:text-xl group-hover:text-lg sm:group-hover:text-xl md:group-hover:text-2xl font-[Outfit] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{work.title}</h4>
                              <p className="text-white/90 text-sm sm:text-base md:text-lg group-hover:text-base sm:group-hover:text-lg md:group-hover:text-xl font-[Outfit]">{work.description}</p>
                            </div>
                          </div>
                        </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title={active !== null ? works[active].title : undefined}>
        <div>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[hsl(var(--muted-gray))]">{active !== null ? works[active].description : ''}</p>
            </div>

            <div>
              {active !== null && works[active].images && works[active].images.length > 0 ? (
                <EventGallery images={works[active].images} large={true} />
              ) : (
                active !== null && works[active].image ? (
                  <div className="rounded-md overflow-hidden bg-zinc-900">
                    <img src={works[active].image} alt={works[active].title} className="w-full h-80 object-cover rounded-md" />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
