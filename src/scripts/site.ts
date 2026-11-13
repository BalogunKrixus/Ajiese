/**
 * Site-wide interaction: scroll reveals, header behaviour, mobile menu,
 * subtle hero drift. No external libraries.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Scroll reveals ---------- */
function initReveals() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  // Masked elements are fully clipped before they reveal, which hides them from
  // IntersectionObserver, so we observe their parent instead.
  const targets = new Map<Element, HTMLElement[]>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          targets.get(entry.target)?.forEach((el) => el.classList.add('is-in'));
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0 },
  );
  items.forEach((el) => {
    const target = el.dataset.reveal === 'mask' && el.parentElement ? el.parentElement : el;
    if (!targets.has(target)) targets.set(target, []);
    targets.get(target)!.push(el);
    io.observe(target);
  });
}

/* ---------- Header: solid after scroll, hides on scroll down ---------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    const goingDown = y > lastY + 4;
    const goingUp = y < lastY - 4;
    if (goingDown && y > 320 && !document.documentElement.classList.contains('menu-open')) {
      header.classList.add('is-hidden');
    } else if (goingUp || y < 120) {
      header.classList.remove('is-hidden');
    }
    lastY = y;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
  update();
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!btn || !menu) return;
  const root = document.documentElement;
  let closeTimer: number | undefined;

  const open = () => {
    window.clearTimeout(closeTimer);
    menu.hidden = false;
    // next frame so the clip-path transition runs
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('is-open')));
    btn.setAttribute('aria-expanded', 'true');
    root.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    (menu.querySelector('a') as HTMLElement | null)?.focus({ preventScroll: true });
  };
  const close = (returnFocus = true) => {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    root.classList.remove('menu-open');
    document.body.style.overflow = '';
    closeTimer = window.setTimeout(() => (menu.hidden = true), reduceMotion.matches ? 0 : 800);
    if (returnFocus) btn.focus({ preventScroll: true });
  };

  btn.addEventListener('click', () => (btn.getAttribute('aria-expanded') === 'true' ? close() : open()));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') close();
    // Keep focus inside menu + toggle while open
    if (e.key === 'Tab' && btn.getAttribute('aria-expanded') === 'true') {
      const focusables = [btn, ...Array.from(menu.querySelectorAll<HTMLElement>('a'))];
      const idx = focusables.indexOf(document.activeElement as HTMLElement);
      const next = e.shiftKey ? idx - 1 : idx + 1;
      if (idx === -1 || next < 0 || next >= focusables.length) {
        e.preventDefault();
        focusables[e.shiftKey ? focusables.length - 1 : 0].focus();
      }
    }
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => close(false)));
  window.matchMedia('(min-width: 861px)').addEventListener('change', (mq) => {
    if (mq.matches && btn.getAttribute('aria-expanded') === 'true') close(false);
  });
}

/* ---------- Subtle drift on selected elements ([data-drift="0.06"]) ---------- */
function initDrift() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-drift]'));
  if (!els.length || reduceMotion.matches) return;
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const factor = parseFloat(el.dataset.drift || '0.05');
      const offset = (r.top + r.height / 2 - vh / 2) * -factor;
      el.style.setProperty('--drift', `${offset.toFixed(1)}px`);
    }
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
  update();
}

/* ---------- Horizontal sequences: buttons + drag ---------- */
function initSequences() {
  document.querySelectorAll<HTMLElement>('[data-sequence]').forEach((wrap) => {
    const track = wrap.querySelector<HTMLElement>('[data-sequence-track]');
    if (!track) return;
    const prev = wrap.querySelector<HTMLButtonElement>('[data-sequence-prev]');
    const next = wrap.querySelector<HTMLButtonElement>('[data-sequence-next]');
    const step = () => (track.querySelector<HTMLElement>(':scope > *')?.offsetWidth ?? 300) + 24;
    const behavior: ScrollBehavior = reduceMotion.matches ? 'auto' : 'smooth';
    const sync = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    };
    prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior }));
    next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior }));
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  });
}

initReveals();
initHeader();
initMenu();
initDrift();
initSequences();

// Restore reveals when returning via back/forward cache
window.addEventListener('pageshow', (e) => {
  if (e.persisted) document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
});
