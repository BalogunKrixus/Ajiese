# Image folders

Drop the original files in and rebuild — no code changes needed. Until a file exists,
the site shows a clearly labelled placeholder in its place.

| What | Where | Notes |
| --- | --- | --- |
| Artwork (main image) | `artworks/<slug>.jpg` | `the-quiet-weight`, `ewa`, `ase`, `ebe`. JPG, PNG or WebP. Use the highest resolution available (2400 px+ on the long edge is ideal). |
| Artwork close-ups (optional) | `artworks/<slug>/detail-1.jpg`, `detail-2.jpg` … | If none are supplied, the site shows enlarged areas of the main file instead (focal points set in `src/data/artworks.ts`). |
| Artist portrait | `artist/portrait.jpg` | Used on the homepage and About page. |
| Installation photographs | `exhibitions/<slug>/01.jpg`, `02.jpg` … | `resonance`, `hit-and-run`, `sartori-exhibitions`, `ifa-2026`. |
| Photography | `photography/<id>.jpg` | `id` matches the entry in `src/data/photography.ts`. Shown uncropped. |
| Press thumbnails | `press/<id>.jpg` | `id` matches the entry in `src/data/press.ts`. |

Images are only resized and re-encoded (AVIF / WebP). They are never cropped,
recoloured or altered.
