import type { ImageMetadata } from 'astro';

/**
 * Looks up supplied images by convention, so new files only need to be dropped
 * into src/assets/…, no code changes. Missing images fall back to labelled placeholders.
 */
const files = import.meta.glob<ImageMetadata>('/src/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});

const entries = Object.entries(files).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

const stem = (path: string) => path.replace(/\.[^.]+$/, '');

function single(base: string): ImageMetadata | undefined {
  return entries.find(([p]) => stem(p) === base)?.[1];
}

function inFolder(folder: string): ImageMetadata[] {
  return entries.filter(([p]) => p.startsWith(folder + '/')).map(([, img]) => img);
}

export const artworkImage = (slug: string) => single(`/src/assets/artworks/${slug}`);
export const artworkDetails = (slug: string) => inFolder(`/src/assets/artworks/${slug}`);
export const artistPortrait = () => single('/src/assets/artist/portrait');
export const artistStudio = () => single('/src/assets/artist/studio');
export const exhibitionImages = (slug: string) => inFolder(`/src/assets/exhibitions/${slug}`);
export const pressImage = (id: string) => single(`/src/assets/press/${id}`);
export const photographImage = (id: string) => single(`/src/assets/photography/${id}`);
