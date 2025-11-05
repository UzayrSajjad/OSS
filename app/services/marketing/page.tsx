import MarketingPageClient from './client';

export const metadata = {
  title: 'OSS Marketing | Brand Activation, Digital Marketing & Marketing Consultancy Experts',
  description: 'Leading marketing agency providing brand activation, digital marketing campaigns, experiential marketing, influencer collaboration, brand strategy, marketing consultancy, social media marketing, content creation, event marketing, product launches, brand awareness campaigns, creative agency services, advertising solutions, media planning, brand promotion, marketing solutions, digital strategy, and marketing expert services. Comprehensive marketing solutions for businesses and brands.',
  keywords: 'brand activation, digital marketing, experiential marketing, influencer collaboration, brand strategy, marketing consultancy, social media marketing, content creation, event marketing, product launches, brand awareness, marketing campaigns, creative agency, advertising, media planning, brand promotion, marketing solutions, digital strategy, marketing experts, marketing agency, brand management, campaign management, digital campaigns, experiential pop-ups, influencer marketing, content marketing, social media strategy, marketing consultancy services, brand building, marketing solutions Pakistan, digital marketing agency, creative marketing, promotional campaigns, brand activation events, experiential branding, influencer partnerships, content strategy, social media management, marketing automation, SEO marketing, PPC campaigns, email marketing, marketing analytics, brand positioning, marketing research, competitive analysis, marketing planning, campaign execution, marketing ROI, performance marketing, integrated marketing, omnichannel marketing, marketing technology, marketing innovation, brand storytelling, customer engagement, marketing consultancy Lahore, digital marketing experts, creative advertising, promotional materials, brand identity, marketing communications, strategic marketing, tactical marketing, marketing specialists, marketing professionals, marketing consultancy firm, brand development, marketing strategy development, campaign planning, marketing execution, marketing measurement, marketing optimization, brand equity, customer loyalty, marketing insights, data-driven marketing',
  openGraph: {
    title: 'OSS Marketing | Brand Activation & Digital Marketing Experts',
    description: 'Professional marketing agency offering brand activation, digital campaigns, experiential marketing, and comprehensive marketing solutions.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1760378624/Screenshot_From_2025-10-13_23-03-29_nohobk.png'],
    url: 'https://ossolutions.pk/services/marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Marketing | Brand Activation & Marketing Consultancy',
    description: 'Expert marketing services including brand activation, digital marketing, and strategic marketing solutions.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1760378624/Screenshot_From_2025-10-13_23-03-29_nohobk.png'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/services/marketing',
  },
};

export default function MarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Marketing & Brand Activation Services",
            "description": "Comprehensive marketing services including brand activation, digital marketing, experiential marketing, influencer collaboration, and strategic marketing solutions.",
            "provider": {
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "logo": "https://ossolutions.pk/web-logo/tab-logo-modified.png"
            },
            "serviceType": "Marketing",
            "areaServed": "Pakistan",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Activation & Experiential Marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing & Social Media"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Influencer Collaboration & Partnerships"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Creation & Campaign Management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Strategy & Consultancy"
                  }
                }
              ]
            }
          })
        }}
      />
      <MarketingPageClient />
    </>
  );
}
