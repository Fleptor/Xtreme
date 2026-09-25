document.documentElement.classList.add('js');

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
let toastTimer;
function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('visible'), 4500);
}

// Calendar boundaries are UTC instants; the visible label is explicitly Jordan time.
const start = Date.parse('2026-10-31T00:00:00Z');
const end = Date.parse('2026-11-01T00:00:00Z');
function updateCountdown() {
  const now = Date.now();
  const remaining = Math.max(0, Math.floor((start - now) / 1000));
  const values = { days: Math.floor(remaining / 86400), hours: Math.floor(remaining / 3600) % 24, minutes: Math.floor(remaining / 60) % 60, seconds: remaining % 60 };
  Object.entries(values).forEach(([key, value]) => { $(`[data-time="${key}"]`).textContent = String(value).padStart(2, '0'); });
  $('#countdown').setAttribute('aria-label', `متبقّي ${values.days} يوم و${values.hours} ساعة و${values.minutes} دقيقة`);
  if (now >= start) {
    $('#countdown-title').textContent = now < end ? 'انطلقت المغامرة. بالتوفيق لفرقنا!' : 'انتهت المنافسة. شكرًا لكل فرقنا!';
    $('#countdown').hidden = true;
  }
}
updateCountdown();
setInterval(updateCountdown, 1000);

async function copyAmbassadorId(input) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(input.value);
    toast('تم نسخ رقم السفير. أضفه أثناء التسجيل على vTools.');
  } catch {
    input.focus(); input.select();
    toast('تم تحديد رقم السفير؛ انسخه من الحقل باستخدام خيار النسخ.');
  }
}
$('#copy-id').addEventListener('click', () => copyAmbassadorId($('#ambassador-id')));
$$('[data-copy-target]').forEach(button => button.addEventListener('click', () => copyAmbassadorId(document.getElementById(button.dataset.copyTarget))));

const tabs = $$('[data-mode]');
function setMode(mode, focus = false) {
  tabs.forEach(tab => {
    const selected = tab.dataset.mode === mode;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    $(`#${tab.getAttribute('aria-controls')}`).hidden = !selected;
    if (selected && focus) tab.focus();
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setMode(tab.dataset.mode));
  tab.addEventListener('keydown', event => {
    let next;
    // Tabs are laid out right-to-left.
    if (event.key === 'ArrowLeft') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowRight') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); setMode(tabs[next].dataset.mode, true); }
  });
});
setMode('onsite');

const storageKey = 'xtreme20-bau-readiness-v1';
const preferenceKey = 'xtreme20-bau-save-readiness';
const checkboxes = $$('[data-check]');
const savePreference = $('#save-readiness');
let storageAvailable = true;
try {
  savePreference.checked = localStorage.getItem(preferenceKey) === 'yes';
  if (savePreference.checked) {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (saved && typeof saved === 'object') checkboxes.forEach(box => { box.checked = saved[box.dataset.check] === true; });
  } else {
    localStorage.removeItem(storageKey);
  }
} catch { storageAvailable = false; }
function updateChecklist(save = false) {
  const count = checkboxes.filter(box => box.checked).length;
  $('#checklist-count').textContent = `${count} / ${checkboxes.length}`;
  $('#readiness-progress').value = count;
  if (save && savePreference.checked) {
    try { localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(checkboxes.map(box => [box.dataset.check, box.checked])))); }
    catch { storageAvailable = false; }
  }
  $('#checklist-note').textContent = !storageAvailable ? 'اختياراتك لهذه الزيارة؛ الحفظ غير متاح.' : savePreference.checked ? 'الحفظ مفعّل على جهازك فقط.' : 'للحفظ بين الزيارات، فعّل الخيار أعلاه.';
}
savePreference.addEventListener('change', () => {
  try {
    if (savePreference.checked) localStorage.setItem(preferenceKey, 'yes');
    else { localStorage.removeItem(preferenceKey); localStorage.removeItem(storageKey); }
  } catch { storageAvailable = false; }
  updateChecklist(true);
});
checkboxes.forEach(box => box.addEventListener('change', () => updateChecklist(true)));
$('#reset-checklist').addEventListener('click', () => { checkboxes.forEach(box => { box.checked = false; }); updateChecklist(true); });
updateChecklist();

$$('[data-resource-filter]').forEach(button => button.addEventListener('click', () => {
  $$('[data-resource-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  $$('.resource-card').forEach(card => { card.hidden = button.dataset.resourceFilter !== 'all' && card.dataset.resourceCategory !== button.dataset.resourceFilter; });
}));

// Fold Arabic diacritics and common letter variants for forgiving Arabic search.
const normalize = value => value.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه');
const faqItems = $$('.faq-item');
const searchable = new Map(faqItems.map(item => [item, normalize(item.textContent + ' ' + item.dataset.keywords)]));
const categoryButtons = $$('[data-faq-category]');
const searchInput = $('#faq-search');
searchInput.disabled = false;
let category = 'all';
let visibleLimit = 8;
function filterFaq() {
  const terms = normalize(searchInput.value.trim()).split(/\s+/).filter(Boolean);
  const matches = faqItems.filter(item => (category === 'all' || item.dataset.category === category) && terms.every(term => searchable.get(item).includes(term)));
  const visible = new Set(matches.slice(0, visibleLimit));
  faqItems.forEach(item => { item.hidden = !visible.has(item); if (item.hidden) item.open = false; });
  $('#faq-result-count').textContent = `عرض ${Math.min(matches.length, visibleLimit)} من ${matches.length} سؤال`;
  $('#faq-empty').hidden = matches.length > 0;
  $('#faq-more').hidden = matches.length <= visibleLimit;
  $('#faq-more').textContent = `اعرض المزيد من الأسئلة (${Math.max(0, matches.length - visibleLimit)}) ↓`;
  $('#faq-clear').hidden = !searchInput.value && category === 'all';
  categoryButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.faqCategory === category)));
}
searchInput.addEventListener('input', () => { visibleLimit = 8; filterFaq(); });
categoryButtons.forEach(button => button.addEventListener('click', () => { category = button.dataset.faqCategory; visibleLimit = 8; filterFaq(); }));
function clearFaq() { category = 'all'; searchInput.value = ''; visibleLimit = 8; filterFaq(); searchInput.focus(); }
$('#faq-clear').addEventListener('click', clearFaq);
$('#faq-reset').addEventListener('click', clearFaq);
$('#faq-more').addEventListener('click', () => {
  const previousVisible = faqItems.filter(item => !item.hidden).length;
  visibleLimit += 8; filterFaq();
  faqItems.filter(item => !item.hidden)[previousVisible]?.querySelector('summary').focus({ preventScroll: true });
});
filterFaq();
