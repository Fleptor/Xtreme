(() => {
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (!menu || !nav) return;
  const setMenu = open => {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل');
    nav.classList.toggle('is-open', open);
  };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menu.focus(); }
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) setMenu(false); });
  function revealHash(focus = false) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    document.dispatchEvent(new CustomEvent('guide:reveal', { detail: { target } }));
    for (let element = target; element; element = element.parentElement) {
      if (element.tagName === 'DETAILS') element.open = true;
    }
    requestAnimationFrame(() => {
      if (focus) {
        const destination = target.matches('details') ? target.querySelector('summary') : target;
        if (destination.tabIndex < 0 && !destination.hasAttribute('tabindex')) destination.setAttribute('tabindex', '-1');
        destination.focus({ preventScroll: true });
      }
      target.scrollIntoView({ block: 'start' });
    });
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
    const url = new URL(link.href);
    if (!url.hash || url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
    if (!document.getElementById(decodeURIComponent(url.hash.slice(1)))) return;
    event.preventDefault();
    if (url.hash !== location.hash) history.pushState(null, '', url.hash);
    revealHash(true);
  });
  addEventListener('hashchange', () => revealHash(true));
  // Wait for all deferred scripts so initial FAQ filtering cannot hide the target again.
  document.addEventListener('DOMContentLoaded', () => revealHash(), { once: true });
  const links = [...nav.querySelectorAll('a')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  let queued = false;
  function update() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const progress = document.querySelector('.reading-progress');
    if (progress) progress.style.width = `${max > 0 ? Math.min(100, scrollY / max * 100) : 0}%`;
    let current = null;
    const threshold = document.querySelector('.site-header').getBoundingClientRect().height + 50;
    sections.forEach(section => { if (section.getBoundingClientRect().top <= threshold) current = section.id; });
    links.forEach(link => { if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    queued = false;
  }
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, {passive:true});
  addEventListener('resize', update);
  new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-offset', `${Math.ceil(document.querySelector('.site-header').getBoundingClientRect().height) + 20}px`);
    update();
  }).observe(document.querySelector('.site-header'));
  update();
})();
