/**
 * Structured data (schema.org JSON-LD). This is what lets search engines understand
 * that Ajiese and Christopher Balogun are the same person, which works are his,
 * and where he has exhibited.
 */
import { site } from '../data/site';
import type { Artwork } from '../data/artworks';
import type { Exhibition } from '../data/exhibitions';
import { fullTitle, getArtwork } from '../data/artworks';

const abs = (path: string, base: URL) => new URL(path, base).href;
export const artistId = (base: URL) => abs('/#artist', base);
export const websiteId = (base: URL) => abs('/#website', base);

const artistRef = (base: URL) => ({ '@id': artistId(base) });

/** The artist. `image` is the absolute URL of the portrait, if available. */
export const personSchema = (base: URL, image?: string) => ({
  '@type': 'Person',
  '@id': artistId(base),
  name: site.legalName,
  givenName: 'Christopher',
  familyName: 'Balogun',
  alternateName: ['Ajiese', 'AJIESE', 'Christopher Balogun (Ajiese)'],
  jobTitle: 'Artist',
  hasOccupation: { '@type': 'Occupation', name: 'Visual artist' },
  description: site.defaultDescription,
  url: abs('/', base),
  ...(image ? { image: { '@type': 'ImageObject', url: image, caption: `${site.legalName} (Ajiese)` } } : {}),
  email: `mailto:${site.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Leicester', addressCountry: 'GB' },
  homeLocation: { '@type': 'Place', name: 'Leicester, United Kingdom' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'De Montfort University', url: 'https://www.dmu.ac.uk/' },
  knowsAbout: site.knowsAbout,
  sameAs: site.sameAs,
});

export const websiteSchema = (base: URL) => ({
  '@type': 'WebSite',
  '@id': websiteId(base),
  name: 'Ajiese',
  alternateName: ['Christopher Balogun', 'Ajiese (Christopher Balogun)', 'ajiese.site'],
  url: abs('/', base),
  inLanguage: 'en-GB',
  description: site.defaultDescription,
  publisher: artistRef(base),
  author: artistRef(base),
});

export const breadcrumbSchema = (items: { name: string; path: string }[], base: URL) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path, base),
  })),
});

/** The About page: a profile page about the artist. */
export const profilePageSchema = (base: URL) => ({
  '@type': 'ProfilePage',
  url: abs('/about', base),
  name: `About ${site.legalName} (Ajiese)`,
  isPartOf: { '@id': websiteId(base) },
  mainEntity: artistRef(base),
  about: artistRef(base),
});

/** A page listing artworks (home "Selected works" and /work). */
export const collectionSchema = (artworks: Artwork[], base: URL, path: string, name: string) => ({
  '@type': 'CollectionPage',
  url: abs(path, base),
  name,
  isPartOf: { '@id': websiteId(base) },
  about: artistRef(base),
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: artworks.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(`/work/${a.slug}`, base),
      name: fullTitle(a),
    })),
  },
});

/** Reads "A2 (42 × 59.4 cm)" → width 42, height 59.4 */
function size(dimensions: string | null) {
  const m = dimensions?.match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*cm/);
  if (!m) return {};
  return {
    width: { '@type': 'Distance', name: `${m[1]} cm` },
    height: { '@type': 'Distance', name: `${m[2]} cm` },
  };
}

export const artworkSchema = (a: Artwork, base: URL, image?: string) => ({
  '@type': 'VisualArtwork',
  '@id': abs(`/work/${a.slug}#artwork`, base),
  name: fullTitle(a),
  alternateName: a.translation ? [a.title, a.translation] : undefined,
  url: abs(`/work/${a.slug}`, base),
  description: a.description.join(' '),
  abstract: a.summary,
  dateCreated: String(a.year),
  artMedium: a.medium,
  artform: 'Digital art',
  genre: a.category,
  keywords: [a.style, ...a.themes].filter(Boolean).join(', '),
  ...size(a.dimensions),
  ...(image
    ? {
        image: {
          '@type': 'ImageObject',
          url: image,
          caption: a.alt,
          creditText: `${site.legalName} (Ajiese)`,
          copyrightNotice: `© ${site.legalName}`,
          creator: artistRef(base),
        },
      }
    : {}),
  creator: artistRef(base),
  copyrightHolder: artistRef(base),
  copyrightYear: a.year,
  isPartOf: { '@id': websiteId(base) },
});

export const exhibitionSchema = (ex: Exhibition, base: URL) => {
  const art = getArtwork(ex.artwork);
  return {
    '@type': 'ExhibitionEvent',
    name: ex.title,
    url: abs(`/exhibitions/${ex.slug}`, base),
    description: ex.introduction.join(' '),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
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
    performer: artistRef(base),
    ...(art ? { workFeatured: { '@id': abs(`/work/${art.slug}#artwork`, base) } } : {}),
  };
};
