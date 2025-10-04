import "../client/global.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClientProviders } from "../client/components/ClientProviders";

export const metadata = {
  title: 'OSS - One Stop Solutions',
  description: 'Premium events, theatrical entertainment and high-impact marketing — all under one roof.',
  icons: {
    icon: '/web-logo/tab-logo-modified.png',
    apple: '/web-logo/tab-logo-modified.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
