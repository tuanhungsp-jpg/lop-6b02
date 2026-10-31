(() => {
  const menu = document.getElementById('menu');
  const links = document.getElementById('links');
  const header = document.getElementById('siteHeader');
  if (!menu || !links || !header) return;
  function setOpen(open) {
    links.classList.toggle('show', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  }
  menu.onclick = () => setOpen(!links.classList.contains('show'));
  links.querySelectorAll('a').forEach(link => {
    link.onclick = () => setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && links.classList.contains('show')) {
      setOpen(false);
      menu.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) setOpen(false);
  });
  const desktop = matchMedia('(min-width: 901px)');
  desktop.addEventListener('change', () => setOpen(false));
  const anchors = [...links.querySelectorAll('a[href^="#"]')];
  const sections = anchors.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  let queued = false;
  function updateCurrent() {
    queued = false;
    const threshold = header.offsetHeight + Math.min(180, innerHeight * .25);
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section;
    }
    anchors.forEach(link => {
      const active = link.getAttribute('href') === `#${current.id}`;
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
  addEventListener('scroll', () => {
    if (!queued) {queued = true; requestAnimationFrame(updateCurrent);}
  }, {passive: true});
  updateCurrent();
})();
