import { site } from '../data/site';
import type { Artwork } from '../data/artworks';
import type { Exhibition } from '../data/exhibitions';
import { fullTitle, getArtwork } from '../data/artworks';

export const personSchema = (base: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': new URL('/#artist', base).href,
  name: site.legalName,
  alternateName: site.name,
  jobTitle: 'Artist',
  description: site.defaultDescription,
  url: new URL('/', base).href,
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Leicester', addressCountry: 'GB' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'De Montfort University' },
  sameAs: [site.instagram.url],
});

export const websiteSchema = (base: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ajiese',
  url: new URL('/', base).href,
  inLanguage: 'en-GB',
  author: { '@id': new URL('/#artist', base).href },
});

export const artworkSchema = (a: Artwork, base: URL, image?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'VisualArtwork',
  name: fullTitle(a),
  url: new URL(`/work/${a.slug}`, base).href,
  description: a.description.join(' '),
  dateCreated: String(a.year),
  artMedium: a.medium,
  artform: 'Digital artwork',
  genre: a.category,
  keywords: a.themes.join(', '),
  ...(image ? { image } : {}),
  creator: { '@type': 'Person', '@id': new URL('/#artist', base).href, name: site.legalName, alternateName: site.name },
});

export const exhibitionSchema = (ex: Exhibition, base: URL) => {
  const art = getArtwork(ex.artwork);
  return {
    '@context': 'https://schema.org',
    '@type': 'ExhibitionEvent',
    name: ex.title,
    url: new URL(`/exhibitions/${ex.slug}`, base).href,
    description: ex.introduction.join(' '),
    ...(ex.startDate ? { startDate: ex.startDate, endDate: ex.endDate ?? ex.startDate } : {}),
    ...(ex.venue
      ? {
          location: {
            '@type': 'Place',
            name: ex.venue,
            address: { '@type': 'PostalAddress', addressLocality: ex.city, addressCountry: ex.country },
          },
        }
      : {}),
    ...(ex.organiser ? { organizer: { '@type': 'Organization', name: ex.organiser } } : {}),
    performer: { '@type': 'Person', name: `${site.legalName} (${site.name})` },
    ...(art ? { workFeatured: { '@type': 'VisualArtwork', name: fullTitle(art), url: new URL(`/work/${art.slug}`, base).href } } : {}),
  };
};
