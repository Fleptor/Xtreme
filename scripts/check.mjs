import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { build, dist, root } from './build.mjs';
import { links, faqs, categories, resources, socials } from '../src/content.mjs';

await build();
assert.equal(links.vtools, 'https://xtreme.vtools.ieee.org/');
assert.equal(links.htu, 'http://forms.gle/j1x4JaKX4UtxLvB88');
assert.equal(links.local, 'https://forms.gle/ibv1FKSZVbN1vduPA');
assert.equal(links.tutorial, 'https://youtu.be/T-4hHZvCQnw');
assert.equal(socials.length, 5);
assert.ok(faqs.length >= 50);
const categoryIds = new Set(categories.map(([id]) => id));
const questions = new Set();
for (const [category,question,answer,source] of faqs) {
  assert.ok(categoryIds.has(category), `Unknown FAQ category: ${category}`);
  assert.ok(links[source], `Missing source: ${question}`);
  assert.ok(answer.trim(), `Empty answer: ${question}`);
  assert.ok(!questions.has(question), `Duplicate question: ${question}`);
  questions.add(question);
}
for (const resource of resources) assert.ok(links[resource[3]], `Missing resource URL: ${resource[1]}`);
for (const file of ['index.html','sources.html']) {
  const html = await readFile(path.join(dist,file),'utf8');
  assert.ok(!/\{\{|\}\}|TODO|placeholder\.com|بانتظار التأكيد|waiting for 20/i.test(html), `Unresolved content in ${file}`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length,new Set(ids).size,`Duplicate IDs in ${file}`);
  for (const [,href] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (href.startsWith('#')) assert.ok(ids.includes(href.slice(1)), `Broken anchor: ${href}`);
    else if (/^(?:https?:|mailto:)/.test(href)) assert.doesNotThrow(() => new URL(href));
    else await access(path.join(dist,href.split(/[?#]/)[0]));
  }
  for (const [,target] of html.matchAll(/aria-controls="([^"]+)"/g)) assert.ok(ids.includes(target), `Broken ARIA target: ${target}`);
  assert.ok(html.includes('alt="IEEE" width="116" height="34"'), `Official master brand missing in ${file}`);
  assert.ok(html.includes('class="ieee-meta"'), `IEEE meta navigation missing in ${file}`);
  assert.ok(html.includes('assets/favicon.ico'), `Official favicon missing in ${file}`);
  assert.ok(!html.includes('brand-symbol') && !html.includes('brand-x'), `Improvised wordmark remains in ${file}`);
  for (const required of ['https://www.ieee.org/accessibility_statement.html','https://www.ieee.org/nondiscrimination','https://www.ieee-ethics-reporting.org/','https://www.ieee.org/site_terms_conditions.html','https://privacy.ieee.org/policies']) assert.ok(html.includes(required), `IEEE footer destination missing: ${required}`);
  for (const [anchor] of html.matchAll(/<a\b[^>]+>/g)) if (anchor.includes('target="_blank"')) {
    assert.ok(anchor.includes('.txt') || anchor.includes(`href="${links.tutorial}"`), `Unexpected new-tab link: ${anchor}`);
    assert.ok(anchor.includes('noopener') && anchor.includes('noreferrer'), `Missing new-tab protections: ${anchor}`);
  }
}
const html = await readFile(path.join(dist,'index.html'),'utf8');
assert.ok(html.includes('IEEEXTREME20SB08217'));
assert.ok(html.includes('lang="ar" dir="rtl"'));
const css = await readFile(path.join(dist,'styles.css'),'utf8') + await readFile(path.join(dist,'ieee.css'),'utf8');
for (const [,url] of css.matchAll(/url\('([^']+)'\)/g)) await access(path.join(dist,url));
const originalRules = await readFile(path.join(root,'assets/htu-regulations.txt'),'utf8');
assert.match(originalRules,/minimum of 10 hours/);
assert.match(originalRules,/minimum of 15 hours/);
assert.match(originalRules,/8:00 AM/);
const calendar = await readFile(path.join(dist,'assets/ieeextreme-20.ics'),'utf8');
assert.match(calendar,/DTSTART:20261031T000000Z/);
assert.match(calendar,/DTEND:20261101T000000Z/);
const jordan = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Amman',hour:'2-digit',hourCycle:'h23'}).format(new Date('2026-10-31T00:00:00Z'));
assert.equal(jordan,'03');
console.log(`PASS: ${faqs.length} sourced FAQs; all local links, assets, anchors, ARIA targets, resource URLs, protected identifiers, calendar and Jordan time checked.`);
console.log('PASS: shared IEEE identity, official favicon, administrative footer and link targets on both pages (YouTube explicitly opens in a new tab).');
