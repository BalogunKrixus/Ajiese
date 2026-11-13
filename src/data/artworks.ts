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
  /** Optional style line, e.g. "Geometric digital illustration". */
  style?: string;
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
    dimensions: 'A2 (42 × 59.4 cm)',
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
    alt: 'The Quiet Weight by Ajiese: a father in a white kaftan and red cap carries a sleeping child on his back, wrapped in brightly patterned cloth, against a yellow circle on a deep green ground.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 62, y: 38, zoom: 2.6, caption: 'The sleeping child' },
      { x: 68, y: 57, zoom: 2.6, caption: 'Patterned textile' },
      { x: 44, y: 28, zoom: 2.6, caption: 'Geometric construction' },
    ],
    related: ['ase', 'ewa'],
  },
  {
    slug: 'ewa',
    title: 'ẸWÀ',
    translation: 'Beauty',
    year: 2026,
    medium: 'Digital artwork',
    dimensions: 'A2 (42 × 59.4 cm)',
    category: 'Contemporary digital portraiture',
    summary:
      'A contemporary portrait exploring beauty, identity, adornment and self-expression through Nigerian visual references.',
    description: [
      'ẸWÀ explores beauty, identity and self-expression through a contemporary portrait of a Nigerian woman.',
      'Traditional dress, gele, adornment and personal styling become part of the visual language of the portrait. Bold colour, geometric simplification and graphic pattern bring cultural references into a contemporary digital composition.',
    ],
    themes: ['Beauty', 'Identity', 'Adornment', 'Self-expression'],
    availability: null,
    alt: 'ẸWÀ (Beauty) by Ajiese: a Nigerian woman in a folded blue, red and white striped gele and matching dress, with coral beads and earrings, against a patterned mustard-yellow ground.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 52, y: 21, zoom: 2.2, caption: 'Gele' },
      { x: 52, y: 46, zoom: 2.4, caption: 'Adornment' },
      { x: 51, y: 80, zoom: 2.4, caption: 'Pattern and dress' },
    ],
    related: ['the-quiet-weight', 'ase'],
  },
  {
    slug: 'ase',
    title: 'ÀṢẸ',
    translation: 'Together',
    year: 2026,
    medium: 'Digital artwork',
    dimensions: 'A2 (42 × 59.4 cm)',
    category: 'Contemporary digital portraiture',
    summary: 'A portrait of two figures exploring connection, togetherness and cultural identity.',
    description: [
      'ÀṢẸ brings two figures together in a contemporary portrait that considers connection, togetherness and cultural identity.',
      'Traditional clothing, colour and pattern become visual markers of personal and cultural expression. The composition combines simplified geometric forms with the shared presence of the two figures.',
    ],
    themes: ['Connection', 'Togetherness', 'Cultural identity'],
    availability: null,
    alt: 'ÀṢẸ (Together) by Ajiese: a woman in a red patterned dress and a man in a red cap lean close together, his head resting on his hand, against a warm orange ground.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 36, y: 28, zoom: 2.4, caption: 'First figure' },
      { x: 69, y: 40, zoom: 2.4, caption: 'Second figure' },
      { x: 19, y: 77, zoom: 2.6, caption: 'Clothing and pattern' },
    ],
    related: ['ewa', 'the-quiet-weight'],
  },
  {
    slug: 'ebe',
    title: 'Ẹ̀BẸ̀',
    translation: 'A Plea',
    year: 2026,
    medium: 'Digital art',
    dimensions: 'A2 (42 × 59.4 cm)',
    category: 'Contemporary digital portraiture',
    style: 'Geometric digital illustration',
    summary:
      'A reflection on vulnerability, emotional expression and the courage to ask for understanding. Through the symbol of a heart held in open hands, the work explores the human need for compassion and connection.',
    description: [
      'Ẹ̀BẸ̀ explores vulnerability through the symbolic image of a heart held between two hands. The central figure, dressed in a striking red headwrap and patterned garment, represents the emotional weight of asking to be heard, understood and acknowledged.',
      'The heart becomes a symbol of sincerity, openness and the willingness to make oneself vulnerable. Through the relationship between the figure and the hands, the work considers the importance of compassion and the human need for connection.',
      'Combining bold geometric forms, expressive gestures and layered colours, the piece reflects on the courage it takes to make a plea and the humanity behind every request for understanding.',
    ],
    themes: ['Vulnerability', 'Emotional expression', 'Compassion', 'Connection'],
    availability: null,
    alt: 'Ẹ̀BẸ̀ (A Plea) by Ajiese: a woman in a folded red geometric headwrap, coral beads and a red and white patterned garment looks towards a pair of hands holding a red heart, against a soft watercolour sky.',
    placeholderRatio: 42 / 59.4,
    detailCrops: [
      { x: 22, y: 60, zoom: 2.4, caption: 'The heart held in open hands' },
      { x: 62, y: 30, zoom: 2.2, caption: 'The red headwrap' },
      { x: 76, y: 86, zoom: 2.4, caption: 'Patterned garment' },
    ],
    related: ['ewa', 'ase'],
  },
];

export const getArtwork = (slug: string) => artworks.find((a) => a.slug === slug);

/** "ẸWÀ (Beauty)" or "The Quiet Weight" */
export const fullTitle = (a: Pick<Artwork, 'title' | 'translation'>) =>
  a.translation ? `${a.title} (${a.translation})` : a.title;
