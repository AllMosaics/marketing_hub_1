/* ============================================================
   AllMosaics — Shared JavaScript Utilities
   shared.js — included in every page
   ============================================================ */

/* ---- COLOUR PALETTES ---- */
const AM = {
  palettes: {
    mediterranean: ['#4A7B9D','#5E9AB8','#2D6B8A','#8ABCD4','#C9DCE8','#3A5F7A','#6BB3D4','#1F4F6B'],
    terracotta:    ['#C4622D','#D4774A','#B34F20','#E8937A','#A03A12','#CC6030','#F0A882','#8B3410'],
    forest:        ['#2D6B4A','#3A8B60','#1F5038','#4DAA78','#6DC093','#255A3D','#5BAF80','#1A4530'],
    goldDust:      ['#C9962C','#DBA83C','#B5821E','#E8C472','#F0D898','#A87020','#D4A840','#8C6018'],
    ocean:         ['#1E5F8A','#2878A8','#164B6F','#3A9ACC','#5BB8E4','#124060','#4AABCC','#0F3355'],
    byzantium:     ['#6B3A8A','#8A4AAA','#5A2878','#AA6ACC','#C890E8','#4A2068','#9A5AC0','#3A1858'],
    monochrome:    ['#3C3530','#5A524A','#2A2420','#787068','#989088','#4C4840','#6A6058','#1C1A18'],
    coral:         ['#D04040','#E85858','#B82828','#F07878','#F8A0A0','#A02020','#D86060','#882020'],
    // Mexican Smalti
    mexicanBright: ['#00A896','#F4845F','#F9C846','#F48FB1','#B39DDB','#4DD0C4','#FFB347','#E040FB'],
    mexicanPastel: ['#80DEEA','#FFE082','#F48FB1','#CE93D8','#A5D6A7','#80CBC4','#FFCC80','#EF9A9A'],
    turquoise:     ['#00BCD4','#00ACC1','#0097A7','#26C6DA','#4DD0E1','#80DEEA','#B2EBF2','#006064'],
    // Glass & Ceramics
    glassBlue:     ['#3A6B8A','#4A8BAA','#2A5070','#6AAAC8','#8ABCD4','#1A3850','#5A9ABB','#0F2840'],
    glassSlate:    ['#607D8B','#78909C','#546E7A','#90A4AE','#B0BEC5','#455A64','#7C9CAA','#37474F'],
    glassCeramic:  ['#8ECFC4','#5FBFB2','#3DAA9C','#B2DDD8','#D4EDEB','#2A8A80','#7ECEC3','#1A6A62'],
  },

  randPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },

  buildMosaic(containerId, palKeys, cols, rows, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const total = cols * rows;
    const allColors = palKeys.flatMap(k => this.palettes[k] || []);
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gap = options.gap || '3px';
    if (options.padding) container.style.padding = options.padding;

    for (let i = 0; i < total; i++) {
      const div = document.createElement('div');
      div.className = 'tile';
      div.style.borderRadius = '1px';

      if (options.pattern === 'radial') {
        const row = Math.floor(i / cols), col = i % cols;
        const cx = col / cols, cy = row / rows;
        const dist = Math.abs(cx - 0.5) + Math.abs(cy - 0.5);
        if (dist < 0.25 && Math.random() > 0.2) {
          div.style.opacity = '0.95';
        } else if (dist >= 0.45) {
          div.style.opacity = String(0.3 + Math.random() * 0.4);
        }
      } else {
        div.style.opacity = String(0.55 + Math.random() * 0.45);
      }

      div.style.background = this.randPick(allColors);
      div.style.animationDelay = (i * 0.003) + 's';
      container.appendChild(div);
    }
  },

  buildMarquee(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const doubled = [...items, ...items];
    el.innerHTML = doubled.map(t => `<span>${t}</span>`).join('');
  },

  initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  initNewsletterForm(btnClass, inputClass) {
    const btn = document.querySelector(btnClass || '.newsletter-btn');
    const input = document.querySelector(inputClass || '.newsletter-input');
    if (!btn || !input) return;
    btn.addEventListener('click', function () {
      if (input.value && input.value.includes('@')) {
        const orig = this.textContent;
        this.textContent = 'Subscribed!';
        this.style.background = '#2D6B4A';
        input.value = '';
        setTimeout(() => { this.textContent = orig; this.style.background = ''; }, 3000);
      }
    });
  }
};
