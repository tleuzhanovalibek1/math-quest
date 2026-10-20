/**
 * MathQuest — v3.5 (Quizizz Стиліндегі Есептер & Homescapes Жөндеу Жүйесі)
 * =======================================================================
 * Жаңалықтар v3.5:
 *  - 🛠️ HOMESCAPES: Талдықорған қаласын жұлдыздармен жөндеу және безендіру (3 дизайннан таңдау!)
 *  - ⚡ QUIZIZZ: Бустерлер (💡 50:50, ⏳ +15 сек, ⚡ 2x XP/Монета)
 *  - 🔥 QUIZIZZ: Әсерлі мемдер, комбо реакциялары және мотивациялық баннерлер
 *  - 🗺️ Талдықорғанның 10 шағын ауданы, Қаратал өзені және 4 көпір
 *  - 📐 KaTeX математикалық формулалардың жоғары сапалы рендерингі
 */

/* ===================== ТАЛДЫҚОРҒАН ШАҒЫН АУДАНДАРЫ ===================== */

const LEVELS = [
  {
    id: 1,
    name: 'Орталық',
    fullName: 'Орталық (Центр / Арбат)',
    landmark: '🏛️ Тәуелсіздік алаңы, І. Жансүгіров саябағы & Арбат',
    districtDesc: 'Талдықорғанның қақ ортасы! Мұнда қала әкімдігі, демалыс аллеялары және білімнің бас кілті орналасқан.',
    icon: '🏛️',
    color: '#10b981',
    coords: { x: 500, y: 310 },
    neighbors: { up: 4, left: 3, right: 7, down: 6 },
    questions: [
      { q: '5 + 3 = ?',   answers: [8, 6, 7, 9],    correct: 0 },
      { q: '12 − 4 = ?',  answers: [7, 8, 9, 6],    correct: 1 },
      { q: '3 × 4 = ?',   tex: '3 \\times 4 = ?',   answers: [10, 11, 12, 9],  correct: 2 },
      { q: '15 ÷ 3 = ?',  tex: '15 \\div 3 = ?',    answers: [4, 3, 6, 5],     correct: 3 },
      { q: '7 + 8 = ?',   answers: [14, 15, 13, 16], correct: 1 },
      { q: '20 − 9 = ?',  answers: [10, 11, 12, 13], correct: 1 },
      { q: '6 × 2 = ?',   tex: '6 \\times 2 = ?',   answers: [10, 12, 14, 8],  correct: 1 },
    ]
  },
  {
    id: 2,
    name: '1-мкр',
    fullName: '1-ші шағын аудан (Ғарышкер)',
    landmark: '🚀 Ғарышкерлер көшесі & саябағы',
    districtDesc: 'Талдықорғанның батыс бөлігіндегі тарихи аудан. Ғарыштық жылдамдық пен көбейту есептерін шешіңіз!',
    icon: '🚀',
    color: '#f59e0b',
    coords: { x: 260, y: 210 },
    neighbors: { right: 3, down: 10 },
    questions: [
      { q: '14 × 3 = ?',   tex: '14 \\times 3 = ?',  answers: [38, 40, 42, 36], correct: 2 },
      { q: '81 ÷ 9 = ?',   tex: '81 \\div 9 = ?',    answers: [7, 8, 9, 10],    correct: 2 },
      { q: '25 + 37 = ?',  answers: [60, 62, 63, 58], correct: 1 },
      { q: '100 − 48 = ?', answers: [52, 54, 56, 50], correct: 0 },
      { q: '6² = ?',       tex: '6^2 = ?',            answers: [30, 36, 32, 40], correct: 1 },
      { q: '7 × 8 = ?',    tex: '7 \\times 8 = ?',   answers: [54, 56, 58, 52], correct: 1 },
      { q: '144 ÷ 12 = ?', tex: '144 \\div 12 = ?',  answers: [11, 12, 13, 10], correct: 1 },
    ]
  },
  {
    id: 3,
    name: 'Самал',
    fullName: 'Самал шағын ауданы (4-мкр)',
    landmark: '🌿 Самал саябағы & Жетісу сауда кешені',
    districtDesc: 'Жасыл желекті, тыныш әрі көрнекті аудан. Мұнда дәрежелер мен түбірлердің құпиясы сақталған!',
    icon: '🌿',
    color: '#ef4444',
    coords: { x: 380, y: 220 },
    neighbors: { left: 2, right: 4, down: 1 },
    questions: [
      { q: '√144 = ?',       tex: '\\sqrt{144} = ?',            answers: [11, 12, 13, 14],     correct: 1 },
      { q: '2³ × 5 = ?',     tex: '2^3 \\times 5 = ?',          answers: [30, 40, 45, 50],     correct: 1 },
      { q: '15% of 200 = ?', tex: '15\\% \\text{ of } 200 = ?', answers: [25, 30, 35, 40],     correct: 1 },
      { q: '7 × 8 + 4 = ?',  tex: '7 \\times 8 + 4 = ?',        answers: [56, 58, 60, 62],     correct: 2 },
      { q: '3² + 4² = ?',    tex: '3^2 + 4^2 = ?',              answers: [20, 23, 25, 27],     correct: 2 },
      { q: '√64 = ?',        tex: '\\sqrt{64} = ?',              answers: [6, 7, 8, 9],         correct: 2 },
      { q: '5³ = ?',         tex: '5^3 = ?',                     answers: [100, 115, 125, 130], correct: 2 },
    ]
  },
  {
    id: 4,
    name: 'Мүшелтой',
    fullName: 'Мүшелтой шағын ауданы (7-мкр)',
    landmark: '🏢 Мүшелтой тұрғын ауданы & мектептер кешені',
    districtDesc: 'Қаланың солтүстігіндегі үлкен шағын аудан. Алгебралық теңдеулер жұмбағын шешіңіз!',
    icon: '🏢',
    color: '#8b5cf6',
    coords: { x: 510, y: 160 },
    neighbors: { left: 3, right: 7, down: 1 },
    questions: [
      { q: 'x + 5 = 12, x = ?',  tex: 'x + 5 = 12,\\quad x = ?',       answers: [5, 6, 7, 8],     correct: 2 },
      { q: '2x = 18, x = ?',     tex: '2x = 18,\\quad x = ?',           answers: [7, 8, 9, 10],    correct: 2 },
      { q: 'x² = 49, x = ?',     tex: 'x^2 = 49,\\quad x = ?',          answers: [5, 6, 7, 8],     correct: 2 },
      { q: '3x − 6 = 15, x = ?', tex: '3x - 6 = 15,\\quad x = ?',       answers: [5, 6, 7, 8],     correct: 2 },
      { q: 'x/4 = 5, x = ?',     tex: '\\dfrac{x}{4} = 5,\\quad x = ?', answers: [16, 18, 20, 22], correct: 2 },
      { q: '2x + 3 = 11, x = ?', tex: '2x + 3 = 11,\\quad x = ?',       answers: [3, 4, 5, 6],     correct: 1 },
      { q: 'x² − 9 = 0, x = ?',  tex: 'x^2 - 9 = 0,\\quad x = ?',       answers: [2, 3, 4, 5],     correct: 1 },
    ]
  },
  {
    id: 5,
    name: 'Қаратал',
    fullName: 'Қаратал шағын ауданы (6-мкр)',
    landmark: '🌊 Қаратал өзенінің Жағалауы & Аркасы',
    districtDesc: 'Қараталдың саф ауасы мен сылдыраған суы! Өзен арқылы өтетін көпірлер мен геометриялық есептер.',
    icon: '🌊',
    color: '#06b6d4',
    coords: { x: 370, y: 420 },
    neighbors: { left: 10, right: 6, up: 1 },
    questions: [
      { q: 'Шеңбер ауданы (r=5)?',         tex: 'S = \\pi r^2,\\ r=5,\\ S=?',            answers: ['25π','20π','15π','10π'],    correct: 0 },
      { q: 'Тік үшбұрыш a=3, b=4, c=?',   tex: 'a^2+b^2=c^2,\\ a=3,\\ b=4,\\ c=?',     answers: ['5','6','7','4.5'],          correct: 0 },
      { q: 'Квадрат периметрі (a=6)?',      tex: 'P = 4a,\\ a=6,\\ P=?',                 answers: ['18','20','24','28'],        correct: 2 },
      { q: 'Тіктөртбұрыш ауданы 5×8?',     tex: 'S = 5 \\times 8 = ?',                  answers: ['35','38','40','42'],        correct: 2 },
      { q: 'Үшбұрыш бұрыштары қосындысы?', tex: '\\angle A+\\angle B+\\angle C = ?',     answers: ['90°','120°','180°','360°'], correct: 2 },
      { q: 'Шаршы диагоналы (a=4)?',        tex: 'd = a\\sqrt{2},\\ a=4,\\ d=?',         answers: ['4√2','5√2','4√3','6'],      correct: 0 },
      { q: 'Цилиндр көлемі (r=3, h=5)?',   tex: 'V = \\pi r^2 h,\\ r=3,\\ h=5,\\ V=?', answers: ['45π','40π','35π','30π'],    correct: 0 },
    ]
  },
  {
    id: 6,
    name: 'Жастар',
    fullName: 'Жастар шағын ауданы',
    landmark: '🏟️ "Жастар" спорт сарайы & саябағы',
    districtDesc: 'Спорт, серпін және жастық жігер алаңы! Мұнда ықтималдық пен комбинаторика шыңдалады.',
    icon: '🏟️',
    color: '#ec4899',
    coords: { x: 550, y: 440 },
    neighbors: { left: 5, right: 9, up: 1 },
    questions: [
      { q: 'Монета лақтырғанда "тура" ықтималдығы?', tex: 'P(\\text{тура}) = ?',          answers: ['1/4','1/3','1/2','2/3'],     correct: 2 },
      { q: '6 қырлы кубикте 3 шығу ықт.?',           tex: 'P(3) = ?,\\ n=6',              answers: ['1/4','1/6','1/3','1/2'],     correct: 1 },
      { q: '52 карта, туз алу ықтималдығы?',          tex: 'P(\\text{туз}),\\ n=52',       answers: ['1/52','1/13','4/52','1/26'], correct: 1 },
      { q: 'P(A) = 0.3, P(A бар емес) = ?',           tex: 'P(A)=0.3,\\ P(\\bar{A})=?',   answers: ['0.3','0.5','0.7','0.6'],     correct: 2 },
      { q: '2 монета: екеуі тура болу ықт.?',          tex: 'P(HH) = ?',                   answers: ['1/4','1/2','1/3','3/4'],     correct: 0 },
      { q: 'Бірдей болу мүмкіндігі 10 ішінен 1?',     tex: 'P = \\dfrac{1}{10} = ?',      answers: ['10%','5%','15%','20%'],      correct: 0 },
    ]
  },
  {
    id: 7,
    name: 'Көктем',
    fullName: 'Көктем шағын ауданы',
    landmark: '🌸 Көктем саябағы & білім беру орталықтары',
    districtDesc: 'Жаңарып жатқан жайлы мекен. Статистика, орташа мән, медиана және мода формулаларын игеріңіз!',
    icon: '🌸',
    color: '#14b8a6',
    coords: { x: 690, y: 210 },
    neighbors: { left: 4, right: 8, down: 1 },
    questions: [
      { q: '[2,4,6,8,10] орташа мәні?',      tex: '\\bar{x} = \\frac{2+4+6+8+10}{5} = ?', answers: ['5','6','7','8'],             correct: 1 },
      { q: '[3,5,5,7,9] медианасы?',          answers: ['3','5','7','9'],                    correct: 1 },
      { q: '[1,2,2,3,4] модасы?',             answers: ['1','2','3','4'],                    correct: 1 },
      { q: 'Дисперсия — не өлшейді?',        answers: ['Орташа','Шашырау','Медиана','Мода'], correct: 1 },
      { q: '[10,20,30] орташа ауытқуы?',      answers: ['5','8','10','12'],                  correct: 2 },
      { q: '5 бала: 4,5,6,5,5 баллы. Мода?', answers: ['4','5','6','5.5'],                  correct: 1 },
    ]
  },
  {
    id: 8,
    name: 'Шығыс',
    fullName: 'Шығыс шағын ауданы (8-мкр)',
    landmark: '🌅 Шығыс қақпасы & Сауда торабы',
    districtDesc: 'Күн шығыс жақтан ашылатын қақпа. Бұрыштар мен тригонометриялық толқындардың сандығы осында!',
    icon: '🌅',
    color: '#f97316',
    coords: { x: 830, y: 270 },
    neighbors: { left: 7, down: 9 },
    questions: [
      { q: 'sin(0°) = ?',        tex: '\\sin 0^\\circ = ?',         answers: ['0','1','-1','0.5'],   correct: 0 },
      { q: 'cos(90°) = ?',       tex: '\\cos 90^\\circ = ?',        answers: ['1','0','-1','0.5'],   correct: 1 },
      { q: 'sin(30°) = ?',       tex: '\\sin 30^\\circ = ?',        answers: ['√3/2','1/2','1','0'], correct: 1 },
      { q: 'tan(45°) = ?',       tex: '\\tan 45^\\circ = ?',        answers: ['0','1/2','1','√3'],   correct: 2 },
      { q: 'cos(60°) = ?',       tex: '\\cos 60^\\circ = ?',        answers: ['1/2','√3/2','1','0'], correct: 0 },
      { q: 'sin²x + cos²x = ?', tex: '\\sin^2 x + \\cos^2 x = ?', answers: ['0','2','1','-1'],      correct: 2 },
    ]
  },
  {
    id: 9,
    name: 'Болашақ',
    fullName: 'Болашақ шағын ауданы',
    landmark: '💻 IT Hub, Салтанат сарайы & Жаңа қалашық',
    districtDesc: 'Заманауи архитектура мен жаңа технологиялар тоғысы. Логика мен сандық алгоритмдерді бағындырыңыз!',
    icon: '💻',
    color: '#a855f7',
    coords: { x: 730, y: 460 },
    neighbors: { left: 6, up: 8 },
    questions: [
      { q: 'Барлық мысықтар жануар. Барсик мысық. Барсик...?', answers: ['Жануар емес','Жануар','Белгісіз','Өсімдік'], correct: 1 },
      { q: '2, 4, 8, 16, ...?',            tex: '2,\\ 4,\\ 8,\\ 16,\\ \\ldots = ?',  answers: ['24','30','32','36'],    correct: 2 },
      { q: '1, 1, 2, 3, 5, 8, ...?',       tex: '1,1,2,3,5,8,\\ \\ldots = ?',         answers: ['11','12','13','14'],    correct: 2 },
      { q: 'A немесе B = 0 болу үшін?',    answers: ['A=0','B=0','A және B=0','А=0 немесе B=0'], correct: 3 },
      { q: '3, 9, 27, 81, ...?',           tex: '3,\\ 9,\\ 27,\\ 81,\\ \\ldots = ?', answers: ['162','243','216','200'], correct: 1 },
      { q: 'Егер p→q және p болса, q...?', answers: ['Жалған','Шын','Белгісіз','Мүмкін'], correct: 1 },
    ]
  },
  {
    id: 10,
    name: 'Батыс / Хутор',
    fullName: 'Батыс / Хутор (Сарыбұлақ)',
    landmark: '🏔️ Қаратал көпірі, Сарыбұлақ өткелі & Тау баурайы',
    districtDesc: 'Алатау баурайындағы қасиетті мекен. Ең жоғары математика — интегралдар мен туындылар Гранд Мастері!',
    icon: '🏔️',
    color: '#fbbf24',
    coords: { x: 190, y: 430 },
    neighbors: { up: 2, right: 5 },
    questions: [
      { q: 'e ≈ ?',                       tex: 'e \\approx ?',                               answers: ['2.718','3.141','1.618','2.303'],   correct: 0 },
      { q: 'ln(e²) = ?',                  tex: '\\ln(e^2) = ?',                              answers: ['1','e','2','2e'],                  correct: 2 },
      { q: 'd/dx(sin x) = ?',             tex: '\\dfrac{d}{dx}(\\sin x) = ?',               answers: ['-cos x','cos x','tan x','-sin x'], correct: 1 },
      { q: '∫x dx = ?',                   tex: '\\int x\\,dx = ?',                           answers: ['x²','x²/2 + C','2x','x/2'],       correct: 1 },
      { q: 'lim(x→0) sin(x)/x = ?',       tex: '\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = ?', answers: ['0','∞','1','-1'],                  correct: 2 },
      { q: 'Евклид алгоритмі не табады?', answers: ['ЖОЕ','ЖЕАБ','π','e'],                  correct: 1 },
      { q: 'i² = ? (кешен сан)',           tex: 'i^2 = ?\\quad (i = \\sqrt{-1})',            answers: ['1','-1','i','-i'],                 correct: 1 },
    ]
  },
];

/* Жолдар мен көпірлер торабы */
const MAP_ROADS = [
  [1, 4], [1, 3], [1, 7], [1, 6], [1, 5],
  [2, 3], [2, 10], [3, 4], [4, 7],
  [5, 6], [5, 10], [6, 9], [7, 8], [8, 9]
];

const BRIDGES = [
  { name: 'Батыс көпірі',   from: 2, to: 10, x: 225, y: 320, rot: 65 },
  { name: 'Арбат көпірі',   from: 1, to: 5,  x: 435, y: 365, rot: 40 },
  { name: 'Жастар көпірі',  from: 1, to: 6,  x: 525, y: 375, rot: -20 },
  { name: 'Шығыс көпірі',   from: 8, to: 9,  x: 780, y: 365, rot: 55 },
];

/* ===================== HOMESCAPES: ЖӨНДЕУ НЫСАНДАРЫ ===================== */

const RENOVATION_ITEMS = [
  {
    id: 'fountain',
    cost: 1,
    name: 'Орталық Арбат Субұрқағы',
    location: 'Орталық (Арбат)',
    desc: 'Талдықорғанның орталық көшесіне әсем субұрқақ орнатып, көркін ашыңыз!',
    defaultIcon: '⛲',
    options: [
      { name: 'Хан сарайы мәрмәрі', icon: '🏛️', desc: 'Ақ мәрмәрдан қашалған классикалық сәнді субұрқақ' },
      { name: 'Кристалл LED Неон',  icon: '💎', desc: 'Түнгі қалаға жарық сыйлайтын заманауи неон субұрқақ' },
      { name: 'Жетісу Табиғи Тасы', icon: '🌊', desc: 'Табиғи гранит пен сарқырама стиліндегі су бұрқағы' },
    ]
  },
  {
    id: 'karatal_arch',
    cost: 1,
    name: 'Қаратал Жағалауы Аркасы',
    location: 'Қаратал (6-мкр)',
    desc: 'Өзен жағасындағы жаяу жүргіншілер аллеясына салтанатты қақпа соғыңыз!',
    defaultIcon: '🌉',
    options: [
      { name: 'Алтын Қанатты Арка',   icon: '🦅', desc: 'Күн нұрымен шағылысатын алтын оюлы қақпа' },
      { name: 'Лазерлік Түнгі Арка',  icon: '🌌', desc: 'Түнгі набережнаяны нұрға бөлейтін кибер-арка' },
      { name: 'Жасыл Гүлді Эко-Арка', icon: '🌿', desc: 'Жан-жағы гүлмен көмкерілген саябақ аркасы' },
    ]
  },
  {
    id: 'park_benches',
    cost: 1,
    name: 'Жастар Саябағының Беседкасы',
    location: 'Жастар шағын ауданы',
    desc: 'Студенттер мен оқушылар есеп шығарып тынығатын заманауи демалыс аймағы!',
    defaultIcon: '🛋️',
    options: [
      { name: 'Ыңғайлы Ағаш Беседка', icon: '🛖', desc: 'Табиғи қарағайдан жасалған жылы әрі жайлы орындық' },
      { name: 'Смарт Күн Батареясы',  icon: '💡', desc: 'Телефон қуаттайтын және Wi-Fi тарататын смарт орындық' },
      { name: 'Ретро Шойын Шамдары',  icon: '🏰', desc: 'Ежелгі еуропалық стильдегі тарихи шамдар' },
    ]
  },
  {
    id: 'flower_garden',
    cost: 1,
    name: 'Самал Гүлзары мен Аллеясы',
    location: 'Самал (4-мкр)',
    desc: 'Самал шағын ауданын көгалдандырып, әсем гүлдер мен ағаштар отырғызыңыз!',
    defaultIcon: '🌷',
    options: [
      { name: 'Қызғалдақтар Кілемі', icon: '🌷', desc: 'Жетісудың қызыл-сары таңғажайып қызғалдақтары' },
      { name: 'Тянь-Шань Шыршалары', icon: '🌲', desc: 'Алатау баурайының мәңгі жасыл жұпар иісті шыршалары' },
      { name: 'Қызғылт Сакура Бағы',  icon: '🌸', desc: 'Көктемде құлпыратын сәнді гүлді ағаштар' },
    ]
  },
  {
    id: 'it_lab',
    cost: 2,
    name: 'Болашақ IT Hub Лабораториясы',
    location: 'Болашақ шағын ауданы',
    desc: 'Жас өнертапқыштарға арналған жасанды интеллект және робототехника орталығы!',
    defaultIcon: '💻',
    options: [
      { name: 'Кибер Неон Станциясы', icon: '🖥️', desc: 'Геймерлік қуатты компьютерлер мен жарықдиодты шамдар' },
      { name: 'Кванттық AI Сервері',  icon: '🚀', desc: 'Ғарыштық жылдамдықпен есептейтін суперкомпьютер' },
      { name: 'Эко-Ақылды Кеңсе',     icon: '🍃', desc: 'Табиғи өсімдіктермен көмкерілген тыныш IT бөлме' },
    ]
  },
  {
    id: 'sports_ground',
    cost: 2,
    name: 'Мүшелтой Спорт & Скейт Паркі',
    location: 'Мүшелтой (7-мкр)',
    desc: 'Балалар мен жастарға арналған заманауи белсенді спорт кешені!',
    defaultIcon: '🛹',
    options: [
      { name: 'Еуро Шағын Футбол',   icon: '⚽', desc: 'Жасанды көгалды кәсіби жабық футбол алаңы' },
      { name: 'Заманауи Скейт-Парк', icon: '🛹', desc: 'Ролик пен скейтке арналған рамптар мен трамплиндер' },
      { name: 'Street Workout & Сақина', icon: '🏀', desc: 'Турниктер мен көше баскетболы сақиналары' },
    ]
  },
];

/* ===================== QUIZIZZ: МЕМАЛАР МЕН РЕАКЦИЯЛАР ===================== */

const QUIZIZZ_MEMES = {
  correct: [
    '🔥 ОТТАЙ ЖАНДЫҢ! ТАМАША!',
    '🎯 ДӘЛ ОНДЫҚҚА! МАТЕМАТИК!',
    '⚡ СУПЕР ЖЫЛДАМДЫҚ! ТОҚТАМА!',
    '🧠 ТАЛДЫҚОРҒАН ЭЙНШТЕЙНІ!',
    '🚀 ҒАРЫШТЫҚ ДӘЛДІК!',
    '💎 АЛМАЗДАЙ МІНСІЗ ЖАУАП!',
  ],
  wrong: [
    '💪 БОСАҢСЫМА, ҚАЙТА ТЫРЫС!',
    '🌱 ҚАТЕЛІК — ТӘЖІРИБЕ БАСТАУЫ!',
    '🛡️ КЕЛЕСІ СҰРАҚТА ҚАРЫМТАСЫН ҚАЙТАР!',
    '⚡ ТАҒЫ БІР РЕТ ОЙЛАНЫП КӨР!',
  ]
};

const ACHIEVEMENTS = [
  { id: 'first_win',        icon: '🥇', title: 'Алғашқы жеңіс!',         desc: 'Орталық ауданын аяқтадың',              trigger: s => s.levelsCompleted >= 1 },
  { id: 'perfect',          icon: '💯', title: 'Мінсіз!',                  desc: 'Аудан есебін қатесіз шештің',          trigger: s => s.lastWrong === 0 && s.levelsCompleted >= 1 },
  { id: 'collector',        icon: '💰', title: 'Байлық жинаушы',           desc: '100 монета жиналды',                    trigger: s => s.coins >= 100 },
  { id: 'speed_demon',      icon: '⚡', title: 'Жылдамшыл!',               desc: '5 есепті 5 сек ішінде шеш',            trigger: s => s.fastAnswers >= 5 },
  { id: 'master',           icon: '👑', title: 'Талдықорған Шебері!',      desc: '10 шағын ауданның барлығын бағындырдың',trigger: s => s.levelsCompleted >= 10 },
  { id: 'combo_3',          icon: '🔥', title: 'Үштік комбо!',              desc: '3 қатарынан дұрыс жауап',              trigger: s => s.maxCombo >= 3 },
  { id: 'combo_5',          icon: '💥', title: 'Бесті комбо!',               desc: '5 қатарынан дұрыс жауап',              trigger: s => s.maxCombo >= 5 },
  { id: 'rich',             icon: '💎', title: 'Алмаз мәртебе',            desc: '500 монета жиналды',                    trigger: s => s.coins >= 500 },
  { id: 'halfway',          icon: '🌟', title: 'Қала жартысы!',             desc: '5 шағын аудан ашылды',                 trigger: s => s.levelsCompleted >= 5 },
  { id: 'mathematician',    icon: '🧮', title: 'Бас Математик!',           desc: '1000 XP жиналды',                       trigger: s => s.xp >= 1000 },
  { id: 'taldy_conqueror',  icon: '🏙️', title: 'Талдықорған Аңызы',        desc: 'Қала картасында барлық есептер ашылды', trigger: s => s.levelsCompleted >= 10 },
  { id: 'city_builder',     icon: '🛠️', title: 'Бас Сәулетші',             desc: 'Homescapes стилінде 3 нысанды жөндедің', trigger: s => Object.keys(s.renovations || {}).length >= 3 },
];

/* ===================== КҮЙДІ САҚТАУ (STATE) ===================== */

function loadState() {
  const raw = localStorage.getItem('mathquest_state_v2');
  const defaults = {
    xp: 0,
    coins: 0,
    levelsCompleted: 0,
    starsPerLevel: {},
    lastWrong: 0,
    fastAnswers: 0,
    achievements: [],
    maxCombo: 0,
    totalQuestions: 0,
    totalCorrect: 0,
    playerName: 'Мен',
    currentDistrictId: 1,
    viewMode: 'map',
    renovations: {}, // { fountain: { style: 1 }, ... }
    powerups: {
      fiftyFifty: 3,
      freezeTime: 3,
      doubleXP: 3
    }
  };
  if (!raw) return defaults;
  try {
    const parsed = JSON.parse(raw);
    return {
      ...defaults,
      ...parsed,
      powerups: { ...defaults.powerups, ...(parsed.powerups || {}) },
      renovations: { ...defaults.renovations, ...(parsed.renovations || {}) }
    };
  } catch (e) {
    return defaults;
  }
}

function saveState(state) {
  localStorage.setItem('mathquest_state_v2', JSON.stringify(state));
}

/* ===================== KATEX РЕНДЕРИНГ ===================== */

function renderQ(q) {
  if (q.tex && typeof katex !== 'undefined') {
    try {
      return katex.renderToString(q.tex, {
        throwOnError: false,
        displayMode: true,
        output: 'html'
      });
    } catch (e) {
      return q.q;
    }
  }
  return q.q;
}

/* ===================== ДЫБЫС ЖҮЙЕСІ (WEB AUDIO API) ===================== */

const Audio = {
  ctx: null,
  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {}
  },
  play(type) {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const now = this.ctx.currentTime;
    const o   = this.ctx.createOscillator();
    const g   = this.ctx.createGain();
    o.connect(g);
    g.connect(this.ctx.destination);

    if (type === 'correct') {
      o.frequency.setValueAtTime(523, now);
      o.frequency.setValueAtTime(659, now + 0.08);
      o.frequency.setValueAtTime(784, now + 0.16);
      g.gain.setValueAtTime(0.25, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      o.start(now); o.stop(now + 0.45);

    } else if (type === 'wrong') {
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(280, now);
      o.frequency.setValueAtTime(210, now + 0.12);
      g.gain.setValueAtTime(0.25, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o.start(now); o.stop(now + 0.35);

    } else if (type === 'win') {
      [523, 659, 784, 1047].forEach((f, i) => {
        const oo = this.ctx.createOscillator();
        const gg = this.ctx.createGain();
        oo.connect(gg); gg.connect(this.ctx.destination);
        oo.frequency.value = f;
        gg.gain.setValueAtTime(0.22, now + i * 0.1);
        gg.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.38);
        oo.start(now + i * 0.1);
        oo.stop(now + i * 0.1 + 0.38);
      });

    } else if (type === 'combo') {
      o.frequency.setValueAtTime(880, now);
      o.frequency.setValueAtTime(1100, now + 0.08);
      g.gain.setValueAtTime(0.3, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o.start(now); o.stop(now + 0.3);

    } else if (type === 'step') {
      o.type = 'sine';
      o.frequency.setValueAtTime(340, now);
      o.frequency.exponentialRampToValueAtTime(560, now + 0.08);
      g.gain.setValueAtTime(0.12, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      o.start(now); o.stop(now + 0.08);

    } else if (type === 'unlock') {
      [587, 740, 880, 1174].forEach((f, i) => {
        const oo = this.ctx.createOscillator();
        const gg = this.ctx.createGain();
        oo.type = 'sine';
        oo.frequency.value = f;
        gg.gain.setValueAtTime(0.15, now + i * 0.08);
        gg.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        oo.connect(gg); gg.connect(this.ctx.destination);
        oo.start(now + i * 0.08);
        oo.stop(now + i * 0.08 + 0.3);
      });

    } else if (type === 'powerup') {
      // Quizizz бустер қолданылғандағы футуристік дыбыс
      o.type = 'triangle';
      o.frequency.setValueAtTime(400, now);
      o.frequency.exponentialRampToValueAtTime(1200, now + 0.22);
      g.gain.setValueAtTime(0.3, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o.start(now); o.stop(now + 0.25);

    } else if (type === 'hammer') {
      // Homescapes құрылыс балғасының дыбысы
      [220, 260, 310].forEach((f, i) => {
        const oo = this.ctx.createOscillator();
        const gg = this.ctx.createGain();
        oo.type = 'square';
        oo.frequency.value = f;
        gg.gain.setValueAtTime(0.2, now + i * 0.1);
        gg.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.08);
        oo.connect(gg); gg.connect(this.ctx.destination);
        oo.start(now + i * 0.1);
        oo.stop(now + i * 0.1 + 0.08);
      });
    }
  }
};

/* ===================== КОНФЕТТИ ===================== */

function launchConfetti() {
  const colors = ['#7c3aed', '#ec4899', '#fbbf24', '#10b981', '#06b6d4', '#ffffff'];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed; top:${Math.random() * 30}%; left:${Math.random() * 100}%;
      width:${6 + Math.random() * 8}px; height:${6 + Math.random() * 8}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
      z-index:99999; pointer-events:none;
      animation: confettiFall ${1 + Math.random() * 2}s ${Math.random() * 0.5}s forwards;
      transform: rotate(${Math.random() * 360}deg);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

/* ===================== ОЙЫН КОНТРОЛЛЕРІ ===================== */

const App = {
  state: loadState(),
  currentLevel: null,
  currentQIdx: 0,
  timerInterval: null,
  timeLeft: 15,
  wrongCount: 0,
  startTime: null,
  questionStartTime: null,
  fastCount: 0,
  combo: 0,
  shuffledQuestions: [],
  keyHandlerBound: false,
  doubleXpActive: false,

  init() {
    Audio.init();
    this._bindKeyboardNavigation();
    if (this.state.viewMode === 'grid') {
      this.showLevelSelect();
    } else if (this.state.viewMode === 'homescapes') {
      this.showHomescapesStudio();
    } else {
      this.showTaldyMap();
    }
  },

  /* Жұлдыздар балансы (Homescapes үшін) */
  getTotalStarsEarned() {
    const stars = this.state.starsPerLevel || {};
    return Object.values(stars).reduce((acc, v) => acc + (v || 0), 0);
  },

  getSpentStars() {
    const reno = this.state.renovations || {};
    let spent = 0;
    RENOVATION_ITEMS.forEach(item => {
      if (reno[item.id] !== undefined) {
        spent += item.cost;
      }
    });
    return spent;
  },

  getAvailableStars() {
    return Math.max(0, this.getTotalStarsEarned() - this.getSpentStars());
  },

  isDistrictUnlocked(id) {
    if (id === 1) return true;
    if (id <= (this.state.levelsCompleted + 1)) return true;
    return false;
  },

  /* ========================================================
     1. ТАЛДЫҚОРҒАН ИНТЕРАКТИВТІ КАРТАСЫ (MAP MODE)
     ======================================================== */

  showTaldyMap() {
    this.state.viewMode = 'map';
    saveState(this.state);
    const root = document.getElementById('app');
    const curId = this.state.currentDistrictId || 1;
    const currentDistrict = LEVELS.find(l => l.id === curId) || LEVELS[0];

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}

        <div class="taldy-map-wrapper">
          <div class="map-header">
            <div class="map-title-wrap">
              <span class="map-title">🗺️ Талдықорған Саяхаты</span>
              <span class="map-city-badge">10 Шағын Аудан</span>
            </div>
            <div class="mode-toggle-group">
              <button class="mode-btn active" id="btnModeMap">🗺️ Карта</button>
              <button class="mode-btn" id="btnModeGrid">📋 Тізім</button>
              <button class="mode-btn" id="btnModeReno">🛠️ Жөндеу</button>
            </div>
          </div>

          <!-- Интерактивті SVG карта -->
          <div class="map-canvas-card">
            ${this._generateMapSVG()}
          </div>

          <!-- Төменгі басқару және сандық мәліметтер тақтасы -->
          <div class="map-dock-bar">
            ${this._generateDistrictCardHTML(currentDistrict)}
            ${this._generateDPadHTML(currentDistrict)}
          </div>
        </div>
      </div>`;

    this._bindTopBar();
    this._bindMapInteractions();
  },

  _generateMapSVG() {
    const curId = this.state.currentDistrictId || 1;
    const curDist = LEVELS.find(l => l.id === curId) || LEVELS[0];

    // Жолдар
    const roadsHTML = MAP_ROADS.map(([aId, bId]) => {
      const a = LEVELS.find(l => l.id === aId);
      const b = LEVELS.find(l => l.id === bId);
      if (!a || !b) return '';
      const unlocked = this.isDistrictUnlocked(aId) && this.isDistrictUnlocked(bId);
      const isActive = (curId === aId && this.isDistrictUnlocked(bId)) || (curId === bId && this.isDistrictUnlocked(aId));
      return `
        <line x1="${a.coords.x}" y1="${a.coords.y}"
              x2="${b.coords.x}" y2="${b.coords.y}"
              class="road-line ${unlocked ? 'unlocked' : 'locked'} ${isActive ? 'active' : ''}"
        />`;
    }).join('');

    // Көпірлер
    const bridgesHTML = BRIDGES.map(br => `
      <g transform="translate(${br.x}, ${br.y}) rotate(${br.rot})">
        <rect x="-24" y="-7" width="48" height="14" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="2.5" />
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#f59e0b" stroke-dasharray="3 3" stroke-width="2" />
      </g>`).join('');

    // Шағын аудандар
    const nodesHTML = LEVELS.map(lv => {
      const isCur    = lv.id === curId;
      const unlocked = this.isDistrictUnlocked(lv.id);
      const stars    = (this.state.starsPerLevel || {})[lv.id] || 0;
      const isDone   = stars > 0;

      return `
        <g class="district-node-g" data-id="${lv.id}" transform="translate(${lv.coords.x}, ${lv.coords.y})">
          ${isCur ? `<circle cx="0" cy="0" r="28" fill="none" stroke="#fbbf24" stroke-width="2.5" class="node-pulse-ring" />` : ''}

          <circle cx="0" cy="0" r="24"
                  class="node-circle"
                  fill="${unlocked ? lv.color : '#334155'}"
                  stroke="${isCur ? '#fbbf24' : (unlocked ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)')}"
                  stroke-width="${isCur ? '4' : '2'}"
                  opacity="${unlocked ? '1' : '0.55'}"
          />

          <text x="0" y="7" text-anchor="middle" font-size="20" pointer-events="none">
            ${unlocked ? lv.icon : '🔒'}
          </text>

          <g transform="translate(0, 36)" pointer-events="none">
            <rect x="-55" y="-12" width="110" height="20" rx="10"
                  fill="rgba(13, 11, 43, 0.88)"
                  stroke="${isCur ? '#fbbf24' : 'rgba(255,255,255,0.2)'}"
                  stroke-width="1.5" />
            <text x="0" y="2" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="800" font-family="Nunito, sans-serif">
              ${lv.name} ${isDone ? '⭐' : ''}
            </text>
          </g>
        </g>`;
    }).join('');

    return `
      <svg class="map-svg" viewBox="0 0 1000 580" preserveAspectRatio="xMidYMid meet" id="taldySvgMap">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
          </pattern>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="50%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#0ea5e9" />
          </linearGradient>
        </defs>

        <rect width="1000" height="580" fill="url(#gridPattern)" />

        <!-- Қаратал өзені -->
        <path d="M -20,310 C 180,330 320,350 450,370 C 580,390 720,440 1020,570"
              fill="none" stroke="url(#riverGrad)" stroke-width="36" stroke-linecap="round" opacity="0.85" />
        <path d="M -20,310 C 180,330 320,350 450,370 C 580,390 720,440 1020,570"
              fill="none" stroke="#e0f2fe" stroke-width="3" stroke-linecap="round" class="river-flow" opacity="0.6" />

        <text x="790" y="495" fill="#38bdf8" font-size="12" font-weight="900" letter-spacing="3" opacity="0.8" transform="rotate(22 790 495)">
          🌊 ҚАРАТАЛ ӨЗЕНІ
        </text>

        ${bridgesHTML}
        ${roadsHTML}
        ${nodesHTML}

        <!-- Ойыншы аватары -->
        <g id="playerAvatar" class="player-marker-g" transform="translate(${curDist.coords.x}, ${curDist.coords.y - 32})">
          <g class="player-bubble">
            <ellipse cx="0" cy="18" rx="14" ry="4" fill="rgba(0,0,0,0.5)" />
            <circle cx="0" cy="0" r="16" fill="#fbbf24" stroke="#ffffff" stroke-width="2.5" />
            <text x="0" y="6" text-anchor="middle" font-size="16">🚶‍♂️</text>
          </g>
        </g>
      </svg>`;
  },

  _generateDistrictCardHTML(district) {
    const unlocked = this.isDistrictUnlocked(district.id);
    const stars    = (this.state.starsPerLevel || {})[district.id] || 0;
    const isDone   = stars > 0;

    let badgeClass = 'badge-unlocked';
    let badgeText  = '⚡ Жаңа сандық табылды!';
    if (!unlocked) {
      badgeClass = 'badge-locked';
      badgeText  = '🔒 Құлыптаулы';
    } else if (isDone) {
      badgeClass = 'badge-done';
      badgeText  = `🏆 Аяқталды (${'⭐'.repeat(stars)})`;
    }

    return `
      <div class="district-card-dock" id="districtDockCard">
        <div class="district-dock-top">
          <div class="district-info-left">
            <div class="district-dock-icon" style="background:${district.color}22; border-color:${district.color}">
              ${district.icon}
            </div>
            <div>
              <div class="district-dock-name">${district.fullName}</div>
              <div class="district-dock-landmark">${district.landmark}</div>
            </div>
          </div>
          <span class="district-dock-badge ${badgeClass}">${badgeText}</span>
        </div>

        <div class="district-dock-desc">${district.districtDesc}</div>

        <div class="district-dock-action">
          <button class="btn-open-quest ${isDone ? 'done-btn' : ''}" id="btnOpenQuest" ${!unlocked ? 'disabled' : ''}>
            ${!unlocked ? '🔒 Аудан жабық' : (isDone ? '⭐ Қайта шешу (Enter)' : '🔍 Есепті ашу және шешу (Enter)')}
          </button>
        </div>
      </div>`;
  },

  _generateDPadHTML(currentDistrict) {
    const { neighbors } = currentDistrict;
    return `
      <div class="dpad-card">
        <span class="dpad-title">🎮 Басқару</span>
        <div class="dpad-grid">
          <button class="dpad-btn dpad-up"    data-dir="up"    ${!neighbors.up ? 'disabled' : ''} title="Жоғары">▲</button>
          <button class="dpad-btn dpad-left"  data-dir="left"  ${!neighbors.left ? 'disabled' : ''} title="Солға">◀</button>
          <button class="dpad-btn dpad-enter" id="dpadActionBtn" title="Есепті ашу">🔍</button>
          <button class="dpad-btn dpad-right" data-dir="right" ${!neighbors.right ? 'disabled' : ''} title="Оңға">▶</button>
          <button class="dpad-btn dpad-down"  data-dir="down"  ${!neighbors.down ? 'disabled' : ''} title="Төмен">▼</button>
        </div>
        <div class="dpad-hint">Кнопкалармен немесе W,A,S,D пернелерімен жүр</div>
      </div>`;
  },

  _bindMapInteractions() {
    document.getElementById('btnModeGrid')?.addEventListener('click', () => {
      this.showLevelSelect();
    });
    document.getElementById('btnModeReno')?.addEventListener('click', () => {
      this.showHomescapesStudio();
    });

    document.querySelectorAll('.district-node-g').forEach(node => {
      node.addEventListener('click', () => {
        const id = parseInt(node.dataset.id);
        if (id) this.movePlayerToDistrict(id);
      });
    });

    document.querySelectorAll('.dpad-btn[data-dir]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dir = btn.dataset.dir;
        this.handleDirection(dir);
      });
    });

    document.getElementById('dpadActionBtn')?.addEventListener('click', () => {
      this.openDistrictQuest(this.state.currentDistrictId || 1);
    });

    document.getElementById('btnOpenQuest')?.addEventListener('click', () => {
      this.openDistrictQuest(this.state.currentDistrictId || 1);
    });
  },

  _bindKeyboardNavigation() {
    if (this.keyHandlerBound) return;
    this.keyHandlerBound = true;

    window.addEventListener('keydown', (e) => {
      if (this.state.viewMode !== 'map' || this.currentLevel !== null) return;

      if (e.key === 'ArrowUp' || e.key === 'KeyW' || e.key === 'w' || e.key === 'W') {
        e.preventDefault(); this.handleDirection('up');
      } else if (e.key === 'ArrowDown' || e.key === 'KeyS' || e.key === 's' || e.key === 'S') {
        e.preventDefault(); this.handleDirection('down');
      } else if (e.key === 'ArrowLeft' || e.key === 'KeyA' || e.key === 'a' || e.key === 'A') {
        e.preventDefault(); this.handleDirection('left');
      } else if (e.key === 'ArrowRight' || e.key === 'KeyD' || e.key === 'd' || e.key === 'D') {
        e.preventDefault(); this.handleDirection('right');
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); this.openDistrictQuest(this.state.currentDistrictId || 1);
      }
    });
  },

  handleDirection(dir) {
    const curId = this.state.currentDistrictId || 1;
    const cur   = LEVELS.find(l => l.id === curId);
    if (!cur || !cur.neighbors[dir]) return;

    const targetId = cur.neighbors[dir];
    const target   = LEVELS.find(l => l.id === targetId);
    if (!target) return;

    if (!this.isDistrictUnlocked(targetId)) {
      Audio.play('wrong');
      this._showToast(`🔒 ${target.name} ауданы жабық! Алдымен алдыңғы есепті шешіңіз.`);
      return;
    }

    this.movePlayerToDistrict(targetId);
  },

  movePlayerToDistrict(targetId) {
    const target = LEVELS.find(l => l.id === targetId);
    if (!target) return;

    this.state.currentDistrictId = targetId;
    saveState(this.state);
    Audio.play('step');
    this.showTaldyMap();
  },

  openDistrictQuest(districtId) {
    const level = LEVELS.find(l => l.id === districtId);
    if (!level) return;

    if (!this.isDistrictUnlocked(districtId)) {
      Audio.play('wrong');
      this._showToast('🔒 Бұл аудан әлі құлыптаулы!');
      return;
    }

    Audio.play('unlock');
    this.startLevel(level);
  },

  /* ========================================================
     2. HOMESCAPES: ТАЛДЫҚОРҒАНДЫ ЖӨНДЕУ ЖӘНЕ БЕЗЕНДІРУ СТУДИЯСЫ
     ======================================================== */

  showHomescapesStudio() {
    this.state.viewMode = 'homescapes';
    saveState(this.state);
    const root = document.getElementById('app');
    const availStars = this.getAvailableStars();
    const renoState  = this.state.renovations || {};

    const cardsHTML = RENOVATION_ITEMS.map(item => {
      const isBuilt    = renoState[item.id] !== undefined;
      const currentOpt = isBuilt ? item.options[renoState[item.id].style] : null;
      const canAfford  = availStars >= item.cost;

      return `
        <div class="reno-card ${isBuilt ? 'built' : ''}">
          <div class="reno-card-header">
            <div class="reno-icon-box">
              ${isBuilt ? currentOpt.icon : item.defaultIcon}
            </div>
            <div>
              <div class="reno-title">${item.name}</div>
              <div class="reno-location">📍 ${item.location}</div>
            </div>
          </div>

          <div class="reno-desc">
            ${isBuilt
              ? `✅ Орнатылды: <strong>${currentOpt.name}</strong>`
              : item.desc}
          </div>

          <div class="reno-status-row">
            ${isBuilt
              ? `<button class="btn-reno-action change-style" onclick="App.openRenovationPicker('${item.id}')">
                   🎨 Стильді ауыстыру
                 </button>`
              : `<button class="btn-reno-action" onclick="App.openRenovationPicker('${item.id}')" ${!canAfford ? 'disabled' : ''}>
                   🔨 Жөндеу (⭐ ${item.cost})
                 </button>`}
          </div>
        </div>`;
    }).join('');

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}

        <div class="homescapes-wrapper">
          <div class="homescapes-header">
            <div class="homescapes-title">
              🛠️ Талдықорған Сәулеті (Homescapes)
            </div>
            <div class="homescapes-stars-box">
              ⭐ Қолда бар жұлдыздар: ${availStars}
            </div>
          </div>

          <div class="homescapes-scene">
            <div class="scene-intro-bubble">
              <div class="scene-butler-avatar">👷‍♂️</div>
              <div class="scene-bubble-text">
                <strong>Қош келдіңіз, Бас Сәулетші!</strong><br>
                Аудандардың есептерін шешіп жинаған <strong>Жұлдыздарыңызбен (⭐)</strong> қаланы жаңартыңыз.
                Әр нысанға <strong>3 түрлі дизайннан</strong> өзіңізге ұнағанын таңдай аласыз!
              </div>
            </div>

            <div class="renovation-grid">
              ${cardsHTML}
            </div>
          </div>

          <div style="display:flex; gap:1rem; width:100%; justify-content:center; margin-top:0.5rem;">
            <button class="modal-btn primary" onclick="App.showTaldyMap()">🗺️ Қала Картасына Оралу</button>
          </div>
        </div>
      </div>`;

    this._bindTopBar();
  },

  /* Homescapes: 3 дизайн таңдау модалі (Signature 3-Choice Picker) */
  openRenovationPicker(itemId) {
    const item = RENOVATION_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    const isBuilt   = (this.state.renovations || {})[itemId] !== undefined;
    const curStyle  = isBuilt ? this.state.renovations[itemId].style : 0;
    const availStars= this.getAvailableStars();

    if (!isBuilt && availStars < item.cost) {
      Audio.play('wrong');
      this._showToast(`⭐ Бұл нысанды салу үшін ${item.cost} жұлдыз керек! Аудандардың есебін шешіңіз.`);
      return;
    }

    const modal = document.createElement('div');
    modal.className = 'homescapes-picker-overlay';
    modal.id = 'renoPickerOverlay';

    modal.innerHTML = `
      <div class="homescapes-picker-modal">
        <div class="picker-title">🛠️ ${item.name} — Дизайн таңдаңыз</div>
        <div class="picker-subtitle">Homescapes стиліндегі 3 нұсқаның бірін таңдап, қаланы көркейтіңіз!</div>

        <div class="picker-choices-row">
          ${item.options.map((opt, idx) => `
            <div class="choice-card ${isBuilt && curStyle === idx ? 'selected' : ''}" data-idx="${idx}">
              <div class="choice-icon">${opt.icon}</div>
              <div class="choice-name">${opt.name}</div>
              <div class="choice-desc">${opt.desc}</div>
              <button class="modal-btn primary" style="font-size:0.8rem; padding:0.4rem 0.8rem; margin-top:0.4rem;">
                ${isBuilt && curStyle === idx ? 'Таңдалған ✓' : 'Таңдау'}
              </button>
            </div>`).join('')}
        </div>

        <div class="picker-actions">
          <button class="modal-btn secondary" id="btnCancelPicker">Жабу</button>
        </div>
      </div>`;

    document.body.appendChild(modal);

    modal.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        const chosenIdx = parseInt(card.dataset.idx);
        this.applyRenovation(itemId, chosenIdx);
        modal.remove();
      });
    });

    modal.querySelector('#btnCancelPicker').addEventListener('click', () => {
      modal.remove();
    });
  },

  applyRenovation(itemId, styleIdx) {
    const item = RENOVATION_ITEMS.find(i => i.id === itemId);
    if (!item) return;

    if (!this.state.renovations) this.state.renovations = {};
    const isFirstTime = this.state.renovations[itemId] === undefined;

    this.state.renovations[itemId] = { style: styleIdx };
    saveState(this.state);

    Audio.play('hammer');
    setTimeout(() => Audio.play('win'), 300);
    launchConfetti();

    this._checkAchievements();
    this._showToast(`🎉 Тамаша! ${item.name} сәтті жаңартылды!`);
    this.showHomescapesStudio();
  },

  /* ========================================================
     3. КЛАССИКАЛЫҚ ДЕҢГЕЙЛЕР КЕСТЕСІ (GRID MODE)
     ======================================================== */

  showLevelSelect() {
    this.state.viewMode = 'grid';
    saveState(this.state);
    const root = document.getElementById('app');
    const stars = this.state.starsPerLevel || {};
    const accuracy = this.state.totalQuestions > 0
      ? Math.round(this.state.totalCorrect / this.state.totalQuestions * 100)
      : 0;

    const cards = LEVELS.map(lv => {
      const locked    = !this.isDistrictUnlocked(lv.id);
      const starCount = stars[lv.id] || 0;
      const starStr   = '⭐'.repeat(starCount) + '☆'.repeat(3 - starCount);

      return `
        <div class="level-card ${locked ? 'locked' : ''} ${starCount > 0 ? 'done' : ''}"
             data-level="${lv.id}"
             style="--lv-color:${lv.color}">
          <div class="level-icon">${lv.icon}</div>
          <div class="level-name">${lv.name}</div>
          <div class="level-stars">${starStr}</div>
          ${locked ? '<div class="level-lock">🔒 Жабық</div>' : ''}
        </div>`;
    }).join('');

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}
        <div class="select-header">
          <div class="map-title-wrap">
            <span class="level-select-title">⚔️ Аудан таңда</span>
            <div class="accuracy-badge">🎯 ${accuracy}% дәлдік</div>
          </div>
          <div class="mode-toggle-group">
            <button class="mode-btn" id="btnModeMapGrid">🗺️ Карта</button>
            <button class="mode-btn active">📋 Тізім</button>
            <button class="mode-btn" id="btnModeRenoGrid">🛠️ Жөндеу</button>
          </div>
        </div>
        <div class="level-grid">${cards}</div>
        <a href="leaderboard.html" class="lb-link">🏆 Рейтинг кестесі →</a>
      </div>`;

    this._bindTopBar();
    document.getElementById('btnModeMapGrid')?.addEventListener('click', () => {
      this.showTaldyMap();
    });
    document.getElementById('btnModeRenoGrid')?.addEventListener('click', () => {
      this.showHomescapesStudio();
    });

    root.querySelectorAll('.level-card:not(.locked)').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.level);
        this.openDistrictQuest(id);
      });
    });
  },

  /* ========================================================
     4. QUIZIZZ СТИЛІНДЕГІ СҰРАҚ-ЖАУАП ОЙЫНЫ
     ======================================================== */

  startLevel(level) {
    this.currentLevel     = level;
    this.currentQIdx      = 0;
    this.wrongCount       = 0;
    this.fastCount        = 0;
    this.combo            = 0;
    this.doubleXpActive   = false;
    this.startTime        = Date.now();
    this.shuffledQuestions= [...level.questions].sort(() => Math.random() - 0.5);
    this.showQuestion();
  },

  showQuestion() {
    const { currentLevel, currentQIdx, shuffledQuestions, combo } = this;
    const q     = shuffledQuestions[currentQIdx];
    const total = shuffledQuestions.length;
    const root  = document.getElementById('app');
    const prog  = Math.round((currentQIdx / total) * 100);
    const pu    = this.state.powerups || { fiftyFifty: 3, freezeTime: 3, doubleXP: 3 };

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}
        <div class="question-card" style="position:relative;">
          <!-- Quizizz Мем-Реакция баннері -->
          <div class="quizizz-reaction-banner" id="quizizzBanner"></div>

          <div class="q-top-row">
            <span class="q-level-badge" style="color:${currentLevel.color}">${currentLevel.icon} ${currentLevel.fullName}</span>
            <span class="q-counter">${currentQIdx + 1} / ${total}</span>
            ${combo >= 2 ? `<span class="combo-badge">🔥 x${combo} STREAK</span>` : ''}
          </div>

          <div class="progress-track">
            <div class="progress-fill" style="width:${prog}%; background:${currentLevel.color}"></div>
          </div>

          <div class="timer-bar-wrap">
            <div class="timer-bar" id="timerBar" style="width:100%"></div>
          </div>

          <!-- KaTeX өрнегі -->
          <div class="question-text">${renderQ(q)}</div>

          <div class="answers-grid" id="answersGrid">
            ${q.answers.map((a, i) => `
              <button class="answer-btn" data-index="${i}">${a}</button>`).join('')}
          </div>

          <div class="timer-label" id="timerLabel">⏱ 15 сек</div>

          <!-- Quizizz Бустерлер тақтасы -->
          <div class="quizizz-powerups-bar">
            <button class="powerup-btn" id="btnPower50" ${pu.fiftyFifty <= 0 ? 'disabled' : ''} title="2 қате жауапты өшіру">
              💡 50:50 <span class="p-count">${pu.fiftyFifty}</span>
            </button>
            <button class="powerup-btn" id="btnPowerFreeze" ${pu.freezeTime <= 0 ? 'disabled' : ''} title="+15 сек уақыт қосу">
              ⏳ +15с <span class="p-count">${pu.freezeTime}</span>
            </button>
            <button class="powerup-btn" id="btnPower2X" ${pu.doubleXP <= 0 || this.doubleXpActive ? 'disabled' : ''} title="2x XP & Монета көбейткіші">
              ⚡ 2x XP <span class="p-count">${pu.doubleXP}</span>
            </button>
          </div>
        </div>
      </div>`;

    this._bindTopBar();
    this._bindPowerUps(q);
    this._startTimer();
    this.questionStartTime = Date.now();

    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectAnswer(parseInt(btn.dataset.index), q.correct);
      });
    });
  },

  _bindPowerUps(q) {
    // 1. 50:50 бустері
    document.getElementById('btnPower50')?.addEventListener('click', () => {
      if (this.state.powerups.fiftyFifty <= 0) return;
      this.state.powerups.fiftyFifty--;
      saveState(this.state);
      Audio.play('powerup');

      const wrongIndices = q.answers.map((_, i) => i).filter(i => i !== q.correct);
      const toRemove = wrongIndices.sort(() => Math.random() - 0.5).slice(0, 2);

      toRemove.forEach(idx => {
        const btn = document.querySelector(`.answer-btn[data-index="${idx}"]`);
        if (btn) {
          btn.style.opacity = '0.2';
          btn.style.pointerEvents = 'none';
          btn.textContent = '❌';
        }
      });
      document.getElementById('btnPower50').disabled = true;
      document.getElementById('btnPower50').querySelector('.p-count').textContent = this.state.powerups.fiftyFifty;
      this._showToast('💡 50:50 қолданылды! Екі қате жауап өшірілді.');
    });

    // 2. +15с Уақыт бустері
    document.getElementById('btnPowerFreeze')?.addEventListener('click', () => {
      if (this.state.powerups.freezeTime <= 0) return;
      this.state.powerups.freezeTime--;
      saveState(this.state);
      Audio.play('powerup');

      this.timeLeft = Math.min(30, this.timeLeft + 15);
      const bar = document.getElementById('timerBar');
      if (bar) bar.style.background = 'linear-gradient(90deg, #38bdf8, #818cf8)';
      document.getElementById('btnPowerFreeze').disabled = true;
      document.getElementById('btnPowerFreeze').querySelector('.p-count').textContent = this.state.powerups.freezeTime;
      this._showToast('⏳ +15 секунд қосылды!');
    });

    // 3. 2x XP бустері
    document.getElementById('btnPower2X')?.addEventListener('click', () => {
      if (this.state.powerups.doubleXP <= 0 || this.doubleXpActive) return;
      this.state.powerups.doubleXP--;
      this.doubleXpActive = true;
      saveState(this.state);
      Audio.play('powerup');

      const btn = document.getElementById('btnPower2X');
      btn.style.background = 'linear-gradient(135deg, #fbbf24, #f59e0b)';
      btn.style.color = '#0d0b2b';
      btn.querySelector('.p-count').textContent = this.state.powerups.doubleXP;
      this._showToast('⚡ 2x Множитель қосылды! Келесі дұрыс жауап қос есе ұпай береді.');
    });
  },

  selectAnswer(chosen, correct) {
    clearInterval(this.timerInterval);
    const elapsed   = (Date.now() - this.questionStartTime) / 1000;
    const isCorrect = chosen === correct;

    this.state.totalQuestions = (this.state.totalQuestions || 0) + 1;

    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct)                   btn.classList.add('correct');
      else if (i === chosen && !isCorrect) btn.classList.add('wrong');
    });

    // Quizizz реакциялық баннерін көрсету
    this._showQuizizzReaction(isCorrect, this.combo);

    if (isCorrect) {
      this.combo++;
      this.state.totalCorrect = (this.state.totalCorrect || 0) + 1;
      const baseXP  = 10;
      const timeXP  = Math.round((15 - Math.min(elapsed, 15)) * 2);
      const comboXP = this.combo >= 3 ? Math.round(this.combo * 5) : 0;
      let xpGain    = baseXP + timeXP + comboXP;
      let coinGain  = 5 + (this.combo >= 3 ? this.combo : 0);

      if (this.doubleXpActive) {
        xpGain   *= 2;
        coinGain *= 2;
        this.doubleXpActive = false;
      }

      this.state.xp     += xpGain;
      this.state.coins  += coinGain;
      this.state.maxCombo = Math.max(this.state.maxCombo || 0, this.combo);

      if (elapsed < 5) {
        this.fastCount++;
        this.state.fastAnswers = (this.state.fastAnswers || 0) + 1;
      }

      if (this.combo >= 3) Audio.play('combo');
      else Audio.play('correct');

      this._flyXP(`+${xpGain} XP${comboXP > 0 ? ' 🔥' : ''}`, chosen);

    } else {
      this.combo = 0;
      this.doubleXpActive = false;
      this.wrongCount++;
      this.state.lastWrong = this.wrongCount;
      Audio.play('wrong');
      const card = document.querySelector('.question-card');
      if (card) { card.style.animation = 'shakePulse 0.4s'; }
    }

    saveState(this.state);
    this._updateTopBar();

    setTimeout(() => {
      this.currentQIdx++;
      if (this.currentQIdx < this.shuffledQuestions.length) {
        this.showQuestion();
      } else {
        this.finishLevel();
      }
    }, 1100);
  },

  _showQuizizzReaction(isCorrect, combo) {
    const banner = document.getElementById('quizizzBanner');
    if (!banner) return;

    const list = isCorrect ? QUIZIZZ_MEMES.correct : QUIZIZZ_MEMES.wrong;
    const text = list[Math.floor(Math.random() * list.length)];

    banner.textContent = text;
    banner.className   = `quizizz-reaction-banner show ${isCorrect ? 'correct' : 'wrong'}`;

    setTimeout(() => {
      banner.classList.remove('show');
    }, 900);
  },

  _flyXP(text, btnIdx) {
    const btns = document.querySelectorAll('.answer-btn');
    const ref  = btns[btnIdx] || btns[0];
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    const el   = document.createElement('div');
    el.textContent = text;
    el.style.cssText = `
      position:fixed; left:${rect.left + rect.width / 2}px; top:${rect.top}px;
      font-size:1.1rem; font-weight:900; color:#fbbf24;
      pointer-events:none; z-index:99999;
      animation: xpFly 1s forwards;
      text-shadow: 0 0 10px rgba(251,191,36,0.8);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  },

  finishLevel() {
    const totalQ    = this.shuffledQuestions.length;
    const correct   = totalQ - this.wrongCount;
    const starCount = correct === totalQ ? 3 : correct >= Math.ceil(totalQ * 0.6) ? 2 : 1;
    const bonus     = starCount * 25;
    const win       = correct >= Math.ceil(totalQ * 0.6);

    if (win) {
      this.state.coins += bonus;
      this.state.levelsCompleted = Math.max(this.state.levelsCompleted, this.currentLevel.id);
      this.state.starsPerLevel[this.currentLevel.id] = Math.max(
        this.state.starsPerLevel[this.currentLevel.id] || 0, starCount
      );
    }
    this.state.lastWrong = this.wrongCount;

    saveState(this.state);
    this._checkAchievements();

    if (win && starCount === 3) { Audio.play('win'); launchConfetti(); }
    else if (win) Audio.play('win');

    this._showResultModal(correct, totalQ, starCount, bonus, win);
  },

  _showResultModal(correct, total, stars, bonus, win) {
    const timeSec  = Math.round((Date.now() - this.startTime) / 1000);
    const accuracy = Math.round(correct / total * 100);
    const modal    = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-emoji">${win ? (stars === 3 ? '🏆' : '🎉') : '😔'}</div>
        <div class="modal-title" style="color:${win ? '#fbbf24' : '#f87171'}">
          ${win ? (stars === 3 ? 'Мінсіз! Аудан бағындырылды!' : 'Керемет! Сандық ашылды!') : 'Тағы бір рет байқап көр!'}
        </div>
        <div class="modal-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
        <div class="modal-stats-row">
          <div class="modal-stat"><span>${correct}/${total}</span><small>Дұрыс</small></div>
          <div class="modal-stat"><span>${accuracy}%</span><small>Дәлдік</small></div>
          <div class="modal-stat"><span>${timeSec}с</span><small>Уақыт</small></div>
          <div class="modal-stat"><span>+${win ? bonus : 0}</span><small>Монета</small></div>
        </div>
        <div class="modal-buttons" style="flex-wrap:wrap;">
          <button class="modal-btn secondary" id="btnHome">🗺️ Қала Картасы</button>
          <button class="modal-btn" style="background:#ec4899; color:white;" id="btnGoReno">🛠️ Жөндеу (⭐ ${this.getAvailableStars()})</button>
          <button class="modal-btn primary"   id="btnNext">${win ? '▶ Келесі' : '🔁 Қайталау'}</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));

    modal.querySelector('#btnHome').addEventListener('click', () => {
      modal.remove();
      this.currentLevel = null;
      this.showTaldyMap();
    });

    modal.querySelector('#btnGoReno').addEventListener('click', () => {
      modal.remove();
      this.currentLevel = null;
      this.showHomescapesStudio();
    });

    modal.querySelector('#btnNext').addEventListener('click', () => {
      modal.remove();
      if (win) {
        const nextId = this.currentLevel.id + 1;
        const next   = LEVELS.find(l => l.id === nextId);
        if (next && this.isDistrictUnlocked(nextId)) {
          this.state.currentDistrictId = nextId;
          saveState(this.state);
          this.currentLevel = null;
          this.showTaldyMap();
        } else {
          this.currentLevel = null;
          this.showTaldyMap();
        }
      } else {
        this.startLevel(this.currentLevel);
      }
    });
  },

  _startTimer() {
    this.timeLeft = 15;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const bar   = document.getElementById('timerBar');
      const label = document.getElementById('timerLabel');
      const pct   = (this.timeLeft / 15) * 100;
      if (bar) {
        bar.style.width = `${Math.min(100, pct)}%`;
        bar.style.background = pct > 50
          ? 'linear-gradient(90deg,#10b981,#fbbf24)'
          : pct > 25
          ? 'linear-gradient(90deg,#f59e0b,#ef4444)'
          : '#ef4444';
      }
      if (label) label.textContent = `⏱ ${this.timeLeft} сек`;
      if (this.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.selectAnswer(-1, this.shuffledQuestions[this.currentQIdx].correct);
      }
    }, 1000);
  },

  _topBar() {
    const xpNeeded = 200;
    const xpPct    = Math.min((this.state.xp % xpNeeded) / xpNeeded * 100, 100).toFixed(1);
    const level    = Math.floor(this.state.xp / xpNeeded) + 1;
    const availStars = this.getAvailableStars();

    return `
      <div class="top-bar" id="topBar">
        <a class="home-link" href="index.html" title="Басты бет">🏠</a>
        <div class="xp-section">
          <div class="xp-bar-wrap" title="XP: ${this.state.xp}">
            <div class="xp-bar" id="xpBarFill" style="width:${xpPct}%"></div>
          </div>
          <span class="xp-label" id="xpLabel">Дең. ${level}</span>
        </div>
        <div class="coins" id="coinsDisplay">🪙 ${this.state.coins}</div>
        <div class="stars-badge" id="starsDisplay" title="Жөндеуге арналған қолда бар жұлдыздар">
          ⭐ ${availStars}
        </div>
        <button class="btn-renovate-top" id="btnRenovateTop">
          🛠️ Жөндеу
        </button>
      </div>`;
  },

  _bindTopBar() {
    document.getElementById('btnRenovateTop')?.addEventListener('click', () => {
      this.showHomescapesStudio();
    });
    document.getElementById('starsDisplay')?.addEventListener('click', () => {
      this.showHomescapesStudio();
    });
  },

  _updateTopBar() {
    const xpNeeded = 200;
    const xpPct    = Math.min((this.state.xp % xpNeeded) / xpNeeded * 100, 100).toFixed(1);
    const level    = Math.floor(this.state.xp / xpNeeded) + 1;
    const bar  = document.getElementById('xpBarFill');
    const lbl  = document.getElementById('xpLabel');
    const coin = document.getElementById('coinsDisplay');
    const star = document.getElementById('starsDisplay');
    if (bar)  bar.style.width = xpPct + '%';
    if (lbl)  lbl.textContent = `Дең. ${level}`;
    if (coin) coin.textContent = `🪙 ${this.state.coins}`;
    if (star) star.innerHTML = `⭐ ${this.getAvailableStars()}`;
  },

  _showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed; bottom:2rem; left:50%; transform:translateX(-50%);
      background:rgba(15, 23, 42, 0.95); border:1px solid #fbbf24; color:#fef08a;
      padding:0.75rem 1.4rem; border-radius:50px; font-weight:800; font-size:0.9rem;
      z-index:99999; box-shadow:0 8px 30px rgba(0,0,0,0.6); pointer-events:none;
      transition:opacity 0.3s;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  },

  _checkAchievements() {
    ACHIEVEMENTS.forEach(ach => {
      if (!this.state.achievements.includes(ach.id) && ach.trigger(this.state)) {
        this.state.achievements.push(ach.id);
        saveState(this.state);
        this._showAchievementToast(ach);
      }
    });
  },

  _showAchievementToast(ach) {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
      <div class="toast-icon">${ach.icon}</div>
      <div>
        <div class="toast-title">Жетістік ашылды!</div>
        <div class="toast-text">${ach.title}</div>
        <div class="toast-desc">${ach.desc}</div>
      </div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  },
};

/* ===================== БАСТАУ ===================== */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
