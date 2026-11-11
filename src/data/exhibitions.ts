/**
 * EXHIBITIONS
 * ---------------------------------------------------------------------------
 * Only add confirmed information. Installation photographs go in
 *   src/assets/exhibitions/<slug>/  (any .jpg / .png / .webp — shown in file-name order)
 *
 * status:
 *   'scheduled'  → confirmed participation with dates. The site works out
 *                  "Upcoming", "On view" or "Exhibited" from the dates at build time.
 *   'exhibited'  → confirmed, already exhibited.
 *   'selected'   → selected, but participation arrangements are not yet confirmed.
 *                  Never shown as exhibited.
 */

export type ExhibitionStatus = 'scheduled' | 'exhibited' | 'selected';

export interface Exhibition {
  slug: string;
  title: string;
  organiser: string | null;
  venue: string | null;
  city: string | null;
  country: string | null;
  year: number;
  /** ISO dates (YYYY-MM-DD). Leave null when not confirmed. */
  startDate: string | null;
  endDate: string | null;
  artwork: string; // artwork slug
  status: ExhibitionStatus;
  /** Extra line explaining the status, shown with the status label. */
  statusNote?: string;
  introduction: string[];
  /** Short reflection or notes from the artist. Hidden while empty. */
  artistNotes: string[];
  /** Other participating artists, where appropriate. Hidden while empty. */
  participatingArtists: string[];
  link?: string;
}

export const exhibitions: Exhibition[] = [
  {
    slug: 'sartori-exhibitions',
    title: 'Sartori Exhibitions',
    organiser: 'Sartori Exhibitions',
    venue: '67A York Street Gallery',
    city: 'London',
    country: 'United Kingdom',
    year: 2026,
    startDate: '2026-11-21',
    endDate: '2026-11-27',
    artwork: 'ase',
    status: 'scheduled',
    introduction: [
      'Ajiese presents ÀṢẸ (Together) with Sartori Exhibitions at 67A York Street Gallery in London, from 21 to 27 November 2026.',
      'The work brings two figures together in a contemporary portrait that considers connection, togetherness and cultural identity.',
    ],
    artistNotes: [],
    participatingArtists: [],
  },
  {
    slug: 'hit-and-run',
    title: 'Elephant Vision Lab',
    organiser: 'Hit & Run',
    venue: 'Triangle Pop Up',
    city: 'London',
    country: 'United Kingdom',
    year: 2026,
    startDate: '2026-11-14',
    endDate: '2026-11-14',
    artwork: 'the-quiet-weight',
    status: 'scheduled',
    introduction: [
      'Ajiese presents The Quiet Weight at Elephant Vision Lab, a Hit & Run exhibition at Triangle Pop Up in London on 14 November 2026.',
      'The work explores fatherhood through the image of a father carrying a sleeping child, reflecting on the quieter responsibilities of care, protection and emotional presence.',
    ],
    artistNotes: [],
    participatingArtists: [],
  },
  {
    slug: 'resonance',
    title: 'RESONANCE',
    organiser: 'OYEZ Arts',
    venue: 'Altrincham Town Hall',
    city: 'Altrincham',
    country: 'United Kingdom',
    year: 2026,
    startDate: null,
    endDate: null,
    artwork: 'ewa',
    status: 'exhibited',
    introduction: [
      'RESONANCE, organised by OYEZ Arts, took place at Altrincham Town Hall. Ajiese exhibited ẸWÀ (Beauty).',
      'The portrait explores beauty, identity and self-expression through traditional dress, gele, adornment and personal styling.',
    ],
    artistNotes: [],
    participatingArtists: [],
  },
  {
    slug: 'ifa-2026',
    title: 'IFA 2026 Visual Arts Exhibition',
    organiser: null,
    venue: null,
    city: null,
    country: null,
    year: 2026,
    startDate: null,
    endDate: null,
    artwork: 'ewa',
    status: 'selected',
    statusNote: 'Physical exhibition arrangements are not yet confirmed.',
    introduction: [
      'Ajiese has been selected for the IFA 2026 Visual Arts Exhibition with ẸWÀ (Beauty).',
      'Details of how the work will be presented will be shared here once the organiser confirms the participation arrangements.',
    ],
    artistNotes: [],
    participatingArtists: [],
  },
];

export const getExhibition = (slug: string) => exhibitions.find((e) => e.slug === slug);
