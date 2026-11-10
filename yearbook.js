/* Locally hosted StPageFlip turns real HTML pages, including both printed faces. */
(() => {
  const $ = id => document.getElementById(id);
  const book = $('ybBook'), roster = $('ybRoster'), thumbs = $('ybThumbs');
  if (!book || !roster || !thumbs) return;
  const cover = book.parentElement;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  // Hồ sơ từ biểu mẫu lớp, cập nhật ngày 10-11-2026; mỗi bạn dùng lần gửi mới nhất.
  // Giữ tháng sinh theo cách hiển thị hiện tại của website.
  const members = [
  {
    "id": 1,
    "name": "Nguyễn Minh Khánh",
    "birthMonth": "Tháng 11",
    "hobby": "Chơi thể thao, học toán",
    "dream": "Đỗ trường chuyên Chu Văn An",
    "message": "Tập thể đoàn kết",
    "photo": "photos/members/1wvCZFj0ULfrAhVjSCmAmP9T8nBhMCgPU.webp"
  },
  {
    "id": 2,
    "name": "Nông Hoàng Trang",
    "birthMonth": "Tháng 11",
    "hobby": "Múa hát",
    "dream": "Cô giáo",
    "message": "Cả lớp đoàn kết",
    "photo": "photos/members/16yE4QWk0saPRl4qgmGc_xjeyUpQ3OuAz.webp"
  },
  {
    "id": 3,
    "name": "Lành Thế Đan",
    "birthMonth": "Tháng 7",
    "hobby": "thể thao,đọc truyện",
    "dream": "thầy giáo",
    "message": "chúng ta cùng nhau cố gắng học tập",
    "photo": "photos/members/19IkzXAgcg6lP4ylSXmZgZMiWBfNR32Vy.webp"
  },
  {
    "id": 4,
    "name": "Triệu Đông Trà",
    "birthMonth": "Tháng 12",
    "hobby": "Thích vẽ, nghe nhạc kpop và chơi game",
    "dream": "Trở thành cô giáo dạy Tiếng Anh",
    "message": "Chúc cô và các bạn một ngày 20/11 thật ý nghĩa!",
    "photo": "photos/members/1LsgfaQwKMd3C2cFUTUzuMCwYV3b90Wun.webp"
  },
  {
    "id": 5,
    "name": "Trần Hà Gia Linh",
    "birthMonth": "Tháng 4",
    "hobby": "Nhảy",
    "dream": "Đi du học",
    "message": "6B02 – Tập thể đoàn kết, học hết sức, chơi hết mình và luôn là niềm tự hào của thầy cô, cha mẹ!",
    "photo": "photos/members/1eEL_eH5prAi_cpzoImlVtNPIFw8VLQuk.webp"
  },
  {
    "id": 6,
    "name": "Trần Hạnh Nguyên",
    "birthMonth": "Tháng 9",
    "hobby": "Thích chụp ảnh, xem phim",
    "dream": "Btv truyền hình",
    "message": "Chúc các bạn 6b02 luôn vui vẻ và học thật tốt",
    "photo": "photos/members/1FrpW1J9bs5fEfjeAzVFVE2qeGK6NlCst.webp"
  },
  {
    "id": 7,
    "name": "Hà Minh Anh",
    "birthMonth": "Tháng 11",
    "hobby": "Hát, nhảy, vẽ, MC,",
    "dream": "Trở thành nghệ sỹ chuyên nghiệp",
    "message": "6B02 đoàn kết, chiến thắng",
    "photo": "photos/members/1YSwwc9-RzAZo3kVkS6nZkmQQKLhlyY4E.webp"
  },
  {
    "id": 8,
    "name": "Vi Hà Linh",
    "birthMonth": "Tháng 8",
    "hobby": "Mình rất thích vẽ tranh, làm đồ chơi bằng giấy",
    "dream": "Mình muốn sau này kiếm được thật nhiều tiền và làm được nhiều điều có ích cho xã hội",
    "message": "Chúng ta hãy cũng nhau cố gắng rèn luyện, học tập thật tốt, sau này trở thành những công dân tốt nhé",
    "photo": "photos/members/1OYv3qP62rSvp5Xjzg10EQ_ufHQZSB7aV.webp"
  },
  {
    "id": 9,
    "name": "Vi Nguyễn Tường Vy",
    "birthMonth": "Tháng 4",
    "hobby": "Sở thích : Vẽ , nghe nhạc , chơi đàn , phi tiêu.",
    "dream": "học chuyên Anh",
    "message": "Hãy luôn là một tập thể đoàn kết nhé!",
    "photo": "photos/members/1_Xdfi6idTz-js2rHn9nZlaNe9WhR5Sfb.webp"
  },
  {
    "id": 10,
    "name": "Nông Bảo An",
    "birthMonth": "Tháng 12",
    "hobby": "Thích đá bóng",
    "dream": "Mình ước mơ trở thành giáo viên. Mình sẽ cố gắng học tập thật tốt để thực hiện ước mơ ấy.",
    "message": "Mình rất vui khi được học cùng các bạn. Mong lớp chúng mình luôn đoàn kết, giúp đỡ nhau trong học tập và có thật nhiều kỉ niệm vui dưới mái trường THCS Tam Thanh. Chúc các bạn luôn vui vẻ, tự tin và học tập ngày càng tiến bộ nhé!",
    "photo": "photos/members/1ayG9RhIih1hQa2CQIcrWRLjZcnTkvyUz.webp"
  },
  {
    "id": 11,
    "name": "Trần Đinh Hoàng Huy",
    "birthMonth": "Tháng 6",
    "hobby": "Học Toán, Tiếng Anh, Tiếng Trung, Bóng đá, Cầu lông",
    "dream": "Là nhà luật sư tốt",
    "message": "Chúng ta hãy đoàn kết, giúp đỡ nhau trong học tập và rèn luyện. Hoàn thành xuất sắc nhiệm vụ năm học 2026-2027",
    "photo": "photos/members/1iyX8RVf4tOdQ93y8kDNFPirnyp9Aewv7.webp"
  },
  {
    "id": 12,
    "name": "Dương Quỳnh Chi",
    "birthMonth": "Tháng 11",
    "hobby": "Vẽ tranh",
    "dream": "Giáo viên",
    "message": "Lớp chúng mình đoàn kết, yêu thương nhau, cùng nhau cố gắng",
    "photo": "photos/members/1VyslZuMr2V-M3GaMoDGyYJp7rFvF63LK.webp"
  },
  {
    "id": 13,
    "name": "Tăng Thành Nhân",
    "birthMonth": "Tháng 6",
    "hobby": "thích chơi thể thao và chơi nhạc",
    "dream": "Làm bác sĩ",
    "message": "Love 6B02",
    "photo": "photos/members/1o8SbJimBmx6q7v1GVlfDsuukGNnSoogs.webp"
  },
  {
    "id": 14,
    "name": "Trần Cẩm Tú",
    "birthMonth": "Tháng 11",
    "hobby": "con thích vẽ tranh",
    "dream": "họa sỹ, giáo viên",
    "message": "Gửi lời yêu thương tới lớp cùng cô giáo ạ",
    "photo": "photos/members/1fO0LU0AuyV1nNQaozmWQOw4eNXfqtozv.webp"
  },
  {
    "id": 15,
    "name": "Hoàng Quang Vinh",
    "birthMonth": "Tháng 3",
    "hobby": "Đá bóng",
    "dream": "Cầu thủ xuất sắc",
    "message": "Lớp chúng mình rất hòa thuận",
    "photo": "photos/members/1PoCUK9TNkoeeevx7toWoWWwXAyUBYNbW.webp"
  },
  {
    "id": 16,
    "name": "Hoàng Vy Minh",
    "birthMonth": "Tháng 5",
    "hobby": "Chơi cờ vua, đạp xe",
    "dream": "Làm Công An",
    "message": "Mãi iu các bạn lớp 6B02",
    "photo": "photos/members/1uPpLeZtqadsnQreWC4NB7kBKd2iHRjjm.webp"
  },
  {
    "id": 17,
    "name": "Hoàng Ngọc Thảo Nguyên",
    "birthMonth": "Tháng 1",
    "hobby": "Thích đọc sách, truyện và thích nhảy",
    "dream": "Được trở thành một dancer",
    "message": "Các bạn ơi! Mình và các bạn hãy cùng đoàn kết, yêu thương, giúp đỡ lẫn nhau, cùng học hành chăm chỉ và rèn luyện thật tốt để đưa tập thể lớp 6B02 luôn là niềm tự hào của các thầy cô nhé!❤️",
    "photo": "photos/members/1bGDZ2qmh6hLfpXkuY9Xw-OSeecK2vxGO.webp"
  },
  {
    "id": 18,
    "name": "Tống Lưu Ngọc Khương",
    "birthMonth": "Tháng 5",
    "hobby": "Sở thích của em là bật xa và đánh cầu",
    "dream": "Ước mơ của em là trở thành người giàu nhất thế giới",
    "message": "Các bạn ơi hãy đoàn kết và giúp lẫn nhau trong học tập nhé!",
    "photo": "photos/members/1x6Zi69m3bYpiDAja9HOBoe5ARKIMWTUN.webp"
  },
  {
    "id": 19,
    "name": "Trần Khánh Huyền",
    "birthMonth": "Tháng 4",
    "hobby": "Đọc sách , du lịch",
    "dream": "Luật sư",
    "message": "I love 6B02",
    "photo": "photos/members/1L0JPRNZtBghQ3-4cdsbV00YmdNIDPTpD.webp"
  },
  {
    "id": 20,
    "name": "Phạm Đức Dương",
    "birthMonth": "Tháng 12",
    "hobby": "Đá bóng",
    "dream": "Cầu thủ bóng đá",
    "message": "Mình rất trân trọng và quý các bạn",
    "photo": "photos/members/1Xhm8ZrIVFUHq0zLwWN9J11QiOnsrjjQP.webp"
  },
  {
    "id": 21,
    "name": "Nguyễn Đức Tiến",
    "birthMonth": "Tháng 4",
    "hobby": "",
    "dream": "",
    "message": "",
    "photo": "photos/members/1zIwxELStuJ2wQmLEew20bQV23_UuS2DW.webp"
  },
  {
    "id": 22,
    "name": "Vi Hà Nguyên",
    "birthMonth": "Tháng 11",
    "hobby": "Sở thích đánh võ karate,đánh bóng chuyền và xem phim",
    "dream": "Trở thành một huấn luyện viên võ karate",
    "message": "Hãy đoàn kết yêu thương và giúp đỡ nhau trong học tập nhé",
    "photo": "photos/members/16x1_rMNAitgP507YADs2gVPlON1H7kid.webp"
  },
  {
    "id": 23,
    "name": "Dương Diệu Anh",
    "birthMonth": "Tháng 11",
    "hobby": "Vẽ , thể thao",
    "dream": "ước mơ duy nhất chỉ là có thể báo đáp ba mẹ vì tất cả những gì họ đã làm cho tôi.",
    "message": "Sau này học lớp khác đừng quên tụi mình từng than, từng cười, từng giận, rồi lại tha thứ cho nhau . Một khóc nhỏ trong tim, giữ lại cho nhau những kỉ niệm đẹp của tuổi học trò.",
    "photo": "photos/members/1II1p-opQcSvLiSDjhnI4MqTsu5hYG1KT.webp"
  },
  {
    "id": 24,
    "name": "Trần Hà Anh",
    "birthMonth": "Tháng 7",
    "hobby": "Vẽ tranh",
    "dream": "Giáo viên",
    "message": "Mãi yêu tập thể lớp 6B02",
    "photo": "photos/members/1olGcAplzGtiVTW-2zqGvBj0kW5xXrWiO.webp"
  },
  {
    "id": 25,
    "name": "Đàm Trí Dũng",
    "birthMonth": "Tháng 11",
    "hobby": "Đi du lịch, đá bóng",
    "dream": "Kỹ sư xây dựng",
    "message": "Hãy luôn đoàn kết, cùng nhau chăm ngoan, học giỏi.",
    "photo": "photos/members/1qQZvoMkEGebxC-stQN-Iop7d_sH-z9do.webp"
  },
  {
    "id": 26,
    "name": "Ma Hà Phương",
    "birthMonth": "Tháng 2",
    "hobby": "Đọc sách",
    "dream": "Đỗ trường Chu Văn An, lm nghề tư vấn tâm lý",
    "message": "Chúc cả lớp luôn vui vẻ, gặp nhiều may mắn và mọi việc trong học tập đều thuận lợi nhé!",
    "photo": "photos/members/1QbEV4ab-1IfS6U2pPPBW2xoSUNdBwXrV.webp"
  },
  {
    "id": 27,
    "name": "Vi Thanh Huyền",
    "birthMonth": "Tháng 3",
    "hobby": "Bơi",
    "dream": "Luật sư",
    "message": "I love 6B02",
    "photo": "photos/members/1Fo5P7h5-_0At17_X3C2Ebg_q-FBi6V4v.webp"
  }
];
  const photoSrc = member => member.photo || 'anh-lop-6b02.jpg';
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const photoFallback = img => {
    if (!img) return;
    img.addEventListener('error', () => {
      img.src = 'anh-lop-6b02.jpg';
      img.alt = 'Ảnh tập thể lớp 6B02 – ảnh thay thế';
      const label = img.closest('.yb-photo')?.querySelector('.yb-photo-label');
      if (label) label.textContent = 'Ảnh lớp · chưa mở được ảnh cá nhân';
    }, {once: true});
  };
  const count = $('ybTotal');
  if (count) count.textContent = `${members.length} hồ sơ đã gửi`;
  const note = document.querySelector('#gioithieu .member-note');
  if (note) note.textContent = `Đã cập nhật ${members.length} hồ sơ và ảnh thành viên từ biểu mẫu lớp (10/11/2026). Mỗi bạn hiển thị thông tin từ lần gửi mới nhất.`;

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
        if (field.dataset.ybField === 'photo') {
          photoFallback(field);
          field.alt = member.photo ? `Ảnh của ${member.name}` : `Ảnh tập thể minh họa cho ${member.name}`;
          field.src = photoSrc(member);
          const label = field.closest('.yb-photo')?.querySelector('.yb-photo-label');
          if (label) label.textContent = member.photo ? 'Ảnh thành viên' : 'Ảnh tập thể';
        }
        else field.textContent = field.dataset.ybField === 'tag' ? `THÀNH VIÊN ${pad(member.id)}` : member.name;
      });
      if (side === 1) {
        const details = page.querySelectorAll('.yb-profile-details .yb-detail');
        if (details.length >= 5) {
          const birthdayLabel = details[1].querySelector('dt span');
          if (birthdayLabel) birthdayLabel.textContent = 'Tháng sinh';
          details[1].querySelector('dd').textContent = member.birthMonth;
          details[2].querySelector('dd').textContent = member.hobby || 'Chưa chia sẻ';
          details[3].querySelector('dd').textContent = member.dream || 'Chưa chia sẻ';
          details[4].querySelector('dd').textContent = member.message || 'Cùng nhau viết nên những kỷ niệm đẹp!';
        }
      }
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
    button.innerHTML = `<span class="yb-mini-photo"><img alt=""></span><span class="yb-roster-name"><small>${pad(member.id)}</small><strong>${escapeHtml(member.name)}</strong><em>Ước mơ & lời nhắn</em></span>`;
    const rosterImage = button.querySelector('img');
    photoFallback(rosterImage); rosterImage.src = photoSrc(member); rosterImage.alt = `Ảnh ${member.name}`;
    button.addEventListener('click', () => {stop(); turnTo(index * 2);}); roster.appendChild(button);
    const thumb = document.createElement('button'); thumb.type = 'button'; thumb.dataset.index = index; thumb.setAttribute('aria-label', `Mở trang ${member.name}`);
    thumb.innerHTML = `<img alt=""><span>${pad(member.id)}</span>`;
    const thumbImage = thumb.querySelector('img');
    photoFallback(thumbImage); thumbImage.src = photoSrc(member); thumbImage.alt = `Ảnh ${member.name}`;
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
