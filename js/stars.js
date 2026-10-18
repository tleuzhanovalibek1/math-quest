/**
 * MathQuest — Жұлдызды анимациялы фон
 * Экранда кездейсоқ жерде жарқыраған жұлдызшалар жасайды.
 */
(function () {
  const container = document.getElementById('stars');
  if (!container) return;

  const COUNT = 120; // жұлдыздар саны

  for (let i = 0; i < COUNT; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Кездейсоқ мөлшер (1–4 px)
    const size = Math.random() * 3 + 1;
    // Кездейсоқ позиция
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    // Кездейсоқ анимация ұзақтығы мен кідірісі
    const dur   = (Math.random() * 4 + 2).toFixed(2) + 's';
    const delay = (Math.random() * 5).toFixed(2) + 's';

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --dur: ${dur};
      animation-delay: ${delay};
    `;

    container.appendChild(star);
  }
})();
