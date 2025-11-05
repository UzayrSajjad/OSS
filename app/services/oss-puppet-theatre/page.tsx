import OSSPuppetTheatrePageClient from './client';

export const metadata = {
  title: 'OSS Puppet Theatre | Professional Puppetry, Puppet Shows & Entertainment Services',
  description: 'Leading puppet theatre company offering puppetry workshops, puppet shows, puppet making, puppet festivals, puppet parades, puppet school programs, puppet studio services, and puppet institute training. Entertainment for melas, carnivals, festivals, kids festivals, family festivals, birthday parties, birthday celebrations with puppets, kids birthday parties, baby showers, and special events at Lahore Fort, Lahore Zoo, Lahore Safari, Lahore Museum, Lahore WCLA, Emporium Mall, Packages Mall, Gold Crust Mall, Dolmen Mall, Global Village, Shahi Hamam, Rana Resorts, Oasis Water Park. Annual day celebrations, sports day events, sports week activities, graduation day ceremonies, Sufi nights, faculty dinners, schools festivals, scheduled old carnivals, schools day trips, and day trip packages.',
  keywords: 'puppetry, puppet theatre, puppet workshop, puppet shows, puppet making, puppet festivals, puppet parades, puppet school, puppet studio, puppet institute, entertainment, circus, melas, carnivals, festivals, kids festivals, family festivals, birthday parties, birthday with puppets, kids birthday, birthdays, celebrations, baby showers, Lahore Fort, Lahore Zoo, Lahore Safari, Lahore Museum, Lahore WCLA, Emporium Mall, Packages Mall, Gold Crust Mall, Dolmen Mall, Global Village, Shahi Hamam, Rana Resorts, Oasis Water Park, annual day, sports day, sports week, graduation day, Sufi nights, faculty dinners, schools festivals, scheduled old carnivals, schools day trips, day trip, puppet entertainment, educational puppet shows, children entertainment, family entertainment, cultural events, traditional puppetry, modern puppet theatre, puppet performances, interactive puppet shows, puppet workshops for kids, puppet making classes, festival entertainment, carnival entertainment, birthday party entertainment, school entertainment, corporate entertainment, event entertainment, puppet artists, professional puppeteers, puppet production, custom puppet shows, themed puppet performances, educational entertainment, creative workshops, storytelling through puppets, puppet museum, puppet exhibitions, puppet parades, street puppet shows, puppet festivals Pakistan, Lahore entertainment, Punjab entertainment, Pakistan festivals, kids activities Lahore, family fun Lahore, birthday venues Lahore, school trips Lahore, educational tours, cultural tours, historical sites entertainment',
  openGraph: {
    title: 'OSS Puppet Theatre | Professional Puppetry & Entertainment Services',
    description: 'Expert puppet theatre company providing puppet shows, workshops, and entertainment for festivals, birthdays, schools, and special events across Lahore and Pakistan.',
    images: ['/puppet-show/puppet-6.jpg'],
    url: 'https://ossolutions.pk/services/oss-puppet-theatre',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Puppet Theatre | Puppet Shows & Entertainment',
    description: 'Professional puppetry services for kids festivals, birthdays, schools, and cultural events in Lahore.',
    images: ['/puppet-show/puppet-6.jpg'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/services/oss-puppet-theatre',
  },
};

export default function OSSPuppetTheatrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Puppet Theatre & Entertainment Services",
            "description": "Professional puppet theatre services including puppet shows, workshops, festivals, birthday parties, school entertainment, and cultural performances.",
            "provider": {
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "logo": "https://ossolutions.pk/web-logo/tab-logo-modified.png"
            },
            "serviceType": "Entertainment",
            "areaServed": [
              {
                "@type": "City",
                "name": "Lahore",
                "addressCountry": "Pakistan"
              },
              {
                "@type": "Country",
                "name": "Pakistan"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Puppet Theatre Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Puppet Shows & Performances"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Puppet Workshops & Training"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Festival & Carnival Entertainment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Birthday Party Entertainment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "School & Educational Programs"
                  }
                }
              ]
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Venues",
                "value": "Lahore Fort, Lahore Zoo, Lahore Safari, Lahore Museum, Lahore WCLA, Emporium Mall, Packages Mall, Gold Crust Mall, Dolmen Mall, Global Village, Shahi Hamam, Rana Resorts, Oasis Water Park"
              },
              {
                "@type": "PropertyValue",
                "name": "Event Types",
                "value": "Annual Day, Sports Day, Graduation Day, Sufi Nights, Faculty Dinners, Schools Festivals, Day Trips"
              }
            ]
          })
        }}
      />
      <OSSPuppetTheatrePageClient />
    </>
  );
}
