import Link from 'next/link';
import { services } from '../../client/data/services';

export const metadata = {
  title: 'OSS Services | Event Management Company Pakistan | Marketing & Entertainment Solutions',
  description: 'Complete business solutions in Pakistan: professional event management, digital marketing agency services, and puppet theatre entertainment. From corporate events to brand activation campaigns, we deliver excellence across Lahore, Karachi, and Islamabad.',
  keywords: 'event management company Pakistan, digital marketing agency Pakistan, puppet theatre company Pakistan, corporate event planning Lahore, brand activation services Karachi, event production company Pakistan, marketing consultancy Pakistan, live entertainment services, theatrical productions Pakistan, event planning experts, digital campaign management, experiential marketing Pakistan, influencer marketing agency, event coordination services, marketing strategy consultants, puppet shows for schools, corporate entertainment Pakistan, event management services Lahore, digital marketing campaigns Karachi, puppet theatre productions Islamabad, professional event management Pakistan, marketing agency Pakistan, entertainment production company, event planning and execution, brand activation company Pakistan, theatrical entertainment services, event consultancy Pakistan, marketing ROI optimization, puppet theatre for events, corporate event management Pakistan, digital marketing solutions, live performances Pakistan, event management experts, marketing analytics services, entertainment consultancy Pakistan',
  openGraph: {
    title: 'OSS Services | Complete Business Solutions Pakistan',
    description: 'Professional event management, digital marketing, and entertainment services across Pakistan.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1759611715/Events_n_Entertainment_dgjdf2.webp'],
    url: 'https://ossolutions.pk/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Services | Event Management & Marketing Pakistan',
    description: 'Complete business solutions: events, marketing, and entertainment services in Pakistan.',
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
            "@type": "Organization",
            "name": "OneStop Solutions",
            "url": "https://ossolutions.pk/services",
            "description": "Comprehensive business solutions including event management, marketing campaigns, and entertainment services.",
            "serviceType": ["Event Management", "Marketing", "Entertainment"],
            "areaServed": "Pakistan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Event Management Services",
                    "description": "Professional event planning, execution, and management services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Solutions",
                    "description": "Brand activation, digital campaigns, and experiential marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Entertainment Services",
                    "description": "Puppet theatre productions and live entertainment experiences"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold brand-headline mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-[hsl(var(--muted-gray))] max-w-3xl mx-auto">
              Three pillars of excellence that transform your vision into reality. From unforgettable events to impactful marketing campaigns, we deliver comprehensive solutions tailored to your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(174,29,54,0.4)] transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Service Icon */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="w-16 h-16 bg-[#AE1D36] rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 font-[Outfit]">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-gray))] text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Service Links */}
                  <div className="space-y-3">
                    {service.title === 'EVENTS' && (
                      <Link
                        href="/services/events"
                        className="block w-full bg-[#AE1D36] hover:bg-[#8B1729] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-center"
                      >
                        Explore Events →
                      </Link>
                    )}
                    {service.title === 'Marketing' && (
                      <Link
                        href="/services/marketing"
                        className="block w-full bg-[#AE1D36] hover:bg-[#8B1729] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-center"
                      >
                        Explore Marketing →
                      </Link>
                    )}
                    {service.title === 'PUPPETRY' && (
                      <Link
                        href="/services/oss-puppet-theatre"
                        className="block w-full bg-[#AE1D36] hover:bg-[#8B1729] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-center"
                      >
                        Explore Puppet Theatre →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[Outfit]">
                Ready to Bring Your Vision to Life?
              </h2>
              <p className="text-lg text-[hsl(var(--muted-gray))] mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can help you achieve your goals. From concept to execution, we're here to make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-[#AE1D36] hover:bg-[#8B1729] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/#contact"
                  className="border-2 border-[#AE1D36] text-[#AE1D36] hover:bg-[#AE1D36] hover:text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}