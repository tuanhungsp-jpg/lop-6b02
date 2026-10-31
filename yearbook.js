/* Locally hosted StPageFlip turns real HTML pages, including both printed faces. */
(() => {
  const $ = id => document.getElementById(id);
  const book = $('ybBook'), roster = $('ybRoster'), thumbs = $('ybThumbs');
  if (!book || !roster || !thumbs) return;
  const cover = book.parentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const members = Array.from({length: 4}, (_, index) => ({id: index + 1, name: `Thành viên ${String(index + 1).padStart(2, '0')}`, photo: 'anh-lop-6b02.jpg'}));
  const templates = ['.yb-left', '.yb-right'].map(selector => {
    const template = book.querySelector(selector).cloneNode(true);
    const fields = {ybMainImage: 'photo', ybNameLeft: 'name-left', ybName: 'name', ybPageTag: 'tag'};
    template.querySelectorAll('[id]').forEach(node => {if (fields[node.id]) node.dataset.ybField = fields[node.id]; node.removeAttribute('id');});
    const interior = document.createElement('div'); interior.className = 'yb-page-content';
    while (template.firstChild) interior.appendChild(template.firstChild);
    template.appendChild(interior);
    return template;
  });
  let engine = null, pages = [], pageIndex = 0, pending = null, playing = false, timer = null, direction = 1, lastWidth = 0, resizeTimer = null, resizePending = false;
  const mount = book;
  let touchStart = null;
  const pad = number => String(number).padStart(2, '0');
  function makePages() {
    return members.flatMap((member, memberIndex) => templates.map((template, side) => {
      const page = template.cloneNode(true);
      page.classList.add('yb-flip-page'); page.dataset.density = 'soft'; page.dataset.member = memberIndex; page.dataset.side = side ? 'profile' : 'photo';
      page.setAttribute('role', 'article'); page.setAttribute('aria-label', `${member.name} · ${side ? 'Trang giới thiệu' : 'Trang ảnh'}`);
      page.querySelectorAll('[data-yb-field]').forEach(field => {
        if (field.dataset.ybField === 'photo') {field.src = member.photo; field.alt = `Ảnh tập thể minh họa cho ${member.name}`;}
        else field.textContent = field.dataset.ybField === 'tag' ? `THÀNH VIÊN ${pad(member.id)}` : member.name;
      });
      const number = page.querySelector('.yb-page-number');
      if (number) number.textContent = `${pad(memberIndex * 2 + side + 1)} · ${side ? 'Đoàn kết · Tự tin · Tỏa sáng' : '6B02 · những ngày rực rỡ'}`;
      return page;
    }));
  }
  function portrait() {return engine ? engine.getOrientation() === 'portrait' : false;}
  function sync(index = pageIndex) {
    pageIndex = Math.max(0, Math.min(pages.length - 1, index));
    const memberIndex = Math.floor(pageIndex / 2);
    $('ybCounter').textContent = `${pad(memberIndex + 1)} / ${pad(members.length)}`;
    $('ybCounter').setAttribute('aria-label', `Thành viên ${memberIndex + 1} trên ${members.length}`);
    $('ybPageKind').textContent = portrait() ? `${pageIndex % 2 ? 'Trang giới thiệu' : 'Trang ảnh'} · ${pad(pageIndex + 1)} / ${pad(pages.length)}` : `Trang ${pad(memberIndex * 2 + 1)}–${pad(memberIndex * 2 + 2)}`;
    $('ybPrev').disabled = pageIndex === 0;
    $('ybNext').disabled = pageIndex >= pages.length - (portrait() ? 1 : 2);
    mount.dataset.pageIndex = pageIndex;
    mount.dataset.orientation = portrait() ? 'portrait' : 'landscape';
    cover.dataset.orientation = mount.dataset.orientation;
    [...roster.querySelectorAll('button'), ...thumbs.querySelectorAll('button')].forEach(button => {
      const active = Number(button.dataset.index) === memberIndex;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
  }
  function stop() {
    playing = false; clearInterval(timer); timer = null;
    $('ybPlay').setAttribute('aria-pressed', 'false');
    $('ybPlay').innerHTML = '<span class="yb-play-icon" aria-hidden="true">▶</span><span>Tự động lật trang</span>';
  }
  function busy() {return engine && ['flipping', 'user_fold'].includes(engine.getState());}
  function turnTo(index) {
    let target = Math.max(0, Math.min(pages.length - 1, index));
    if (!portrait()) target = Math.floor(target / 2) * 2;
    if (busy()) {pending = target; return;}
    if (target === pageIndex) return;
    if (!engine) {showFallback(target); return;}
    if (motion.matches) engine.turnToPage(target);
    else engine.flip(target, 'bottom');
  }
  function step(amount) {
    const base = pending === null ? pageIndex : pending;
    turnTo(base + amount * (portrait() ? 1 : 2));
  }
  function showFallback(index) {
    mount.classList.add('yb-book--fallback');
    pages.forEach((page, pageNumber) => {page.hidden = Math.floor(pageNumber / 2) !== Math.floor(index / 2);});
    sync(index);
  }
  function build() {
    const style = getComputedStyle(cover);
    const width = Math.floor(cover.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
    if (width < 1) return;
    if (engine && busy()) {resizePending = true; return;}
    if (engine && engine.getState() === 'fold_corner') {
      engine.getFlipController().stopMove();
      engine.getRender().finishAnimation();
    }
    const saved = pageIndex;
    const narrow = width < 740;
    const pageWidth = Math.floor(width / (narrow ? 1 : 2));
    const pageHeight = Math.max(narrow && pageWidth >= 300 ? 700 : 780, Math.round(pageWidth * 1.48));
    lastWidth = width; pending = null; resizePending = false;
    mount.dataset.reducedMotion = String(motion.matches);
    if (engine) {
      // Keep a single renderer: v2.0.7 destroy() does not cancel its RAF loop.
      Object.assign(engine.getSettings(), {
        width: pageWidth, height: pageHeight,
        minWidth: pageWidth, maxWidth: pageWidth, minHeight: pageHeight, maxHeight: pageHeight,
        showPageCorners: !motion.matches
      });
      mount.style.minWidth = `${pageWidth}px`;
      mount.style.minHeight = `${pageHeight}px`;
      mount.style.maxWidth = `${2 * pageWidth}px`;
      engine.getUI().setOrientationStyle(narrow ? 'portrait' : 'landscape');
      engine.update();
      engine.turnToPage(narrow ? saved : Math.floor(saved / 2) * 2);
      sync(engine.getCurrentPageIndex());
      updateHint();
      return;
    }
    const target = mount;
    target.replaceChildren(); target.classList.remove('yb-book--fallback');
    pages = makePages(); target.append(...pages);
    if (!window.St?.PageFlip) {
      target.classList.add('yb-book--fallback');
      pages.forEach((page, number) => {page.hidden = Math.floor(number / 2) !== Math.floor(saved / 2);});
      $('ybGestureHint').textContent = 'Dùng nút mũi tên để chọn trang'; sync(saved); return;
    }
    const instance = new St.PageFlip(target, {
      width: pageWidth, height: pageHeight, size: 'fixed',
      minWidth: pageWidth, maxWidth: pageWidth, minHeight: pageHeight, maxHeight: pageHeight,
      startPage: narrow ? saved : Math.floor(saved / 2) * 2,
      usePortrait: true, showCover: false, autoSize: true,
      flippingTime: 1100, drawShadow: true, maxShadowOpacity: .55,
      mobileScrollSupport: true, swipeDistance: 45,
      clickEventForward: true, disableFlipByClick: false,
      showPageCorners: !motion.matches, useMouseEvents: true
    });
    engine = instance;
    instance.on('flip', event => sync(event.data));
    instance.on('init', () => {sync(instance.getCurrentPageIndex()); target.dataset.state = 'read';});
    instance.on('changeOrientation', () => sync(instance.getCurrentPageIndex()));
    instance.on('changeState', event => {
      target.dataset.state = event.data;
      target.setAttribute('aria-busy', String(event.data !== 'read'));
      cover.classList.toggle('is-turning', ['flipping', 'user_fold'].includes(event.data));
      if (event.data === 'read' && resizePending) {
        requestAnimationFrame(build);
      } else if (event.data === 'read' && pending !== null) {
        const next = pending; pending = null;
        requestAnimationFrame(() => {if (engine === instance) turnTo(next);});
      }
    });
    instance.loadFromHTML(pages);
    updateHint();
  }
  function updateHint() {
    $('ybGestureHint').textContent = motion.matches ? 'Dùng nút mũi tên để chuyển trang' : 'Kéo góc trang giấy để lật · Có thể vuốt trên điện thoại';
  }
  members.forEach((member, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.index = index;
    button.innerHTML = `<span class="yb-mini-photo"><img src="${member.photo}" alt=""></span><span class="yb-roster-name"><small>${pad(member.id)}</small><strong>${member.name}</strong><em>Trang minh họa</em></span>`;
    button.addEventListener('click', () => {stop(); turnTo(index * 2);}); roster.appendChild(button);
    const thumb = document.createElement('button'); thumb.type = 'button'; thumb.dataset.index = index; thumb.setAttribute('aria-label', `Mở trang ${member.name}`);
    thumb.innerHTML = `<img src="${member.photo}" alt=""><span>${pad(member.id)}</span>`;
    thumb.addEventListener('click', () => {stop(); turnTo(index * 2);}); thumbs.appendChild(thumb);
  });
  const normalize = text => text.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  $('ybSearch').addEventListener('input', event => {
    const query = normalize(event.target.value.trim()); let shown = 0;
    roster.querySelectorAll('button').forEach(button => {button.hidden = !normalize(button.textContent).includes(query); if (!button.hidden) shown++;});
    let empty = roster.querySelector('.yb-roster-empty');
    if (!shown && !empty) {empty = document.createElement('p'); empty.className = 'yb-roster-empty'; empty.textContent = 'Không tìm thấy thành viên'; roster.appendChild(empty);}
    else if (shown && empty) empty.remove();
  });
  $('ybPrev').addEventListener('click', () => {stop(); step(-1);});
  $('ybNext').addEventListener('click', () => {stop(); step(1);});
  mount.addEventListener('pointerdown', stop, {passive: true});
  function cancelNativeTouch() {
    if (!engine) return;
    engine.getUI().touchPoint = null;
    engine.userStop({x: 0, y: 0}, true);
    if (engine.getState() === 'user_fold') engine.getFlipController().stopMove();
  }
  mount.addEventListener('touchstart', event => {
    const touch = event.touches[0];
    touchStart = event.touches.length === 1 ? {x: touch.clientX, y: touch.clientY, page: pageIndex, time: performance.now()} : null;
    if (!touchStart) cancelNativeTouch();
  }, {passive: true});
  mount.addEventListener('touchcancel', () => {touchStart = null; cancelNativeTouch();}, {passive: true});
  mount.addEventListener('touchend', event => {
    const start = touchStart, touch = event.changedTouches[0]; touchStart = null;
    if (!start || !touch || event.touches.length) return;
    const dx = touch.clientX - start.x, dy = touch.clientY - start.y;
    if (Math.abs(dy) > 45 && Math.abs(dy) > Math.abs(dx)) {cancelNativeTouch(); return;}
    if (Math.abs(dx) < 45 || Math.abs(dy) > Math.min(90, Math.abs(dx) * .5) || performance.now() - start.time > 1500) return;
    stop();
    // The native engine misses some swipes that cross its 250 ms touch delay.
    // Let its handlers run first, and act only if they did not start a turn.
    setTimeout(() => {if (!busy() && pageIndex === start.page) step(dx < 0 ? 1 : -1);}, 0);
  }, {passive: true});
  $('ybPlay').addEventListener('click', () => {
    if (playing) {stop(); return;}
    playing = true; direction = pageIndex >= pages.length - (portrait() ? 1 : 2) ? -1 : 1;
    $('ybPlay').setAttribute('aria-pressed', 'true'); $('ybPlay').innerHTML = '<span class="yb-play-icon" aria-hidden="true">Ⅱ</span><span>Dừng lật trang</span>';
    timer = setInterval(() => {
      if (document.hidden || busy()) return;
      const last = pages.length - (portrait() ? 1 : 2);
      if (pageIndex >= last) direction = -1; else if (pageIndex === 0) direction = 1;
      step(direction);
    }, 4200);
  });
  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || document.querySelector('dialog[open]')) return;
    const focused = document.activeElement;
    if (!focused?.closest('#yearbookExperience') || focused.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(focused.tagName)) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); stop(); step(event.key === 'ArrowRight' ? 1 : -1);}
  });
  document.addEventListener('visibilitychange', () => {if (document.hidden) stop();});
  function scheduleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const style = getComputedStyle(cover);
      const width = Math.floor(cover.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
      if (Math.abs(width - lastWidth) > 1) build();
    }, 120);
  }
  if ('ResizeObserver' in window) new ResizeObserver(scheduleResize).observe(cover);
  else addEventListener('resize', scheduleResize);
  motion.addEventListener('change', () => {stop(); build();});
  build();
})();
