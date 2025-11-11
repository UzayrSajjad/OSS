import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '../../../client/components/Navbar';
import Footer from '../../../client/components/Footer';
import EventGallery from '../../../client/components/EventGallery';
import { getEventBySlug } from '../../../lib/events';

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };

  return {
    title: `${event.title} | OSS Events`,
    description: event.long || event.short,
    openGraph: {
      title: event.title,
      description: event.long || event.short,
      images: event.images?.[0] ? [event.images[0]] : [],
      url: `https://ossolutions.pk/events/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.long || event.short,
      images: event.images?.[0] ? [event.images[0]] : [],
    },
    alternates: {
      canonical: `https://ossolutions.pk/events/${slug}`,
    },
  };
}

export default async function EventPage({ params }: Props){
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[hsl(var(--background))] pt-28 md:pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <p className="text-[hsl(var(--muted-gray))] mb-6">{event.long}</p>

          {event.images && event.images.length > 0 && (
            <EventGallery images={event.images} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
