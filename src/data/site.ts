/**
 * Core artist information. Edit here and it updates across the whole site.
 */
export const site = {
  name: 'Ajiese',
  wordmark: 'AJIESE',
  legalName: 'Christopher Balogun',
  descriptor: 'Contemporary Digital Portraiture & Collage',
  location: 'Leicester, United Kingdom',
  locationShort: 'Leicester, UK',
  email: 'balogunkrixus@gmail.com',
  instagram: {
    handle: '@ajiese_',
    url: 'https://www.instagram.com/ajiese_/',
  },
  intro: 'Exploring identity, culture and memory through contemporary digital portraiture.',
  defaultDescription:
    'Ajiese is the artist name of Christopher Balogun, a Leicester-based artist making contemporary digital portraits and collage about identity, culture and memory.',
  /** Search-friendly name used in page titles. */
  seoName: 'Ajiese (Christopher Balogun)',
  /** Subjects the artist is known for, used in structured data for search engines. */
  knowsAbout: [
    'Contemporary art',
    'Digital art',
    'Digital portraiture',
    'Digital collage',
    'Portrait art',
    'Geometric illustration',
    'Nigerian visual culture',
    'Yoruba culture',
    'Identity',
    'Cultural heritage',
    'Photography',
  ],
  /** Other profiles that belong to the artist (add LinkedIn, Saatchi Art, etc. here). */
  sameAs: ['https://www.instagram.com/ajiese_/'],
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Photography', href: '/photography' },
  { label: 'Exhibitions', href: '/exhibitions' },
  { label: 'Contact', href: '/contact' },
] as const;
