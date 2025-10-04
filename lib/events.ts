// Simple helper to provide event data for the detail route
import { events as rawEvents } from '../client/data/services';

export type Event = {
  id: number | string;
  title: string;
  image?: string;
  short?: string;
  long?: string;
  slug: string;
  images?: string[];
};

const toEvent = (e: any): Event => ({
  id: e.id,
  title: e.title,
  image: e.image,
  short: e.short,
  long: e.long,
  // generate a slug from title (lowercase, hyphens)
  slug: (e.slug as string) || (e.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  // for now, if images array doesn't exist, we'll use the single image as a one-item array
  images: e.images && e.images.length ? e.images : (e.image ? [e.image] : []),
});

export const getAllEvents = (): Event[] => rawEvents.map(toEvent);

export const getEventBySlug = (slug: string): Event | undefined => getAllEvents().find(e => e.slug === slug);
