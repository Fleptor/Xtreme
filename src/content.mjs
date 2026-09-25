export const links = {
  official: 'https://ieeextreme.org/',
  contact: 'mailto:belalhamdan@ieee.org',
  htuMap: 'https://maps.app.goo.gl/3FgQ18NEifYTSfV89',
  deadline: 'https://www.linkedin.com/posts/ieeextreme_ieeextreme20-ieeextreme-codetothextreme-activity-7507657995397353472-nM6e',
  aiAnnouncement: 'https://www.linkedin.com/posts/ieeextreme_ieeextreme20-ieeextreme-3200plus-activity-7509243612015149056-Fnb8',
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
// AI is an explicit exception: explain the announced hybrid format and pending detailed 20.0 rules.
export const faqs = [
  ['about', 'شو هي IEEEXtreme؟', 'تحدّي برمجة عالمي من IEEE: فرق طلابية تحل مسائل خلال 24 ساعة بإشراف مراقبين مؤهلين.', 'official'],
  ['about', 'متى IEEEXtreme 20.0؟', 'السبت 31 أكتوبر 2026. البداية العالمية الساعة 00:00 UTC، أي 3:00 فجرًا بتوقيت الأردن.', 'proctors'],
  ['about', 'شو طبيعة التحدّي؟', 'تقرأ مسائل، تصمّم خوارزميات، وتكتب حلولًا برمجية تُرسل للتقييم عبر منصة المنافسة.', 'official'],
  ['about', 'ليش أشارك؟', 'فرصة تطوّر حل المشكلات، وتتمرّن على توزيع العمل والتواصل مع فريقك تحت ضغط الوقت.', 'official'],
  ['about', 'هل لازم أكون محترف حتى أبدأ؟', 'ابدأ بتجربة مسائل التدريب لتعرف مستواك وتبني خبرتك. حضّر أساسيات لغتك وتدرّب مع زملائك قبل اليوم الكبير.', 'practice', 'نصيحة تحضيرية'],
  ['about', 'هل الساعات الـ24 تعني إنّي ما أنام؟', 'تقدر ترتاح وتنام بالتنسيق مع فريقك ومراقبك. وزّعوا الجهد، مع استمرار تغطية الإشراف والالتزام بشروط موقعكم.', 'faq'],

  ['team', 'كم شخص بالفريق؟ وهل بقدر أشارك لحالي؟', 'الفريق من طالب واحد إلى ثلاثة طلاب؛ ممكن تشارك وحدك أو مع زميل أو زميلين.', 'rules'],
  ['team', 'هل عضوية IEEE مطلوبة من كل الفريق؟', 'نعم، كل متسابق يحتاج عضوية Student أو Graduate Student ورقم عضوية خاص فيه.', 'eligibility'],
  ['team', 'هل تكفي عضوية قائد الفريق؟', 'لا. تحقّقوا من عضوية كل عضو قبل بدء تسجيل الفريق.', 'eligibility'],
  ['team', 'هل ممكن يكون الفريق كله دراسات عليا؟', 'الحد الأعلى عضوان من فئة Graduate Student. فريق من ثلاثة أعضاء بهذه الفئة لا يستوفي الشرط.', 'eligibility'],
  ['team', 'هل الجامعة مسموح تسجّل أكثر من فريق؟', 'نعم، يمكن للجامعة أو الفرع الطلابي المشاركة بعدة فرق.', 'eligibility'],
  ['team', 'جامعتي ما فيها فرع IEEE؛ بقدر أشارك؟', 'نعم. وجود فرع طلابي في الجامعة ليس شرطًا، مع استيفاء متطلبات العضوية والفريق والمراقب.', 'eligibility'],
  ['team', 'كيف أحصل على عضوية IEEE؟', 'ابدأ من بوابة عضوية IEEE، ثم تأكّد من فئة عضويتك ورقمها في حسابك قبل التسجيل.', 'membership'],

  ['registration', 'وين التسجيل الرسمي للمسابقة؟', 'في IEEE vTools Xtreme. سجّل الدخول بحساب IEEE واتبع نموذج تسجيل الفريق.', 'vtools'],
  ['registration', 'متى آخر موعد للتسجيل في المسابقة؟', 'آخر موعد للتسجيل الرسمي عبر vTools هو 17 أكتوبر 2026 (17-10-2026). هذا موعد تسجيل المسابقة؛ نموذج استضافة HTU منفصل.', 'deadline', 'إعلان IEEEXtreme الرسمي'],
  ['registration', 'شو أجهّز قبل التسجيل؟', 'اسم الفريق، بيانات الجامعة والأعضاء وأرقام عضويتهم، ومراقب مؤهل. جهّز رقم السفير لفرق BAU أيضًا.', 'registration'],
  ['registration', 'كيف أتعلّم خطوات التسجيل بالفيديو؟', 'شاهد شرح بلال حمدان لآلية التسجيل في IEEEXtreme 20.0 على YouTube.', 'tutorial', 'شرح السفير'],
  ['registration', 'شو رقم السفير لطلاب فرع BAU؟', 'استخدموا IEEEXTREME20SB08217 في خانة Ambassador ID أثناء تسجيل فريقكم على vTools. زر النسخ موجود بقسم التسجيل.', 'local', 'تنسيق فرع BAU'],
  ['registration', 'هل نموذج الفرع يسجّلني رسميًا؟', 'لا؛ نموذج BAU للتواصل ومتابعة الاستعدادات محليًا. تسجيل المسابقة يتم عبر vTools بشكل منفصل.', 'local', 'تنسيق فرع BAU'],
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
  ['proctor', 'هل نفس المراقب لازم يظل 24 ساعة؟', 'يمكن لمراقبين مسجلين تقاسم المناوبات، مع تغطية الإشراف طوال المنافسة.', 'proctors'],
  ['proctor', 'كم فريق ممكن يراقب شخص واحد؟', 'حتى 20 فريقًا، وفق متطلبات المراقبين المنشورة.', 'proctors'],
  ['proctor', 'هل المراقب بقدر يساعدنا بحل المسائل؟', 'لا؛ الحل من مسؤولية أعضاء الفريق، ولا يحق للمراقب تقديم حلول أو كتابة الكود لكم.', 'eligibility'],

  ['participation', 'المسابقة أونلاين ولا حضورية؟', 'تقديم الحلول عبر الإنترنت. يمكن المشاركة من موقع مشترك أو بإشراف عن بُعد، حسب الترتيب مع المراقب.', 'proctors'],
  ['participation', 'بقدر أشارك من البيت؟', 'نعم، بترتيب مسبق مع المراقب يتيح له متابعة التزام فريقك بالقواعد طوال المنافسة.', 'eligibility'],
  ['participation', 'هل المشاركة عن بُعد تعفيني من المراقب؟', 'لا. الإشراف مطلوب سواء شاركت عن بُعد أو في موقع استضافة.', 'eligibility'],
  ['participation', 'شو يحتاج مكان المشاركة؟', 'مكان متاح طوال المنافسة، اتصال بالإنترنت، وجهاز واحد على الأقل للفريق. ويُفضّل توفر مساحة للراحة.', 'proctors'],
  ['participation', 'هل حضور HTU شرط لكل المشاركين بالعالم؟', 'لا. HTU خيار للاستضافة المحلية؛ قواعد الحضور فيه تخص الفرق التي تختار المشاركة في هذا الموقع.', 'htuRules', 'تعليمات HTU المحلية'],

  ['htu', 'شو شروط المشاركة من HTU؟', 'كل الأعضاء طلبة جامعيون حاليون ومسجلون رسميًا عبر vTools، ويحضر جميعهم للموقع. الحد الأدنى لحضور الفريق 10 ساعات.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'متى حفل الافتتاح في HTU؟', 'تعليمات الاستضافة تحدده الساعة 12:00 منتصف الليل. يلزم حضور عضو واحد على الأقل من الفريق، مع استثناء الفرق المؤلفة بالكامل من طالبات.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'شو الاستثناء للفرق المؤلفة بالكامل من طالبات؟', 'حضور الافتتاح غير مطلوب للمشاركة العامة، لكن يجب أن تُكمل جميع العضوات التسجيل والحضور في HTU بحلول 8:00 صباحًا.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'هل استثناء الافتتاح يشمل الفريق المختلط؟', 'النص يخص الفرق المؤلفة بالكامل من طالبات فقط؛ بقية الفرق يلزم أن يحضر عضو منها على الأقل الافتتاح.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'هل يكفي حضور قائد الفريق للموقع؟', 'لا. يجب أن يكون كل أعضاء الفريق المسجلين حاضرين فعليًا في HTU خلال المنافسة.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'شو جوائز المراكز الثلاثة الأولى في استضافة HTU؟', 'بحسب إعلان الجوائز المرفق: المركز الأول 300 دينار أردني، والثاني 200 دينار، والثالث 100 دينار. هذه جوائز الاستضافة المحلية، وتخضع لشروط أهلية جوائز HTU، ومنها حضور 15 ساعة على الأقل وحضور جميع الأعضاء الافتتاح.', 'htuPrizes', 'إعلان الجوائز المرفق'],
  ['htu', 'شو شروط جوائز HTU للمراكز الثلاثة الأولى؟', 'حضور 15 ساعة على الأقل، وحضور جميع الأعضاء حفل الافتتاح، إضافة إلى استيفاء شروط الطالب الجامعي والتسجيل الرسمي وحضور كل الفريق.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'هل إعفاء الطالبات من الافتتاح ينطبق على الجوائز؟', 'شروط الجوائز المحلية تطلب حضور جميع الأعضاء الافتتاح، ولا تنص على استثناء للفرق المؤلفة بالكامل من طالبات.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'إذا ما استوفينا شروط الجوائز، بنقدر نشارك من HTU؟', 'نعم، إذا استوفيتم شروط المشاركة العامة. عدم استيفاء شروط الجوائز يمنع أهلية جوائز HTU للمراكز 1 و2 و3 فقط.', 'htuRules', 'تعليمات HTU المحلية'],
  ['htu', 'شو أجهّز لفورم الهوست؟', 'أكمل تسجيل vTools، وجهّز صورة لمعلومات فريقك، ثم افتح فورم HTU واقرأ تعليمات الاستضافة داخله.', 'htu', 'تعليمات الاستضافة'],

  ['practice', 'وين أتدرّب على مسائل IEEEXtreme؟', 'في مجتمع IEEEXtreme Practice على CS Academy. جرّب قراءة المسائل وإرسال حلولك قبل المنافسة.', 'practice'],
  ['practice', 'ما اللغات الموجودة في بيئة التدريب؟', 'تتضمن البيئة C++ وC وJava وPython 3 وC# وJavaScript وRust وGo وغيرها. راجع قائمة البيئة للإصدارات وبقية اللغات.', 'environment'],
  ['practice', 'شو المتصفحات المذكورة في بيئة CS Academy؟', 'توصي الصفحة بحد أدنى Chrome 91 أو Firefox 90 أو Safari 15. استخدم إصدارًا حديثًا وجرّب التدريب عليه مسبقًا.', 'environment'],
  ['practice', 'هل vTools هو مكان حل المسائل؟', 'vTools بوابة التسجيل. استخدم رابط التدريب للتحضير، وتعليمات المنظمين للوصول إلى المنافسة.', 'vtools'],
  ['practice', 'كيف أجهّز نفسي وفريقي؟', 'راجعوا أساسيات اللغة والتعقيد والبحث والفرز، ثم جرّبوا جلسة حل محددة الوقت وناقشوا أخطاءكم معًا.', 'practice', 'نصيحة تحضيرية'],
  ['practice', 'هل ممكن نشارك الحلول مع فريق ثاني؟', 'لا. حل المسائل مسؤولية فريقكم، ومشاركة الكود مع الفرق الأخرى أو طلب مساعدتها أثناء المنافسة مخالفة.', 'faq'],
  ['practice', 'هل مسموح أستعين بالذكاء الاصطناعي AI؟', 'نعم، في التحديات المخصصة لذلك. إعلان IEEEXtreme 20.0 يوضح وجود تحديات تسمح بمساعدة AI ومسارات تقليدية تقيّد استخدامه. نحن بانتظار تحديث قواعد المشاركة لتفاصيل السماح والقيود؛ راجع القواعد وتعليمات التحدّي قبل الاستخدام.', 'aiAnnouncement', 'إعلان IEEEXtreme الرسمي عن AI'],
  ['practice', 'هل السماح بالـAI يشمل كل المسائل؟', 'لا. الإعلان يميّز بين AI-Enabled وAI-Free. لا تعمّم السماح على المسارات التقليدية، وتابع صفحة القواعد لتفاصيل 20.0 عند تحديثها.', 'rules'],
  ['practice', 'وين أقرأ القواعد كاملة؟', 'افتح صفحة القواعد الرسمية قبل المشاركة، وراجعها مع فريقك والمراقب، خصوصًا تعليمات المصادر والأدوات والتقييم.', 'rules'],

  ['community', 'شو دور سفير المسابقة؟', 'يساعد في التعريف بالتحدّي والتسجيل والتحضير والتنسيق المحلي. في فرع BAU، يتابع بلال حمدان هذه الخطوات مع الفرق؛ تواصل معه مباشرة على belalhamdan@ieee.org.', 'contact', 'تواصل مع بلال حمدان'],
  ['community', 'كيف أتواصل مع بلال للاستفسار عن المسابقة؟', 'راسلني على belalhamdan@ieee.org لأي استفسار عن المسابقة أو التسجيل أو تجهيز فريقك. أنا بلال حمدان، سفير فرع BAU.', 'contact', 'راسل بلال حمدان'],
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
  ['18', 'تواصل مع بلال حمدان', 'استفسارات المسابقة والتسجيل والتحضير', 'contact', 'registration']
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
    "جامعة البلقاء التطبيقية — فرع BAU",
    "Belal Hamdan",
    "IEEEXTREME20SB08217",
    "mailto:belalhamdan@ieee.org",
    "Al-Balqa Applied University Student Branch"
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
