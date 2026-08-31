/* =========================================================
   Page: index.html (Home / Dashboard)
   Mounts shared chrome, KPI animations, price chart,
   the 7-pillar audit grid and the mock sync button.
   Depends on: data.js, partials.js, ui.js, charts.js
   ========================================================= */
'use strict';

(function () {

  function renderPillars() {
    const grid = document.getElementById('pillarGrid');
    if (!grid) return;
    const { PILLARS } = window.BMCM;
    const { esc } = window.BMCM_UI;
    grid.innerHTML = PILLARS.map((p, i) => `
      <div class="card-fade rounded-2xl border border-slate-800 bg-slate-900/70 p-5" style="animation:fadeUp .4s ease both;animation-delay:${i * 60}ms">
        <div class="flex items-center justify-between">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300"><i class="fa-solid ${p.icon}"></i></span>
          <span class="flex items-center gap-1 text-[11px] font-bold text-emerald-400"><i class="fa-solid fa-circle-check"></i>Verified</span>
        </div>
        <h3 class="mt-3 text-sm font-bold text-white">Pillar ${i + 1}: ${esc(p.name)}</h3>
        <p class="mt-1.5 text-xs leading-relaxed text-slate-500">${esc(p.d)}</p>
      </div>`).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const { $, animateKPIs, initSync } = window.BMCM_UI;
    BMCM_PARTIALS.injectChrome('home');
    BMCM_CHARTS.buildPriceChart('priceChart');
    renderPillars();
    animateKPIs();
    initSync();

    /* re-run the flash animation if a sync completes while on home */
    document.addEventListener('bmcm:synced', () => {
      const grid = $('#kpiGrid');
      if (!grid) return;
      grid.classList.add('flashing');
      setTimeout(() => grid.classList.remove('flashing'), 400);
    });
  });
})();
