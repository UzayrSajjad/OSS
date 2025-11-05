import ServicesPageClient from './client';

export const metadata = {
  title: 'Our Services | OSS - Events, Entertainment & Marketing Solutions',
  description: 'Discover our comprehensive services: professional event management, theatrical entertainment, puppet theatre productions, and high-impact marketing solutions. OneStop Solutions for all your needs.',
  keywords: 'services, event management, entertainment, marketing, puppet theatre, theatrical productions, event planning, marketing solutions, entertainment services, professional services, OSS services, OneStop Solutions services',
  openGraph: {
    title: 'Our Services | OSS - Events, Entertainment & Marketing Solutions',
    description: 'Comprehensive services including event management, entertainment, puppet theatre, and marketing solutions.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1759611715/Events_n_Entertainment_dgjdf2.webp'],
    url: 'https://ossolutions.pk/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | OSS - Events, Entertainment & Marketing',
    description: 'Professional event management, entertainment, and marketing services by OneStop Solutions.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1759611715/Events_n_Entertainment_dgjdf2.webp'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "OneStop Solutions Services",
            "description": "Comprehensive services including event management, entertainment, puppet theatre productions, and marketing solutions.",
            "provider": {
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "logo": "https://ossolutions.pk/web-logo/tab-logo-modified.png"
            },
            "serviceType": "Business Services",
            "areaServed": "Pakistan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "OSS Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Management Services",
                    "url": "https://ossolutions.pk/services/events"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Entertainment & Puppet Theatre",
                    "url": "https://ossolutions.pk/services/entertainment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "OSS Puppet Theatre",
                    "url": "https://ossolutions.pk/services/oss-puppet-theatre"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Solutions",
                    "url": "https://ossolutions.pk/services/marketing"
                  }
                }
              ]
            }
          })
        }}
      />
      <ServicesPageClient />
    </>
  );
}