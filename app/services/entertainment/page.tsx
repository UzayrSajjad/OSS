import EntertainmentPageClient from './client';

export const metadata = {
  title: 'OSS Puppet Theatre | Theatrical Entertainment & Live Performances',
  description: 'Experience captivating puppet theatre and theatrical entertainment by OneStop Solutions. From puppet shows to cabaret nights, we bring stories to life with cinematic staging and immersive experiences.',
  keywords: 'puppet theatre, theatrical entertainment, live performances, OSS, OneStop Solutions, puppet shows, cabaret, shadow play',
  openGraph: {
    title: 'OSS Puppet Theatre | Theatrical Entertainment',
    description: 'Captivating puppet theatre and live performances that inspire and delight audiences of all ages.',
    images: ['/puppet-show/puppet-6.jpg'],
    url: 'https://ossolutions.pk/services/entertainment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Puppet Theatre | Theatrical Entertainment',
    description: 'Captivating puppet theatre and live performances by OneStop Solutions.',
    images: ['/puppet-show/puppet-6.jpg'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/services/entertainment',
  },
};

export default function EntertainmentPage() {
  return <EntertainmentPageClient />;
}