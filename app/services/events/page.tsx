import EventsPageClient from './client.tsx';

export const metadata = {
  title: 'OSS Events | Event Professionals, Event Management Experts & Event Consultancy Services',
  description: 'Leading event professionals and event experts providing comprehensive event management, event planning, event decor, event designing, event ambiance, event execution, event props, event branding, event fabrication, event photography, event promos, event setup, event catering, event venues, event transportation, event ushers, event brand ambassadors, and event budgeting services. Stage lighting, sound, trussing, flooring, carpets, catering, live kitchen solutions.',
  keywords: 'event professionals, event expert, event consultancy, event management, event & entertainment, event planning, event decor, event designing, event ambiance, event execution, event props, event branding, event fabrication, event photography, event promos, event setup, event catering, event venues, event transportation, event ushers, event brand ambassadors, event budgeting, event experts, stage lighting, sound, trussing, flooring, carpets, catering, live kitchen, food, corporate events, private events, product launches, event management company, event planning services, event decoration, event design, event ambiance creation, event execution experts, event props and branding, event fabrication services, event photography and videography, event promotional materials, event setup and installation, event catering solutions, event venue selection, event transportation services, event ushers and ambassadors, event budget planning, event management consultancy, professional event services, entertainment events, event production, event coordination, event logistics, event marketing, event promotion',
  openGraph: {
    title: 'OSS Events | Professional Event Management & Consultancy Services',
    description: 'Expert event professionals offering complete event management solutions including planning, decor, execution, branding, catering, and transportation services.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg'],
    url: 'https://ossolutions.pk/services/events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Events | Event Professionals & Management Experts',
    description: 'Comprehensive event management services by event experts - planning, decor, execution, branding, and more.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/services/events',
  },
};

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Event Management Services",
            "description": "Professional event management, planning, and execution services including decor, branding, catering, transportation, and complete event solutions.",
            "provider": {
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "logo": "https://ossolutions.pk/web-logo/tab-logo-modified.png"
            },
            "serviceType": "Event Management",
            "areaServed": "Pakistan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Event Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Planning & Consultancy"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Decor & Designing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Execution & Setup"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Branding & Promotion"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Catering & Transportation"
                  }
                }
              ]
            }
          })
        }}
      />
      <EventsPageClient />
    </>
  );
}
