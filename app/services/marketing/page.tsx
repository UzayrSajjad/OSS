import MarketingPageClient from './client.tsx';

export const metadata = {
  title: 'OSS Marketing | Brand Activation, Digital Campaigns & Experiential Marketing Solutions',
  description: 'Leading marketing solutions provider offering brand activation, digital campaigns, experiential pop-ups, influencer collaboration, and comprehensive marketing strategies. Drive engagement, footfall, and measurable ROI with creative staging and performance analysis.',
  keywords: 'brand activation, digital campaign, experiential pop-up, influencer collaboration, marketing solutions, brand activation services, digital marketing campaigns, experiential marketing, influencer marketing, marketing agency, brand promotion, marketing strategy, campaign management, social media marketing, content marketing, marketing consultancy, advertising agency, brand awareness, marketing ROI, performance marketing, creative marketing, marketing analytics, target audience, marketing budget, marketing planning, marketing execution, marketing measurement, marketing optimization, marketing automation, marketing technology, marketing trends, marketing innovation',
  openGraph: {
    title: 'OSS Marketing | Brand Activation & Digital Campaign Solutions',
    description: 'Comprehensive marketing solutions including brand activation, digital campaigns, experiential marketing, and influencer collaboration for measurable business results.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1760378624/Screenshot_From_2025-10-13_23-03-29_nohobk.png'],
    url: 'https://ossolutions.pk/services/marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Marketing | Brand Activation & Campaign Solutions',
    description: 'Expert marketing services for brand activation, digital campaigns, and experiential marketing that drive results.',
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
            "name": "Marketing Solutions",
            "description": "Comprehensive marketing services including brand activation, digital campaigns, experiential marketing, influencer collaboration, and performance-driven marketing strategies.",
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
                    "name": "Brand Activation Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Campaign Management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Experiential Marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Influencer Collaboration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Strategy & Analytics"
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
