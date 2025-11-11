import MarketingPageClient from './client.tsx';

export const metadata = {
  title: 'OSS Marketing | Digital Marketing Agency Pakistan | Brand Activation & Campaign Management',
  description: 'Premier digital marketing agency in Pakistan specializing in brand activation, digital campaigns, experiential marketing, and influencer collaborations. Drive engagement, increase ROI, and build brand awareness with our data-driven marketing solutions.',
  keywords: 'digital marketing agency Pakistan, brand activation services, digital marketing campaigns, experiential marketing Pakistan, influencer marketing agency, marketing consultancy Lahore, brand activation company Karachi, digital campaign management, experiential pop-up marketing, influencer collaboration services, marketing agency Pakistan, brand promotion services, marketing strategy consultants, campaign management company, social media marketing Pakistan, content marketing agency, marketing ROI optimization, brand awareness campaigns, marketing analytics services, target audience marketing, marketing budget optimization, marketing planning experts, marketing execution services, marketing measurement tools, marketing optimization Pakistan, marketing automation services, marketing technology solutions, marketing trends Pakistan, marketing innovation agency, creative marketing solutions, digital marketing consultants Lahore, marketing agency Karachi, brand activation specialists Islamabad, digital campaign experts Pakistan, experiential marketing company Lahore, influencer marketing services Karachi, marketing consultancy Islamabad, brand promotion agency Pakistan, marketing strategy firm Lahore, campaign management specialists Karachi, social media marketing agency Islamabad, content marketing consultants Pakistan, marketing ROI experts Lahore, brand awareness company Karachi, marketing analytics services Islamabad, target audience specialists Pakistan, marketing budget consultants Lahore, marketing planning agency Karachi, marketing execution experts Islamabad, marketing measurement tools Pakistan, marketing optimization company Lahore, marketing automation services Karachi, marketing technology solutions Islamabad, marketing trends agency Pakistan, marketing innovation specialists Lahore, creative marketing solutions Karachi, digital marketing firm Islamabad, brand activation agency Pakistan, digital marketing campaigns Lahore, experiential marketing services Karachi, influencer marketing company Islamabad, marketing consultancy Pakistan, brand promotion specialists Lahore, marketing strategy agency Karachi, campaign management company Islamabad, social media marketing experts Pakistan, content marketing specialists Lahore, marketing ROI agency Karachi, brand awareness services Islamabad, marketing analytics company Pakistan, target audience consultants Lahore, marketing budget specialists Karachi, marketing planning company Islamabad, marketing execution agency Pakistan, marketing measurement consultants Lahore, marketing optimization services Karachi, marketing automation company Islamabad, marketing technology agency Pakistan, marketing trends specialists Lahore, marketing innovation company Karachi, creative marketing agency Islamabad',
  openGraph: {
    title: 'OSS Marketing | Digital Marketing Agency Pakistan',
    description: 'Leading digital marketing agency offering brand activation, campaigns, and experiential marketing solutions.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1760378624/Screenshot_From_2025-10-13_23-03-29_nohobk.png'],
    url: 'https://ossolutions.pk/services/marketing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Marketing | Digital Marketing Agency Pakistan',
    description: 'Expert digital marketing services for brand activation, campaigns, and measurable marketing ROI.',
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
