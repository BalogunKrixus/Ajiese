/**
 * PHOTOGRAPHY
 * ---------------------------------------------------------------------------
 * To add a photograph:
 *   1. Put the file in  src/assets/photography/<id>.jpg  (or .png / .webp).
 *   2. Add an entry below with the same id. The order here is the order on the page.
 *
 * Photographs are shown at their original proportions and never cropped.
 * While this list is empty, the page shows a labelled layout preview.
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
}

export const photographs: Photograph[] = [];
