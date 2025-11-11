import "../client/global.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClientProviders } from "../client/components/ClientProviders";

export const metadata = {
  title: 'OSS - OneStop Solutions | Event Management Company Pakistan | Marketing & Entertainment Services',
  applicationName: 'OneStop Solutions',
  description: 'Leading event management company in Pakistan offering professional event planning, digital marketing agency services, and puppet theatre entertainment. From corporate events to brand activation campaigns, we deliver excellence across Lahore, Karachi, and Islamabad.',
  metadataBase: new URL('https://ossolutions.pk'),
  keywords: 'OneStop Solutions Pakistan, event management company Pakistan, digital marketing agency Pakistan, puppet theatre company Pakistan, corporate event planning Lahore, brand activation services Karachi, event production company Pakistan, marketing consultancy Pakistan, live entertainment services, theatrical productions Pakistan, event planning experts, digital campaign management, experiential marketing Pakistan, influencer marketing agency, event coordination services, marketing strategy consultants, puppet shows for schools, corporate entertainment Pakistan, event management services Lahore, digital marketing campaigns Karachi, puppet theatre productions Islamabad, professional event management Pakistan, marketing agency Pakistan, entertainment production company, event planning and execution, brand activation company Pakistan, theatrical entertainment services, event consultancy Pakistan, marketing ROI optimization, puppet theatre for events, corporate event management Pakistan, digital marketing solutions, live performances Pakistan, event management experts, marketing analytics services, entertainment consultancy Pakistan, OSS Pakistan, OneStop Solutions Lahore, event management Karachi, marketing agency Islamabad',
  icons: {
    icon: '/web-logo/tab-logo-modified.png',
    apple: '/web-logo/tab-logo-modified.png',
  },
  openGraph: {
    title: 'OSS - OneStop Solutions | Event Management Company Pakistan',
    description: 'Leading event management company offering professional event planning, digital marketing, and entertainment services across Pakistan.',
    images: ['/web-logo/tab-logo-modified.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSS - OneStop Solutions | Event Management Pakistan',
    images: ['/web-logo/tab-logo-modified.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden w-full">
        <ClientProviders>
          {/* JSON-LD Organization schema to help search engines pick correct site name & logo */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OneStop Solutions",
              "url": "https://ossolutions.pk",
              "logo": "https://ossolutions.pk/web-logo/tab-logo-modified.png"
            }) }}
          />

          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
