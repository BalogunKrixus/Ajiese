/**
 * PHOTOGRAPHY
 * ---------------------------------------------------------------------------
 * To add a photograph:
 *   1. Put the file in  src/assets/photography/<id>.jpg  (or .png / .webp).
 *   2. Add an entry below with the same id. The order here is the order on the page.
 *
 * `frame` controls how the photo is cropped in the page layout:
 *   ratio  width / height of the frame (e.g. 4 / 5). Leave out to show the whole photo.
 *   x, y   the point to keep in view, as a percentage (50, 50 is the centre).
 * The full-screen view always shows the whole, uncropped photograph.
 */
export interface Photograph {
  id: string;
  title: string;
  year?: number;
  location?: string;
  /** Optional short caption shown under the photograph and in the full-screen view. */
  caption?: string;
  /** Describe what is in the photograph for people using screen readers. */
  alt: string;
  frame?: { ratio: number; x?: number; y?: number };
}

export const photographs: Photograph[] = [
  {
    id: 'under-the-open-sky',
    title: 'Under the Open Sky',
    alt: 'A man in a peach sweatshirt stands smiling on a grassy hillside, looking up at a wide evening sky streaked with pink and lilac cloud above autumn woodland.',
    frame: { ratio: 4 / 5, x: 53, y: 72 },
  },
  {
    id: 'the-gate',
    title: 'The Gate',
    alt: 'Black and white photograph of sheep gathered behind a wooden field gate, two of them looking straight at the camera, with trees and a long fence behind.',
    frame: { ratio: 4 / 3 },
  },
  {
    id: 'interlude',
    title: 'Interlude',
    alt: 'Black and white portrait of a man with curly hair in a dark shirt, seated on a leather banquette beneath exposed ductwork, a printed cotton bag across his lap.',
    frame: { ratio: 4 / 5, x: 50, y: 35 },
  },
  {
    id: 'first-bloom',
    title: 'First Bloom',
    alt: 'Branches of pink cherry blossom spread across a dark evergreen tree against a clear blue spring sky.',
    frame: { ratio: 4 / 5, x: 50, y: 30 },
  },
  {
    id: 'the-offering',
    title: 'The Offering',
    alt: 'A hand holds out a single yellow daffodil towards the camera, in front of a red jacket, with more daffodils blurred in the background.',
    frame: { ratio: 4 / 5, x: 50, y: 45 },
  },
];
