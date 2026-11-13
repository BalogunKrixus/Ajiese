/**
 * PHOTOGRAPHY GALLERY
 * ---------------------------------------------------------------------------
 * To add a photograph:
 *   1. Put the file in  src/assets/photography/  with a descriptive name,
 *      e.g. evening-sky-over-the-hills.jpg  (not the camera or WhatsApp name).
 *   2. Add an entry below: `id` is the file name without the extension, and
 *      `alt` describes the photo for people using screen readers.
 * The order here is the order on the page. Nothing here is shown as visible text.
 */
export interface Photograph {
  id: string;
  /** Describes the photograph for screen readers and search engines. Not shown on the page. */
  alt: string;
}

export const photographs: Photograph[] = [
  {
    id: 'under-the-open-sky',
    alt: 'A man in a peach sweatshirt stands smiling on a grassy hillside, looking up at a wide evening sky streaked with pink and lilac cloud above autumn woodland.',
  },
  {
    id: 'the-gate',
    alt: 'Black and white photograph of sheep gathered behind a wooden field gate, two of them looking straight at the camera, with trees and a long fence behind.',
  },
  {
    id: 'interlude',
    alt: 'Black and white portrait of a man with curly hair in a dark shirt, seated on a leather banquette beneath exposed ductwork, a printed cotton bag across his lap.',
  },
  {
    id: 'first-bloom',
    alt: 'Branches of pink cherry blossom spread across a dark evergreen tree against a clear blue spring sky.',
  },
  {
    id: 'the-offering',
    alt: 'A hand holds out a single yellow daffodil towards the camera, in front of a red jacket, with more daffodils blurred in the background.',
  },
  {
    id: 'garden-path-by-the-thatched-hut',
    alt: 'Black and white photograph of a woman in a bucket hat and patterned shorts standing on a garden path beside a thatched hut, large clay pots and tropical plants around her.',
  },
  {
    id: 'city-facade-and-red-bus',
    alt: 'Black and white photograph looking up at a modern office building with a grid of framed windows reflecting the street, a double-decker bus passing below in the sunlight.',
  },
  {
    id: 'leicester-square-at-dusk',
    alt: 'Leicester Square in London at dusk under a deep blue sky, with the lit Vue cinema sign, the Hippodrome Casino and tall billboards for West End musicals above the crowd.',
  },
  {
    id: 'among-the-portraits',
    alt: 'A smiling man in a grey and white fleece and jeans stands in a gallery among sculpted busts on marble plinths, in front of a wall covered in black profile silhouettes.',
  },
  {
    id: 'two-women-smiling',
    alt: 'Black and white photograph of two smiling women seated at a table, both wearing patterned headwraps and prints, one raising a peace sign.',
  },
];
