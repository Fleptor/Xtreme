import { facts, guidance } from './facts.mjs';

export const links = {
  printables: 'printables.html',
  official: 'https://ieeextreme.org/',
  contact: 'mailto:belalhamdan@ieee.org',
  ambassadorSelector: '#ambassadors',
  htuMap: 'https://maps.app.goo.gl/3FgQ18NEifYTSfV89',
  htuDevices: 'sources.html#htu-devices',
  teamRequirements: 'sources.html#team-requirements',
  teamChanges: 'sources.html#team-registration-updates',
  deadline: 'sources.html#registration-deadlines',
  vtools: 'https://xtreme.vtools.ieee.org/',
  htu: 'http://forms.gle/j1x4JaKX4UtxLvB88',
  local: 'https://forms.gle/ibv1FKSZVbN1vduPA',
  tutorial: 'https://youtu.be/T-4hHZvCQnw',
  eligibility: 'https://ieeextreme.org/eligibility/',
  proctors: 'https://ieeextreme.org/proctor-eligibility-and-requirements/',
  rules: 'https://ieeextreme.org/rules/',
  faq: 'https://ieeextreme.org/qa/',
  registration: 'https://ieeextreme.org/registration-tips/',
  practice: 'https://csacademy.com/ieeextreme-practice/',
  workspace: 'https://csacademy.com/workspace/template',
  environment: 'https://csacademy.com/about/environment/',
  membership: 'https://www.ieee.org/membership/join/index.html',
  account: 'https://www.ieee.org/web/accounts',
  network: 'https://ieee-collabratec.ieee.org/app/my-network',
  certificates: 'https://certificate.ieeextreme.org/claim',
  support: 'mailto:IEEEXtreme@ieee.org',
  htuRules: 'assets/htu-regulations.txt',
  htuPrizes: 'assets/htu-prizes.png',
  bau: 'https://www.instagram.com/ieeebalqa/'
};

export const categories = [
  ['all', 'كل الأسئلة'], ['about', 'عن التحدّي'], ['team', 'الفريق والعضوية'],
  ['registration', 'التسجيل'], ['proctor', 'المراقب'], ['participation', 'طريقة المشاركة'],
  ['htu', 'استضافة HTU'], ['practice', 'التدريب والمنصة'], ['community', 'السفير والتواصل']
];

// Answers stay focused on established guidance and supplied local arrangements.
// AI and workspace guidance follows the official 20.0 rules reviewed on 3 October 2026.
export const faqs = [
  ['about', 'شو هي IEEEXtreme؟', `تحدّي برمجة عالمي من IEEE: فرق طلابية تحل مسائل خلال ${facts.competitionHours} ساعة بإشراف مراقبين مؤهلين.`, 'official'],
  ['about', 'متى IEEEXtreme 20.0؟', `السبت ${facts.competitionDate}. البداية العالمية الساعة 00:00 UTC، أي ${facts.competitionStartJordan} بتوقيت الأردن.`, 'proctors'],
  ['about', 'شو طبيعة التحدّي؟', 'تقرأ مسائل، تصمّم خوارزميات، وتكتب حلولًا برمجية تُرسل للتقييم عبر منصة المنافسة.', 'official'],
  ['about', 'ليش أشارك؟', 'فرصة تطوّر حل المشكلات، وتتمرّن على توزيع العمل والتواصل مع فريقك تحت ضغط الوقت.', 'official'],
  ['about', 'هل لازم أكون محترف حتى أبدأ؟', 'ابدأ بتجربة مسائل التدريب لتعرف مستواك وتبني خبرتك. حضّر أساسيات لغتك وتدرّب مع زملائك قبل اليوم الكبير.', 'practice', 'نصيحة تحضيرية'],
  ['about', `هل الساعات الـ${facts.competitionHours} تعني إنّي ما أنام؟`, 'تقدر ترتاح وتنام بالتنسيق مع فريقك ومراقبك. وزّعوا الجهد، مع استمرار تغطية الإشراف والالتزام بشروط موقعكم.', 'faq'],

  ['team', 'كم شخص بالفريق؟ وهل بقدر أشارك لحالي؟', `${facts.teamMin} إلى ${facts.teamMax} أعضاء مسموحين بالمسابقة. ${guidance.htuTeam} ${guidance.htuPresence}`, 'teamRequirements', 'قواعد الفريق وشروط HTU'],
  ['team', 'هل عضوية IEEE مطلوبة من كل الفريق؟', 'نعم، كل متسابق يحتاج عضوية Student أو Graduate Student ورقم عضوية خاص فيه.', 'eligibility'],
  ['team', 'هل تكفي عضوية قائد الفريق؟', 'لا. تحقّقوا من عضوية كل عضو قبل بدء تسجيل الفريق.', 'eligibility'],
  ['team', 'هل ممكن يكون الفريق كله دراسات عليا؟', `الحد الأعلى ${facts.graduateMax} من فئة Graduate Student؛ تجاوز هذا العدد لا يستوفي الشرط.`, 'eligibility'],
  ['team', 'هل الجامعة مسموح تسجّل أكثر من فريق؟', 'نعم، يمكن للجامعة أو الفرع الطلابي المشاركة بعدة فرق.', 'eligibility'],
  ['team', 'جامعتي ما فيها فرع IEEE؛ بقدر أشارك؟', 'نعم. وجود فرع طلابي في الجامعة ليس شرطًا، مع استيفاء متطلبات العضوية والفريق والمراقب.', 'eligibility'],
  ['team', 'كيف أحصل على عضوية IEEE؟', 'ابدأ من بوابة عضوية IEEE، ثم تأكّد من فئة عضويتك ورقمها في حسابك قبل التسجيل.', 'membership'],

  ['registration', 'وين التسجيل الرسمي للمسابقة؟', 'في IEEE vTools Xtreme. سجّل الدخول بحساب IEEE واتبع نموذج تسجيل الفريق.', 'vtools'],
  ['registration', 'مسجّل لحالي والمراقب وافق؛ كيف أضيف زميل إذا الفريق ما بتعدّل؟', `${guidance.teamChange} هذا الإجراء للحالة اللي ما بتقدروا تعدّلوا فيها الفريق بعد الموافقة. للمشاركة من HTU، الزميل لازم يكون عضوًا مسجّلًا معك بنفس الفريق، ويحضُر جميع الأعضاء في الجامعة.`, 'teamChanges', 'تعليمات تعديل الفريق'],
  ['registration', 'متى آخر موعد لتسجيل المسابقة واستضافة HTU؟', `آخر موعد رسمي لتسجيل استضافة HTU هو ${facts.htuDeadline} (${facts.htuDeadlineNumeric})، وآخر موعد رسمي لتسجيل المسابقة عبر vTools هو ${facts.vtoolsDeadline} (${facts.vtoolsDeadlineNumeric}). إذا بدكم تشاركوا من HTU، كمّلوا vTools أولًا ثم نموذج الاستضافة ضمن موعد ${facts.htuDeadlineShort}؛ لا تنتظروا موعد ${facts.vtoolsDeadlineShort}.`, 'deadline', 'مصدر مواعيد التسجيل'],
  ['registration', 'شو أجهّز قبل التسجيل؟', 'اسم الفريق، بيانات الجامعة والأعضاء وأرقام عضويتهم، ومراقب مؤهل. جهّز رقم السفير لفرق BAU أيضًا.', 'registration'],
  ['registration', 'كيف أتعلّم خطوات التسجيل بالفيديو؟', 'شاهد شرح بلال حمدان لآلية التسجيل في IEEEXtreme 20.0 على YouTube.', 'tutorial', 'شرح السفير'],
  ['registration', 'شو رقم السفير لطلاب فرع BAU؟', `استخدموا ${facts.ambassadorId} في خانة Ambassador ID أثناء تسجيل فريقكم على vTools. زر النسخ موجود بقسم التسجيل.`, 'local', 'تنسيق فرع BAU'],
  ['registration', 'هل نموذج الفرع يسجّلني بالمسابقة أو باستضافة HTU؟', `${guidance.localForm} جهّزوا صورة لمعلومات الفريق لنموذج HTU.`, 'local', 'تنسيق فرع BAU'],
  ['registration', 'مين يعبّي نموذج BAU المحلي؟', 'قائد الفريق فقط يعبّيه عن الفريق، حتى نتابع استعداداتكم وننسّق معكم.', 'local', 'تنسيق فرع BAU'],
  ['registration', 'هل فورم HTU منفصل عن vTools؟', 'نعم. سجّلوا على vTools أولًا، ثم جهّزوا صورة لمعلومات الفريق وعبّوا نموذج استضافة HTU.', 'htu', 'تعليمات الاستضافة'],
  ['registration', 'نسيت بيانات حساب IEEE؛ شو أعمل؟', 'استخدم صفحة استعادة اسم المستخدم أو كلمة المرور الخاصة بحساب IEEE.', 'account'],
  ['registration', 'ظهر خطأ في التسجيل أو فئة العضوية؛ لمين أكتب؟', 'راسل IEEEXtreme@ieee.org. وضّح المشكلة واسم الفريق ورقم العضوية وبيانات الأعضاء المتأثرين، ولا ترسل كلمة مرورك.', 'vtools'],

  ['proctor', 'مين هو الـProctor؟', 'مراقب من IEEE يتابع الالتزام بالقواعد وسير المنافسة وراحة الفريق؛ وجوده جزء أساسي من المشاركة.', 'proctors'],
  ['proctor', 'مين مؤهل يكون مراقب؟', 'عضو IEEE بفئة أعلى من Student وGraduate Student، ويجب أن يكون مسجلًا كمراقب للمسابقة.', 'eligibility'],
  ['proctor', 'هل طالب عضو في IEEE ممكن يراقب فريقنا؟', 'عضوية Student أو Graduate Student لا تؤهل صاحبها للعمل كمراقب.', 'eligibility'],
  ['proctor', 'كيف نلاقي مراقب؟', 'ابدأ بمستشار الفرع أو عضو هيئة تدريس مؤهل أو IEEE Young Professionals. وللمساعدة في الوصول إليهم، راسل بلال حمدان على belalhamdan@ieee.org.', 'registration'],
  ['proctor', 'ما لقينا مراقب محلي؛ في طريقة ثانية؟', 'استخدم شبكة IEEE Collabratec للبحث عن أعضاء مؤهلين، ونسّق ترتيبات المراقبة معهم مسبقًا.', 'network'],
  ['proctor', 'اخترنا مراقب على vTools؛ هل هيك خلصنا؟', 'تابعوا قبول الطلب: تصل للمراقب رسالة ليؤكد أو يرفض الإشراف على الفريق.', 'proctors'],
  ['proctor', 'ليش تأكيد المراقب مهم؟', 'وجود مراقب مؤكد يتابع الفريق مطلوب للاعتماد في الترتيب الرسمي والشهادات والجوائز.', 'faq'],
  ['proctor', `هل نفس المراقب لازم يظل ${facts.competitionHours} ساعة؟`, 'يمكن لمراقبين مسجلين تقاسم المناوبات، مع تغطية الإشراف طوال المنافسة.', 'proctors'],
  ['proctor', 'كم فريق ممكن يراقب شخص واحد؟', 'حتى 20 فريقًا، وفق متطلبات المراقبين المنشورة.', 'proctors'],
  ['proctor', 'هل المراقب بقدر يساعدنا بحل المسائل؟', 'لا؛ الحل من مسؤولية أعضاء الفريق، ولا يحق للمراقب تقديم حلول أو كتابة الكود لكم.', 'eligibility'],

  ['participation', 'المسابقة أونلاين ولا حضورية؟', 'تقديم الحلول عبر الإنترنت، والمشاركة ممكن تكون من موقع مشترك أو بإشراف عن بُعد حسب الترتيب مع المراقب. إذا اخترتوا HTU، لازم يحضر كل أعضاء الفريق؛ ممنوع يكون جزء من الفريق في الاستضافة وجزء يشارك عن بُعد.', 'teamRequirements', 'طريقة المشاركة وشروط HTU'],
  ['participation', 'بقدر أشارك من البيت؟', 'نعم، بترتيب مسبق مع المراقب يتيح له متابعة الفريق طوال المنافسة. لكن إذا فريقك مشارك من HTU، لازم تحضروا كلكم في الجامعة؛ ما بصير تشارك من البيت وزملاؤك من الاستضافة.', 'teamRequirements', 'طريقة المشاركة وشروط HTU'],
  ['participation', 'هل المشاركة عن بُعد تعفيني من المراقب؟', 'لا. الإشراف مطلوب سواء شاركت عن بُعد أو في موقع استضافة.', 'eligibility'],
  ['participation', 'شو يحتاج مكان المشاركة؟', 'مكان متاح طوال المنافسة، اتصال بالإنترنت، وجهاز واحد على الأقل للفريق. ويُفضّل توفر مساحة للراحة.', 'proctors'],
  ['participation', 'هل حضور HTU شرط لكل المشاركين بالعالم؟', 'لا. HTU خيار للاستضافة المحلية؛ قواعد الحضور فيه تخص الفرق التي تختار المشاركة في هذا الموقع.', 'htuRules', 'تعليمات HTU المحلية'],

  ['htu', 'هل HTU بيوفّر لابتوبات، ولا لازم نجيب معنا؟', 'حسب تأكيد التنسيق المحلي، الاستضافة لا توفّر اللابتوبات؛ كل فريق مشارك في HTU لازم يحضر لابتوب واحد على الأقل. الحد الأدنى للفريق، وليس جهازًا لكل عضو. جهّزوا الجهاز، ولا تنسوا شاحنه.', 'htuDevices', 'تأكيد التنسيق المحلي للأجهزة'],
  ['htu', 'شو شروط المشاركة من HTU؟', `الفريق من ${facts.htuTeamMin} إلى ${facts.teamMax} أعضاء، وكلهم طلبة جامعيون حاليون ومسجّلون رسميًا بنفس الفريق على vTools. لازم يحضر جميع الأعضاء في HTU؛ ممنوع تقسيم المشاركة بين الاستضافة وعن بُعد. حضور الفريق ${facts.attendanceHours} ساعات على الأقل، والافتتاح إلزامي لعضو واحد على الأقل. الاستثناء فقط للفريق المكوّن بالكامل من طالبات مع إكمال حضور جميع عضواته بحلول ${facts.womenCheckIn}.`, 'teamRequirements', 'قواعد الفريق وشروط HTU'],
  ['htu', 'متى حفل الافتتاح في HTU؟', `الساعة ${facts.opening}. حضور الافتتاح إلزامي لفرق HTU؛ يجب حضور عضو واحد على الأقل من كل فريق. فقط الفريق المكوّن بالكامل من طالبات يُسمح له بتجاوز الافتتاح للمشاركة، بشرط إكمال حضور جميع عضواته بحلول ${facts.womenCheckIn}.`, 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'شو الاستثناء للفرق المؤلفة بالكامل من طالبات؟', `الاستثناء الوحيد من حضور الافتتاح الإلزامي يخص الفريق المشارك في HTU والمكوّن بالكامل من طالبات: يُسمح لهذا الفريق فقط بتجاوز الافتتاح، بشرط إكمال تسجيل حضور جميع عضواته بحلول ${facts.womenCheckIn}. الاستثناء يخص المشاركة ولا يشمل أهلية جوائز HTU.`, 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'هل استثناء الافتتاح يشمل فريق فيه طلاب وطالبات؟', `لا. إذا الفريق فيه طلاب وطالبات، لازم يحضر عضو واحد منه على الأقل حفل الافتتاح. الاستثناء فقط للفريق المكوّن بالكامل من طالبات والمشارك في HTU، بشرط إكمال حضور جميع عضواته بحلول ${facts.womenCheckIn}.`, 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'بقدر جزء من الفريق يحضر HTU والباقي يشارك عن بُعد؟', 'لا، تقسيم الفريق بين الحضور في HTU والمشاركة عن بُعد ممنوع. حضور قائد الفريق وحده ما بكفّي؛ لازم يكون جميع الأعضاء المسجّلين حاضرين في الاستضافة خلال المنافسة.', 'teamRequirements', 'قواعد الفريق وشروط HTU'],
  ['htu', 'شو جوائز المراكز الثلاثة الأولى في استضافة HTU؟', `بحسب إعلان الجوائز المرفق: المركز الأول ${facts.prizeFirst} دينار أردني، والثاني ${facts.prizeSecond} دينار، والثالث ${facts.prizeThird} دينار. هذه جوائز الاستضافة المحلية، وتخضع لشروط أهلية جوائز HTU، ومنها حضور ${facts.awardHours} ساعة على الأقل وحضور جميع الأعضاء الافتتاح.`, 'htuPrizes', 'إعلان الجوائز المرفق'],
  ['htu', 'شو شروط جوائز HTU للمراكز الثلاثة الأولى؟', `حضور ${facts.awardHours} ساعة على الأقل، وحضور جميع الأعضاء حفل الافتتاح، إضافة إلى استيفاء شروط الطالب الجامعي والتسجيل الرسمي وحضور كل الفريق.`, 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'هل إعفاء الطالبات من الافتتاح ينطبق على الجوائز؟', 'شروط الجوائز المحلية تطلب حضور جميع الأعضاء الافتتاح، ولا تنص على استثناء للفرق المؤلفة بالكامل من طالبات.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'إذا ما استوفينا شروط الجوائز، بنقدر نشارك من HTU؟', 'نعم، إذا استوفيتم شروط المشاركة العامة. عدم استيفاء شروط الجوائز يمنع أهلية جوائز HTU للمراكز 1 و2 و3 فقط.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'شو أجهّز لفورم الهوست؟', 'أكمل تسجيل vTools، وجهّز صورة لمعلومات فريقك، ثم افتح فورم HTU واقرأ تعليمات الاستضافة داخله.', 'htu', 'تعليمات الاستضافة'],

  ['practice', 'وين أتدرّب على مسائل IEEEXtreme؟', 'في مجتمع IEEEXtreme Practice على CS Academy. جرّب قراءة المسائل وإرسال حلولك قبل المنافسة.', 'practice'],
  ['practice', 'ما اللغات الموجودة في بيئة التدريب؟', 'تتضمن البيئة C++ وC وJava وPython 3 وC# وJavaScript وRust وGo وغيرها. راجع قائمة البيئة للإصدارات وبقية اللغات.', 'environment'],
  ['practice', 'شو المتصفحات المذكورة في بيئة CS Academy؟', 'توصي الصفحة بحد أدنى Chrome 91 أو Firefox 90 أو Safari 15. استخدم إصدارًا حديثًا وجرّب التدريب عليه مسبقًا.', 'environment'],
  ['practice', 'هل vTools هو مكان حل المسائل؟', 'vTools بوابة التسجيل. استخدم رابط التدريب للتحضير، وتعليمات المنظمين للوصول إلى المنافسة.', 'vtools'],
  ['practice', 'كيف أجهّز نفسي وفريقي؟', 'راجعوا أساسيات اللغة والتعقيد والبحث والفرز، ثم جرّبوا جلسة حل محددة الوقت وناقشوا أخطاءكم معًا.', 'practice', 'نصيحة تحضيرية'],
  ['practice', 'هل ممكن نشارك الحلول مع فريق ثاني؟', 'لا. حل المسائل مسؤولية فريقكم، ومشاركة الكود مع الفرق الأخرى أو طلب مساعدتها أثناء المنافسة مخالفة.', 'faq'],
  ['practice', 'هل مسموح أستعين بالذكاء الاصطناعي AI؟', 'حسب نوع التحدّي في قواعد 20.0: في Game-type مسموح استخدام AI؛ بتكتبوا برنامج يتفاعل مع بوتات، وأحيانًا برامج فرق ثانية، عبر الإدخال والإخراج القياسيين ويتجاوب مع تغيّر بيئة اللعبة. في Locked-workspace استخدام AI ممنوع، ولازم تكتبوا الكود داخل مساحة المسابقة الرسمية.', 'rules', 'قواعد IEEEXtreme 20.0'],
  ['practice', 'هل السماح بالـAI يشمل كل المسائل؟ وشو وضع النسخ واللصق؟', `لا. ${guidance.aiRestriction} بتقدروا تجهّزوا مسبقًا ملفات داخل مساحة العمل وتنسخوا منها يدويًا أثناء هذه التحديات. السماح بالـAI يخص Game-type؛ راجعوا نوع التحدّي قبل استخدامه.`, 'rules', 'قواعد IEEEXtreme 20.0'],
  ['practice', 'متى آخر موعد لرفع مكتبات الكود؟ وشو الحد الأقصى؟', `لـIEEEXtreme 20.0، ارفعوا مكتباتكم بحجم يصل إلى ${facts.libraryKB} كيلوبايت حتى ${facts.libraryDeadlineDate} الساعة ${facts.libraryDeadlineUTC}، أي ${facts.libraryDeadlineJordanDate} الساعة ${facts.libraryDeadlineJordanTime} فجرًا بتوقيت الأردن. هذا موعد رفع المكتبات؛ مواعيد تسجيل vTools واستضافة HTU منفصلة. رابط الرفع موجود في قسم التحضير والموارد.`, 'rules', 'قواعد رفع المكتبات'],
  ['practice', 'كيف نجهّز مساحة العمل؟ وهل بنقدر نعدّلها بعد بدء التحدّي؟', `من صفحة إعداد مساحة العمل على CS Academy، بتقدروا ترفعوا مكتباتكم ضمن حد ${facts.libraryKB} كيلوبايت وموعدها المحدد، وتخصّصوا كود البداية اللي بيظهر تلقائيًا مع كل تحدٍّ، وتضيفوا ملفات تنسخوا منها يدويًا داخل Locked-workspace. ${guidance.workspaceLock} جرّبوا المساحة مسبقًا.`, 'rules', 'قواعد إعداد مساحة العمل'],
  ['practice', 'وين أقرأ القواعد كاملة؟', 'افتح صفحة القواعد الرسمية قبل المشاركة، وراجعها مع فريقك والمراقب، خصوصًا تعليمات المصادر والأدوات والتقييم.', 'rules'],

  ['community', 'شو دور سفير المسابقة؟', 'يساعد في التعريف بالتحدّي والتسجيل والتحضير والتنسيق المحلي. اختار جامعتك من بطاقة السفير في قسم التسجيل لتلاقي السفير ورقمه.', 'ambassadorSelector', 'اختار سفير جامعتك'],
  ['community', 'كيف أتواصل مع سفير فرعي للاستفسار عن المسابقة؟', 'ابحث عن جامعتك في بطاقة اختيار السفير بقسم التسجيل لتعرف اسم سفير فرعك. بعدها تواصل معه عبر حسابات فرع IEEE في جامعتك، أو اطلب بيانات تواصله من إدارة الفرع. رقم السفير الظاهر في البطاقة مخصص للتسجيل على vTools.', 'ambassadorSelector', 'اعرف سفير فرعك'],
  ['community', 'هل السفير هو نفسه المراقب؟', 'دورهما مختلف. السفير ينسّق معكم؛ المراقب يحتاج أهلية IEEE وتسجيلًا وقبولًا مستقلًا للإشراف على فريقكم.', 'proctors'],
  ['community', 'كيف أتابع أخبار فرعنا؟', 'تابع IEEE BAU وحساب IEEE BAU Computer Society، وتابع مجموعة الواتساب لتعليمات الحضور وآخر التحديثات.', 'bau', 'تنسيق فرع BAU'],
  ['community', 'وين بوابة شهادات المشاركة؟', 'يوجد رابط رسمي للمطالبة بالشهادات باستخدام رقم العضوية أو البريد المسجل ونوع المشارك، عند إتاحتها للنسخة المعنية.', 'certificates'],
  ['community', 'مين أراجع بخصوص ترتيبات HTU؟', 'راجع منظمي IEEE HTU عبر حسابهم وتعليمات نموذج الاستضافة، وتابع التحديثات المحلية على مجموعة الواتساب.', 'htu', 'تنسيق الاستضافة']
];

export const resources = [
  ['01', 'vTools Xtreme', 'التسجيل الرسمي للفرق والمراقبين', 'vtools', 'registration'],
  ['02', 'تسجيل استضافة HTU', 'بعد vTools · جهّز صورة معلومات الفريق', 'htu', 'registration'],
  ['03', 'نموذج فرع BAU', 'للتنسيق المحلي · يعبّيه قائد الفريق', 'local', 'registration'],
  ['04', 'شرح التسجيل بالفيديو', 'بلال حمدان · YouTube', 'tutorial', 'registration'],
  ['05', 'Xtreme Practice', 'مسائل سابقة وتدريب عملي على المنصة', 'practice', 'practice'],
  ['06', 'اللغات والمتصفحات', 'بيئة CS Academy وإصدارات المترجمات', 'environment', 'practice'],
  ['07', 'عضوية IEEE', 'الانضمام وتجهيز عضويتك الطلابية', 'membership', 'registration'],
  ['08', 'الموقع الرسمي', 'إعلانات وأخبار IEEEXtreme', 'official', 'official'],
  ['09', 'أهلية المشاركين', 'شروط العضوية وتكوين الفرق', 'eligibility', 'official'],
  ['10', 'دليل المراقبين', 'الأهلية والمسؤوليات وترتيبات المكان', 'proctors', 'official'],
  ['11', 'القواعد الرسمية', 'اقرأها مع فريقك قبل يوم المنافسة', 'rules', 'official'],
  ['12', 'الأسئلة الرسمية', 'إجابات من منظمي IEEEXtreme', 'faq', 'official'],
  ['13', 'IEEE Collabratec', 'تواصل للبحث عن مراقب مؤهل', 'network', 'official'],
  ['14', 'بوابة الشهادات', 'المطالبة بالشهادات عند إتاحتها', 'certificates', 'official'],
  ['15', 'تعليمات HTU الأصلية', 'نص متطلبات المشاركة والجوائز المحلية', 'htuRules', 'official'],
  ['16', 'دعم التسجيل الرسمي', 'IEEEXtreme@ieee.org', 'support', 'registration'],
  ['17', 'موقع جامعة الحسين التقنية', 'افتح موقع الاستضافة على خرائط Google', 'htuMap', 'registration'],
  ['18', 'إعداد مساحة العمل', `مكتبات حتى ${facts.libraryKB} KB · كود البداية والملفات المسبقة`, 'workspace', 'practice'],
  ['19', 'موارد البوث والمطبوعات', 'دليل المكتبة والبروشور والستيكرات ولوحات QR بصيغة PDF', 'printables', 'official'],
];

export const socials = [
  ['IEEEXtreme Jordan Section', 'أخبار الإكستريم في الأردن', 'ieeextreme.js', 'https://www.instagram.com/ieeextreme.js/'],
  ['IEEEXtreme Official', 'الحساب العالمي الرسمي', 'ieeextremeofficial', 'https://www.instagram.com/ieeextremeofficial/'],
  ['IEEE HTU', 'تحديثات الجهة المستضيفة', 'ieeehtu', 'https://www.instagram.com/ieeehtu/'],
  ['IEEE BAU Student Branch', 'فرع جامعة البلقاء التطبيقيّة', 'ieeebalqa', 'https://www.instagram.com/ieeebalqa/'],
  ['IEEE BAU Computer Society', 'مجتمعنا للبرمجة والحوسبة', 'ieee_bau_cs', 'https://www.instagram.com/ieee_bau_cs']
];

// All 27 entries supplied in Other Ambassadors.txt; preserve distinct branches and repeated universities.
export const ambassadors = [
  [
    "جامعة البلقاء التطبيقية - كلية الهندسة التكنولوجية",
    "Belal Hamdan",
    "IEEEXTREME20SB08217",
    "mailto:belalhamdan@ieee.org",
    "Al-Balqa Applied University - Faculty of Engineering Technology (FET) Student Branch"
  ],
  [
    "جامعة العلوم الإسلامية العالمية — WISE",
    "Amro Abdo",
    "IEEEXTREME20SB08001",
    "sources.html#ambassador-sources",
    "World Islamic Sciences & Education University (WISE)"
  ],
  [
    "الجامعة الأمريكية في مادبا — AUM",
    "Yazeed Mohammad Abdulsalam Suleiman",
    "IEEEXTREME20SB08002",
    "sources.html#ambassador-sources",
    "American University of Madaba (AUM)"
  ],
  [
    "جامعة الحسين التقنية — HTU",
    "Farah Akroush",
    "IEEEXTREME20SB08003",
    "sources.html#ambassador-sources",
    "Al-Hussein Technical University (HTU)"
  ],
  [
    "جامعة الإسراء — IU",
    "Zaid khaled abu awwad",
    "IEEEXTREME20SB08004",
    "sources.html#ambassador-sources",
    "Israa University (IU)"
  ],
  [
    "جامعة العلوم التطبيقية الخاصة — ASU",
    "Saba Naser Saleem",
    "IEEEXTREME20SB08006",
    "sources.html#ambassador-sources",
    "Applied Science University (ASU)"
  ],
  [
    "جامعة الزرقاء — ZU",
    "Roaa Ali Almomani",
    "IEEEXTREME20SB08007",
    "sources.html#ambassador-sources",
    "Zarqa University (ZU)"
  ],
  [
    "جامعة مؤتة — MUTAH",
    "Nazzal Faisal Al-Hajaya",
    "IEEEXTREME20SB08008",
    "sources.html#ambassador-sources",
    "Mutah University (MUTAH)"
  ],
  [
    "كلية الحصن الجامعية — HUSON",
    "Besan Khaled Awawdeh",
    "IEEEXTREME20SB08009",
    "sources.html#ambassador-sources",
    "Al-Huson University College (HUSON)"
  ],
  [
    "جامعة إربد الأهلية — INU",
    "Tuqa Yahya Mahmoud Rababah",
    "IEEEXTREME20SB08010",
    "sources.html#ambassador-sources",
    "Irbid National University (INU)"
  ],
  [
    "جامعة آل البيت — AABU",
    "Besan awad",
    "IEEEXTREME20SB08011",
    "sources.html#ambassador-sources",
    "Al Al-Bayt University (AABU)"
  ],
  [
    "جامعة الأميرة سمية للتكنولوجيا — PSUT",
    "Yousef Rami Aljamal",
    "IEEEXTREME20SB08012",
    "sources.html#ambassador-sources",
    "Princess Sumaya University for Technology (PSUT)"
  ],
  [
    "الجامعة الأردنية — JU",
    "Hadeel Mohammad Salem Abu-Muqabil",
    "IEEEXTREME20SB08013",
    "sources.html#ambassador-sources",
    "University of Jordan (JU)"
  ],
  [
    "جامعة جدارا — Jadara",
    "Ahmad Abujdeh",
    "IEEEXTREME20SB08014",
    "sources.html#ambassador-sources",
    "Jadara University (Jadara)"
  ],
  [
    "الجامعة الهاشمية — HU",
    "Layan Alkiswani",
    "IEEEXTREME20SB08015",
    "sources.html#ambassador-sources",
    "Hashemite University (HU)"
  ],
  [
    "جامعة الشرق الأوسط — MEU",
    "Hamzeh Al Bawaneh",
    "IEEEXTREME20SB08190",
    "sources.html#ambassador-sources",
    "Middle East University Student Branch"
  ],
  [
    "جامعة الطفيلة التقنية — TTU",
    "Ali Nedal Ali Kabha",
    "IEEEXTREME20SB08191",
    "sources.html#ambassador-sources",
    "Tafila Technical University Student Branch"
  ],
  [
    "جامعة العقبة للتكنولوجيا — AUT",
    "Sama ghanem",
    "IEEEXTREME20SB08192",
    "sources.html#ambassador-sources",
    "Aqaba University of Technology Student Branch"
  ],
  [
    "الجامعة الأردنية — UJ",
    "Abdalrahman Hulliel",
    "IEEEXTREME20SB08193",
    "sources.html#ambassador-sources",
    "University of Jordan Student Branch"
  ],
  [
    "جامعة الحسين بن طلال — AHU",
    "Laith Al-Qaisy",
    "IEEEXTREME20SB08194",
    "sources.html#ambassador-sources",
    "Al-Hussein Bin Talal University Student Branch"
  ],
  [
    "جامعة جرش",
    "Suhaib aburooman",
    "IEEEXTREME20SB08197",
    "sources.html#ambassador-sources",
    "Jerash University Student Branch"
  ],
  [
    "جامعة الزيتونة الأردنية — ZUJ",
    "Sara Qazaqi",
    "IEEEXTREME20SB08214",
    "sources.html#ambassador-sources",
    "Al-Zaytoonah University of Jordan Student Branch"
  ],
  [
    "الجامعة الألمانية الأردنية — GJU",
    "Sara Saleem",
    "IEEEXTREME20SB08215",
    "sources.html#ambassador-sources",
    "German Jordanian University Student Branch"
  ],
  [
    "جامعة العلوم والتكنولوجيا الأردنية — JUST",
    "Abdullah banihani",
    "IEEEXTREME20SB08216",
    "sources.html#ambassador-sources",
    "Jordan Uni. for Science and Technology Student Branch"
  ],
  [
    "جامعة البلقاء التطبيقية — فرع المركز",
    "Joud Alsaket",
    "IEEEXTREME20SB08218",
    "sources.html#ambassador-sources",
    "Al-Balqa Applied University-Center Student Branch"
  ],
  [
    "جامعة اليرموك — YU",
    "Nagham Abu Ghazleh",
    "IEEEXTREME20SB08219",
    "sources.html#ambassador-sources",
    "Yarmouk University Student Branch"
  ],
  [
    "جامعة عمان العربية — AAU",
    "Zahraa Raed",
    "IEEEXTREME20SB08220",
    "sources.html#ambassador-sources",
    "Amman Arab University Student Branch"
  ]
];
