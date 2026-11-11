/* Published class greeting cards and videos, local drafts, and an optional moderated inbox. */
(() => {
  const $ = id => document.getElementById(id);
  if (!$('tributeEnvelopes')) return;
  const teacher = 'Cô Lâm Thị Nga', teachers = 'Các thầy cô Trường THCS Tam Thanh';
  const published = [
  {
    "id": "tribute-1aMEiiqiDTpQVLXp1InvPAh61mtkeTPEO",
    "type": "image",
    "src": "photos/diary/1aMEiiqiDTpQVLXp1InvPAh61mtkeTPEO.webp",
    "thumbnail": "photos/diary/1aMEiiqiDTpQVLXp1InvPAh61mtkeTPEO-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 01",
    "message": ""
  },
  {
    "id": "tribute-1z_5jAtpB7FHvcEQbl7eaTt4foOC1M8n0",
    "type": "image",
    "src": "photos/diary/1z_5jAtpB7FHvcEQbl7eaTt4foOC1M8n0.webp",
    "thumbnail": "photos/diary/1z_5jAtpB7FHvcEQbl7eaTt4foOC1M8n0-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 02",
    "message": ""
  },
  {
    "id": "tribute-1Y1hn_L9PERrUDMFSson16Tq8-aAXlaud",
    "type": "image",
    "src": "photos/diary/1Y1hn_L9PERrUDMFSson16Tq8-aAXlaud.webp",
    "thumbnail": "photos/diary/1Y1hn_L9PERrUDMFSson16Tq8-aAXlaud-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 03",
    "message": ""
  },
  {
    "id": "tribute-1ltgEr_y3mzShvvZ_IlxkTPYKyu-GyRd6",
    "type": "image",
    "src": "photos/diary/1ltgEr_y3mzShvvZ_IlxkTPYKyu-GyRd6.webp",
    "thumbnail": "photos/diary/1ltgEr_y3mzShvvZ_IlxkTPYKyu-GyRd6-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 04",
    "message": ""
  },
  {
    "id": "tribute-1WfkzZEqE2_wdjz0AIavQQ1sDGXrVVs6m",
    "type": "image",
    "src": "photos/diary/1WfkzZEqE2_wdjz0AIavQQ1sDGXrVVs6m.webp",
    "thumbnail": "photos/diary/1WfkzZEqE2_wdjz0AIavQQ1sDGXrVVs6m-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 05",
    "message": ""
  },
  {
    "id": "tribute-10q_VkuhW0xhUQGCgShSB8f_hs7AEJQ4a",
    "type": "image",
    "src": "photos/diary/10q_VkuhW0xhUQGCgShSB8f_hs7AEJQ4a.webp",
    "thumbnail": "photos/diary/10q_VkuhW0xhUQGCgShSB8f_hs7AEJQ4a-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 06",
    "message": ""
  },
  {
    "id": "tribute-13xmiB5hYmzKv6xFeGr3iJp0M0OgN4sYK",
    "type": "image",
    "src": "photos/diary/13xmiB5hYmzKv6xFeGr3iJp0M0OgN4sYK.webp",
    "thumbnail": "photos/diary/13xmiB5hYmzKv6xFeGr3iJp0M0OgN4sYK-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 07",
    "message": ""
  },
  {
    "id": "tribute-1MSSREiZyjMdqAnaU6hlWpHubXGEFOmFw",
    "type": "image",
    "src": "photos/diary/1MSSREiZyjMdqAnaU6hlWpHubXGEFOmFw.webp",
    "thumbnail": "photos/diary/1MSSREiZyjMdqAnaU6hlWpHubXGEFOmFw-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 08",
    "message": ""
  },
  {
    "id": "tribute-12zTjyvTC-vtm6wDZZ8Gnr450VQ9W7eN2",
    "type": "image",
    "src": "photos/diary/12zTjyvTC-vtm6wDZZ8Gnr450VQ9W7eN2.webp",
    "thumbnail": "photos/diary/12zTjyvTC-vtm6wDZZ8Gnr450VQ9W7eN2-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 09",
    "message": ""
  },
  {
    "id": "tribute-1Rn70n6ToVmNByEQvI6K1e1KymGEOZpO2",
    "type": "image",
    "src": "photos/diary/1Rn70n6ToVmNByEQvI6K1e1KymGEOZpO2.webp",
    "thumbnail": "photos/diary/1Rn70n6ToVmNByEQvI6K1e1KymGEOZpO2-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 10",
    "message": ""
  },
  {
    "id": "tribute-10mYX_3CNTDu5_oMu-jcV-cAq92ZWPBjK",
    "type": "image",
    "src": "photos/diary/10mYX_3CNTDu5_oMu-jcV-cAq92ZWPBjK.webp",
    "thumbnail": "photos/diary/10mYX_3CNTDu5_oMu-jcV-cAq92ZWPBjK-thumb.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Thiệp tri ân · 11",
    "message": ""
  },
  {
    "id": "tribute-1ejheNfw09lcmaxg75yUxSipufxrAlYAs",
    "type": "video",
    "src": "videos/diary/1ejheNfw09lcmaxg75yUxSipufxrAlYAs-upright.mp4",
    "thumbnail": "videos/diary/1ejheNfw09lcmaxg75yUxSipufxrAlYAs-upright-poster.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Video chúc mừng · 01",
    "message": ""
  },
  {
    "id": "tribute-1o5VbAverKlMhmKcv-Z0zJD1ZYzakvH-5",
    "type": "video",
    "src": "videos/diary/1o5VbAverKlMhmKcv-Z0zJD1ZYzakvH-5-upright.mp4",
    "thumbnail": "videos/diary/1o5VbAverKlMhmKcv-Z0zJD1ZYzakvH-5-upright-poster.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Video chúc mừng · 02",
    "message": ""
  },
  {
    "id": "tribute-10fVSP7b8-Pl1h2JXXWvF_3t-FF7mMJSh",
    "type": "video",
    "src": "videos/diary/10fVSP7b8-Pl1h2JXXWvF_3t-FF7mMJSh-upright.mp4",
    "thumbnail": "videos/diary/10fVSP7b8-Pl1h2JXXWvF_3t-FF7mMJSh-upright-poster.webp",
    "published": true,
    "author": "Lớp 6B02",
    "recipient": "Các thầy cô Trường THCS Tam Thanh",
    "caption": "Video chúc mừng · 03",
    "message": ""
  }
];
  let mediaIndex = 0;
  const compose = $('tributeCompose'), letter = $('tributeLetter'), form = $('tributeForm');
  const author = $('tributeAuthor'), recipient = $('tributeRecipient'), other = $('tributeOtherTeacherName'), message = $('tributeMessage');
  const status = $('tributeStatus'), submit = $('tributeSubmit');
  const config = window.SITE_CONFIG || {};
  let baseUrl = '';
  try {const url = new URL(config.supabaseUrl); if (url.protocol === 'https:') baseUrl = url.href.replace(/\/$/, '');} catch (_) {}
  const connected = Boolean(baseUrl && typeof config.supabaseAnonKey === 'string' && config.supabaseAnonKey.trim());
  const storageKey = '6b02-tribute-drafts-v1';
  let approved = [], drafts = [], editing = null, sending = false;
  try {const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) drafts = saved.filter(item => typeof item.id === 'string' && typeof item.author === 'string' && typeof item.recipient === 'string' && typeof item.message === 'string' && item.author.length <= 60 && item.recipient.length <= 80 && item.message.length <= 500); } catch (_) {}
  function element(tag, className, text) {const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node;}
  function selectedTeacher() {return recipient.value === 'teacher' ? teacher : recipient.value === 'class' ? teachers : other.value.trim();}
  function prefix(name) {return `Kính gửi ${name},\n\n`;}
  function setStatus(text, state = '') {status.textContent = text; status.dataset.state = state;}
  function updateForm() {
    const isOther = recipient.value === 'other';
    $('tributeOtherTeacher').hidden = !isOther; other.required = isOther;
    const max = 500 - prefix(selectedTeacher()).length;
    message.maxLength = max;
    $('tributeCharCount').textContent = `${message.value.length} / ${max}`;
    $('tributeLengthHint').textContent = `Viết từ 10 đến ${max} ký tự nhé.`;
    message.setCustomValidity(message.value.length > max ? `Lời chúc cần ngắn hơn ${max + 1} ký tự để ghi đủ tên cô nhận thư.` : '');
    [author, recipient, other, message, $('tributePreview')].forEach(field => {field.disabled = sending;});
    submit.disabled = sending;
    submit.textContent = sending ? 'Đang gửi lời chúc…' : connected ? 'Gửi lời chúc chờ duyệt' : 'Lưu thư nháp trên thiết bị';
  }
  function readForm() {return {author: author.value.trim(), recipient: selectedTeacher(), message: message.value.trim()};}
  function validForm() {
    updateForm();
    if (!form.reportValidity()) return false;
    const value = readForm();
    if (!value.author || !value.recipient || value.message.length < 10) {setStatus('Em hãy điền tên, cô nhận thư và lời chúc có ít nhất 10 ký tự nhé.', 'error'); return false;}
    return true;
  }
  function openLetter(item, badge = item.demo ? 'LỜI CHÚC DEMO' : 'LỜI CHÚC ĐÃ DUYỆT') {
    $('tributeLetterMedia').querySelector('video')?.pause();
    $('tributeLetterMedia').replaceChildren();
    $('tributeLetterMedia').hidden = true; $('tributeMediaNav').hidden = true;
    letter.classList.remove('has-published-media');
    ['tributeLetterRecipient', 'tributeLetterMessage', 'tributeLetterAuthor'].forEach(id => $(id).hidden = false);
    $('tributeLetterBadge').textContent = badge;
    $('tributeLetterRecipient').textContent = `Kính gửi ${item.recipient}`;
    $('tributeLetterTitle').textContent = 'Một lời chúc từ trái tim';
    $('tributeLetterMessage').textContent = item.message;
    $('tributeLetterAuthor').textContent = `Thương mến, ${item.author}`;
    if (!letter.open) letter.showModal();
  }
  function openPublished(item) {
    mediaIndex = published.findIndex(value => value.id === item.id);
    const host = $('tributeLetterMedia');
    host.querySelector('video')?.pause(); host.replaceChildren();
    letter.classList.add('has-published-media');
    ['tributeLetterRecipient', 'tributeLetterMessage', 'tributeLetterAuthor'].forEach(id => $(id).hidden = true);
    host.hidden = false; $('tributeMediaNav').hidden = false;
    $('tributeLetterBadge').textContent = item.type === 'video' ? 'VIDEO CHÚC MỪNG 20/11' : 'THIỆP TRI ÂN 20/11';
    $('tributeLetterTitle').textContent = item.caption;
    const media = element(item.type === 'video' ? 'video' : 'img');
    media.src = item.src;
    if (item.type === 'video') {media.controls = true; media.playsInline = true; media.preload = 'metadata'; media.poster = item.thumbnail;}
    else media.alt = item.caption + ' gửi thầy cô';
    media.addEventListener('error', () => { $('tributeMediaCount').textContent = 'Chưa tải được nội dung. Anh/chị thử mở lại phong thư nhé.'; });
    host.appendChild(media);
    $('tributeMediaCount').textContent = `${mediaIndex + 1} / ${published.length}`;
    if (!letter.open) letter.showModal();
  }
  function readItem(item) {if (item.published) openPublished(item); else openLetter(item);}
  function publicItems() {return [...published, ...approved];}
  function renderWall() {
    $('tributeEnvelopes').replaceChildren(...publicItems().map((item, index) => {
      const button = element('button', 'tribute-envelope'); button.type = 'button';
      button.setAttribute('aria-label', item.published ? `Mở ${item.caption}` : `Mở bức thư ${index + 1}`);
      const art = element('span', 'tribute-envelope-art'); art.setAttribute('aria-hidden', 'true'); art.style.backgroundPosition = `${(index % 3) * 50}% ${Math.floor((index % 6) / 3) * 100}%`;
      button.append(art, element('span', 'tribute-envelope-label', `Bức thư ${String(index + 1).padStart(2, '0')}`), element('span', 'tribute-envelope-caption', item.caption || `Lời chúc gửi ${item.recipient}`));
      button.addEventListener('click', () => readItem(item)); return button;
    }));
    $('tributeFeatured').replaceChildren(...[...published.filter(item => item.type === 'video'), ...published.filter(item => item.type === 'image'), ...approved].slice(0, 4).map(item => {
      const button = element('button', 'tribute-feature-card'); button.type = 'button'; button.setAttribute('aria-label', item.published ? `Xem ${item.caption}` : `Đọc lời chúc của ${item.author}`);
      if (item.published) {const preview = element('img', 'tribute-feature-preview'); preview.src = item.thumbnail; preview.alt = item.caption; preview.loading = 'lazy'; button.append(preview);}
      button.append(element('span', 'tribute-feature-message', item.published ? item.caption : item.message), element('span', 'tribute-feature-author', item.author), element('small', 'tribute-demo-tag', item.published ? (item.type === 'video' ? 'Bấm để xem video' : 'Bấm để mở thiệp') : 'Đã được duyệt'));
      button.addEventListener('click', () => readItem(item)); return button;
    }));
    $('tributeModeNote').textContent = '11 thiệp và 3 video chúc mừng 20/11 của lớp 6B02 · Bấm vào phong thư để mở.';
    $('tributeFormNote').textContent = connected
      ? 'Lời chúc được gửi vào hộp thư chung và chờ người quản lý duyệt trước khi xuất hiện công khai. Thư chưa được gửi qua email cho cô.'
      : 'Em có thể viết, xem trước và lưu thư nháp trên trình duyệt này để mở lại và viết tiếp. Thư nháp chưa được gửi đến cô hoặc đăng công khai.';
  }
  function storeDraft(value) {
    const id = editing || crypto.randomUUID();
    const record = {...value, id, updatedAt: Date.now()};
    const next = [record, ...drafts.filter(item => item.id !== id)];
    localStorage.setItem(storageKey, JSON.stringify(next));
    drafts = next; editing = id; renderDrafts(); return record;
  }
  function removeDraft(id) {
    const next = drafts.filter(item => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(next)); drafts = next; renderDrafts();
  }
  function openCompose(choice = 'teacher', draft = null) {
    editing = draft ? draft.id : null;
    form.reset(); $('tributePreviewArea').hidden = true; setStatus('');
    if (draft) {
      author.value = draft.author; message.value = draft.message;
      recipient.value = draft.recipient === teacher ? 'teacher' : draft.recipient === teachers ? 'class' : 'other';
      other.value = recipient.value === 'other' ? draft.recipient : '';
    } else recipient.value = choice;
    updateForm(); if (!compose.open) compose.showModal();
  }
  function renderDrafts() {
    $('tributeRecentArea').hidden = drafts.length === 0;
    $('tributeRecent').replaceChildren(...drafts.map(draft => {
      const card = element('article', 'tribute-draft-card');
      card.append(element('small', '', 'THƯ NHÁP · CHƯA GỬI'), element('p', '', `Gửi ${draft.recipient}`), element('p', '', draft.message));
      const buttons = element('div', 'tribute-draft-actions');
      const read = element('button', '', 'Đọc thư'); read.type = 'button'; read.addEventListener('click', () => openLetter(draft, 'THƯ NHÁP · CHƯA GỬI'));
      const edit = element('button', '', 'Viết tiếp'); edit.type = 'button'; edit.addEventListener('click', () => openCompose('teacher', draft));
      const remove = element('button', '', 'Xóa nháp'); remove.type = 'button'; remove.addEventListener('click', () => {try {removeDraft(draft.id);} catch (_) {$('tributeLoadStatus').textContent = 'Chưa xóa được thư nháp trên trình duyệt này.';}});
      buttons.append(read, edit, remove); card.append(buttons); return card;
    }));
  }
  function preview() {
    if (!validForm()) return;
    const value = readForm();
    $('tributePreviewRecipient').textContent = `Kính gửi ${value.recipient}`;
    $('tributePreviewMessage').textContent = value.message;
    $('tributePreviewAuthor').textContent = `Thương mến, ${value.author}`;
    $('tributePreviewArea').hidden = false;
  }
  function request(path, options = {}) {
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 15000);
    // Legacy anon keys are JWTs; newer publishable keys belong only in apikey.
    const auth = config.supabaseAnonKey.startsWith('eyJ') ? {Authorization: `Bearer ${config.supabaseAnonKey}`} : {};
    return fetch(baseUrl + path, {...options, signal: controller.signal, headers: {apikey: config.supabaseAnonKey, ...auth, ...options.headers}}).finally(() => clearTimeout(timeout));
  }
  async function loadPublic() {
    if (!connected) return;
    try {
      const response = await request('/rest/v1/tributes?select=author,message&status=eq.approved&occasion=eq.20-11&order=created_at.desc&limit=100');
      if (!response.ok) throw new Error('load');
      const rows = await response.json(); if (!Array.isArray(rows)) throw new Error('data');
      approved = rows.filter(row => typeof row.author === 'string' && typeof row.message === 'string').map((row, index) => {
        const match = row.message.match(/^Kính gửi ([^\n]{1,80}),\n\n/);
        return {id: `approved-${index}`, author: row.author, recipient: match ? match[1] : teachers, message: match ? row.message.slice(match[0].length) : row.message, demo: false};
      });
      renderWall(); $('tributeLoadStatus').textContent = '';
    } catch (_) {$('tributeLoadStatus').textContent = 'Chưa tải được lời chúc đã duyệt. Thiệp và video của lớp vẫn có thể xem được.';}
  }
  document.querySelectorAll('.tribute-compose-button').forEach(button => button.addEventListener('click', () => openCompose(button.dataset.tributeRecipient || 'teacher')));
  $('tributeComposeClose').addEventListener('click', () => compose.close()); $('tributeLetterClose').addEventListener('click', () => letter.close());
  [compose, letter].forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }));
  recipient.addEventListener('change', () => {$('tributePreviewArea').hidden = true; updateForm();});
  other.addEventListener('input', () => {$('tributePreviewArea').hidden = true; updateForm();});
  message.addEventListener('input', () => {$('tributePreviewArea').hidden = true; updateForm();});
  author.addEventListener('input', () => {$('tributePreviewArea').hidden = true;});
  $('tributePreview').addEventListener('click', preview);
  form.addEventListener('submit', async event => {
    event.preventDefault(); if (sending || !validForm()) return;
    const value = readForm();
    if (!connected) {
      try {storeDraft(value); setStatus('Đã lưu thư nháp trên trình duyệt này. Thư chưa được gửi đến cô hoặc đăng công khai.', 'success');}
      catch (_) {setStatus('Chưa lưu được thư nháp. Em hãy sao chép lời chúc để giữ lại trước khi đóng cửa sổ nhé.', 'error');}
      return;
    }
    sending = true; updateForm(); setStatus('Đang gửi lời chúc vào hộp thư chờ duyệt…');
    try {
      const response = await request('/rest/v1/tributes', {method: 'POST', headers: {'Content-Type': 'application/json', Prefer: 'return=minimal'}, body: JSON.stringify({author: value.author, message: prefix(value.recipient) + value.message, status: 'pending', occasion: '20-11'})});
      if (!response.ok) throw new Error('send');
      if (editing) {try {removeDraft(editing);} catch (_) { /* A saved draft may still remain on this browser. */ }}
      editing = null; message.value = ''; $('tributePreviewArea').hidden = true;
      setStatus('Đã gửi lời chúc vào hộp thư chung! Thư đang chờ duyệt trước khi hiển thị công khai.', 'success');
    } catch (_) {
      let saved = false; try {storeDraft(value); saved = true;} catch (_) {}
      setStatus(saved ? 'Chưa gửi được đến hộp thư chung. Đã giữ lại thư nháp trên trình duyệt này để em thử gửi lại.' : 'Chưa gửi được và chưa lưu được thư nháp. Em hãy sao chép lời chúc để giữ lại nhé.', 'error');
    } finally {sending = false; updateForm();}
  });
  $('tributeMediaPrev').addEventListener('click', () => openPublished(published[(mediaIndex - 1 + published.length) % published.length]));
  $('tributeMediaNext').addEventListener('click', () => openPublished(published[(mediaIndex + 1) % published.length]));
  letter.addEventListener('close', () => { $('tributeLetterMedia').querySelector('video')?.pause(); $('tributeLetterMedia').replaceChildren(); });
  letter.addEventListener('keydown', event => {
    if (!letter.classList.contains('has-published-media') || ['VIDEO','INPUT','TEXTAREA'].includes(event.target.tagName)) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {event.preventDefault(); $(event.key === 'ArrowRight' ? 'tributeMediaNext' : 'tributeMediaPrev').click();}
  });
  renderWall(); renderDrafts(); updateForm(); loadPublic();
})();
