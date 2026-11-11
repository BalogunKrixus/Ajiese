/**
 * PRESS
 * ---------------------------------------------------------------------------
 * Add confirmed features only. While this list is empty, the Press page shows
 * clearly labelled sample layouts so the structure can be reviewed.
 * Thumbnails: src/assets/press/<id>.jpg
 */
export interface PressFeature {
  id: string;
  publication: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  url: string;
}

export const pressFeatures: PressFeature[] = [];

/**
 * PRESS KIT
 * Put the files in  public/press-kit/  and set `file` to its path, e.g. '/press-kit/ajiese-biography.pdf'.
 * Items without a file are shown as "In preparation" and cannot be downloaded.
 */
export interface PressKitItem {
  title: string;
  format: string;
  description: string;
  file: string | null;
}

export const pressKit: PressKitItem[] = [
  { title: 'Artist biography', format: 'PDF', description: 'Short and long biography of Ajiese (Christopher Balogun).', file: null },
  { title: 'Artist portrait', format: 'JPG', description: 'High-resolution approved portrait photograph with credit.', file: null },
  { title: 'Artist statement', format: 'PDF', description: 'The ideas behind the work, in the artist’s words.', file: null },
  { title: 'Selected artwork images', format: 'ZIP', description: 'High-resolution images of selected works with captions.', file: null },
  { title: 'Artist CV', format: 'PDF', description: 'Education, exhibitions and selections.', file: null },
  { title: 'Portfolio', format: 'PDF', description: 'A printable overview of the practice and recent work.', file: null },
];
