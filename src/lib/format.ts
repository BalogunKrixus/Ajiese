import type { Exhibition } from '../data/exhibitions';

const BUILD_DATE = new Date();
BUILD_DATE.setHours(0, 0, 0, 0);

const parse = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};

const dayMonth = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long' });
const full = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export function formatDate(iso: string) {
  return full.format(parse(iso));
}

/** "14 November 2026" · "21 to 27 November 2026" · "2026" */
export function formatDateRange(ex: Pick<Exhibition, 'startDate' | 'endDate' | 'year'>) {
  if (!ex.startDate) return String(ex.year);
  const s = parse(ex.startDate);
  const e = ex.endDate ? parse(ex.endDate) : s;
  if (s.getTime() === e.getTime()) return full.format(s);
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear())
    return `${s.getDate()} to ${full.format(e)}`;
  if (s.getFullYear() === e.getFullYear()) return `${dayMonth.format(s)} to ${full.format(e)}`;
  return `${full.format(s)} to ${full.format(e)}`;
}

export type StatusKey = 'upcoming' | 'on-view' | 'exhibited' | 'selected';

export function exhibitionStatus(ex: Exhibition): { key: StatusKey; label: string } {
  if (ex.status === 'selected') return { key: 'selected', label: 'Selected artist' };
  if (ex.status === 'exhibited') return { key: 'exhibited', label: 'Exhibited' };
  if (ex.startDate) {
    const s = parse(ex.startDate);
    const e = ex.endDate ? parse(ex.endDate) : s;
    if (BUILD_DATE < s) return { key: 'upcoming', label: 'Upcoming' };
    if (BUILD_DATE <= e) return { key: 'on-view', label: 'On view' };
    return { key: 'exhibited', label: 'Exhibited' };
  }
  return { key: 'upcoming', label: 'Upcoming' };
}

export const place = (ex: Pick<Exhibition, 'city' | 'country'>) =>
  [ex.city, ex.country].filter(Boolean).join(', ');

/** Sort: upcoming / on view first (soonest first), then past, then unconfirmed selections. */
export function sortExhibitions(list: Exhibition[]) {
  const rank = (e: Exhibition) => {
    const k = exhibitionStatus(e).key;
    return k === 'on-view' ? 0 : k === 'upcoming' ? 1 : k === 'exhibited' ? 2 : 3;
  };
  return [...list].sort((a, b) => {
    const r = rank(a) - rank(b);
    if (r) return r;
    const da = a.startDate ?? `${a.year}-12-31`;
    const db = b.startDate ?? `${b.year}-12-31`;
    return rank(a) <= 1 ? da.localeCompare(db) : db.localeCompare(da);
  });
}

/** Wraps characters in spans for the masked letter reveal. */
export const letters = (word: string) => Array.from(word.normalize('NFC'));
