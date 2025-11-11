import EventsPageClient from './client.tsx';

export const metadata = {
  title: 'OSS Events | Professional Event Management Company Pakistan | Event Planning & Production Services',
  description: 'Leading event management company in Pakistan offering comprehensive event planning, production, and execution services. From corporate events to weddings, we handle event coordination, decor, entertainment, and logistics across Lahore, Karachi, and Islamabad.',
  keywords: 'event management company Pakistan, event planning services, corporate event management, wedding event planning, event production company, event coordination services, professional event management Lahore, event management Karachi, event consultancy Pakistan, event planning and execution, corporate event planning, wedding event management, event production services, event management experts, event coordination Pakistan, event planning company, professional event services, event management consultancy, event production and planning, event management solutions Pakistan, event planning experts, corporate event coordination, wedding event coordination, event management services Lahore, event planning Karachi, event production Islamabad, professional event planning Pakistan, event management firm Pakistan, event organization company, event management agency Lahore, event planning consultants Pakistan, corporate event organizers, wedding event planners Pakistan, event production specialists, event coordination experts, professional event management services, event planning and management, corporate event management company, wedding planning services Pakistan, event production and coordination, event management consultancy Lahore, event planning agency Karachi, event management solutions Islamabad, professional event organizers Pakistan, event coordination company, event planning experts Lahore, corporate event planning services, wedding event management company, event production agency Pakistan, event management specialists, event coordination services Lahore, event planning consultants Karachi, corporate event organizers Islamabad, wedding event planners Lahore, event production company Karachi, event management experts Islamabad, professional event management Lahore, event planning services Karachi, corporate event management Islamabad, wedding event planning Lahore, event production services Karachi, event coordination company Islamabad, event management agency Pakistan, event planning firm Lahore, corporate event consultancy Karachi, wedding event organization Islamabad, event production specialists Lahore, event coordination experts Karachi, professional event services Islamabad',
  openGraph: {
    title: 'OSS Events | Professional Event Management Company Pakistan',
    description: 'Leading event management company offering comprehensive event planning, production, and coordination services across Pakistan.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg'],
    url: 'https://ossolutions.pk/services/events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Events | Event Management Company Pakistan',
    description: 'Professional event planning and production services for corporate and private events across Pakistan.',
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
