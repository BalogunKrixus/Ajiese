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
    'Ajiese is the artistic name of Christopher Balogun, a Leicester-based artist exploring identity, culture and memory through contemporary digital portraiture and collage.',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Press', href: '/press' },
  { label: 'Exhibitions', href: '/exhibitions' },
  { label: 'Contact', href: '/contact' },
] as const;
