// Maintain repeated dates, limits and warnings here. Templates and FAQs reuse these values.
const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
const dateLabel = iso => { const [year, month, day] = iso.slice(0,10).split('-'); return `${Number(day)} ${months[Number(month)-1]} ${year}`; };
const numericDate = iso => iso.slice(0,10).split('-').reverse().join('-');
const jordanParts = iso => Object.fromEntries(new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Amman',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date(iso)).map(part => [part.type,part.value]));

export const facts = {
  reviewed: '4 أكتوبر 2026',
  start: '2026-10-31T00:00:00Z',
  competitionHours: 24,
  htuDeadlineISO: '2026-10-17',
  vtoolsDeadlineISO: '2026-10-27',
  libraryDeadlineISO: '2026-10-29T23:59:00Z',
  teamMin: 1, teamMax: 3, graduateMax: 2, htuTeamMin: 2,
  attendanceHours: 10, awardHours: 15,
  opening: '12:00 منتصف الليل', womenCheckIn: '8:00 صباحًا',
  libraryKB: 100,
  prizeFirst: 300, prizeSecond: 200, prizeThird: 100,
  ambassadorId: 'IEEEXTREME20SB08217'
};
facts.end = new Date(Date.parse(facts.start) + facts.competitionHours*3600000).toISOString().replace('.000Z','Z');
facts.competitionDate = dateLabel(facts.start);
facts.competitionDateISO = facts.start.slice(0,10);
facts.teamRange = `${facts.teamMin}–${facts.teamMax}`;
facts.htuTeamRange = `${facts.htuTeamMin}–${facts.teamMax}`;
for (const key of ['htu','vtools']) {
  facts[`${key}Deadline`] = dateLabel(facts[`${key}DeadlineISO`]);
  facts[`${key}DeadlineNumeric`] = numericDate(facts[`${key}DeadlineISO`]);
  facts[`${key}DeadlineShort`] = facts[`${key}Deadline`].replace(/ \d{4}$/,'');
}
facts.libraryDeadlineDate = dateLabel(facts.libraryDeadlineISO);
facts.libraryDeadlineUTC = `${facts.libraryDeadlineISO.slice(11,16)} UTC`;
const localLibrary = jordanParts(facts.libraryDeadlineISO);
facts.libraryDeadlineJordanDate = dateLabel(`${localLibrary.year}-${localLibrary.month}-${localLibrary.day}`);
facts.libraryDeadlineJordanTime = `${localLibrary.hour}:${localLibrary.minute}`;
const localStart = jordanParts(facts.start);
facts.competitionStartJordan = `${Number(localStart.hour)}:${localStart.minute} فجرًا`;

export const guidance = {
  localForm: 'نموذج BAU للتنسيق المحلي فقط؛ ما بسجّلكم بالمسابقة أو باستضافة HTU. كمّلوا vTools أولًا، ثم نموذج HTU إذا اخترتوا الحضور هناك.',
  htuTeam: `استضافة HTU بتتطلب فريق من ${facts.htuTeamMin} إلى ${facts.teamMax} أعضاء مسجّلين بنفس الفريق على vTools؛ ما بتقدر تحضر لحالك أو تكتفي بضيف مرافق.`,
  htuPresence: 'كل أعضاء الفريق لازم يحضروا في HTU؛ ممنوع جزء من الفريق يشارك من الاستضافة وجزء عن بُعد.',
  teamChange: 'إذا المراقب وافق على الفريق وصار التعديل غير متاح، وبدكم تغيّروا الأعضاء، لازم تفكّوا أو تحذفوا الفريق الحالي على vTools وتعيدوا تسجيله بالأعضاء المطلوبين.',
  aiRestriction: 'في Locked-workspace استخدام AI ممنوع، والنسخ واللصق من مصادر خارجية معطّل. لازم تكتبوا الكود داخل مساحة المسابقة الرسمية.',
  workspaceLock: 'كمّلوا كل إعدادات مساحة العمل قبل بداية التحدّي؛ ما بتقدروا تغيّروها بعد ما يبدأ.',
  whatsapp: 'تابعوا مجموعة الواتساب لتفاصيل الحضور وآخر التحديثات.'
};

export const interpolate = template => template.replace(/\{\{(fact|copy):(\w+)\}\}/g, (_, type, key) => {
  const value = (type === 'fact' ? facts : guidance)[key];
  if (value === undefined) throw new Error(`Unknown ${type}: ${key}`);
  return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
});
