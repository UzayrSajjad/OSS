import Link from 'next/link';
import EventManagementLahorePageClient from './client';

export const metadata = {
  title: 'Event Management Lahore | Professional Event Planners & Corporate Event Management Services',
  description: 'Leading event management company in Lahore offering professional event planning, corporate event management, wedding planning, and event production services. Trusted event planners serving Lahore and Punjab region.',
  keywords: 'event management Lahore, event planners Lahore, corporate event management Lahore, wedding event planning Lahore, event production company Lahore, professional event management Punjab, event coordination services Lahore, corporate event planning Lahore, wedding planners Lahore, event management services Pakistan, best event management company Lahore, professional event planners Lahore, corporate event coordination Lahore, event production Lahore, wedding event management Lahore, event consultancy Lahore, event planning experts Lahore',
  openGraph: {
    title: 'Event Management Lahore | Professional Event Planners',
    description: 'Leading event management company in Lahore offering comprehensive event planning and production services.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg'],
    url: 'https://ossolutions.pk/event-management-lahore',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Management Lahore | Professional Event Services',
    description: 'Expert event planning and management services in Lahore, Pakistan.',
    images: ['https://res.cloudinary.com/djetoiflq/image/upload/v1758978896/02_Entrance_Gate_gdbmpx.jpg'],
  },
  alternates: {
    canonical: 'https://ossolutions.pk/event-management-lahore',
  },
};

export default function EventManagementLahorePage() {
  return <EventManagementLahorePageClient />;
}