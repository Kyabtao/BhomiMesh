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

  /* ---------- Explore grid: 8 category pages + roadmap ---------- */
  function renderExplore() {
    const grid = document.getElementById('exploreGrid');
    if (!grid) return;
    const { CATS, DOCS, CAT_PAGES } = window.BMCM;
    const { esc } = window.BMCM_UI;
    const cats = ['whitepaper', 'tokenomics', 'land', 'strategy', 'finance', 'blockchain', 'compliance', 'ecosystem'];
    grid.innerHTML = cats.map(cat => {
      const c = CATS[cat];
      const n = DOCS.filter(d => d.c === cat).length;
      return `<a href="${cat}.html" class="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/40">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.tile} text-white shadow"><i class="fa-solid ${c.icon}"></i></span>
        <span class="min-w-0">
          <span class="flex items-center gap-2">
            <span class="truncate text-[15px] font-bold text-white group-hover:text-emerald-200">${esc(c.label)}</span>
            <span class="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-400">${n} docs</span>
          </span>
          <span class="mt-1 block text-xs leading-relaxed text-slate-500">${esc(CAT_PAGES[cat].tagline.split('. ')[0])}.</span>
        </span>
      </a>`;
    }).join('') + `
    <a href="roadmap.html" class="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/40">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 text-white shadow"><i class="fa-solid fa-route"></i></span>
      <span class="min-w-0">
        <span class="flex items-center gap-2">
          <span class="text-[15px] font-bold text-white group-hover:text-emerald-200">Milestones &amp; Tasks</span>
          <span class="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-400">25 tasks</span>
        </span>
        <span class="mt-1 block text-xs leading-relaxed text-slate-500">Live status board for the 24-month master roadmap (15 phases) and the TGE pre-launch checklist (10 tasks).</span>
      </span>
    </a>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const { $, animateKPIs, initSync } = window.BMCM_UI;
    BMCM_PARTIALS.injectChrome('home');
    BMCM_CHARTS.buildPriceChart('priceChart');
    renderPillars();
    renderExplore();
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
