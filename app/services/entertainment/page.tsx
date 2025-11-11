import EntertainmentPageClient from './client.tsx';

export const metadata = {
  title: 'OSS Entertainment | Puppet Theatre Company Pakistan | Live Entertainment & Theatrical Productions',
  description: 'Professional puppet theatre company in Pakistan offering captivating live entertainment, theatrical productions, and interactive performances. From school programs to corporate events, we create magical experiences that educate and entertain audiences of all ages.',
  keywords: 'puppet theatre company Pakistan, live entertainment services, theatrical productions Pakistan, puppet shows for schools, corporate entertainment Pakistan, puppet theatre Lahore, live performances Karachi, theatrical entertainment services, puppet show productions, entertainment company Pakistan, educational entertainment, puppet theatre for events, theatrical productions Lahore, live entertainment Karachi, puppet shows Islamabad, entertainment production company, theatrical entertainment Pakistan, puppet theatre productions, live shows Pakistan, entertainment consultancy, performance arts Pakistan, theatre company Lahore, puppet entertainment services, theatrical productions Karachi, live entertainment Islamabad, puppet theatre experts, entertainment production Pakistan, theatrical entertainment company, puppet shows for corporate events, educational puppet theatre, entertainment services Pakistan, puppet theatre company Lahore, live entertainment services Karachi, theatrical productions Islamabad, puppet shows for schools Pakistan, corporate entertainment Lahore, puppet theatre Karachi, live performances Islamabad, theatrical entertainment company Pakistan, puppet show productions Lahore, entertainment company Karachi, educational entertainment Islamabad, puppet theatre for events Pakistan, theatrical productions company Lahore, live entertainment agency Karachi, puppet shows specialists Islamabad, entertainment production services Pakistan, theatrical entertainment experts Lahore, puppet theatre productions Karachi, live shows company Islamabad, entertainment consultancy Pakistan, performance arts specialists Lahore, theatre company Karachi, puppet entertainment services Islamabad, theatrical productions agency Pakistan, live entertainment experts Lahore, puppet theatre consultants Karachi, entertainment production company Islamabad, theatrical entertainment services Pakistan, puppet shows for corporate events Lahore, educational puppet theatre Karachi, entertainment services Islamabad, puppet theatre specialists Pakistan, live entertainment company Lahore, theatrical productions experts Karachi, puppet shows agency Islamabad, corporate entertainment services Pakistan, puppet theatre productions Lahore, live performances specialists Karachi, theatrical entertainment agency Islamabad, puppet show company Pakistan, entertainment production experts Lahore, theatrical entertainment consultants Karachi, puppet theatre services Islamabad, live shows agency Pakistan, entertainment consultancy Lahore, performance arts company Karachi, theatre specialists Islamabad, puppet entertainment agency Pakistan, theatrical productions services Lahore, live entertainment consultants Karachi, puppet theatre company Islamabad, entertainment production agency Pakistan, theatrical entertainment specialists Lahore, puppet shows experts Karachi, educational entertainment services Islamabad, puppet theatre for events Lahore, theatrical productions company Karachi, live entertainment services Islamabad, puppet shows specialists Pakistan, entertainment production consultants Lahore, theatrical entertainment agency Karachi, puppet theatre productions Islamabad, live shows experts Pakistan, entertainment consultancy Karachi, performance arts specialists Islamabad, theatre company Pakistan, puppet entertainment consultants Lahore, theatrical productions agency Karachi, live entertainment company Islamabad, puppet theatre experts Pakistan, entertainment production services Lahore, theatrical entertainment consultants Karachi, puppet shows agency Islamabad, corporate entertainment specialists Pakistan, puppet theatre services Lahore, live performances agency Karachi, theatrical entertainment services Islamabad, puppet show productions Pakistan, entertainment company Lahore, educational entertainment specialists Karachi, puppet theatre for events Islamabad, theatrical productions experts Pakistan, live entertainment agency Lahore, puppet shows consultants Karachi, entertainment production company Islamabad, theatrical entertainment experts Pakistan, puppet theatre agency Lahore, live shows specialists Karachi, entertainment consultancy Islamabad, performance arts agency Pakistan, theatre consultants Lahore, puppet entertainment services Karachi, theatrical productions company Islamabad, live entertainment specialists Pakistan, puppet theatre consultants Lahore, entertainment production experts Karachi, theatrical entertainment services Islamabad, puppet shows company Pakistan, educational puppet theatre Lahore, entertainment services Karachi, puppet theatre specialists Islamabad, live entertainment consultants Pakistan, theatrical productions agency Lahore, puppet shows experts Karachi, corporate entertainment agency Islamabad, puppet theatre productions Pakistan, live performances consultants Lahore, theatrical entertainment company Karachi, puppet show services Islamabad, entertainment production specialists Pakistan, theatrical entertainment consultants Lahore, puppet theatre agency Karachi, live shows company Islamabad, entertainment consultancy Pakistan, performance arts experts Lahore, theatre agency Karachi, puppet entertainment specialists Islamabad, theatrical productions services Pakistan, live entertainment agency Lahore, puppet theatre consultants Karachi, entertainment production company Islamabad, theatrical entertainment experts Pakistan, puppet shows specialists Lahore, educational entertainment agency Karachi, puppet theatre for events Islamabad, theatrical productions consultants Pakistan, live entertainment services Lahore, puppet shows agency Karachi, entertainment production experts Islamabad, theatrical entertainment agency Pakistan, puppet theatre company Lahore, live performances specialists Karachi, theatrical entertainment services Islamabad, puppet show productions Pakistan, entertainment company Lahore, educational entertainment consultants Karachi, puppet theatre for events Islamabad, theatrical productions experts Pakistan, live entertainment agency Lahore, puppet shows consultants Karachi, entertainment production company Islamabad, theatrical entertainment specialists Pakistan',
  openGraph: {
    title: 'OSS Entertainment | Puppet Theatre Company Pakistan',
    description: 'Professional puppet theatre and live entertainment services for schools, corporate events, and special occasions.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1759604815/4_ahjyom.jpg'],
    url: 'https://ossolutions.pk/services/entertainment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS Entertainment | Puppet Theatre & Live Shows Pakistan',
    description: 'Expert puppet theatre productions and live entertainment services across Pakistan.',
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