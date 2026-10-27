/**
 * MathQuest — v4.0 Инновациялық Модульдер (Инвесторлық Релиз)
 * ============================================================
 * Қосылған жаңа мүмкіндіктер:
 *  1. 🤖 «Әл-Фараби AI-Тьюторы» — әр есепті қадам-қадаммен (KaTeX) түсіндіріп беретін ақылды көмекші
 *  2. 🏇 «Жетісу Бәйгесі» — Талдықорған ипподромында AI қарсыластармен нақты уақыттағы математикалық жарыс
 *  3. 🛍️ «Батыр Дүкені» — жиналған монеталарға картадағы аватарларды және бустерлерді сатып алу (Ішкі экономика)
 *  4. 📊 «Білім Диагностикасы & Атаулы Сертификат» — оқушының қабілетін талдау және ресми сертификат беру
 *  5. 💼 «Инвестор Демо-Режимі» — презентация кезінде 1 батырмамен барлық деңгейлер мен ресурстарды ашу
 */

/* ===================== 1. БАТЫР ДҮКЕНІ (AVATARS & SHOP) ===================== */

const AVATAR_SHOP_ITEMS = [
  { id: 'default', name: 'Жас Математик',       icon: '🚶‍♂️', price: 0,   desc: 'Талдықорғанның ізденімпаз жас зерттеушісі' },
  { id: 'rider',   name: 'Жетісу Шабандозы',    icon: '🏇', price: 100, desc: 'Бәйге бермейтін жылдам есепші шабандоз' },
  { id: 'cosmo',   name: 'Ғарышкер-Инженер',    icon: '🧑‍🚀', price: 200, desc: '1-мкр Ғарышкер ауданының мақтанышы' },
  { id: 'sage',    name: 'Әл-Фараби Шәкірті',   icon: '🧙‍♂️', price: 350, desc: 'Алгебра мен геометрияның терең білгірі' },
  { id: 'cyber',   name: 'Кибер-Квант Батыры',  icon: '🤖', price: 500, desc: 'Болашақ IT Hub-тан шыққан жасанды интеллект' },
  { id: 'sultan',  name: 'Талдықорған Сұлтаны', icon: '👑', price: 800, desc: '10 шағын ауданды түгел бағындырған аңыз' },
];

const BOOSTER_SHOP_ITEMS = [
  { id: 'fiftyFifty', name: '💡 50:50 Бустері (+3 дана)', price: 60, desc: 'Екі қате жауапты бірден өшіреді' },
  { id: 'freezeTime', name: '⏳ +15с Уақыт (+3 дана)',    price: 60, desc: 'Ойлануға қосымша 15 секунд қосады' },
  { id: 'doubleXP',   name: '⚡ 2x Множитель (+3 дана)',  price: 80, desc: 'Ұпай мен монетаны екі еселейді' },
];

/* ===================== 2. AI-ТЬЮТОР (ҚАДАМДЫҚ ТҮСІНДІРУШІ) ===================== */

const AITutor = {
  explainQuestion(q, levelName) {
    // Оқушы түсіндірмені оқып жатқанда таймерді уақытша тоқтата тұру
    if (App.timerInterval) {
      clearInterval(App.timerInterval);
    }

    const text = q.q || '';
    const correctAns = q.answers[q.correct];
    let step1 = 'Есептің шартын мұқият оқып, белгілі мәндерді анықтаймыз.';
    let step2 = `Берілген өрнек: ${q.tex ? renderKaTeX(q.tex) : text}`;
    let step3 = 'Амалдарды ретімен орындап, дұрыс мәнді табамыз.';

    if (text.includes('√') || (q.tex && q.tex.includes('\\sqrt'))) {
      step1 = `Квадрат түбір ${renderKaTeX('\\sqrt{a} = b')} дегеніміз — өзіне-өзін көбейткенде (${renderKaTeX('b \\times b = a')}) түбір астындағы сан шығатын оң сан.`;
      step2 = `Қандай санды өзіне көбейтсек, берілген сан шығатынын тексереміз: ${renderKaTeX(`${correctAns} \\times ${correctAns}`)}.`;
      step3 = `Демек, түбірдің мәні дәл <strong>${correctAns}</strong> санына тең!`;
    } else if (text.includes('x') || text.includes('=')) {
      step1 = 'Теңдеуді шешу үшін белгісіз айнымалыны бір жаққа, бос сандарды екінші жаққа таңбасын өзгертіп шығарамыз.';
      step2 = `Теңдеудің екі жағын да белгісіздің алдындағы коэффициентке бөлеміз (немесе түбір аламыз).`;
      step3 = `Тексеру: егер <strong>${correctAns}</strong> мәнін бастапқы теңдеуге қойсақ, теңдік дәл орындалады!`;
    } else if (text.includes('sin') || text.includes('cos') || text.includes('tan')) {
      step1 = 'Тригонометриялық кестедегі негізгі бұрыштардың (0°, 30°, 45°, 60°, 90°) мәндерін немесе негізгі тепе-теңдікті қолданамыз.';
      step2 = `Негізгі формулалар: ${renderKaTeX('\\sin^2 x + \\cos^2 x = 1')}, ${renderKaTeX('\\sin 30^\\circ = 0.5')}, ${renderKaTeX('\\tan 45^\\circ = 1')}.`;
      step3 = `Осы ереже бойынша дұрыс мән: <strong>${correctAns}</strong>.`;
    } else if (text.includes('ауданы') || text.includes('периметрі') || text.includes('үшбұрыш') || text.includes('көлемі') || text.includes('диагоналы') || text.includes('Гипотенуза') || text.includes('катет')) {
      step1 = `Геометриялық фигураның негізгі формуласын қолданамыз (Шеңбер: ${renderKaTeX('S=\\pi r^2')}, Пифагор: ${renderKaTeX('a^2+b^2=c^2')}, Квадрат: ${renderKaTeX('P=4a')}).`;
      step2 = 'Есепте берілген радиус немесе қабырға ұзындығын формулаға орнына қоямыз.';
      step3 = `Есептеу нәтижесінде шығатын жауап: <strong>${correctAns}</strong>.`;
    } else if (text.includes('ықтималдығы') || text.includes('ықт.') || text.includes('P(') || text.includes('монета') || text.includes('кубик') || text.includes('шар')) {
      step1 = `Классикалық ықтималдық формуласы: ${renderKaTeX('P(A) = \\frac{m}{n}')}, мұндағы m — қолайлы жағдайлар саны, n — барлық мүмкін жағдайлар саны.`;
      step2 = `Бөлшекті қысқартамыз немесе толық ықтималдықтың қосындысы 1-ге тең екенін (${renderKaTeX('P(\\bar{A}) = 1 - P(A)')}) ескереміз.`;
      step3 = `Сондықтан дұрыс ықтималдық мәні: <strong>${correctAns}</strong>.`;
    } else if (text.includes('орташа') || text.includes('медиана') || text.includes('мода') || text.includes('Дисперсия') || text.includes('ауытқу') || text.includes('жиілігі')) {
      step1 = 'Статистикалық ереже: Орташа мән — қосындыны сандар санына бөлу; Медиана — реттелген қатардың дәл ортасы; Мода — ең жиі қайталанатын сан.';
      step2 = 'Сандар қатарын мұқият санап, сәйкес статистикалық көрсеткішті табамыз.';
      step3 = `Нәтижесі: <strong>${correctAns}</strong>.`;
    } else if (text.includes('∫') || text.includes('d/dx') || text.includes('lim') || text.includes('ln')) {
      step1 = 'Жоғары математикалық анализдің базалық кестелік формуласын қолданамыз.';
      step2 = `Туынды мен интеграл ережелері бойынша өрнекті ықшамдаймыз.`;
      step3 = `Дәл шешімі: <strong>${correctAns}</strong>.`;
    } else {
      step1 = 'Арифметикалық амалдар ретін қолданамыз: алдымен дәреже, сосын көбейту/бөлу, соңында қосу/азайту.';
      step2 = `Берілген сандармен есептеу жүргіземіз: ${q.tex ? renderKaTeX(q.tex) : text}`;
      step3 = `Дұрыс жауабы: <strong>${correctAns}</strong>.`;
    }

    const modal = document.createElement('div');
    modal.className = 'reno-picker-overlay';
    modal.innerHTML = `
      <div class="reno-picker-modal" style="max-width:560px; border-color:#38bdf8;">
        <div style="display:flex; align-items:center; gap:0.8rem; width:100%;">
          <div style="font-size:2.6rem; background:rgba(56,189,248,0.15); border:1px solid #38bdf8; border-radius:16px; width:58px; height:58px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            🧙‍♂️
          </div>
          <div style="text-align:left;">
            <div style="font-size:1.2rem; font-weight:900; color:#38bdf8;">Әл-Фараби AI-Тьюторы</div>
            <div style="font-size:0.8rem; color:rgba(255,255,255,0.65);">Жеке бейімделген қадамдық түсіндіру жүйесі • ${levelName || 'Математика'}</div>
          </div>
        </div>

        <div style="width:100%; background:rgba(0,0,0,0.35); border:1px solid rgba(255,255,255,0.12); border-radius:16px; padding:1rem; text-align:left; display:flex; flex-direction:column; gap:0.75rem;">
          <div style="font-size:0.9rem; line-height:1.55; color:#e2e8f0;">
            <span style="color:#fbbf24; font-weight:900;">1-ҚАДАМ (Ереже):</span> ${step1}
          </div>
          <div style="font-size:0.9rem; line-height:1.55; color:#e2e8f0;">
            <span style="color:#38bdf8; font-weight:900;">2-ҚАДАМ (Талдау):</span> ${step2}
          </div>
          <div style="font-size:0.94rem; line-height:1.55; color:#34d399; background:rgba(16,185,129,0.12); padding:0.65rem 0.85rem; border-radius:10px; border:1px solid rgba(16,185,129,0.35);">
            <span style="font-weight:900;">💡 ҚОРЫТЫНДЫ БАҒЫТ:</span> ${step3}
          </div>
        </div>

        <button class="modal-btn primary" id="btnCloseAITutor" style="width:100%;">
          Түсіндім! Есепті жалғастыру 🚀
        </button>
      </div>`;

    document.body.appendChild(modal);
    Audio.play('unlock');
    modal.querySelector('#btnCloseAITutor').addEventListener('click', () => {
      modal.remove();
      // Таймерді жалғастыру
      if (App.currentLevel) {
        App._resumeTimerAfterPause();
      }
    });
  }
};

/* ===================== 3. «ЖЕТІСУ БӘЙГЕСІ» (AI RACE DUEL) ===================== */

const BaigeGame = {
  playerPos: 5,
  bot1Pos: 5,
  bot2Pos: 5,
  raceInterval: null,
  currentQ: null,
  isRacing: false,
  questionsPool: [],

  init() {
    App.state.viewMode = 'baige';
    saveState(App.state);
    this.playerPos = 5;
    this.bot1Pos   = 5;
    this.bot2Pos   = 5;
    this.isRacing  = false;
    if (this.raceInterval) clearInterval(this.raceInterval);

    this.questionsPool = [];
    LEVELS.forEach(lv => {
      lv.questions.forEach(q => this.questionsPool.push({ ...q, lvName: lv.name }));
    });
    this.questionsPool.sort(() => Math.random() - 0.5);

    this.render();
  },

  render() {
    const root = document.getElementById('app');
    const avatarIcon = App.getEquippedAvatarIcon();

    root.innerHTML = `
      <div class="game-wrapper">
        ${App._topBar()}

        <div class="taldy-map-wrapper">
          <div class="map-header">
            <div class="map-title-wrap">
              <span class="map-title">🏇 Жетісу Бәйгесі (AI Ипподром)</span>
              <span class="map-city-badge">Талдықорған Атшабары</span>
            </div>
            <div class="mode-toggle-group">
              <button class="mode-btn" onclick="App.showTaldyMap()">🗺️ Карта</button>
              <button class="mode-btn" onclick="App.openBridgeMode()">🌉 Көпір</button>
              <button class="mode-btn active">🏇 Бәйге</button>
              <button class="mode-btn" onclick="App.showShop()">🛍️ Дүкен</button>
              <button class="mode-btn" onclick="App.showAnalyticsAndCert()">📊 Сертификат</button>
            </div>
          </div>

          <!-- Ипподром жолақтары -->
          <div class="baige-track-card">
            <div class="baige-lane">
              <div class="lane-label">1. СІЗ (${avatarIcon} Құлагер)</div>
              <div class="lane-road">
                <div class="racer-icon player-racer" id="racerPlayer" style="left:${this.playerPos}%">🏇</div>
                <div class="finish-line">🏁</div>
              </div>
            </div>

            <div class="baige-lane">
              <div class="lane-label">2. 🤖 Алгебра Тұлпары (AI)</div>
              <div class="lane-road">
                <div class="racer-icon" id="racerBot1" style="left:${this.bot1Pos}%">🐎</div>
                <div class="finish-line">🏁</div>
              </div>
            </div>

            <div class="baige-lane">
              <div class="lane-label">3. 🤖 Логика Сұңқары (AI)</div>
              <div class="lane-road">
                <div class="racer-icon" id="racerBot2" style="left:${this.bot2Pos}%">🦄</div>
                <div class="finish-line">🏁</div>
              </div>
            </div>
          </div>

          <!-- Бәйге сұрақ аймағы -->
          <div class="question-card" id="baigeQuizBox" style="max-width:100%;">
            <div style="text-align:center; padding:1rem;">
              <div style="font-size:2.8rem; margin-bottom:0.5rem;">🏇🔥</div>
              <h3 style="font-size:1.3rem; font-weight:900; color:#fbbf24;">Талдықорған Ипподромындағы Математикалық Бәйге!</h3>
              <p style="color:rgba(255,255,255,0.75); font-size:0.92rem; margin:0.6rem auto 1.2rem; max-width:540px;">
                Есептерді AI боттардан жылдам шешіп, тұлпарыңызға <strong>Қамшы-Турбо</strong> беріңіз! Мәреге бірінші жеткен жеңімпазға <strong>+60 🪙 Монета</strong> және <strong>+100 XP</strong> беріледі!
              </p>
              <button class="btn-open-quest" id="btnStartBaige" style="max-width:320px; margin:0 auto;">
                🐎 Бәйгені Бастау!
              </button>
            </div>
          </div>
        </div>
      </div>`;

    App._bindTopBar();
    document.getElementById('btnStartBaige')?.addEventListener('click', () => {
      this.startRace();
    });
  },

  startRace() {
    this.isRacing  = true;
    this.playerPos = 5;
    this.bot1Pos   = 5;
    this.bot2Pos   = 5;
    Audio.play('unlock');

    this.raceInterval = setInterval(() => {
      if (!this.isRacing) return;
      this.bot1Pos = Math.min(92, this.bot1Pos + 0.65 + Math.random() * 0.5);
      this.bot2Pos = Math.min(92, this.bot2Pos + 0.55 + Math.random() * 0.65);

      const b1 = document.getElementById('racerBot1');
      const b2 = document.getElementById('racerBot2');
      if (b1) b1.style.left = `${this.bot1Pos}%`;
      if (b2) b2.style.left = `${this.bot2Pos}%`;

      if (this.bot1Pos >= 90 || this.bot2Pos >= 90) {
        this.endRace(false);
      }
    }, 250);

    this.nextRaceQuestion();
  },

  nextRaceQuestion() {
    if (!this.isRacing) return;
    const q = this.questionsPool.pop() || LEVELS[0].questions[0];
    this.currentQ = q;

    const box = document.getElementById('baigeQuizBox');
    if (!box) return;

    box.innerHTML = `
      <div class="q-top-row">
        <span class="q-level-badge" style="color:#fbbf24;">🏇 Жетісу Бәйгесі • ${q.lvName || 'Жылдамдық'}</span>
        <span class="q-counter">Мәреге дейін: ${Math.max(0, Math.round(90 - this.playerPos))}%</span>
      </div>
      <div class="question-text">${renderQ(q)}</div>
      <div class="answers-grid">
        ${q.answers.map((a, i) => `
          <button class="answer-btn baige-ans-btn" data-idx="${i}">${a}</button>`).join('')}
      </div>`;

    box.querySelectorAll('.baige-ans-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = parseInt(btn.dataset.idx);
        if (chosen === q.correct) {
          Audio.play('combo');
          this.playerPos = Math.min(92, this.playerPos + 18);
          const pEl = document.getElementById('racerPlayer');
          if (pEl) pEl.style.left = `${this.playerPos}%`;

          if (this.playerPos >= 90) {
            this.endRace(true);
          } else {
            this.nextRaceQuestion();
          }
        } else {
          Audio.play('wrong');
          btn.classList.add('wrong');
          btn.disabled = true;
        }
      });
    });
  },

  endRace(playerWon) {
    this.isRacing = false;
    if (this.raceInterval) clearInterval(this.raceInterval);

    if (playerWon) {
      Audio.play('win');
      launchConfetti();
      App.state.coins = (App.state.coins || 0) + 60;
      App.state.xp    = (App.state.xp || 0) + 100;
      App.state.baigeWins = (App.state.baigeWins || 0) + 1;
      saveState(App.state);
      App._updateTopBar();
    } else {
      Audio.play('wrong');
    }

    const box = document.getElementById('baigeQuizBox');
    if (box) {
      box.innerHTML = `
        <div style="text-align:center; padding:1.2rem;">
          <div style="font-size:3rem;">${playerWon ? '🏆🏇🎉' : '🐎💨'}</div>
          <h3 style="font-size:1.4rem; font-weight:900; color:${playerWon ? '#fbbf24' : '#f87171'}; margin-top:0.4rem;">
            ${playerWon ? 'Жарайсың! Тұлпарың Бәйгеде Бірінші Келді!' : 'AI Тұлпары сәл озып кетті!'}
          </h3>
          <p style="color:rgba(255,255,255,0.8); margin:0.6rem 0 1.2rem;">
            ${playerWon ? 'Сыйлық: +60 🪙 Монета және +100 XP қосылды!' : 'Тағы бір рет шауып, жеңісті жұлып алыңыз!'}
          </p>
          <div style="display:flex; gap:0.8rem; justify-content:center; flex-wrap:wrap;">
            <button class="modal-btn secondary" onclick="App.showTaldyMap()">🗺️ Картаға оралу</button>
            <button class="modal-btn primary" onclick="BaigeGame.init()">🔁 Қайта шабу</button>
          </div>
        </div>`;
    }
  }
};

/* ===================== 4. APP КЕҢЕЙТІЛІМІ (ДҮКЕН, СЕРТИФИКАТ, ИНВЕСТОР ДЕМО) ===================== */

(function extendAppForInvestors() {
  if (typeof App === 'undefined') return;

  // Ойыншының таңдаған аватарының белгішесін қайтару
  App.getEquippedAvatarIcon = function() {
    const eqId = this.state.equippedAvatar || 'default';
    const found = AVATAR_SHOP_ITEMS.find(a => a.id === eqId);
    return found ? found.icon : '🚶‍♂️';
  };

  App.openBridgeMode = function() {
    if (BaigeGame.raceInterval) clearInterval(BaigeGame.raceInterval);
    this.state.viewMode = 'bridge';
    saveState(this.state);
    if (typeof BridgeGame !== 'undefined') BridgeGame.init();
  };

  App.showBaige = function() {
    BaigeGame.init();
  };

  // Таймерді AI-Тьютор жабылған соң жалғастыру
  App._resumeTimerAfterPause = function() {
    if (this.timerInterval) clearInterval(this.timerInterval);
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
  };

  /* ----------------------------------------------------------------
     БАТЫР ДҮКЕНІ (IN-GAME ECONOMY: AVATARS & BOOSTERS)
     ---------------------------------------------------------------- */
  App.showShop = function() {
    if (BaigeGame.raceInterval) clearInterval(BaigeGame.raceInterval);
    this.state.viewMode = 'shop';
    if (!this.state.ownedAvatars) this.state.ownedAvatars = ['default'];
    if (!this.state.equippedAvatar) this.state.equippedAvatar = 'default';
    saveState(this.state);

    const root = document.getElementById('app');
    const coins = this.state.coins || 0;
    const pu = this.state.powerups || { fiftyFifty: 3, freezeTime: 3, doubleXP: 3 };

    const avatarsHTML = AVATAR_SHOP_ITEMS.map(item => {
      const owned = this.state.ownedAvatars.includes(item.id);
      const equipped = this.state.equippedAvatar === item.id;
      const canAfford = coins >= item.price;

      return `
        <div class="shop-card ${equipped ? 'equipped' : ''}">
          <div class="shop-avatar-preview">${item.icon}</div>
          <div class="shop-item-name">${item.name}</div>
          <div class="shop-item-desc">${item.desc}</div>
          <div class="shop-item-footer">
            ${equipped
              ? `<button class="btn-shop-action equipped-btn" disabled>✅ Таңдалған</button>`
              : owned
              ? `<button class="btn-shop-action equip-btn" onclick="App.buyOrEquipAvatar('${item.id}')">🎭 Кию (Таңдау)</button>`
              : `<button class="btn-shop-action buy-btn" onclick="App.buyOrEquipAvatar('${item.id}')" ${!canAfford ? 'disabled' : ''}>
                   🛒 Сатып алу (🪙 ${item.price})
                 </button>`}
          </div>
        </div>`;
    }).join('');

    const boostersHTML = BOOSTER_SHOP_ITEMS.map(item => {
      const canAfford = coins >= item.price;
      const count = pu[item.id] || 0;
      return `
        <div class="shop-card booster-card">
          <div class="shop-item-name" style="font-size:1.05rem;">${item.name}</div>
          <div class="shop-item-desc">${item.desc}</div>
          <div style="font-size:0.8rem; color:#38bdf8; font-weight:800;">Қоймада: ${count} дана</div>
          <div class="shop-item-footer">
            <button class="btn-shop-action buy-btn" onclick="App.buyBoosterPack('${item.id}')" ${!canAfford ? 'disabled' : ''}>
              🛒 Алу (🪙 ${item.price})
            </button>
          </div>
        </div>`;
    }).join('');

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}

        <div class="taldy-map-wrapper">
          <div class="map-header">
            <div class="map-title-wrap">
              <span class="map-title">🛍️ Батыр Дүкені (Ішкі Экономика)</span>
              <span class="map-city-badge">🪙 Баланс: ${coins} монета</span>
            </div>
            <div class="mode-toggle-group">
              <button class="mode-btn" onclick="App.showTaldyMap()">🗺️ Карта</button>
              <button class="mode-btn" onclick="App.openBridgeMode()">🌉 Көпір</button>
              <button class="mode-btn" onclick="App.showBaige()">🏇 Бәйге</button>
              <button class="mode-btn active">🛍️ Дүкен</button>
              <button class="mode-btn" onclick="App.showAnalyticsAndCert()">📊 Сертификат</button>
            </div>
          </div>

          <div class="shop-section-box">
            <h3 class="shop-section-title">🎭 Карта Аватарлары (Талдықорған Кейіпкерлері)</h3>
            <p class="shop-section-sub">Сатып алынған кейіпкер Талдықорған картасында және Жетісу Бәйгесінде сіздің атыңыздан жүреді!</p>
            <div class="shop-grid">
              ${avatarsHTML}
            </div>
          </div>

          <div class="shop-section-box" style="margin-top:0.5rem;">
            <h3 class="shop-section-title">⚡ Интеллектуалды Бустерлер</h3>
            <div class="shop-grid boosters-grid">
              ${boostersHTML}
            </div>
          </div>
        </div>
      </div>`;

    this._bindTopBar();
  };

  App.buyOrEquipAvatar = function(avatarId) {
    const item = AVATAR_SHOP_ITEMS.find(a => a.id === avatarId);
    if (!item) return;
    if (!this.state.ownedAvatars) this.state.ownedAvatars = ['default'];

    if (this.state.ownedAvatars.includes(avatarId)) {
      this.state.equippedAvatar = avatarId;
      saveState(this.state);
      Audio.play('unlock');
      this._showToast(`${item.icon} «${item.name}» аватары таңдалды!`);
      this.showShop();
      return;
    }

    if ((this.state.coins || 0) < item.price) {
      Audio.play('wrong');
      this._showToast('🪙 Монета жеткіліксіз! Есеп шығарып немесе Бәйгеде жеңіп монета жинаңыз.');
      return;
    }

    this.state.coins -= item.price;
    this.state.ownedAvatars.push(avatarId);
    this.state.equippedAvatar = avatarId;
    saveState(this.state);

    Audio.play('win');
    launchConfetti();
    this._showToast(`🎉 Құттықтаймыз! ${item.icon} «${item.name}» сатып алынды!`);
    this.showShop();
  };

  App.buyBoosterPack = function(boosterId) {
    const item = BOOSTER_SHOP_ITEMS.find(b => b.id === boosterId);
    if (!item) return;

    if ((this.state.coins || 0) < item.price) {
      Audio.play('wrong');
      this._showToast('🪙 Монета жеткіліксіз!');
      return;
    }

    if (!this.state.powerups) this.state.powerups = { fiftyFifty: 3, freezeTime: 3, doubleXP: 3 };
    this.state.coins -= item.price;
    this.state.powerups[boosterId] = (this.state.powerups[boosterId] || 0) + 3;
    saveState(this.state);

    Audio.play('powerup');
    this._showToast(`⚡ ${item.name} сәтті қосылды!`);
    this.showShop();
  };

  /* ----------------------------------------------------------------
     БІЛІМ ДИАГНОСТИКАСЫ ЖӘНЕ АТАУЛЫ СЕРТИФИКАТ ГЕНЕРАТОРЫ
     ---------------------------------------------------------------- */
  App.showAnalyticsAndCert = function() {
    if (BaigeGame.raceInterval) clearInterval(BaigeGame.raceInterval);
    this.state.viewMode = 'cert';
    saveState(this.state);

    const root = document.getElementById('app');
    const stars = this.state.starsPerLevel || {};
    const studentName = this.state.studentName || 'Жас Дарын';
    const studentSchool = this.state.studentSchool || 'Талдықорған қ. • №1 Орта Мектеп-Гимназиясы';

    // Салалар бойынша үлгерімді есептеу
    const calcSkill = (ids) => {
      const maxStars = ids.length * 3;
      const earned = ids.reduce((acc, id) => acc + (stars[id] || 0), 0);
      return Math.min(100, Math.round((earned / maxStars) * 100));
    };

    const skills = [
      { name: '🔢 Арифметика және Сандар теориясы (Орталық, Ғарышкер)', pct: Math.max(25, calcSkill([1, 2])), color: '#10b981' },
      { name: '📐 Алгебра және Теңдеулер (Самал, Мүшелтой)',           pct: Math.max(20, calcSkill([3, 4])), color: '#3b82f6' },
      { name: '📏 Геометрия және Тригонометрия (Қаратал, Жастар, Шығыс)', pct: Math.max(15, calcSkill([5, 6, 8])), color: '#a855f7' },
      { name: '🎲 Ықтималдық және Статистика (Көктем, Болашақ)',         pct: Math.max(15, calcSkill([7, 9])), color: '#ec4899' },
      { name: '🌉 Инженерлік Физика & Анализ (Батыс, Қаратал Көпірі)',   pct: Math.max(20, Math.min(100, Math.round(((stars[10] || 0) * 15) + ((this.state.bridgeLevelsDone || 0) * 8)))), color: '#f59e0b' },
    ];

    const accuracy = this.state.totalQuestions > 0
      ? Math.round((this.state.totalCorrect / this.state.totalQuestions) * 100)
      : 92;

    const completedCount = Object.keys(stars).filter(k => stars[k] > 0).length;
    const rankTitle = completedCount >= 10
      ? '👑 Талдықорған Сұлтаны • Бас Инженер'
      : completedCount >= 5
      ? '🦅 Жетісу Зерттеушісі • Аға Математик'
      : '🌟 Талдықорған Жас Дарыны';

    root.innerHTML = `
      <div class="game-wrapper">
        ${this._topBar()}

        <div class="taldy-map-wrapper">
          <div class="map-header">
            <div class="map-title-wrap">
              <span class="map-title">📊 Білім Диагностикасы & Сертификат</span>
              <span class="map-city-badge">AI Сараптама</span>
            </div>
            <div class="mode-toggle-group">
              <button class="mode-btn" onclick="App.showTaldyMap()">🗺️ Карта</button>
              <button class="mode-btn" onclick="App.openBridgeMode()">🌉 Көпір</button>
              <button class="mode-btn" onclick="App.showBaige()">🏇 Бәйге</button>
              <button class="mode-btn" onclick="App.showShop()">🛍️ Дүкен</button>
              <button class="mode-btn active">📊 Сертификат</button>
            </div>
          </div>

          <!-- 1. AI Қабілеттер Диаграммасы -->
          <div class="shop-section-box">
            <h3 class="shop-section-title">🧠 Оқушының STEM Қабілеттер Картасы (AI Analytics)</h3>
            <p class="shop-section-sub">Әр шағын аудан мен көпір сынағындағы нәтижелер бойынша автоматты диагностика:</p>
            <div class="skills-bars-list">
              ${skills.map(s => `
                <div class="skill-row-item">
                  <div class="skill-row-top">
                    <span>${s.name}</span>
                    <strong style="color:${s.color}">${s.pct}%</strong>
                  </div>
                  <div class="skill-bar-bg">
                    <div class="skill-bar-fill" style="width:${s.pct}%; background:${s.color};"></div>
                  </div>
                </div>`).join('')}
            </div>
          </div>

          <!-- 2. Атаулы Сертификат Генераторы -->
          <div class="shop-section-box">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.8rem; margin-bottom:1rem;">
              <div>
                <h3 class="shop-section-title">🎓 Ресми Атаулы Сертификат</h3>
                <p class="shop-section-sub" style="margin-bottom:0;">Аты-жөніңізді жазып, PDF/қағаз түрінде басып шығарыңыз:</p>
              </div>
              <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
                <input type="text" id="certNameInput" class="cert-input" value="${studentName}" placeholder="Оқушының аты-жөні" />
                <input type="text" id="certSchoolInput" class="cert-input" value="${studentSchool}" placeholder="Мектебі / Сыныбы" />
                <button class="modal-btn primary" onclick="App.printCertificate()">🖨️ Басып шығару (PDF)</button>
              </div>
            </div>

            <!-- Сертификат Превьюі -->
            <div class="certificate-preview-card" id="printableCertificate">
              <div class="cert-inner-border">
                <div class="cert-top-emblem">🏛️ MATHQUEST • ТАЛДЫҚОРҒАН EDTECH ПЛАТФОРМАСЫ</div>
                <div class="cert-main-heading">ҚҰРМЕТ СЕРТИФИКАТЫ</div>
                <div class="cert-sub-text">Осы сертификат иегері математикалық логика мен инженерлік физикадан жоғары нәтиже көрсеткені үшін марапатталады:</div>
                <div class="cert-student-name" id="certDisplayName">${studentName}</div>
                <div class="cert-school-name" id="certDisplaySchool">${studentSchool}</div>

                <div class="cert-rank-pill">${rankTitle}</div>

                <div class="cert-metrics-grid">
                  <div class="cert-metric-box">
                    <div class="cm-val">${this.state.xp || 0} XP</div>
                    <div class="cm-lbl">Жиналған тәжірибе</div>
                  </div>
                  <div class="cert-metric-box">
                    <div class="cm-val">${completedCount} / 10</div>
                    <div class="cm-lbl">Талдықорған аудандары</div>
                  </div>
                  <div class="cert-metric-box">
                    <div class="cm-val">${accuracy}%</div>
                    <div class="cm-lbl">Есеп шығару дәлдігі</div>
                  </div>
                  <div class="cert-metric-box">
                    <div class="cm-val">${this.getTotalStarsEarned()} ⭐</div>
                    <div class="cm-lbl">Алтын жұлдыздар</div>
                  </div>
                </div>

                <div class="cert-footer-row">
                  <div>
                    <div style="font-weight:900; color:#fbbf24;">Әл-Фараби AI Академиясы</div>
                    <div style="font-size:0.75rem; opacity:0.7;">Талдықорған қ., Жетісу облысы</div>
                  </div>
                  <div class="cert-seal">🏅 РАСТАЛҒАН<br><small>ID: MQ-${1000 + (this.state.xp || 77)}</small></div>
                  <div>
                    <div style="font-weight:900; color:#38bdf8;">Қаратал Инженерлік Орталығы</div>
                    <div style="font-size:0.75rem; opacity:0.7;">${new Date().toLocaleDateString('kk-KZ')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    this._bindTopBar();

    const nameInp = document.getElementById('certNameInput');
    const schoolInp = document.getElementById('certSchoolInput');
    nameInp?.addEventListener('input', () => {
      this.state.studentName = nameInp.value;
      saveState(this.state);
      const disp = document.getElementById('certDisplayName');
      if (disp) disp.textContent = nameInp.value || 'Жас Дарын';
    });
    schoolInp?.addEventListener('input', () => {
      this.state.studentSchool = schoolInp.value;
      saveState(this.state);
      const disp = document.getElementById('certDisplaySchool');
      if (disp) disp.textContent = schoolInp.value || 'Талдықорған қ.';
    });
  };

  App.printCertificate = function() {
    window.print();
  };

  /* ----------------------------------------------------------------
     ИНВЕСТОР ДЕМО-РЕЖИМІ (1-CLICK PITCH UNLOCK)
     ---------------------------------------------------------------- */
  App.activateInvestorDemoMode = function() {
    this.state.levelsCompleted = 10;
    this.state.starsPerLevel = { 1: 3, 2: 3, 3: 3, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 3 };
    this.state.coins = Math.max(this.state.coins || 0, 2500);
    this.state.xp = Math.max(this.state.xp || 0, 3400);
    this.state.totalQuestions = Math.max(this.state.totalQuestions || 0, 60);
    this.state.totalCorrect = Math.max(this.state.totalCorrect || 0, 58);
    this.state.bridgeLevelsDone = 10;
    this.state.ownedAvatars = ['default', 'rider', 'cosmo', 'sage', 'cyber', 'sultan'];
    this.state.equippedAvatar = 'sultan';
    this.state.powerups = { fiftyFifty: 9, freezeTime: 9, doubleXP: 9 };
    saveState(this.state);

    Audio.play('win');
    launchConfetti();
    this._showToast('💼 ИНВЕСТОР ДЕМО-РЕЖИМІ ҚОСЫЛДЫ! Барлық 10 аудан, 30 ⭐, 2500 🪙 және барлық аватарлар ашылды!');

    if (this.state.viewMode === 'shop') this.showShop();
    else if (this.state.viewMode === 'cert') this.showAnalyticsAndCert();
    else if (this.state.viewMode === 'reno') this.showRenovationStudio();
    else if (this.state.viewMode === 'baige') this.showBaige();
    else this.showTaldyMap();
  };

  /* ----------------------------------------------------------------
     БАСТАПҚЫ APP МЕТОДТАРЫН КЕҢЕЙТУ (HOOKS)
     ---------------------------------------------------------------- */
  const origTopBar = App._topBar.bind(App);
  App._topBar = function() {
    const xpNeeded = 200;
    const xpPct    = Math.min((this.state.xp % xpNeeded) / xpNeeded * 100, 100).toFixed(1);
    const level    = Math.floor(this.state.xp / xpNeeded) + 1;
    const availStars = this.getAvailableStars();
    const avatarIcon = this.getEquippedAvatarIcon();

    return `
      <div class="top-bar" id="topBar">
        <a class="home-link" href="index.html" title="Басты бет">🏠</a>
        <div class="xp-section">
          <div class="xp-bar-wrap" title="XP: ${this.state.xp}">
            <div class="xp-bar" id="xpBarFill" style="width:${xpPct}%"></div>
          </div>
          <span class="xp-label" id="xpLabel">${avatarIcon} Дең. ${level}</span>
        </div>
        <div class="coins" id="coinsDisplay" style="cursor:pointer;" title="Батыр Дүкенін ашу">🪙 ${this.state.coins}</div>
        <div class="stars-badge" id="starsDisplay" title="Жөндеуге арналған қолда бар жұлдыздар">
          ⭐ ${availStars}
        </div>
        <button class="btn-renovate-top" style="background:linear-gradient(135deg, #f59e0b, #d97706);" id="btnBaigeTop" title="Жетісу Бәйгесі (AI Жарыс)">
          🏇 Бәйге
        </button>
        <button class="btn-renovate-top" style="background:linear-gradient(135deg, #0284c7, #38bdf8);" id="btnBridgeTop" title="Қаратал Көпірі Физикасы">
          🌉 Көпір
        </button>
        <button class="btn-renovate-top" style="background:linear-gradient(135deg, #8b5cf6, #6366f1);" id="btnShopTop" title="Батыр Дүкені">
          🛍️ Дүкен
        </button>
        <button class="btn-renovate-top" id="btnRenovateTop" title="Қаланы Көркейту">
          🛠️ Жөндеу
        </button>
        <button class="btn-renovate-top investor-demo-btn" id="btnInvestorDemoTop" title="Инвесторларға презентация үшін барлық деңгейді 1 кликпен ашу">
          💼 Демо
        </button>
      </div>`;
  };

  const origBindTopBar = App._bindTopBar.bind(App);
  App._bindTopBar = function() {
    origBindTopBar();
    document.getElementById('btnBaigeTop')?.addEventListener('click', () => this.showBaige());
    document.getElementById('btnShopTop')?.addEventListener('click', () => this.showShop());
    document.getElementById('coinsDisplay')?.addEventListener('click', () => this.showShop());
    document.getElementById('btnInvestorDemoTop')?.addEventListener('click', () => this.activateInvestorDemoMode());
  };

  const origGenSVG = App._generateMapSVG.bind(App);
  App._generateMapSVG = function() {
    const svg = origGenSVG();
    const icon = this.getEquippedAvatarIcon();
    return svg.replace('<text x="0" y="6" text-anchor="middle" font-size="16">🚶‍♂️</text>', `<text x="0" y="6" text-anchor="middle" font-size="16">${icon}</text>`);
  };

  const origShowTaldyMap = App.showTaldyMap.bind(App);
  App.showTaldyMap = function() {
    if (BaigeGame.raceInterval) clearInterval(BaigeGame.raceInterval);
    origShowTaldyMap();
    // Картаның жоғарғы панель батырмаларын толықтыру
    const toggleGroup = document.querySelector('.taldy-map-wrapper .mode-toggle-group');
    if (toggleGroup) {
      toggleGroup.innerHTML = `
        <button class="mode-btn active">🗺️ Карта</button>
        <button class="mode-btn" onclick="App.openBridgeMode()">🌉 Көпір</button>
        <button class="mode-btn" onclick="App.showBaige()">🏇 Бәйге</button>
        <button class="mode-btn" onclick="App.showShop()">🛍️ Дүкен</button>
        <button class="mode-btn" onclick="App.showRenovationStudio()">🛠️ Жөндеу</button>
        <button class="mode-btn" onclick="App.showAnalyticsAndCert()">📊 Сертификат</button>
        <button class="mode-btn" onclick="App.showLevelSelect()">📋 Тізім</button>
      `;
    }
  };

  const origShowQuestion = App.showQuestion.bind(App);
  App.showQuestion = function() {
    origShowQuestion();
    const powerBar = document.querySelector('.quizizz-powerups-bar');
    if (powerBar) {
      const q = this.shuffledQuestions[this.currentQIdx];
      const aiBtn = document.createElement('button');
      aiBtn.className = 'powerup-btn ai-tutor-btn';
      aiBtn.title = 'Әл-Фараби AI-Тьюторынан қадамдық түсіндірме сұрау';
      aiBtn.innerHTML = `🧙‍♂️ AI-Тьютор <span class="p-count" style="background:#38bdf8; color:#0f172a;">ТЕГІН</span>`;
      aiBtn.addEventListener('click', () => {
        AITutor.explainQuestion(q, this.currentLevel?.fullName);
      });
      powerBar.appendChild(aiBtn);
    }
  };

  const origInit = App.init.bind(App);
  App.init = function() {
    // URL параметрі арқылы инвестор демо-режимін авто-қосу (?demo=investor)
    const params = new URLSearchParams(window.location.search);
    if (params.get('demo') === 'investor') {
      this.activateInvestorDemoMode();
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
    if (params.get('mode') === 'baige') {
      Audio.init();
      this._bindKeyboardNavigation();
      this.showBaige();
      return;
    }
    if (params.get('mode') === 'shop') {
      Audio.init();
      this._bindKeyboardNavigation();
      this.showShop();
      return;
    }
    if (params.get('mode') === 'cert') {
      Audio.init();
      this._bindKeyboardNavigation();
      this.showAnalyticsAndCert();
      return;
    }

    if (this.state.viewMode === 'baige') {
      Audio.init();
      this._bindKeyboardNavigation();
      this.showBaige();
    } else if (this.state.viewMode === 'shop') {
      Audio.init();
      this._bindKeyboardNavigation();
      this.showShop();
    } else if (this.state.viewMode === 'cert') {
      Audio.init();
      this._bindKeyboardNavigation();
      this.showAnalyticsAndCert();
    } else {
      origInit();
    }
  };
})();
