import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { links, faqs, categories, resources, socials } from '../src/content.mjs';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const dist = path.join(root, 'dist');
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const external = '';
const fileAttributes = key => key === 'htuRules' ? 'target="_blank" rel="noopener noreferrer"' : '';
const keywords = {about:'xtreme competition اكستريم إكستريم موعد تاريخ',team:'student graduate membership team عضويه اعضاء',registration:'registration vtools تسجيل ambassador id رقم السفير',proctor:'proctor proctors مراقب مراقبين المراقب المراقبين',participation:'online remote onsite اونلاين أونلاين عن بعد حضور',htu:'htu host هوست استضافة حسين طالبات بنات جوائز افتتاح',practice:'practice browser language لغات متصفحات تدريب',community:'ambassador سفير واتساب شهادة'};

export async function build() {
  await mkdir(dist, {recursive:true});
  const partials = Object.fromEntries(await Promise.all([['IEEE_META','ieee-meta.html'],['SITE_HEADER','site-header.html'],['SITE_FOOTER','site-footer.html']].map(async ([key,file]) => [key,await readFile(path.join(root,'src/partials',file),'utf8')])));
  const shell = (html, home = '') => html.replace(/\{\{(IEEE_META|SITE_HEADER|SITE_FOOTER)\}\}/g,(_,key)=>partials[key]).replaceAll('{{HOME}}',home).replaceAll('{{YEAR}}',String(new Date().getFullYear()));
  const template = shell(await readFile(path.join(root, 'src/index.html'), 'utf8'));
  const faqMarkup = faqs.map(([cat,q,a,source,label],i) => `<details class="faq-item" data-category="${cat}" data-keywords="${keywords[cat]}" id="question-${i+1}"><summary><span>${escape(q)}</span></summary><div class="faq-answer"><p>${escape(a)}</p><a href="${escape(links[source])}" ${fileAttributes(source)}>${escape(label || 'المصدر الرسمي')}${source === 'htuRules' ? ' (TXT، 2 KB، نافذة جديدة)' : ''} ↗</a></div></details>`).join('\n');
  const categoryMarkup = categories.map(([key,label]) => `<button data-faq-category="${key}" aria-pressed="${key==='all'}">${label}<span>${key==='all'?faqs.length:faqs.filter(item=>item[0]===key).length}</span></button>`).join('');
  const resourceMarkup = resources.map(([num,title,description,key,category]) => `<a class="resource-card" href="${escape(links[key])}" data-resource-category="${category}" ${fileAttributes(key)}><span class="resource-number">${num} /</span><span class="resource-arrow" aria-hidden="true">↗</span><h3>${escape(title)}</h3><p>${escape(description)}${key === 'htuRules' ? ' (TXT، 2 KB، نافذة جديدة)' : ''}</p></a>`).join('\n');
  const instagram = '<svg class="instagram-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>';
  const socialMarkup = socials.map(([title,description,handle,url]) => `<a class="social-card" href="${url}" ${external}><div class="social-icon-row">${instagram}<span aria-hidden="true">↗</span></div><h3>${escape(title)}</h3><p>${escape(description)}</p><span class="handle">@${handle}</span></a>`).join('\n');
  const html = template.replace('{{FAQ}}', faqMarkup).replace('{{CATEGORIES}}',categoryMarkup).replace('{{RESOURCES}}',resourceMarkup).replace('{{SOCIALS}}',socialMarkup).replaceAll('{{FAQ_COUNT}}',String(faqs.length)).replace(/\{\{link:(\w+)\}\}/g,(_,key) => { if(!links[key]) throw new Error(`Unknown link ${key}`); return escape(links[key]); });
  await writeFile(path.join(dist,'index.html'),html);
  await cp(path.join(root,'assets'),path.join(dist,'assets'),{recursive:true});
  for (const file of ['styles.css','ieee.css','app.js','shell.js']) await cp(path.join(root,'src',file),path.join(dist,file));
  await writeFile(path.join(dist,'sources.html'),shell(await readFile(path.join(root,'src/sources.html'),'utf8'),'index.html'));
  console.log(`Built ${faqs.length} FAQs, ${resources.length} resources, ${socials.length} social links → dist/`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
