/* Published class photos and private device-local memories. */
(() => {
  const $ = id => document.getElementById(id);
  if (!$('diaryGrid')) return;
  const svg = (content, fill = 'none') => `<svg viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${content}</svg>`;
  const icons = {
    all: svg('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'),
    photos: svg('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m3 17 5-5 5 5 3-3 5 5"/>'),
    videos: svg('<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4Z"/>'),
    activities: svg('<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v2"/>'),
    events: svg('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>'),
    heart: svg('<path d="M20.8 5.4a5.5 5.5 0 0 0-7.8 0L12 6.5l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.8a5.5 5.5 0 0 0 0-7.8Z"/>'),
    play: svg('<path d="m9 5 11 7-11 7Z"/>', 'currentColor')
  };
  const categories = [
    ['all', 'Tất cả'], ['photos', 'Ảnh kỷ niệm'], ['videos', 'Video kỷ niệm'],
    ['activities', 'Hoạt động lớp'], ['events', 'Sự kiện đặc biệt']
  ];
  const publishedTitles = ["Đồng đội trên sân trường", "Sắc màu sân khấu", "Kỷ niệm cùng thầy cô", "Cùng nhau luyện tập", "Đội hình thể thao", "Những người đồng đội", "Tập thể 6B02", "Sân khấu tuổi học trò", "Ngày hội âm nhạc", "Cùng nhau đón hội", "Góc sáng tạo của chúng mình", "Sắc màu đèn hội", "Ngôi sao đêm hội", "Sân trường rực rỡ", "Dưới mái trường thân yêu", "Ghi nhận những nỗ lực · 01", "Ghi nhận những nỗ lực · 02", "Niềm vui được vinh danh", "Hoạt động giao lưu", "Trang lưu niệm", "Chúng mình dưới mái trường", "Một giờ học đáng nhớ", "Cùng nhau tiến bộ", "Thiệp tri ân thầy cô · 01", "Thiệp tri ân thầy cô · 02", "Thiệp tri ân thầy cô · 03", "Thiệp tri ân thầy cô · 04", "Thiệp tri ân thầy cô · 05", "Thiệp tri ân thầy cô · 06", "Thiệp tri ân thầy cô · 07", "Thiệp tri ân thầy cô · 08", "Thiệp tri ân thầy cô · 09", "Thiệp tri ân thầy cô · 10", "Thiệp tri ân thầy cô · 11"];
  const published = [
  "1cdjeb4FMlHBUvfLdMb5TZN_RGjeFbovU",
  "1m_MBccE5C4G0jEWhPcSBGbDtcC0k_AET",
  "11O5MSseGdRxh8NdyVT9uochZMGthyE3s",
  "1L-HqFEv9Psc7oRFEYpueHgiXjpjJWxJY",
  "1U-df_nqqvCi2wCsQEcUN-npVA3Yo_VRv",
  "1ZfIXw3vVzL_ZFhhRBO5RpqgVZmYgLRIl",
  "1HjJzq69se1-5lUnFgGW-cccXGDdPNO1w",
  "12x3ANXCtxXhklPn6thtqISnVoEpizacS",
  "1hTc0DbvrnDi8q__NhogXGXGlJc9CH47h",
  "1xnPNf3_mLFUkLKgQ8Q4j2Kdcymt796sd",
  "13EN3HVgIJ038BKZugyzZNlxmVpNpSd7s",
  "1GobP-60Wa4Pl6z6hUQyxVDza-M14wOgg",
  "1mEV0n-nDbeyos6ToBdN9BWM-FMHYiWXj",
  "1HxcO30W2OHIQKNDUSvxTomUq7exC2xJy",
  "1-c5AA9a-usJxk8jc1-6rFgka7csp0BQp",
  "12d0KkQv1tHfJ6IWmVIajeuSmqqyng1L5",
  "1ri4URUs350DlThb8BhegRu1-ZnZ7xFLe",
  "19Y1DjiNM3ERw8jnDoWn6K_iBCHVuAU3F",
  "1d2eCow9k1EdL4-E6C9pU1tEtp8qv-mtP",
  "1mkcjQTseD9F3-R6f64NAuy9dztrrztHG",
  "1jvkqWiVbNCMYioUEtvrp2CNjR7aghqWQ",
  "10Xwwvhde1OUnn2S7si0sOOoYLuT5HMqs",
  "1RTGy9MQaWEqlPFs00EvrtS7TZ2hqMPSh",
  "1aMEiiqiDTpQVLXp1InvPAh61mtkeTPEO",
  "1z_5jAtpB7FHvcEQbl7eaTt4foOC1M8n0",
  "1Y1hn_L9PERrUDMFSson16Tq8-aAXlaud",
  "13xmiB5hYmzKv6xFeGr3iJp0M0OgN4sYK",
  "10q_VkuhW0xhUQGCgShSB8f_hs7AEJQ4a",
  "1WfkzZEqE2_wdjz0AIavQQ1sDGXrVVs6m",
  "1ltgEr_y3mzShvvZ_IlxkTPYKyu-GyRd6",
  "1MSSREiZyjMdqAnaU6hlWpHubXGEFOmFw",
  "12zTjyvTC-vtm6wDZZ8Gnr450VQ9W7eN2",
  "10mYX_3CNTDu5_oMu-jcV-cAq92ZWPBjK",
  "1Rn70n6ToVmNByEQvI6K1e1KymGEOZpO2"
].map((id, index) => ({
    id: `published-${id}`, title: publishedTitles[index],
    src: `photos/diary/${id}.webp`, thumbnail: `photos/diary/${id}-thumb.webp`,
    type: 'image', category: index >= 23 ? 'events' : 'activities', published: true,
    createdAt: Date.UTC(2026, 10, 10, 7) + index
  }));
  const publishedVideos = [
  "14ViG1Xhzu9193MShxwWMp7EhJvstUfGD",
  "1naAm8Qjq8L_DmX6jttaKMRqWyJ4zC6Ou",
  "1T-eCqrtMQjcgaSv_VUegevg18_x7Le8G",
  "1cZH1Ii5HGRgB4z2rzbotV59DkwXPXlQW",
  "165qUeriHJTSL2GbFO2pvPuJ9GTnwbIli",
  "1HLB_c-Hh2R6fV-pJTZZLxfmFicZdzBUh",
  "1DNayPj5Mo9oBrmMRCk9xpJ0TsMmwk1hs",
  "1xYoAPDiF-tiuduhzDEAOllt0URadWtjd",
  "116Gh5eSSv74jlvOU5_YwL5jWf2Xo9c_T",
  "1notNxTxdzDAZfDSXRk2LxE4qcJ6unQEQ",
  "1L76QXqxkKX9deHDjMuR2qDWLQQxaSRPu",
  "1eimw6ibQeK5WXdZak6CBr6oWtaizosXN",
  "1ejheNfw09lcmaxg75yUxSipufxrAlYAs",
  "1o5VbAverKlMhmKcv-Z0zJD1ZYzakvH-5",
  "10fVSP7b8-Pl1h2JXXWvF_3t-FF7mMJSh",
  "1hO5dAjJVyFmlo1chwMIvBPO8GTkiSNeS"
].map((id, index) => ({
    id: `published-video-${id}`, title: `Video kỷ niệm 6B02 · ${String(index + 1).padStart(2, '0')}`,
    src: `videos/diary/${id}.mp4`, thumbnail: `videos/diary/${id}-poster.webp`,
    type: 'video', category: 'activities', published: true,
    createdAt: Date.UTC(2026, 10, 10, 8) + index
  }));
  published.push(...publishedVideos);
  const grid = $('diaryGrid'), viewer = $('diaryViewer'), upload = $('diaryUpload');
  let memories = [], category = 'all', queue = [], viewerIndex = 0;
  let liked = new Set(), list = false;
  try { liked = new Set(JSON.parse(localStorage.getItem('6b02-diary-likes') || '[]')); list = localStorage.getItem('6b02-diary-view') === 'list'; } catch (_) { /* Storage preference is optional. */ }
  const normalize = text => text.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  const date = new Intl.DateTimeFormat('vi-VN');
  const urls = new Map();
  const dbPromise = new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('Trình duyệt chưa hỗ trợ lưu kỷ niệm.')); return; }
    const request = indexedDB.open('6b02-diary', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('memories', {keyPath: 'id'});
    request.onsuccess = () => { request.result.onversionchange = () => request.result.close(); resolve(request.result); };
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('Hãy đóng cửa sổ nhật ký khác rồi thử lại.'));
  });
  // A rejection is handled here as well as by the load/save operations below.
  dbPromise.catch(() => {});
  function readAll(db) {
    return new Promise((resolve, reject) => {
      const request = db.transaction('memories', 'readonly').objectStore('memories').getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  function writeAll(db, records) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('memories', 'readwrite');
      records.forEach(record => transaction.objectStore('memories').put(record));
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error || new Error('Không thể lưu tệp.'));
    });
  }
  function addRecord(record) {
    if (!urls.has(record.id)) urls.set(record.id, URL.createObjectURL(record.blob));
    return {...record, src: urls.get(record.id), demo: false};
  }
  function matches(item, key) {
    if (key === 'all') return true;
    if (key === 'photos' || key === 'videos') return item.type === (key === 'photos' ? 'image' : 'video');
    return item.category === key;
  }
  function allItems() { return [...memories, ...published]; }
  function visibleItems() {
    const query = normalize($('diarySearch').value.trim());
    const items = allItems().filter(item => matches(item, category) && normalize(item.title).includes(query));
    const order = $('diarySort').value;
    return items.sort(order === 'title' ? (a, b) => a.title.localeCompare(b.title, 'vi') : order === 'oldest' ? (a, b) => a.createdAt - b.createdAt : (a, b) => b.createdAt - a.createdAt);
  }
  function fillCategories(root, sidebar) {
    categories.forEach(([key, label]) => {
      const button = document.createElement('button');
      button.type = 'button'; button.dataset.diaryCategory = key;
      button.innerHTML = icons[key];
      const name = document.createElement('span'); name.textContent = label; button.appendChild(name);
      if (sidebar) { const count = document.createElement('span'); count.className = 'diary-category-count'; button.appendChild(count); }
      button.addEventListener('click', () => {category = key; render();});
      root.appendChild(button);
    });
  }
  function openViewer(id) {
    queue = visibleItems();
    viewerIndex = Math.max(0, queue.findIndex(item => item.id === id));
    displayViewer();
    if (!viewer.open) viewer.showModal();
  }
  function displayViewer() {
    const item = queue[viewerIndex];
    if (!item) {viewer.close(); return;}
    const host = $('diaryViewerMedia');
    host.querySelector('video')?.pause(); host.replaceChildren();
    {
      const media = document.createElement(item.type === 'video' ? 'video' : 'img');
      media.src = item.src;
      if (item.type === 'video') {media.controls = true; media.playsInline = true; media.preload = 'metadata'; if (item.thumbnail) media.poster = item.thumbnail;}
      else media.alt = item.title;
      host.appendChild(media);
    }
    $('diaryViewerTitle').textContent = item.title;
    $('diaryViewerNote').textContent = item.published
      ? `${item.type === 'video' ? 'Video' : 'Ảnh'} kỷ niệm của lớp 6B02`
      : `Đã lưu trên trình duyệt này · ${date.format(new Date(item.createdAt))} · Chưa đăng công khai`;
    $('diaryViewerPrev').disabled = $('diaryViewerNext').disabled = queue.length < 2;
  }
  function renderCard(item) {
    const card = document.createElement('article'); card.className = 'diary-card'; card.dataset.memoryId = item.id;
    const mediaButton = document.createElement('button'); mediaButton.type = 'button'; mediaButton.className = 'diary-card-media';
    mediaButton.setAttribute('aria-label', `Xem ${item.title}`);
    {
      const media = document.createElement(item.type === 'video' && !item.thumbnail ? 'video' : 'img'); media.className = 'diary-card-image'; media.src = item.thumbnail || item.src;
      if (media.tagName === 'VIDEO') {media.muted = true; media.preload = 'none'; media.playsInline = true;}
      else {media.alt = item.title; media.loading = 'lazy';}
      mediaButton.appendChild(media);
    }
    if (item.type === 'video') {const play = document.createElement('span'); play.className = 'diary-play'; play.innerHTML = icons.play; mediaButton.appendChild(play);}
    const badge = document.createElement('span'); badge.className = 'diary-demo-badge'; badge.textContent = item.published ? `${item.type === 'video' ? 'Video' : 'Ảnh'} lớp 6B02` : 'Trên thiết bị này'; mediaButton.appendChild(badge);
    mediaButton.addEventListener('click', () => openViewer(item.id));
    const body = document.createElement('div'); body.className = 'diary-card-body';
    const title = document.createElement('button'); title.type = 'button'; title.className = 'diary-card-title';
    title.innerHTML = icons[item.type === 'video' ? 'videos' : 'photos']; const text = document.createElement('span'); text.textContent = item.title; title.appendChild(text);
    title.addEventListener('click', () => openViewer(item.id));
    const meta = document.createElement('div'); meta.className = 'diary-card-meta';
    const label = document.createElement('span'); label.textContent = item.published ? 'Kỷ niệm của chúng mình' : date.format(new Date(item.createdAt));
    const like = document.createElement('button'); like.className = 'diary-like'; like.type = 'button'; like.innerHTML = icons.heart;
    const likeText = document.createElement('span'); likeText.textContent = 'Thích'; like.appendChild(likeText);
    function syncLike() {like.setAttribute('aria-pressed', String(liked.has(item.id))); like.setAttribute('aria-label', `${liked.has(item.id) ? 'Bỏ thích' : 'Thích'} ${item.title}`);}
    syncLike();
    like.addEventListener('click', () => {if (liked.has(item.id)) liked.delete(item.id); else liked.add(item.id); try {localStorage.setItem('6b02-diary-likes', JSON.stringify([...liked]));} catch (_) {} syncLike();});
    meta.append(label, like); body.append(title, meta); card.append(mediaButton, body); return card;
  }
  function render() {
    const items = visibleItems();
    grid.replaceChildren(...items.map(renderCard));
    grid.classList.toggle('is-list', list);
    $('diaryGridToggle').setAttribute('aria-pressed', String(!list)); $('diaryListToggle').setAttribute('aria-pressed', String(list));
    [$('diaryTabs'), $('diaryCategories')].forEach(root => root.querySelectorAll('button').forEach(button => {
      const active = button.dataset.diaryCategory === category;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
      const count = button.querySelector('.diary-category-count'); if (count) count.textContent = allItems().filter(item => matches(item, button.dataset.diaryCategory)).length;
    }));
    const publishedCount = items.filter(item => item.published).length;
    $('diaryCount').textContent = `${items.length} kỷ niệm · ${items.filter(item => item.published && item.type === 'image').length} ảnh · ${items.filter(item => item.published && item.type === 'video').length} video của lớp`
      + (items.length > publishedCount ? ` · ${items.length - publishedCount} trên trình duyệt này` : '');
    $('diaryEmpty').hidden = items.length !== 0;
  }
  fillCategories($('diaryCategories'), true); fillCategories($('diaryTabs'), false);
  $('diarySearch').addEventListener('input', render); $('diarySort').addEventListener('change', render);
  function setView(value) {list = value; try {localStorage.setItem('6b02-diary-view', list ? 'list' : 'grid');} catch (_) {} render();}
  $('diaryGridToggle').addEventListener('click', () => setView(false)); $('diaryListToggle').addEventListener('click', () => setView(true));
  $('diaryViewerClose').addEventListener('click', () => viewer.close());
  $('diaryViewerPrev').addEventListener('click', () => {viewerIndex = (viewerIndex - 1 + queue.length) % queue.length; displayViewer();});
  $('diaryViewerNext').addEventListener('click', () => {viewerIndex = (viewerIndex + 1) % queue.length; displayViewer();});
  viewer.addEventListener('close', () => {viewer.querySelector('video')?.pause(); $('diaryViewerMedia').replaceChildren();});
  viewer.addEventListener('keydown', event => {
    if (event.target.tagName === 'VIDEO') return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); (event.key === 'ArrowRight' ? $('diaryViewerNext') : $('diaryViewerPrev')).click();}
  });
  [viewer, upload].forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }));
  $('diaryAdd').addEventListener('click', () => {if (!upload.open) upload.showModal();});
  $('diaryUploadCancel').addEventListener('click', () => upload.close());
  const form = $('diaryUploadForm');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const status = $('diaryUploadStatus'), submit = form.querySelector('[type=submit]');
    if (submit.disabled) return;
    submit.disabled = true;
    const files = [...$('diaryUploadFiles').files];
    try {
      if (files.length > 12) throw new Error('Mỗi lần chọn tối đa 12 ảnh hoặc video nhé.');
      for (const file of files) {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) throw new Error('Hãy chọn tệp ảnh hoặc video.');
        const limit = file.type.startsWith('video/') ? 100 : 20;
        if (file.size > limit * 1024 * 1024) throw new Error(`Tệp ${file.name} vượt quá ${limit} MB. Hãy chọn tệp nhỏ hơn.`);
        if (file.type.startsWith('image/')) {
          const preview = new Image(), temporary = URL.createObjectURL(file);
          try {preview.src = temporary; await preview.decode();}
          catch (_) {throw new Error(`Chưa đọc được ảnh ${file.name}. Hãy dùng ảnh JPG, PNG hoặc WebP hợp lệ.`);}
          finally {URL.revokeObjectURL(temporary);}
        } else if (!document.createElement('video').canPlayType(file.type)) {
          throw new Error('Trình duyệt chưa hỗ trợ định dạng video này. Hãy dùng MP4 hoặc WebM.');
        }
      }
      status.textContent = 'Đang lưu kỷ niệm trên trình duyệt này…';
      const title = $('diaryUploadTitle').value.trim(); if (!title) throw new Error('Hãy đặt tên cho khoảnh khắc này.');
      const createdAt = Date.now();
      const records = files.map((file, index) => ({id: crypto.randomUUID(), title: files.length > 1 ? `${title} · ${index + 1}` : title, category: $('diaryUploadCategory').value, type: file.type.startsWith('video/') ? 'video' : 'image', blob: file, createdAt: createdAt + index}));
      await writeAll(await dbPromise, records);
      memories.unshift(...records.map(addRecord));
      category = 'all'; $('diarySearch').value = ''; $('diarySort').value = 'newest'; render(); form.reset();
      status.textContent = `Đã lưu ${records.length} kỷ niệm trên trình duyệt này. Chưa đăng công khai.`;
      upload.close();
    } catch (error) {
      status.textContent = error?.name === 'QuotaExceededError' ? 'Bộ nhớ trình duyệt đã đầy. Hãy chọn ít tệp hơn hoặc tệp nhỏ hơn.' : error.message || 'Chưa lưu được. Kiểm tra dung lượng trình duyệt và thử lại nhé.';
    } finally {submit.disabled = false;}
  });
  render();
  dbPromise.then(readAll).then(records => {
    memories = records.filter(record => record.blob instanceof Blob && ['image', 'video'].includes(record.type) && Number.isFinite(record.createdAt)).map(addRecord);
    render();
  }).catch(() => {document.querySelector('#album .diary-demo-note').textContent = 'Đang xem ảnh của lớp. Trình duyệt này chưa mở được bộ nhớ kỷ niệm đã lưu.';});
  addEventListener('pagehide', event => {if (!event.persisted) urls.forEach(url => URL.revokeObjectURL(url));});
})();
