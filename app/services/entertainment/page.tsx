import EntertainmentPageClient from './client.tsx';

export const metadata = {
  title: 'OSS Entertainment | Puppet Theatre, Theatrical Productions & Live Entertainment Services',
  description: 'Professional entertainment services including puppet theatre, theatrical productions, live performances, and immersive entertainment experiences. Create memorable moments with expert storytelling and captivating performances.',
  keywords: 'puppet theatre, theatrical productions, live entertainment, entertainment services, puppet shows, theatrical performances, live shows, entertainment production, performance arts, theatre company, puppet entertainment, theatrical entertainment, live performances, entertainment events, theatre productions, puppet theatre services, theatrical entertainment services, performance entertainment, entertainment consultancy, entertainment production company, theatre entertainment, puppet shows for events, theatrical productions company, live entertainment services, entertainment performance, theatre and entertainment',
  openGraph: {
    title: 'OSS Entertainment | Puppet Theatre & Theatrical Production Services',
    description: 'Expert entertainment services offering puppet theatre, theatrical productions, and live performances for unforgettable experiences.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1759604815/4_ahjyom.jpg'],
    url: 'https://ossolutions.pk/services/entertainment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Entertainment | Puppet Theatre & Live Performances',
    description: 'Professional puppet theatre and theatrical production services for events and entertainment.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1759604815/4_ahjyom.jpg'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/services/entertainment',
  },
};

export default function EntertainmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Entertainment Services",
            "description": "Professional entertainment services including puppet theatre, theatrical productions, live performances, and immersive entertainment experiences.",
            "provider": {
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "logo": "https://ossolutions.pk/web-logo/tab-logo-modified.png"
            },
            "serviceType": "Entertainment",
            "areaServed": "Pakistan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Entertainment Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Puppet Theatre Productions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Theatrical Performances"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Live Entertainment Shows"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Entertainment Consultancy"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Arts Production"
                  }
                }
              ]
            }
          })
        }}
      />
      <EntertainmentPageClient />
    </>
  );
}