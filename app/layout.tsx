import "../client/global.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClientProviders } from "../client/components/ClientProviders";

export const metadata = {
  title: 'OSS - OneStop Solutions',
  applicationName: 'OneStop Solutions',
  description: 'Premium events, theatrical entertainment and high-impact marketing — all under one roof.',
  icons: {
    icon: '/web-logo/tab-logo-modified.png',
    apple: '/web-logo/tab-logo-modified.png',
  },
  openGraph: {
    title: 'OneStop Solutions',
    description: 'Premium events, theatrical entertainment and high-impact marketing — all under one roof.',
    images: ['/web-logo/tab-logo-modified.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneStop Solutions',
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
       <head>
        {/* Google Search Console Verification - Replace with your actual verification code */}
        <meta name="google-site-verification" content="vULB0Jw0tgCBVIjHRgcQIVkBLytR1Y1r-qJ2u1J2GNg" />
      </head>
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
