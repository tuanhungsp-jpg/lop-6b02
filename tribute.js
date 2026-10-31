/* Demo tributes, explicit device-local drafts, and an optional moderated public inbox. */
(() => {
  const $ = id => document.getElementById(id);
  if (!$('tributeEnvelopes')) return;
  const teacher = 'Cô Lâm Thị Nga', teachers = 'Các thầy cô Trường THCS Tam Thanh';
  const demos = [
    {author: 'Một học trò 6B02', recipient: teachers, caption: 'Cảm ơn vì đã luôn tin tưởng vào chúng em!', message: 'Cảm ơn thầy cô đã luôn đồng hành, kiên nhẫn và dạy chúng em không chỉ tri thức mà còn cả cách làm người. Chúng em chúc thầy cô thật nhiều sức khỏe, niềm vui và những ngày đến lớp luôn đầy ắp tiếng cười.'},
    {author: 'Những trái tim nhỏ', recipient: teachers, caption: 'Những bài học không chỉ trong sách vở', message: 'Nhờ thầy cô, chúng em đã mạnh dạn hơn, tự tin hơn và biết ước mơ nhiều hơn. Những lời động viên giản dị của thầy cô là điều chúng em luôn ghi nhớ. Cảm ơn thầy cô vì những bài học tử tế mỗi ngày!'},
    {author: 'Tập thể Chi đội 6B02', recipient: teachers, caption: 'Thầy cô là những người truyền cảm hứng', message: 'Thầy cô giống như những ngọn hải đăng, luôn soi sáng cho chúng em dù có những lúc chúng em vô tình làm thầy cô buồn. Ngày 20/11, chúng em xin gửi đến thầy cô một lời cảm ơn thật chân thành!'},
    {author: 'Một lời cảm ơn nhỏ', recipient: teachers, caption: 'Cảm ơn vì sự kiên nhẫn và yêu thương', message: 'Nhân ngày Nhà giáo Việt Nam, chúng em kính chúc thầy cô luôn mạnh khỏe, hạnh phúc và luôn giữ được nụ cười dịu dàng trên môi. Mong rằng mỗi ngày tới trường đều là một ngày thật vui với thầy cô.'},
    {author: 'Học trò của cô Nga', recipient: teacher, caption: 'Những kỷ niệm mãi trong tim', message: 'Cô Nga kính yêu! Cảm ơn cô vì đã lắng nghe những tâm sự nhỏ và giúp tập thể 6B02 thêm đoàn kết, tự tin, tỏa sáng. Chúng em sẽ cố gắng học tập và rèn luyện để cô luôn tự hào về chúng em. Chúc cô thật nhiều niềm vui!'},
    {author: 'Ngôi nhà nhỏ 6B02', recipient: teachers, caption: 'Chúng em sẽ luôn cố gắng hơn nữa!', message: 'Mỗi trang vở hôm nay là một hạt mầm thầy cô vun trồng. Chúng em xin gửi ngàn lời biết ơn đến những người đã thắp sáng ước mơ của chúng em. Chúc thầy cô một ngày 20/11 thật ấm áp và nhiều yêu thương!'}
  ].map((item, index) => ({...item, id: `tribute-demo-${index}`, demo: true}));
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
    $('tributeLetterBadge').textContent = badge;
    $('tributeLetterRecipient').textContent = `Kính gửi ${item.recipient}`;
    $('tributeLetterTitle').textContent = 'Một lời chúc từ trái tim';
    $('tributeLetterMessage').textContent = item.message;
    $('tributeLetterAuthor').textContent = `Thương mến, ${item.author}`;
    if (!letter.open) letter.showModal();
  }
  function publicItems() {const items = [...approved]; while (items.length < 6) items.push(demos[items.length]); return items.slice(0, 6);}
  function renderWall() {
    $('tributeEnvelopes').replaceChildren(...publicItems().map((item, index) => {
      const button = element('button', 'tribute-envelope'); button.type = 'button';
      button.setAttribute('aria-label', `Mở bức thư ${index + 1}${item.demo ? ' minh họa' : ''}`);
      const art = element('span', 'tribute-envelope-art'); art.setAttribute('aria-hidden', 'true'); art.style.backgroundPosition = `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%`;
      button.append(art, element('span', 'tribute-envelope-label', `Bức thư ${String(index + 1).padStart(2, '0')}`), element('span', 'tribute-envelope-caption', item.caption || `Lời chúc gửi ${item.recipient}`));
      button.addEventListener('click', () => openLetter(item)); return button;
    }));
    $('tributeFeatured').replaceChildren(...publicItems().slice(0, 4).map(item => {
      const button = element('button', 'tribute-feature-card'); button.type = 'button'; button.setAttribute('aria-label', `Đọc lời chúc của ${item.author}`);
      button.append(element('span', 'tribute-feature-message', item.message), element('span', 'tribute-feature-author', item.author), element('small', 'tribute-demo-tag', item.demo ? 'Lời chúc demo · 6B02' : 'Đã được duyệt'));
      button.addEventListener('click', () => openLetter(item)); return button;
    }));
    $('tributeModeNote').textContent = connected
      ? `${approved.length} lời chúc đã duyệt trong hộp thư chung. Các phong thư có nhãn demo dùng để minh họa khi chưa đủ nội dung.`
      : '6 lời chúc demo · Các con có thể viết, xem trước và lưu thư nháp. Thư nháp chưa được gửi đến các cô.';
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
    } catch (_) {$('tributeLoadStatus').textContent = 'Chưa tải được lời chúc đã duyệt. Các phong thư demo vẫn có thể xem được.';}
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
  renderWall(); renderDrafts(); updateForm(); loadPublic();
})();
