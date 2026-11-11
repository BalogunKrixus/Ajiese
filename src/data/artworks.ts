/**
 * ARTWORKS
 * ---------------------------------------------------------------------------
 * To add a new work:
 *   1. Add an entry below (the order here is the order on the site).
 *   2. Put the original image file in  src/assets/artworks/<slug>.jpg  (or .png / .webp / .tif → convert to .png first).
 *   3. Optional close-ups: src/assets/artworks/<slug>/detail-1.jpg, detail-2.jpg …
 *
 * Images are only resized and re-encoded (AVIF / WebP). They are never cropped,
 * recoloured or altered. Until a file exists, a clearly labelled placeholder is shown.
 */

export interface DetailCrop {
  /** Focal point of the crop, as a percentage of the full artwork (0–100). */
  x: number;
  y: number;
  /** Magnification of the close-up, e.g. 2.5 = 250 %. */
  zoom: number;
  caption: string;
}

export interface Artwork {
  slug: string;
  title: string;
  /** Optional translation shown after the title, e.g. "Beauty". */
  translation?: string;
  year: number;
  medium: string;
  /** Leave null until the dimensions are confirmed — the site will say "To be confirmed". */
  dimensions: string | null;
  category: string;
  summary: string;
  description: string[];
  themes: string[];
  /** e.g. "Available — enquire", "Private collection", or null to hide. */
  availability: string | null;
  /** Descriptive alt text for the artwork image. */
  alt: string;
  /** Aspect ratio (width / height) used only for the placeholder before the real file is added. */
  placeholderRatio: number;
  /**
   * Close-up crops of the original file, used when no separate detail images are supplied.
   * Adjust the focal points once the artwork file is in place.
   */
  detailCrops: DetailCrop[];
  related?: string[];
}

export const artworks: Artwork[] = [
  {
    slug: 'the-quiet-weight',
    title: 'The Quiet Weight',
    year: 2026,
    medium: 'Digital artwork',
    dimensions: null, // Brief example: A2 (42 × 59.4 cm) — confirm before publishing.
    category: 'Contemporary digital portraiture',
    summary:
      'A portrait exploring fatherhood, care, protection and responsibility through the image of a father carrying a sleeping child.',
    description: [
      'The Quiet Weight explores fatherhood through the image of a father carrying a sleeping child. The physical act of carrying becomes a reflection on the quieter responsibilities of care, protection and emotional presence.',
      'Through simplified geometric forms, exaggerated proportions and patterned textile, the composition draws attention to the closeness between the two figures.',
      'The work considers the relationship between physical weight and the emotional responsibility that accompanies care.',
    ],
    themes: ['Fatherhood', 'Care', 'Protection', 'Responsibility'],
    availability: null,
    alt: 'The Quiet Weight by Ajiese: a digital portrait of a father carrying a sleeping child, built from simplified geometric forms, exaggerated proportions and patterned textile.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 50, y: 30, zoom: 2.4, caption: 'The two figures, held close' },
      { x: 40, y: 62, zoom: 2.8, caption: 'Patterned textile' },
      { x: 62, y: 45, zoom: 3, caption: 'Geometric construction' },
    ],
    related: ['ase', 'ewa'],
  },
  {
    slug: 'ewa',
    title: 'ẸWÀ',
    translation: 'Beauty',
    year: 2026,
    medium: 'Digital artwork',
    dimensions: null,
    category: 'Contemporary digital portraiture',
    summary:
      'A contemporary portrait exploring beauty, identity, adornment and self-expression through Nigerian visual references.',
    description: [
      'ẸWÀ explores beauty, identity and self-expression through a contemporary portrait of a Nigerian woman.',
      'Traditional dress, gele, adornment and personal styling become part of the visual language of the portrait. Bold colour, geometric simplification and graphic pattern bring cultural references into a contemporary digital composition.',
    ],
    themes: ['Beauty', 'Identity', 'Adornment', 'Self-expression'],
    availability: null,
    alt: 'ẸWÀ (Beauty) by Ajiese: a contemporary digital portrait of a Nigerian woman in traditional dress and gele, rendered in bold colour, geometric simplification and graphic pattern.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 50, y: 18, zoom: 2.4, caption: 'Gele' },
      { x: 50, y: 45, zoom: 2.8, caption: 'Adornment' },
      { x: 45, y: 75, zoom: 2.6, caption: 'Pattern and dress' },
    ],
    related: ['the-quiet-weight', 'ase'],
  },
  {
    slug: 'ase',
    title: 'ÀṢẸ',
    translation: 'Together',
    year: 2026,
    medium: 'Digital artwork',
    dimensions: null,
    category: 'Contemporary digital portraiture',
    summary: 'A portrait of two figures exploring connection, togetherness and cultural identity.',
    description: [
      'ÀṢẸ brings two figures together in a contemporary portrait that considers connection, togetherness and cultural identity.',
      'Traditional clothing, colour and pattern become visual markers of personal and cultural expression. The composition combines simplified geometric forms with the shared presence of the two figures.',
    ],
    themes: ['Connection', 'Togetherness', 'Cultural identity'],
    availability: null,
    alt: 'ÀṢẸ (Together) by Ajiese: a contemporary digital portrait of two figures in traditional clothing, composed from simplified geometric forms, colour and pattern.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 35, y: 30, zoom: 2.6, caption: 'First figure' },
      { x: 65, y: 30, zoom: 2.6, caption: 'Second figure' },
      { x: 50, y: 70, zoom: 2.8, caption: 'Clothing and pattern' },
    ],
    related: ['ewa', 'the-quiet-weight'],
  },
];

export const getArtwork = (slug: string) => artworks.find((a) => a.slug === slug);

/** "ẸWÀ (Beauty)" or "The Quiet Weight" */
export const fullTitle = (a: Pick<Artwork, 'title' | 'translation'>) =>
  a.translation ? `${a.title} (${a.translation})` : a.title;
