# AJIESE: artist portfolio website

The online home of **Ajiese** (Christopher Balogun): contemporary digital portraiture and collage.
A fast, static site built with [Astro](https://astro.build), no client-side framework, and about 2 kB of JavaScript.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

Requires Node 18.20+ (Node 20 or 22 recommended).

## Pages

| URL | Page |
| --- | --- |
| `/` | Home: hero, selected works, artist introduction, exhibitions, contact invitation |
| `/work`, `/work/<slug>` | All works; one page per artwork (`the-quiet-weight`, `ewa`, `ase`) |
| `/photography` | Photography gallery |
| `/about` | Biography, artist statement, themes, approach, background |
| `/exhibitions`, `/exhibitions/<slug>` | Exhibition archive; one page per exhibition |

## Updating content

All content is in plain, commented TypeScript files. Edit them, then rebuild.

- **Artist details:** `src/data/site.ts`
- **Artworks:** `src/data/artworks.ts`. Add an entry and the work appears on the homepage, the works index and its own page.
- **Exhibitions:** `src/data/exhibitions.ts`. For `status: 'scheduled'`, the label (Upcoming / On view / Exhibited) is worked out from the dates **at build time**, so rebuild after an exhibition ends. `'selected'` is never shown as exhibited.
- **Photography:** `src/data/photography.ts`. Put each photo in `src/assets/photography/` with a descriptive file name, then add an entry with that name (without the extension) and a screen-reader description. The page is a gallery: no titles are shown.
- **Press page (hidden for now):** `src/pages/_press.astro`. To publish it, rename it to `press.astro` and add Press back to the menu in `src/data/site.ts`.
- **Press features and press kit:** `src/data/press.ts`. Put downloadable files in `public/press-kit/` and set `file`. Items without a file show "In preparation".
- **Images:** see `src/assets/README.md`. Drop files into the right folder; placeholders disappear automatically.

## Contact

There is no contact page or form. Visitors use the email and Instagram links in the footer,
and the enquiry buttons on the homepage, About, works and Photography pages open an email
to the artist with the subject filled in.

## Deployment (ajiese.site)

The site is set up for **Netlify** (`netlify.toml`): build command `npm run build`, output `dist/`, Node 22,
and `SITE_URL=https://ajiese.site`. Every push to the deployed branch rebuilds the live site.

1. Sign in at netlify.com with GitHub, choose **Add new site → Import an existing project**, and pick `BalogunKrixus/Ajiese`.
2. Set the branch to deploy, then click **Deploy**. The settings are read from `netlify.toml`.
3. In **Domain management**, add `ajiese.site`, then add the DNS records Netlify shows at your domain registrar. HTTPS is issued automatically.

Any other static host also works (Cloudflare Pages, Vercel): build `npm run build`, output `dist/`.

## Search engines (SEO)

Built in: a unique title and description on every page that names Christopher Balogun (Ajiese);
structured data that tells search engines who the artist is (Person, with portrait, Instagram,
De Montfort University and Leicester), the website, every artwork (VisualArtwork, A2 size),
every exhibition (ExhibitionEvent), the About page (ProfilePage) and breadcrumbs; a sitemap;
share previews for social media; descriptive image alt text; and fast loading.

To get found on Google, the owner needs to:

1. Add the site to **Google Search Console** (search.google.com/search-console). Choose a
   **Domain** property for `ajiese.site` and verify it with the TXT record Google gives you
   (add it in Namecheap, Advanced DNS, as a TXT Record with Host `@`).
2. In Search Console, open **Sitemaps** and submit `https://ajiese.site/sitemap-index.xml`.
3. Use **URL Inspection** on the homepage and click **Request indexing**.
4. Repeat for **Bing Webmaster Tools** (it can import from Search Console).
5. Link to `https://ajiese.site` from Instagram and every other profile, and ask exhibition
   organisers to link to it. Add those profiles to `sameAs` in `src/data/site.ts`.

House style: no em dashes or en dashes anywhere on the site (titles and descriptions included).

## Design system

- **Palette:** white `#FFFFFF` page background, charcoal `#171717`, with muted olive, warm rust and sand used sparingly.
- **Type:** Cormorant Garamond (display serif and italics) with Inter (interface and body). Both are self-hosted, and both were checked to render the Yoruba characters in ẸWÀ and ÀṢẸ.
- **Motion:** masked letter reveal in the hero, line-by-line heading reveals, clip-path image reveals on scroll, cross-document page transitions with shared artwork transitions (Chromium and Safari 18.2+; other browsers navigate normally). Everything respects `prefers-reduced-motion`, and the site works fully without JavaScript.
- **Tokens and shared styles:** `src/styles/global.css`

## Before launch: content checklist

- [ ] Add the original artwork files (`src/assets/artworks/`)
- [ ] Add an approved artist portrait (`src/assets/artist/portrait.jpg`)
- [ ] Adjust the close-up focal points in `artworks.ts` once the real files are in, or supply detail images
- [ ] Add installation photographs as they become available
- [ ] Confirm the RESONANCE exhibition dates (currently shown as 2026 only)
- [ ] Confirm IFA 2026 participation arrangements before changing its status
- [ ] Add press kit files, or leave them as "In preparation"
