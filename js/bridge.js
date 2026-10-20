/**
 * MathQuest — Қаратал Инженері (Bridge Physics Puzzle)
 * ====================================================
 * Нағыз 2D физикалық көпір салу ойыны:
 *  - Қаратал өзенінің үстінен көпір фермаларын құрастыру
 *  - Математикалық формулалар мен есептерді шешу арқылы көпірді нығайту
 *  - Көлікті (🚗 Жеңіл көлік, 🚌 Сары автобус, 🚚 Жүк көлігі) сынақтан өткізу
 *  - Дұрыс болса — көлік өтіп, жеңіс шашуы атылады
 *  - Қате болса — көпір сынып, көлік суға шалпылдап құлайды!
 */

const BRIDGE_LEVELS = [
  {
    id: 1,
    title: 'Орталық Өткел: Қосу мен Ұзындық',
    location: 'Орталық (Арбат маңы)',
    desc: 'Қаратал өзенінің орталық бөлігі. Өзен ені 12 метр. Бірінші тірек 5 метрде тұр. Екінші аралықтың ұзындығын тап!',
    formula: 'L_1 + x = 12,\\quad L_1 = 5,\\quad x = ?',
    correctValue: 7,
    unit: 'м',
    choices: [
      { val: 5, label: '5 метр (Қысқа)' },
      { val: 7, label: '7 метр (Дәл!)' },
      { val: 9, label: '9 метр (Артық)' },
      { val: 11, label: '11 метр' }
    ],
    vehicleType: 'car',
    difficulty: 'Бастауыш'
  },
  {
    id: 2,
    title: 'Самал Өткелі: Пифагор Фермасы',
    location: 'Самал (4-мкр)',
    desc: 'Көпірді ұстап тұратын тік бұрышты болат ферма. Бағана биіктігі a = 6м, табаны b = 8м. Гипотенуза фермасының ұзындығы қанша?',
    formula: 'a^2 + b^2 = c^2,\\quad 6^2 + 8^2 = c^2,\\quad c = ?',
    correctValue: 10,
    unit: 'м',
    choices: [
      { val: 9, label: '9 метр' },
      { val: 10, label: '10 метр (Пифагор)' },
      { val: 12, label: '12 метр' },
      { val: 14, label: '14 метр' }
    ],
    vehicleType: 'bus',
    difficulty: 'Орташа'
  },
  {
    id: 3,
    title: 'Мүшелтой Қақпасы: Алгебра & Салмақ Балансы',
    location: 'Мүшелтой (7-мкр)',
    desc: 'Талдықорғанның ауыр жүк көлігі өту үшін көпір тірегінің жүк көтергіштік теңдеуін шешіңіз: 3x + 10 = 40 кН.',
    formula: '3x + 10 = 40,\\quad 3x = 30,\\quad x = ?',
    correctValue: 10,
    unit: 'кН',
    choices: [
      { val: 8, label: '8 кН (Әлсіз)' },
      { val: 10, label: '10 кН (Тепе-теңдік)' },
      { val: 12, label: '12 кН' },
      { val: 15, label: '15 кН' }
    ],
    vehicleType: 'truck',
    difficulty: 'Алгебра'
  },
  {
    id: 4,
    title: 'Қаратал Аркасы: Шеңбер Радиусы & Диаметр',
    location: 'Қаратал (6-мкр)',
    desc: 'Қараталдың әсем аркалы көпірі! Арканың шеңбер радиусы r = 6 метр. Көпірдің негізгі өткел диаметрі (D = 2r) қанша?',
    formula: 'D = 2r,\\quad r = 6,\\quad D = ?',
    correctValue: 12,
    unit: 'м',
    choices: [
      { val: 10, label: '10 метр' },
      { val: 12, label: '12 метр (Диаметр)' },
      { val: 14, label: '14 метр' },
      { val: 18, label: '18 метр' }
    ],
    vehicleType: 'bus',
    difficulty: 'Геометрия'
  },
  {
    id: 5,
    title: 'Жастар Вантовый Көпірі: Тригонометрия',
    location: 'Жастар шағын ауданы',
    desc: 'Аспалы көпірдің тросы 30° бұрышпен тартылған. Тік көтеру күші: F = 20 × sin(30°). Тіреуіш күшін есептеңіз!',
    formula: 'F = 20 \\times \\sin(30^\\circ) = 20 \\times 0.5 = ?',
    correctValue: 10,
    unit: 'кН',
    choices: [
      { val: 5, label: '5 кН' },
      { val: 10, label: '10 кН (Тартылыс)' },
      { val: 15, label: '15 кН' },
      { val: 20, label: '20 кН' }
    ],
    vehicleType: 'car',
    difficulty: 'Тригонометрия'
  },
  {
    id: 6,
    title: 'Көктем: Рычаг & Моменттер Тепе-теңдігі',
    location: 'Көктем шағын ауданы',
    desc: 'Көпір тірегіндегі тепе-теңдік заңы: F_1 × d_1 = F_2 × d_2. Мұнда 30 × 2 = x × 6. Қарсы салмақты есептеңіз!',
    formula: '30 \\times 2 = x \\times 6,\\quad 60 = 6x,\\quad x = ?',
    correctValue: 10,
    unit: 'кН',
    choices: [
      { val: 8, label: '8 кН' },
      { val: 10, label: '10 кН (Баланс)' },
      { val: 12, label: '12 кН' },
      { val: 15, label: '15 кН' }
    ],
    vehicleType: 'truck',
    difficulty: 'Физика'
  },
  {
    id: 7,
    title: 'Шығыс Қақпасы: Түбір мен Тірек Тереңдігі',
    location: 'Шығыс (8-мкр)',
    desc: 'Өзен түбіндегі тірек тереңдігі: √x = 8 метр. Тіреуіш негізінің ауданы мен тереңдік параметрін (x) табыңыз!',
    formula: '\\sqrt{x} = 8,\\quad x = 8^2 = ?',
    correctValue: 64,
    unit: 'м²',
    choices: [
      { val: 48, label: '48 м²' },
      { val: 56, label: '56 м²' },
      { val: 64, label: '64 м² (Мықты негіз)' },
      { val: 72, label: '72 м²' }
    ],
    vehicleType: 'bus',
    difficulty: 'Жоғары'
  },
  {
    id: 8,
    title: 'Болашақ IT Көпірі: Тізбек Прогрессиясы',
    location: 'Болашақ IT Hub',
    desc: 'Заманауи көпір қабырғасы геометриялық прогрессиямен бекітілген: 2, 4, 8, 16, x. Соңғы тірек күші қанша?',
    formula: '2, 4, 8, 16, \\dots\\quad x = 16 \\times 2 = ?',
    correctValue: 32,
    unit: 'кН',
    choices: [
      { val: 24, label: '24 кН' },
      { val: 30, label: '30 кН' },
      { val: 32, label: '32 кН (Кибер Тірек)' },
      { val: 36, label: '36 кН' }
    ],
    vehicleType: 'car',
    difficulty: 'Логика'
  },
  {
    id: 9,
    title: 'Батыс Каньоны: Параболалық Аспалы Жол',
    location: 'Батыс / Хутор',
    desc: 'Каньон үстіндегі парабола: y = x² / 4. Қашықтық x = 6 болғанда, аспалы кабельдің биіктігі y қандай болады?',
    formula: 'y = \\frac{x^2}{4},\\quad x = 6,\\quad y = \\frac{36}{4} = ?',
    correctValue: 9,
    unit: 'м',
    choices: [
      { val: 8, label: '8 метр' },
      { val: 9, label: '9 метр (Парабола)' },
      { val: 12, label: '12 метр' },
      { val: 16, label: '16 метр' }
    ],
    vehicleType: 'truck',
    difficulty: 'Анализ'
  },
  {
    id: 10,
    title: 'Гранд Мастер: Талдықорған Алып Көпірі',
    location: 'Бас Өткел',
    desc: 'Экстремалды сынақ! Шек пен туындылар: lim_{x → 0} (sin(x) / x) = 1. Көпірдің максималды қауіпсіздік коэффициенті k = 100 × 1!',
    formula: 'k = 100 \\times \\lim_{x \\to 0} \\frac{\\sin x}{x} = 100 \\times 1 = ?',
    correctValue: 100,
    unit: '%',
    choices: [
      { val: 0, label: '0 % (Құлайды)' },
      { val: 50, label: '50 %' },
      { val: 100, label: '100 % (Гранд Мастер!)' },
      { val: 200, label: '200 %' }
    ],
    vehicleType: 'truck',
    difficulty: 'Гранд Мастер'
  }
];

/* ===================== КӨПІР ФИЗИКАСЫ МОДУЛІ ===================== */

const BridgeGame = {
  currentLevelIdx: 0,
  selectedValue: null,
  simState: 'idle', // 'idle', 'running', 'success', 'collapsed'
  canvas: null,
  ctx: null,
  animId: null,

  // Физикалық объектілер
  nodes: [],
  beams: [],
  vehicle: null,
  waterSplashParticles: [],
  fireworksParticles: [],

  // Көліктер параметрлері
  VEHICLES: {
    car:   { name: 'Жеңіл көлік', icon: '🚗', mass: 1.0, length: 50, height: 26, color: '#ef4444' },
    bus:   { name: 'Сары автобус', icon: '🚌', mass: 2.2, length: 75, height: 34, color: '#f59e0b' },
    truck: { name: 'Ауыр жүк көлігі', icon: '🚚', mass: 3.5, length: 90, height: 38, color: '#3b82f6' }
  },
  activeVehicleKey: 'car',

  init() {
    this.currentLevelIdx = 0;
    this.renderView();
  },

  getCurrentLevel() {
    return BRIDGE_LEVELS[this.currentLevelIdx];
  },

  renderView() {
    const root = document.getElementById('app');
    const lv = this.getCurrentLevel();
    this.selectedValue = this.selectedValue || lv.choices[0].val;
    this.activeVehicleKey = lv.vehicleType || 'car';

    root.innerHTML = `
      <div class="game-wrapper">
        ${App._topBar()}

        <div class="bridge-game-wrapper">
          <div class="bridge-header">
            <div class="bridge-title">
              🌉 Қаратал Инженері
            </div>

            <div class="mode-toggle-group">
              <button class="mode-btn" onclick="App.showTaldyMap()">🗺️ Карта</button>
              <button class="mode-btn active">🌉 Көпір</button>
              <button class="mode-btn" onclick="App.showRenovationStudio()">🛠️ Жөндеу</button>
            </div>

            <div class="bridge-level-nav">
              <button class="btn-bridge-nav" id="btnPrevBridge" ${this.currentLevelIdx === 0 ? 'disabled' : ''}>← Алдыңғы</button>
              <span style="font-weight:900; color:#fbbf24; font-size:0.9rem;">Деңгей ${lv.id} / ${BRIDGE_LEVELS.length}</span>
              <button class="btn-bridge-nav" id="btnNextBridge" ${this.currentLevelIdx === BRIDGE_LEVELS.length - 1 ? 'disabled' : ''}>Келесі →</button>
            </div>
          </div>

          <!-- Физикалық Канвас -->
          <div class="bridge-canvas-card">
            <canvas id="bridgeCanvas" width="840" height="420"></canvas>
          </div>

          <!-- Төменгі басқару және математикалық есептеу тақтасы -->
          <div class="bridge-dock-panel">
            <div class="bridge-math-box">
              <div class="math-task-header">
                <span class="math-task-title">${lv.title}</span>
                <span class="math-task-badge">${lv.difficulty}</span>
              </div>

              <div class="math-task-desc">${lv.desc}</div>

              <!-- KaTeX формуласы -->
              <div class="math-task-formula" id="bridgeFormulaArea"></div>

              <div style="font-size:0.82rem; font-weight:800; color:#38bdf8; margin-top:2px;">
                Дұрыс параметрді таңдап, көпірді нығайтыңыз:
              </div>

              <div class="bridge-choices-grid">
                ${lv.choices.map(c => `
                  <button class="bridge-choice-btn ${this.selectedValue === c.val ? 'active' : ''}" data-val="${c.val}">
                    ${c.label}
                  </button>`).join('')}
              </div>
            </div>

            <div class="bridge-action-card">
              <div>
                <div class="vehicle-selector-title">🚗 Сынақ Көлігі</div>
                <div class="vehicle-options-row" style="margin-top:0.4rem;">
                  <button class="btn-veh ${this.activeVehicleKey === 'car' ? 'active' : ''}" data-v="car" title="Жеңіл көлік">🚗</button>
                  <button class="btn-veh ${this.activeVehicleKey === 'bus' ? 'active' : ''}" data-v="bus" title="Сары автобус">🚌</button>
                  <button class="btn-veh ${this.activeVehicleKey === 'truck' ? 'active' : ''}" data-v="truck" title="Ауыр жүк машинасы">🚚</button>
                </div>
              </div>

              <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:auto;">
                <button class="btn-test-bridge" id="btnStartSim">
                  ▶ Көлікті Жіберу (Сынақ)
                </button>
                <button class="btn-reset-bridge" id="btnResetSim">
                  🔄 Көпірді Қайта Жөндеу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    App._bindTopBar();
    this._renderFormula();
    this._bindEvents();
    this._setupCanvas();
    this.resetSimulation();
  },

  _renderFormula() {
    const lv = this.getCurrentLevel();
    const area = document.getElementById('bridgeFormulaArea');
    if (area && typeof katex !== 'undefined') {
      try {
        area.innerHTML = katex.renderToString(lv.formula, { throwOnError: false, displayMode: true });
      } catch (e) {
        area.textContent = lv.formula;
      }
    }
  },

  _bindEvents() {
    document.getElementById('btnPrevBridge')?.addEventListener('click', () => {
      if (this.currentLevelIdx > 0) {
        this.currentLevelIdx--;
        this.selectedValue = null;
        this.renderView();
      }
    });

    document.getElementById('btnNextBridge')?.addEventListener('click', () => {
      if (this.currentLevelIdx < BRIDGE_LEVELS.length - 1) {
        this.currentLevelIdx++;
        this.selectedValue = null;
        this.renderView();
      }
    });

    document.querySelectorAll('.bridge-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedValue = parseFloat(btn.dataset.val);
        document.querySelectorAll('.bridge-choice-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Audio.play('step');
        this.resetSimulation();
      });
    });

    document.querySelectorAll('.btn-veh').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeVehicleKey = btn.dataset.v;
        document.querySelectorAll('.btn-veh').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        Audio.play('step');
        this.resetSimulation();
      });
    });

    document.getElementById('btnStartSim')?.addEventListener('click', () => {
      this.startSimulation();
    });

    document.getElementById('btnResetSim')?.addEventListener('click', () => {
      this.resetSimulation();
    });
  },

  _setupCanvas() {
    this.canvas = document.getElementById('bridgeCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
  },

  /* ===================== ФИЗИКАЛЫҚ ҚҰРЫЛЫМДЫ ҚҰРАСТЫРУ ===================== */

  resetSimulation() {
    if (this.animId) cancelAnimationFrame(this.animId);
    this.simState = 'idle';

    const btnStart = document.getElementById('btnStartSim');
    if (btnStart) {
      btnStart.disabled = false;
      btnStart.innerHTML = '▶ Көлікті Жіберу (Сынақ)';
    }

    const lv = this.getCurrentLevel();
    const isCorrect = this.selectedValue === lv.correctValue;

    // 1. Түйіндерді (Nodes) қалыптастыру
    // Сол жағалау: x: 140, Оң жағалау: x: 700. Өзен ені = 560px
    const leftX  = 150;
    const rightX = 690;
    const roadY  = 230;
    const segments = 6;
    const stepX = (rightX - leftX) / segments;

    this.nodes = [];
    this.beams = [];
    this.waterSplashParticles = [];
    this.fireworksParticles = [];

    // Төменгі жол түйіндері (Road Nodes)
    for (let i = 0; i <= segments; i++) {
      const isAnchor = (i === 0 || i === segments);
      this.nodes.push({
        id: `road_${i}`,
        x: leftX + i * stepX,
        y: roadY,
        oldX: leftX + i * stepX,
        oldY: roadY,
        pinned: isAnchor,
        isRoad: true
      });
    }

    // Үстіңгі ферма түйіндері (Truss Nodes)
    // Егер таңдалған мән дұрыс болса — толық күшті ферма болады.
    // Егер қате болса — ферма биіктігі қате немесе бір жағы жоқ болып, сынуға бейім тұрады!
    const trussY = isCorrect ? roadY - 75 : (this.selectedValue > lv.correctValue ? roadY - 20 : roadY - 110);
    for (let i = 1; i < segments; i++) {
      this.nodes.push({
        id: `truss_${i}`,
        x: leftX + i * stepX,
        y: trussY,
        oldX: leftX + i * stepX,
        oldY: trussY,
        pinned: false,
        isRoad: false
      });
    }

    // 2. Балкалар мен тіреуіштерді қосу (Springs / Constraints)
    // А) Жол балкалары
    for (let i = 0; i < segments; i++) {
      this._addBeam(this.nodes[i], this.nodes[i + 1], 'road');
    }

    // Б) Үстіңгі ферма балкалары
    const trussOffset = segments + 1;
    for (let i = 0; i < segments - 2; i++) {
      this._addBeam(this.nodes[trussOffset + i], this.nodes[trussOffset + i + 1], 'truss');
    }

    // В) Тік және қиғаш фермалар (Үшбұрыштар)
    for (let i = 1; i < segments; i++) {
      const roadNode  = this.nodes[i];
      const trussNode = this.nodes[trussOffset + i - 1];
      this._addBeam(roadNode, trussNode, 'vertical');

      // Қиғаш тіреуіш
      if (i > 1) {
        const prevRoadNode = this.nodes[i - 1];
        this._addBeam(prevRoadNode, trussNode, 'diagonal');
      }
      if (i < segments - 1) {
        const nextRoadNode = this.nodes[i + 1];
        this._addBeam(nextRoadNode, trussNode, 'diagonal');
      }
    }

    // Шеткі бекітпелер
    this._addBeam(this.nodes[0], this.nodes[trussOffset], 'diagonal');
    this._addBeam(this.nodes[segments], this.nodes[trussOffset + segments - 2], 'diagonal');

    // 3. Көлікті бастапқы нүктеге орнату (Сол жағалауда)
    const vehConfig = this.VEHICLES[this.activeVehicleKey];
    this.vehicle = {
      x: 30,
      y: roadY - vehConfig.height,
      vx: 0,
      vy: 0,
      width: vehConfig.length,
      height: vehConfig.height,
      mass: vehConfig.mass,
      color: vehConfig.color,
      icon: vehConfig.icon,
      isFallen: false,
      hasWon: false
    };

    this._drawFrame();
  },

  _addBeam(n1, n2, type) {
    if (!n1 || !n2) return;
    const dx = n2.x - n1.x;
    const dy = n2.y - n1.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    this.beams.push({
      n1, n2,
      restLength: len,
      type,
      broken: false,
      stress: 0
    });
  },

  startSimulation() {
    if (this.simState === 'running') return;
    this.simState = 'running';

    const btnStart = document.getElementById('btnStartSim');
    if (btnStart) {
      btnStart.disabled = true;
      btnStart.innerHTML = '⏳ Сынақ Жүріп Жүр...';
    }

    Audio.play('step');
    this._loop();
  },

  _loop() {
    this._updatePhysics();
    this._drawFrame();

    if (this.simState === 'running') {
      this.animId = requestAnimationFrame(() => this._loop());
    }
  },

  /* ===================== ФИЗИКА СИМУЛЯЦИЯСЫ ===================== */

  _updatePhysics() {
    const gravity = 0.28;
    const waterY  = 330;
    const lv      = this.getCurrentLevel();
    const isMathCorrect = (this.selectedValue === lv.correctValue);

    // 1. Көлікті қозғалту (Жылдамдату)
    if (!this.vehicle.isFallen && !this.vehicle.hasWon) {
      this.vehicle.vx += 0.08;
      this.vehicle.vx = Math.min(this.vehicle.vx, 3.2);
      this.vehicle.x += this.vehicle.vx;

      // Көлік көпірде жүріп келе жатқанда жақын жол түйіндеріне салмақ түсіреді
      let onBridge = false;
      for (let i = 0; i < this.nodes.length; i++) {
        const n = this.nodes[i];
        if (n.isRoad) {
          const dist = Math.abs(n.x - (this.vehicle.x + this.vehicle.width / 2));
          if (dist < 45) {
            onBridge = true;
            // Салмақ түсіру (көліктің салмағы мен таңдалған дұрыстығына қарай)
            const force = this.vehicle.mass * 2.8 * (1 - dist / 45);
            n.y += force;

            // Егер математикалық есеп қате болса — көпір көтере алмайды!
            if (!isMathCorrect && this.vehicle.x > 300) {
              n.y += force * 2.5; // Салмақ шектен асады
            }
          }
        }
      }

      // Көліктің Y координатасын көпірге бейімдеу
      if (onBridge) {
        // Көлік астындағы жол биіктігін есептеу
        const leftNode = this.nodes.find(n => n.isRoad && n.x <= this.vehicle.x + this.vehicle.width / 2);
        const rightNode = this.nodes.find(n => n.isRoad && n.x > this.vehicle.x + this.vehicle.width / 2);
        if (leftNode && rightNode) {
          const ratio = (this.vehicle.x + this.vehicle.width / 2 - leftNode.x) / (rightNode.x - leftNode.x);
          const currentRoadY = leftNode.y + ratio * (rightNode.y - leftNode.y);
          this.vehicle.y = currentRoadY - this.vehicle.height;
        }
      }

      // 2. Егер есеп қате болса және көлік ортаға жетсе — БАЛКАЛАРДЫ СЫНДЫРУ!
      if (!isMathCorrect && this.vehicle.x > 340) {
        this.beams.forEach(b => {
          if (b.type === 'vertical' || b.type === 'diagonal') {
            if (!b.broken) {
              b.broken = true;
              Audio.play('wrong');
            }
          }
        });
      }

      // 3. Көлік өзенге құлады ма?
      if (this.vehicle.y > waterY - 30) {
        this.vehicle.isFallen = true;
        this.vehicle.vx *= 0.3;
        this.vehicle.vy = 2;
        Audio.play('wrong');
        this._spawnSplash(this.vehicle.x + this.vehicle.width / 2, waterY);
        this._handleFailure();
      }

      // 4. Көлік оң жағалауға жетті ме? (ЖЕҢІС!)
      if (this.vehicle.x > 700) {
        this.vehicle.hasWon = true;
        this.simState = 'success';
        Audio.play('win');
        this._spawnFireworks(740, 200);
        this._handleSuccess();
      }
    } else if (this.vehicle.isFallen) {
      // Суда батып бара жатқан көлік
      this.vehicle.y += this.vehicle.vy;
      this.vehicle.vy = Math.min(this.vehicle.vy + 0.1, 2.5);
    }

    // 5. Түйіндерді Verlet интеграциясымен жаңарту
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      if (n.pinned) continue;

      const vx = (n.x - n.oldX) * 0.98;
      const vy = (n.y - n.oldY) * 0.98 + gravity;

      n.oldX = n.x;
      n.oldY = n.y;
      n.x += vx;
      n.y += vy;

      // Су астына құлау шегі
      if (n.y > waterY + 40) {
        n.y = waterY + 40;
      }
    }

    // 6. Балкалардың серпімділігін (Spring Relaxation) 6 қайтара реттеу
    for (let iter = 0; iter < 6; iter++) {
      for (let i = 0; i < this.beams.length; i++) {
        const b = this.beams[i];
        if (b.broken) continue;

        const dx = b.n2.x - b.n1.x;
        const dy = b.n2.y - b.n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist === 0) continue;

        const diff = (dist - b.restLength) / dist;
        b.stress = Math.abs(dist - b.restLength) / b.restLength;

        // Сындыру шегі
        if (b.stress > 0.45 && !isMathCorrect) {
          b.broken = true;
          Audio.play('wrong');
          continue;
        }

        const offsetX = dx * diff * 0.5;
        const offsetY = dy * diff * 0.5;

        if (!b.n1.pinned) {
          b.n1.x += offsetX;
          b.n1.y += offsetY;
        }
        if (!b.n2.pinned) {
          b.n2.x -= offsetX;
          b.n2.y -= offsetY;
        }
      }
    }

    // Бөлшектерді жаңарту
    this._updateParticles();
  },

  _spawnSplash(x, y) {
    for (let i = 0; i < 35; i++) {
      this.waterSplashParticles.push({
        x: x + (Math.random() - 0.5) * 30,
        y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: -3 - Math.random() * 5,
        radius: 2 + Math.random() * 4,
        color: '#38bdf8',
        life: 1.0
      });
    }
  },

  _spawnFireworks(x, y) {
    const colors = ['#fbbf24', '#ec4899', '#10b981', '#38bdf8', '#ffffff'];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      this.fireworksParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0
      });
    }
  },

  _updateParticles() {
    for (let i = this.waterSplashParticles.length - 1; i >= 0; i--) {
      const p = this.waterSplashParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2;
      p.life -= 0.025;
      if (p.life <= 0) this.waterSplashParticles.splice(i, 1);
    }

    for (let i = this.fireworksParticles.length - 1; i >= 0; i--) {
      const p = this.fireworksParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.life -= 0.02;
      if (p.life <= 0) this.fireworksParticles.splice(i, 1);
    }
  },

  _handleSuccess() {
    this.simState = 'success';
    const lv = this.getCurrentLevel();

    // Жұлдыздар мен монета сыйлығы
    App.state.coins = (App.state.coins || 0) + 30;
    if (!App.state.starsPerLevel) App.state.starsPerLevel = {};
    App.state.starsPerLevel[`bridge_${lv.id}`] = 3;
    App.state.xp = (App.state.xp || 0) + 50;
    saveState(App.state);
    App._updateTopBar();

    setTimeout(() => {
      this._showSuccessModal();
    }, 1200);
  },

  _handleFailure() {
    this.simState = 'collapsed';
    setTimeout(() => {
      this._showFailureModal();
    }, 1200);
  },

  _showSuccessModal() {
    const lv = this.getCurrentLevel();
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-emoji">🌉🏆</div>
        <div class="modal-title" style="color:#10b981;">
          Керемет! Көпір Салынды!
        </div>
        <div class="modal-stars">⭐⭐⭐</div>
        <div style="font-size:0.95rem; color:rgba(255,255,255,0.85); line-height:1.6; margin:0.8rem 0;">
          Сіздің математикалық есебіңіз <strong>${lv.correctValue} ${lv.unit}</strong> дәл шықты!<br>
          Көлік Қаратал өзенінен сәтті өтті. Талдықорған халқы риза!
        </div>
        <div class="modal-stats-row">
          <div class="modal-stat"><span>+30</span><small>Монета</small></div>
          <div class="modal-stat"><span>+50</span><small>XP</small></div>
          <div class="modal-stat"><span>+1 ⭐</span><small>Жөндеуге</small></div>
        </div>
        <div class="modal-buttons">
          <button class="modal-btn secondary" onclick="document.querySelector('.modal-overlay').remove(); BridgeGame.resetSimulation();">🔄 Қайта көру</button>
          <button class="modal-btn primary" id="btnNextLvBridge">
            ${this.currentLevelIdx < BRIDGE_LEVELS.length - 1 ? '▶ Келесі деңгей' : '🗺️ Картаға оралу'}
          </button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));

    modal.querySelector('#btnNextLvBridge')?.addEventListener('click', () => {
      modal.remove();
      if (this.currentLevelIdx < BRIDGE_LEVELS.length - 1) {
        this.currentLevelIdx++;
        this.selectedValue = null;
        this.renderView();
      } else {
        App.showTaldyMap();
      }
    });
  },

  _showFailureModal() {
    const lv = this.getCurrentLevel();
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal">
        <div class="modal-emoji">🌊🚗💥</div>
        <div class="modal-title" style="color:#ef4444;">
          Ойбай! Көпір Сынып Кетті!
        </div>
        <div style="font-size:0.92rem; color:rgba(255,255,255,0.85); line-height:1.6; margin:0.8rem 0;">
          Таңдалған мән: <strong>${this.selectedValue} ${lv.unit}</strong> көпірдің салмағын көтере алмады.<br>
          Көлік Қаратал өзеніне құлады! Формуланы қайта тексеріп көріңіз.
        </div>
        <div class="modal-buttons">
          <button class="modal-btn primary" onclick="document.querySelector('.modal-overlay').remove(); BridgeGame.resetSimulation();">
            🔁 Қайта Есептеп Жөндеу
          </button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
  },

  /* ===================== КАНВАС БЕЙНЕЛЕУ (CANVAS 2D) ===================== */

  _drawFrame() {
    const { ctx, canvas } = this;
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Аспан және Алатау тауларының фоны
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 300);
    skyGrad.addColorStop(0, '#090820');
    skyGrad.addColorStop(1, '#0e2348');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Таулар сұлбасы (Талдықорған Алатауы)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.beginPath();
    ctx.moveTo(0, 240);
    ctx.lineTo(120, 140);
    ctx.lineTo(260, 240);
    ctx.lineTo(440, 110);
    ctx.lineTo(600, 240);
    ctx.lineTo(760, 130);
    ctx.lineTo(840, 240);
    ctx.lineTo(840, 420);
    ctx.lineTo(0, 420);
    ctx.fill();

    // 2. Қаратал өзені (Төменгі су)
    const waterY = 320;
    const waterGrad = ctx.createLinearGradient(0, waterY, 0, canvas.height);
    waterGrad.addColorStop(0, '#0284c7');
    waterGrad.addColorStop(0.5, '#0369a1');
    waterGrad.addColorStop(1, '#082f49');
    ctx.fillStyle = waterGrad;
    ctx.fillRect(0, waterY, canvas.width, canvas.height - waterY);

    // Толқындар сызығы
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const time = Date.now() * 0.003;
    for (let x = 0; x <= canvas.width; x += 20) {
      const y = waterY + Math.sin(x * 0.03 + time) * 4;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 3. Сол және оң жағалаудың жартастары (Cliffs / Banks)
    // Сол жағалау
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(0, 230);
    ctx.lineTo(150, 230);
    ctx.lineTo(170, 360);
    ctx.lineTo(0, 360);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, 230);
    ctx.lineTo(150, 230);
    ctx.stroke();

    // Оң жағалау (Finish)
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(690, 230);
    ctx.lineTo(840, 230);
    ctx.lineTo(840, 360);
    ctx.lineTo(670, 360);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(690, 230);
    ctx.lineTo(840, 230);
    ctx.stroke();

    // Мәре жалауы (Finish Flag)
    ctx.font = '28px sans-serif';
    ctx.fillText('🏁', 740, 220);

    // 4. Көпір фермалары мен балкаларын салу (Beams)
    for (let i = 0; i < this.beams.length; i++) {
      const b = this.beams[i];
      if (b.broken) continue;

      // Түсі кернеуге (stress) қарай өзгереді: Жасыл -> Сары -> Қызыл
      let strokeColor = '#10b981';
      if (b.stress > 0.18) strokeColor = '#ef4444';
      else if (b.stress > 0.08) strokeColor = '#f59e0b';

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = (b.type === 'road') ? 7 : 3.5;
      ctx.lineCap = 'round';

      ctx.beginPath();
      ctx.moveTo(b.n1.x, b.n1.y);
      ctx.lineTo(b.n2.x, b.n2.y);
      ctx.stroke();
    }

    // 5. Көпір түйіндерін салу (Nodes)
    for (let i = 0; i < this.nodes.length; i++) {
      const n = this.nodes[i];
      ctx.fillStyle = n.pinned ? '#fbbf24' : '#ffffff';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.pinned ? 6 : 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // 6. Көлікті салу (Vehicle)
    if (this.vehicle) {
      const v = this.vehicle;
      ctx.save();
      ctx.translate(v.x, v.y);

      // Көлік корпусы (Emoji немесе стилді сурет)
      ctx.font = `${v.height}px sans-serif`;
      ctx.fillText(v.icon, 0, v.height - 4);

      ctx.restore();
    }

    // 7. Су шашырауы (Splash Particles)
    for (let i = 0; i < this.waterSplashParticles.length; i++) {
      const p = this.waterSplashParticles[i];
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    // 8. Жеңіс шашуы (Fireworks Particles)
    for (let i = 0; i < this.fireworksParticles.length; i++) {
      const p = this.fireworksParticles[i];
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }
  }
};
