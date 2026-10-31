(() => {
  const $ = id => document.getElementById(id);
  const members = Array.from({length: 4}, (_, index) => ({id: index + 1, name: `Thành viên ${String(index + 1).padStart(2, '0')}`}));
  const roster = $('ybRoster'), thumbs = $('ybThumbs'), book = $('ybBook'), flip = $('ybFlip');
  if (!roster || !thumbs || !book) return;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, playing = false, timer = null, turning = false;
  const pad = value => String(value).padStart(2, '0');
  function render() {
    const member = members[current];
    $('ybNameLeft').textContent = member.name;
    $('ybName').textContent = member.name;
    $('ybPageTag').textContent = `THÀNH VIÊN ${pad(member.id)}`;
    $('ybCounter').textContent = `${pad(current + 1)} / ${pad(members.length)}`;
    [...roster.querySelectorAll('button'), ...thumbs.querySelectorAll('button')].forEach(button => {
      const active = Number(button.dataset.index) === current;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
  }
  function go(index) {
    if (turning) return;
    const next = (index + members.length) % members.length;
    if (next === current) return;
    if (motion.matches) { current = next; render(); return; }
    turning = true;
    flip.classList.add('turn');
    setTimeout(() => {current = next; render();}, 320);
    setTimeout(() => {flip.classList.remove('turn'); turning = false;}, 680);
  }
  function stop() {
    playing = false;
    clearInterval(timer);
    timer = null;
    $('ybPlay').setAttribute('aria-pressed', 'false');
    $('ybPlay').innerHTML = '<span class="yb-play-icon" aria-hidden="true">▶</span><span>Tự động lật trang</span>';
  }
  members.forEach((member, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.index = index;
    button.innerHTML = `<span class="yb-mini-photo"><img src="anh-lop-6b02.jpg" alt=""></span><span class="yb-roster-name"><small>${pad(member.id)}</small><strong>${member.name}</strong><em>Trang minh họa</em></span>`;
    button.addEventListener('click', () => {stop(); go(index);});
    roster.appendChild(button);
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.dataset.index = index;
    thumb.setAttribute('aria-label', `Mở trang ${member.name}`);
    thumb.innerHTML = `<img src="anh-lop-6b02.jpg" alt=""><span>${pad(member.id)}</span>`;
    thumb.addEventListener('click', () => {stop(); go(index);});
    thumbs.appendChild(thumb);
  });
  function normalize(value) {return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLocaleLowerCase('vi');}
  $('ybSearch').addEventListener('input', event => {
    const query = normalize(event.target.value.trim());
    let shown = 0;
    roster.querySelectorAll('button').forEach(button => {
      button.hidden = !normalize(button.textContent).includes(query);
      if (!button.hidden) shown++;
    });
    let empty = roster.querySelector('.yb-roster-empty');
    if (!shown && !empty) {empty = document.createElement('p'); empty.className = 'yb-roster-empty'; empty.textContent = 'Không tìm thấy thành viên'; roster.appendChild(empty);}
    else if (shown && empty) empty.remove();
  });
  $('ybPrev').addEventListener('click', () => {stop(); go(current - 1);});
  $('ybNext').addEventListener('click', () => {stop(); go(current + 1);});
  $('ybPlay').addEventListener('click', () => {
    if (playing) {stop(); return;}
    playing = true;
    $('ybPlay').setAttribute('aria-pressed', 'true');
    $('ybPlay').innerHTML = '<span class="yb-play-icon" aria-hidden="true">Ⅱ</span><span>Dừng lật trang</span>';
    timer = setInterval(() => {if (!turning && !document.hidden) go(current + 1);}, 4200);
  });
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const element = document.activeElement;
    if (element && (['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName) || element.isContentEditable)) return;
    const bounds = book.getBoundingClientRect();
    if (bounds.bottom < 0 || bounds.top > innerHeight) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); stop(); go(current + (event.key === 'ArrowRight' ? 1 : -1));}
  });
  document.addEventListener('visibilitychange', () => {if (document.hidden) stop();});
  render();
})();
