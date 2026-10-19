/**
 * MathQuest — v2.1 (KaTeX математикалық рендеринг)
 * ==================================================
 * Жаңалықтар v2.1:
 *  - KaTeX арқылы математикалық өрнектер әдемі көрінеді
 *  - Барлық деңгейлерге tex өрісі қосылды
 */

/* ===================== ДЕРЕКТЕР БАЗАСЫ ===================== */

const LEVELS = [
  {
    id: 1, name: 'Бастауыш', icon: '🌱', color: '#10b981',
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
    id: 2, name: 'Орташа', icon: '⚡', color: '#f59e0b',
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
    id: 3, name: 'Жоғары', icon: '🔥', color: '#ef4444',
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
    id: 4, name: 'Алгебра', icon: '🔣', color: '#8b5cf6',
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
    id: 5, name: 'Геометрия', icon: '📐', color: '#0ea5e9',
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
    id: 6, name: 'Ықтималдық', icon: '🎲', color: '#ec4899',
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
    id: 7, name: 'Статистика', icon: '📊', color: '#14b8a6',
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
    id: 8, name: 'Тригонометрия', icon: '🌊', color: '#f97316',
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
    id: 9, name: 'Логика', icon: '🧩', color: '#a855f7',
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
    id: 10, name: '🏆 Гранд Мастер', icon: '👑', color: '#fbbf24',
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

const ACHIEVEMENTS = [
  { id: 'first_win',    icon: '🥇', title: 'Алғашқы жеңіс!',   desc: 'Бірінші деңгейді аяқтадың',  trigger: s => s.levelsCompleted >= 1 },
  { id: 'perfect',      icon: '💯', title: 'Мінсіз!',            desc: 'Деңгейді қатесіз аяқтадың',  trigger: s => s.lastWrong === 0 && s.levelsCompleted >= 1 },
  { id: 'collector',    icon: '💰', title: 'Байлық жинаушы',     desc: '100 монета жиналды',          trigger: s => s.coins >= 100 },
  { id: 'speed_demon',  icon: '⚡', title: 'Жылдамшыл!',         desc: '5 есепті 5 сек ішінде шеш',  trigger: s => s.fastAnswers >= 5 },
  { id: 'master',       icon: '👑', title: 'Шебер!',              desc: 'Барлық деңгейлерді аяқта',   trigger: s => s.levelsCompleted >= 10 },
  { id: 'combo_3',      icon: '🔥', title: 'Үштік комбо!',        desc: '3 қатарынан дұрыс жауап',    trigger: s => s.maxCombo >= 3 },
  { id: 'combo_5',      icon: '💥', title: 'Бесті комбо!',         desc: '5 қатарынан дұрыс жауап',    trigger: s => s.maxCombo >= 5 },
  { id: 'rich',         icon: '💎', title: 'Алмаз статус',         desc: '500 монета жиналды',          trigger: s => s.coins >= 500 },
  { id: 'halfway',      icon: '🌟', title: 'Жарты жол!',           desc: '5 деңгейді аяқтадың',        trigger: s => s.levelsCompleted >= 5 },
  { id: 'mathematician',icon: '🧮', title: 'Математик!',           desc: '1000 XP жиналды',             trigger: s => s.xp >= 1000 },
];

/* ===================== КҮЙДІ САҚТАУ ===================== */

function loadState() {
  const raw = localStorage.getItem('mathquest_state_v2');
  return raw ? JSON.parse(raw) : {
    xp: 0, coins: 0, levelsCompleted: 0,
    starsPerLevel: {}, lastWrong: 0,
    fastAnswers: 0, achievements: [],
    maxCombo: 0, totalQuestions: 0,
    totalCorrect: 0, playerName: 'Мен'
  };
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

/* ===================== ДЫБЫС ЖҮЙЕСІ ===================== */

const Audio = {
  ctx: null,
  init() {
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  },
  play(type) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.connect(g); g.connect(this.ctx.destination);
    if (type === 'correct') {
      o.frequency.setValueAtTime(523, this.ctx.currentTime);
      o.frequency.setValueAtTime(659, this.ctx.currentTime + 0.1);
      o.frequency.setValueAtTime(784, this.ctx.currentTime + 0.2);
      g.gain.setValueAtTime(0.3, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
      o.start(); o.stop(this.ctx.currentTime + 0.5);
    } else if (type === 'wrong') {
      o.frequency.setValueAtTime(300, this.ctx.currentTime);
      o.frequency.setValueAtTime(220, this.ctx.currentTime + 0.15);
      g.gain.setValueAtTime(0.3, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      o.start(); o.stop(this.ctx.currentTime + 0.4);
    } else if (type === 'win') {
      [523,659,784,1047].forEach((f,i) => {
        const oo = this.ctx.createOscillator();
        const gg = this.ctx.createGain();
        oo.connect(gg); gg.connect(this.ctx.destination);
        oo.frequency.value = f;
        gg.gain.setValueAtTime(0.25, this.ctx.currentTime + i*0.12);
        gg.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i*0.12 + 0.4);
        oo.start(this.ctx.currentTime + i*0.12);
        oo.stop(this.ctx.currentTime + i*0.12 + 0.4);
      });
    } else if (type === 'combo') {
      o.frequency.setValueAtTime(880, this.ctx.currentTime);
      o.frequency.setValueAtTime(1100, this.ctx.currentTime + 0.1);
      g.gain.setValueAtTime(0.4, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      o.start(); o.stop(this.ctx.currentTime + 0.3);
    }
  }
};

/* ===================== КОНФЕТТИ ===================== */

function launchConfetti() {
  const colors = ['#fbbf24','#a855f7','#10b981','#ec4899','#60a5fa'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed; top:${Math.random()*30}%; left:${Math.random()*100}%;
      width:${6+Math.random()*8}px; height:${6+Math.random()*8}px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      border-radius:${Math.random()>0.5?'50%':'2px'};
      z-index:9999; pointer-events:none;
      animation: confettiFall ${1+Math.random()*2}s ${Math.random()*0.5}s forwards;
      transform: rotate(${Math.random()*360}deg);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

if (!document.getElementById('confettiStyle')) {
  const s = document.createElement('style');
  s.id = 'confettiStyle';
  s.textContent = `
    @keyframes confettiFall {
      0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    @keyframes xpFly {
      0%   { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-80px); opacity: 0; }
    }
    @keyframes comboFlash {
      0%,100% { transform: scale(1); }
      50%     { transform: scale(1.3); color: #fbbf24; }
    }
    @keyframes shakePulse {
      0%,100% { transform: translateX(0); }
      20%     { transform: translateX(-8px); }
      40%     { transform: translateX(8px); }
      60%     { transform: translateX(-4px); }
      80%     { transform: translateX(4px); }
    }
    /* KaTeX өрнектері ақ болсын */
    .question-text .katex { color: white !important; }
    .question-text .katex-display { margin: 0 !important; }
  `;
  document.head.appendChild(s);
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

  showLevelSelect() {
    const root = document.getElementById('app');
    const stars = this.state.starsPerLevel || {};
    const accuracy = this.state.totalQuestions > 0
      ? Math.round(this.state.totalCorrect / this.state.totalQuestions * 100)
      : 0;

    const cards = LEVELS.map(lv => {
      const locked    = lv.id > (this.state.levelsCompleted + 1);
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
          <p class="level-select-title">⚔️ Деңгей таңда</p>
          <div class="accuracy-badge">🎯 ${accuracy}% дәлдік</div>
        </div>
        <div class="level-grid">${cards}</div>
        <a href="leaderboard.html" class="lb-link">🏆 Рейтинг кестесі →</a>
      </div>`;

    this._bindTopBar();
    root.querySelectorAll('.level-card:not(.locked)').forEach(card => {
      card.addEventListener('click', () => {
        Audio.play('correct');
        const id = parseInt(card.dataset.level);
        this.startLevel(LEVELS.find(l => l.id === id));
      });
    });
  },

  startLevel(level) {
    this.currentLevel  = level;
    this.currentQIdx   = 0;
    this.wrongCount    = 0;
    this.fastCount     = 0;
    this.combo         = 0;
    this.startTime     = Date.now();
    this.shuffledQuestions = [...level.questions].sort(() => Math.random() - 0.5);
    this.showQuestion();
  },

  showQuestion() {
    const { currentLevel, currentQIdx, shuffledQuestions, combo } = this;
    const q     = shuffledQuestions[currentQIdx];
    const total = shuffledQuestions.length;
    const root  = document.getElementById('app');
    const prog  = Math.round((currentQIdx / total) * 100);

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}
        <div class="question-card">
          <div class="q-top-row">
            <span class="q-level-badge" style="color:${currentLevel.color}">${currentLevel.icon} ${currentLevel.name}</span>
            <span class="q-counter">${currentQIdx + 1} / ${total}</span>
            ${combo >= 2 ? `<span class="combo-badge">🔥 x${combo}</span>` : ''}
          </div>

          <div class="progress-track">
            <div class="progress-fill" style="width:${prog}%; background:${currentLevel.color}"></div>
          </div>

          <div class="timer-bar-wrap">
            <div class="timer-bar" id="timerBar" style="width:100%"></div>
          </div>

          <div class="question-text">${renderQ(q)}</div>

          <div class="answers-grid" id="answersGrid">
            ${q.answers.map((a, i) => `
              <button class="answer-btn" data-index="${i}">${a}</button>`).join('')}
          </div>

          <div class="timer-label" id="timerLabel">⏱ 15 сек</div>
        </div>
      </div>`;

    this._bindTopBar();
    this._startTimer();
    this.questionStartTime = Date.now();

    document.querySelectorAll('.answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectAnswer(parseInt(btn.dataset.index), q.correct);
      });
    });
  },

  selectAnswer(chosen, correct) {
    clearInterval(this.timerInterval);
    const elapsed   = (Date.now() - this.questionStartTime) / 1000;
    const isCorrect = chosen === correct;

    this.state.totalQuestions = (this.state.totalQuestions || 0) + 1;

    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct)                btn.classList.add('correct');
      else if (i === chosen && !isCorrect) btn.classList.add('wrong');
    });

    if (isCorrect) {
      this.combo++;
      this.state.totalCorrect = (this.state.totalCorrect || 0) + 1;
      const baseXP  = 10;
      const timeXP  = Math.round((15 - Math.min(elapsed, 15)) * 2);
      const comboXP = this.combo >= 3 ? Math.round(this.combo * 5) : 0;
      const xpGain  = baseXP + timeXP + comboXP;

      this.state.xp     += xpGain;
      this.state.coins  += 5 + (this.combo >= 3 ? this.combo : 0);
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
    }, 1000);
  },

  _flyXP(text, btnIdx) {
    const btns = document.querySelectorAll('.answer-btn');
    const ref  = btns[btnIdx] || btns[0];
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    const el   = document.createElement('div');
    el.textContent = text;
    el.style.cssText = `
      position:fixed; left:${rect.left + rect.width/2}px; top:${rect.top}px;
      font-size:1.1rem; font-weight:900; color:#fbbf24;
      pointer-events:none; z-index:9999;
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
    const bonus     = starCount * 20;
    const win       = correct >= Math.ceil(totalQ * 0.6);

    this.state.coins += bonus;
    this.state.levelsCompleted = Math.max(this.state.levelsCompleted, this.currentLevel.id);
    this.state.starsPerLevel[this.currentLevel.id] = Math.max(
      this.state.starsPerLevel[this.currentLevel.id] || 0, starCount
    );
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
          ${win ? (stars === 3 ? 'Тамаша! Мінсіз!' : 'Керемет!') : 'Тағы бір рет!'}
        </div>
        <div class="modal-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
        <div class="modal-stats-row">
          <div class="modal-stat"><span>${correct}/${total}</span><small>Дұрыс</small></div>
          <div class="modal-stat"><span>${accuracy}%</span><small>Дәлдік</small></div>
          <div class="modal-stat"><span>${timeSec}с</span><small>Уақыт</small></div>
          <div class="modal-stat"><span>+${bonus}</span><small>Монета</small></div>
        </div>
        <div class="modal-buttons">
          <button class="modal-btn secondary" id="btnHome">🏠 Басты</button>
          <button class="modal-btn primary"   id="btnNext">${win ? '▶ Келесі' : '🔁 Қайта'}</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));

    modal.querySelector('#btnHome').addEventListener('click', () => {
      modal.remove(); this.showLevelSelect();
    });
    modal.querySelector('#btnNext').addEventListener('click', () => {
      modal.remove();
      if (win) {
        const nextId = this.currentLevel.id + 1;
        const next   = LEVELS.find(l => l.id === nextId);
        if (next) this.startLevel(next); else this.showLevelSelect();
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
        bar.style.width = `${pct}%`;
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
      </div>`;
  },

  _bindTopBar() {},

  _updateTopBar() {
    const xpNeeded = 200;
    const xpPct    = Math.min((this.state.xp % xpNeeded) / xpNeeded * 100, 100).toFixed(1);
    const level    = Math.floor(this.state.xp / xpNeeded) + 1;
    const bar  = document.getElementById('xpBarFill');
    const lbl  = document.getElementById('xpLabel');
    const coin = document.getElementById('coinsDisplay');
    if (bar)  bar.style.width = xpPct + '%';
    if (lbl)  lbl.textContent = `Дең. ${level}`;
    if (coin) coin.textContent = `🪙 ${this.state.coins}`;
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

/* ===================== ЖІБЕРУ ===================== */
document.addEventListener('DOMContentLoaded', () => {
  Audio.init();
  App.showLevelSelect();
});
