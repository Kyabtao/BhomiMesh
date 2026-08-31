/* =========================================================
   BhoomiMesh site — category pages engine
   One script powers all 8 category pages (body[data-cat]):
   header + hero facts, the category doc cards, prev/next pager
   and a unique interactive widget per category.
   Depends on: data.js, data-utilities.js, partials.js, ui.js
   ========================================================= */
'use strict';

(function () {

  const ORDER = ['whitepaper', 'tokenomics', 'land', 'strategy', 'finance', 'blockchain', 'compliance', 'ecosystem'];

  /* ---------- formatting helpers ---------- */
  const num = v => Math.round(v).toLocaleString('en-IN');
  const inr = v => '₹' + v.toLocaleString('en-IN', { maximumFractionDigits: 2 });
  const inr2 = v => '₹' + v.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const inrCr = v => '₹' + v.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' Cr';
  const compact = v => v >= 1e7 ? (v / 1e7).toFixed(2) + ' Cr' : v >= 1e5 ? (v / 1e5).toFixed(1) + ' Lakh' : num(v);

  /* ---------- shared chrome for category pages ---------- */
  function mount(cat) {
    const { CATS, DOCS, CAT_PAGES } = window.BMCM;
    const { esc } = window.BMCM_UI;
    const c = CATS[cat], meta = CAT_PAGES[cat];

    document.getElementById('catHead').innerHTML = `
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${c.tile} text-xl text-white shadow-lg">
          <i class="fa-solid ${c.icon}"></i>
        </span>
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400">Category · ${esc(c.label)}</span>
          <h1 class="mt-1 text-3xl font-extrabold text-white sm:text-4xl">${esc(c.label)}</h1>
        </div>
      </div>
      <p class="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">${esc(meta.tagline)}</p>`;

    document.getElementById('catFacts').innerHTML = meta.facts.map(f => `
      <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">${esc(f.k)}</div>
        <div class="mt-1 text-xl font-extrabold text-white">${esc(f.v)}</div>
        <div class="mt-0.5 text-[11px] text-slate-500">${esc(f.sub)}</div>
      </div>`).join('');

    const docs = DOCS.filter(d => d.c === cat);
    document.getElementById('catCount').textContent = docs.length + ' of ' + window.BMCM.DOCS.length + ' suite documents';
    document.getElementById('catCards').innerHTML = docs.map(window.BMCM_UI.docCardHTML).join('');

    /* prev / next pager */
    const i = ORDER.indexOf(cat);
    const prev = ORDER[i - 1], next = ORDER[i + 1];
    document.getElementById('catPager').innerHTML = `
      ${prev ? `<a href="${prev}.html" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/40">
        <i class="fa-solid fa-arrow-left text-slate-600 group-hover:text-emerald-300"></i>${esc(CATS[prev].label)}</a>` :
        `<a href="documents.html" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/40">
        <i class="fa-solid fa-arrow-left text-slate-600 group-hover:text-emerald-300"></i>All Documents</a>`}
      ${next ? `<a href="${next}.html" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/40">
        ${esc(CATS[next].label)}<i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-emerald-300"></i></a>` :
        `<a href="roadmap.html" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-emerald-500/40">
        Roadmap &amp; Tasks<i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-emerald-300"></i></a>`}`;
  }

  /* =========================================================
     WIDGET 1 — whitepaper.html : 70/30 split calculator
     ========================================================= */
  function widgetWhitepaper() {
    const { TOKENS_PER_ACRE, TGE_PRICE, LANDOWNER_PCT } = window.BMCM;
    const input = document.getElementById('wpAcres');
    if (!input) return;

    function update() {
      const acres = Math.max(0.5, Math.min(100000, parseFloat(input.value) || 0.5));
      const total = acres * TOKENS_PER_ACRE;
      const land = total * LANDOWNER_PCT / 100;
      const tres = total - land;
      document.getElementById('wpTokens').textContent = num(total);
      document.getElementById('wpLand').textContent = num(land);
      document.getElementById('wpLandVal').textContent = inr(land * TGE_PRICE);
      document.getElementById('wpTres').textContent = num(tres);
      document.getElementById('wpTresVal').textContent = inr(tres * TGE_PRICE);
      document.getElementById('wpValue').textContent = inr(total * TGE_PRICE);
    }
    input.addEventListener('input', update);
    update();
  }

  /* =========================================================
     WIDGET 2 — tokenomics.html : 10-year token simulator
     ========================================================= */
  function widgetTokenomics() {
    const { TOKEN_10YR } = window.BMCM;
    const slider = document.getElementById('tkYear');
    if (!slider) return;

    function setYear(y) {
      const r = TOKEN_10YR[y];
      const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      set('tkYearLabel', 'Year ' + y);
      set('tkPrice', inr2(r.price));
      set('tkFloor', inr2(r.floor));
      set('tkBacking', r.backing.toFixed(2) + ' sq cm');
      set('tkDiv', inr2(r.div));
      set('tkCum', inr2(r.cum));
      set('tkTotal', inr2(r.total));
      set('tkRoi', r.roi);
      const rows = document.querySelectorAll('#tkTable tr[data-year]');
      rows.forEach(tr => {
        const on = parseInt(tr.dataset.year, 10) === y;
        tr.classList.toggle('bg-emerald-500/10', on);
        tr.classList.toggle('text-white', on);
      });
    }
    slider.addEventListener('input', () => setYear(parseInt(slider.value, 10)));
    setYear(10);
  }

  /* =========================================================
     WIDGET 3 — land.html : land tokenization calculator
     ========================================================= */
  function widgetLand() {
    const { TOKENS_PER_ACRE, SQFT_PER_ACRE, TGE_PRICE } = window.BMCM;
    const input = document.getElementById('ldAcres');
    if (!input) return;

    function update() {
      const acres = Math.max(0.01, Math.min(1000000, parseFloat(input.value) || 0.01));
      document.getElementById('ldSqft').textContent = num(acres * SQFT_PER_ACRE);
      document.getElementById('ldSqcm').textContent = num(acres * TOKENS_PER_ACRE);
      document.getElementById('ldTokens').textContent = num(acres * TOKENS_PER_ACRE);
      document.getElementById('ldValue').textContent = inr(acres * TOKENS_PER_ACRE * TGE_PRICE);
    }
    input.addEventListener('input', update);
    update();
  }

  /* =========================================================
     WIDGET 4 — strategy.html : phases / bootstrap / compare tabs
     ========================================================= */
  function widgetStrategy() {
    const { PHASES, BOOTSTRAP_MONTHS, BOOTSTRAP_COMPARE } = window.BMCM;
    const { esc } = window.BMCM_UI;
    if (!document.getElementById('strPhases')) return;

    document.getElementById('strPhases').innerHTML = PHASES.map(p => `
      <div class="relative pl-12 pb-8 last:pb-0">
        <span class="absolute left-3.5 top-1 h-full w-px bg-slate-800"></span>
        <span class="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-500/50 bg-slate-900 text-[11px] font-bold text-emerald-300">${esc(p.id).replace('Phase ', '')}</span>
        <div class="flex flex-wrap items-center gap-2">
          <h3 class="text-sm font-bold text-white">${esc(p.title)}</h3>
          <span class="rounded-full bg-slate-800 px-2.5 py-0.5 font-mono text-[11px] text-sky-300">${esc(p.months)}</span>
        </div>
        <p class="mt-1.5 text-[13px] leading-relaxed text-slate-400">${esc(p.d)}</p>
      </div>`).join('');

    document.getElementById('strBoot').innerHTML = `
      <table class="w-full text-left text-sm">
        <thead><tr class="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-500">
          <th class="px-4 py-3 font-bold">Window</th><th class="px-4 py-3 font-bold">Operational milestone</th><th class="px-4 py-3 font-bold">Token &amp; financial impact</th>
        </tr></thead>
        <tbody>${BOOTSTRAP_MONTHS.map(m => `
          <tr class="border-b border-slate-800/70">
            <td class="px-4 py-3 font-mono text-xs text-sky-300">${esc(m.w)}</td>
            <td class="px-4 py-3 text-slate-300">${esc(m.ops)}</td>
            <td class="px-4 py-3 text-slate-400">${esc(m.fin)}</td>
          </tr>`).join('')}</tbody>
      </table>`;

    document.getElementById('strComp').innerHTML = `
      <table class="w-full text-left text-sm">
        <thead><tr class="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-500">
          <th class="px-4 py-3 font-bold">Metric</th><th class="px-4 py-3 font-bold text-emerald-300">1-Acre Lean</th><th class="px-4 py-3 font-bold">10-Acre Seed</th>
        </tr></thead>
        <tbody>${BOOTSTRAP_COMPARE.map(r => `
          <tr class="border-b border-slate-800/70">
            <td class="px-4 py-3 font-medium text-slate-300">${esc(r.metric)}</td>
            <td class="px-4 py-3 text-emerald-300">${esc(r.lean)}</td>
            <td class="px-4 py-3 text-slate-400">${esc(r.seed)}</td>
          </tr>`).join('')}</tbody>
      </table>`;
  }

  /* =========================================================
     WIDGET 5 — finance.html : seed / P&L / investor tabs
     ========================================================= */
  function widgetFinance() {
    const { SEED, P5Y, INVESTOR_PROFORMA } = window.BMCM;
    const { esc } = window.BMCM_UI;
    if (!document.getElementById('finUse')) return;

    document.getElementById('finUse').innerHTML = SEED.use.map(u => `
      <div>
        <div class="mb-1 flex items-center justify-between text-xs">
          <span class="font-semibold text-slate-300">${esc(u.label)} <span class="text-slate-500">· ${esc(u.detail)}</span></span>
          <span class="font-bold text-emerald-300">${u.pct}%</span>
        </div>
        <div class="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400" style="width:${u.pct}%"></div>
        </div>
      </div>`).join('');

    const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'];
    document.getElementById('finP5y').innerHTML = `
      <table class="w-full text-left text-sm">
        <thead><tr class="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-500">
          <th class="px-4 py-3 font-bold">₹ Crores / Year</th>${years.map(y => `<th class="px-4 py-3 text-right font-bold">${y}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${P5Y.rows.map(r => `<tr class="border-b border-slate-800/70">
            <td class="px-4 py-2.5 text-slate-300">${esc(r.name)}</td>
            ${r.v.map(v => `<td class="px-4 py-2.5 text-right font-mono text-xs text-slate-400">${inr2(v)}</td>`).join('')}
          </tr>`).join('')}
          <tr class="border-b border-slate-800/70 bg-slate-900/60">
            <td class="px-4 py-2.5 font-bold text-slate-200">Gross corporate revenue</td>
            ${P5Y.gross.map(v => `<td class="px-4 py-2.5 text-right font-mono text-xs font-bold text-slate-200">${inr2(v)}</td>`).join('')}
          </tr>
          <tr class="border-b border-slate-800/70">
            <td class="px-4 py-2.5 text-slate-300">Less: OpEx &amp; payroll</td>
            ${P5Y.opex.map(v => `<td class="px-4 py-2.5 text-right font-mono text-xs text-slate-500">(${inr2(v)})</td>`).join('')}
          </tr>
          <tr class="bg-slate-900/60">
            <td class="px-4 py-2.5 font-bold text-slate-200">Net profit (EBITDA)</td>
            ${P5Y.ebitda.map(v => `<td class="px-4 py-2.5 text-right font-mono text-xs font-bold ${v < 0 ? 'text-orange-300' : 'text-emerald-300'}">${v < 0 ? '(' + inr2(-v) + ')' : '+' + inr2(v)}</td>`).join('')}
          </tr>
        </tbody>
      </table>
      <p class="mt-2 text-[11px] text-slate-600">Year-1 OpEx deficit is covered by the ₹12.50 Cr seed allocation.</p>`;

    document.getElementById('finInv').innerHTML = `
      <table class="w-full text-left text-sm">
        <thead><tr class="border-b border-slate-800 text-[11px] uppercase tracking-wider text-slate-500">
          <th class="px-4 py-3 font-bold">Metric</th>${years.map(y => `<th class="px-4 py-3 text-right font-bold">${y}</th>`).join('')}
        </tr></thead>
        <tbody>${INVESTOR_PROFORMA.map(r => `
          <tr class="border-b border-slate-800/70">
            <td class="px-4 py-2.5 text-slate-300">${esc(r.name)}</td>
            ${r.v.map((v, i) => `<td class="px-4 py-2.5 text-right font-mono text-xs ${i === 4 ? 'font-bold text-emerald-300' : 'text-slate-400'}">${esc(v)}</td>`).join('')}
          </tr>`).join('')}</tbody>
      </table>`;
  }

  /* =========================================================
     WIDGET 6 — blockchain.html : $GR allocation
     ========================================================= */
  function widgetBlockchain() {
    const { GR_ALLOCATION } = window.BMCM;
    const { esc } = window.BMCM_UI;
    const host = document.getElementById('grAlloc');
    if (!host) return;
    host.innerHTML = GR_ALLOCATION.map((g, i) => `
      <div class="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        <div class="flex items-center justify-between gap-3">
          <span class="text-sm font-semibold text-slate-200">${esc(g.name)}</span>
          <span class="shrink-0 rounded-full bg-sky-500/10 px-2.5 py-1 font-mono text-xs font-bold text-sky-300">${g.pct}% · ${esc(g.coins)} $GR</span>
        </div>
        <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div class="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" style="width:${g.pct}%"></div>
        </div>
        <p class="mt-2 text-xs leading-relaxed text-slate-500">${i === 0 ? '✦ ' : ''}${esc(g.vest)}</p>
      </div>`).join('');
  }

  /* =========================================================
     WIDGET 7 — compliance.html : 12 stress-test accordions
     ========================================================= */
  function widgetCompliance() {
    const { STRESS_TESTS } = window.BMCM;
    const { esc } = window.BMCM_UI;
    const host = document.getElementById('stGroups');
    if (!host) return;

    const groups = [];
    STRESS_TESTS.forEach(t => {
      let g = groups.find(x => x.cat === t.cat);
      if (!g) { g = { cat: t.cat, items: [] }; groups.push(g); }
      g.items.push(t);
    });
    host.innerHTML = groups.map(g => `
      <div>
        <h3 class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <i class="fa-solid fa-triangle-exclamation text-orange-400"></i>${esc(g.cat)}
          <span class="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-500">${g.items.length}</span>
        </h3>
        <div class="mt-3 space-y-2.5">
          ${g.items.map(t => `
            <details class="group rounded-xl border border-slate-800 bg-slate-900/60 transition open:border-emerald-500/40">
              <summary class="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-semibold text-slate-200 [&::-webkit-details-marker]:hidden">
                ${esc(t.q)}
                <i class="fa-solid fa-chevron-down text-xs text-slate-500 transition group-open:rotate-180 group-open:text-emerald-300"></i>
              </summary>
              <div class="border-t border-slate-800 px-4 py-3.5 text-[13px] leading-relaxed text-slate-400">
                <span class="mr-2 inline-block rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">Solution</span>
                ${esc(t.a)}
              </div>
            </details>`).join('')}
        </div>
      </div>`).join('');
  }

  /* =========================================================
     WIDGET 8 — ecosystem.html : 120-utility browser
     ========================================================= */
  function widgetEcosystem() {
    const U = window.BMCM_UTILITIES;
    const { esc } = window.BMCM_UI;
    const tabs = document.getElementById('ecoTabs');
    if (!tabs || !U) return;

    const state = { sector: 0, q: '' };

    function renderTabs() {
      tabs.innerHTML = U.map((s, i) => `
        <button data-i="${i}" class="eco-tab flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition
          ${i === state.sector
            ? 'border-emerald-500/60 bg-emerald-500/14 text-emerald-300'
            : 'border-slate-700 bg-slate-900/70 text-slate-400 hover:border-slate-500'}">
          <i class="fa-solid ${s.icon}"></i>${esc(s.sector.split(' ').slice(0, 2).join(' ').replace(/[,&].*$/, ''))}
        </button>`).join('');
      window.BMCM_UI.$$('#ecoTabs .eco-tab').forEach(b =>
        b.addEventListener('click', () => { state.sector = parseInt(b.dataset.i, 10); renderTabs(); renderList(); }));
    }

    function renderList() {
      const s = U[state.sector];
      const q = state.q.trim().toLowerCase();
      const items = s.items.filter(it => !q || (it.n + ' ' + it.d).toLowerCase().includes(q));
      const total = U.reduce((a, x) => a + x.items.length, 0);
      document.getElementById('ecoSectorTitle').innerHTML =
        `<i class="fa-solid ${s.icon} mr-2 text-emerald-300"></i>${esc(s.sector)}`;
      document.getElementById('ecoCount').textContent = q
        ? `${items.length} match(es) in sector — ${total} utilities in the full catalog`
        : `10 of ${total} catalog utilities`;
      document.getElementById('ecoList').innerHTML = items.length ? items.map((it, i) => `
        <div class="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3.5">
          <span class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 font-mono text-xs font-bold text-emerald-300">${state.sector * 10 + i + 1}</span>
          <div>
            <div class="text-sm font-semibold text-slate-200">${esc(it.n)}</div>
            <div class="mt-0.5 text-[13px] leading-relaxed text-slate-400">${esc(it.d)}</div>
          </div>
        </div>`).join('')
        : `<div class="rounded-xl border border-dashed border-slate-700 px-6 py-10 text-center text-sm text-slate-500">
            No utilities match “${esc(state.q)}” in this sector — try another keyword.</div>`;
    }

    const search = document.getElementById('ecoSearch');
    search.addEventListener('input', () => { state.q = search.value; renderList(); });
    search.addEventListener('keydown', e => { if (e.key === 'Escape') { search.value = ''; state.q = ''; renderList(); } });

    renderTabs();
    renderList();
  }

  /* ---------- inner-tab helper used by strategy & finance pages ---------- */
  function initInnerTabs() {
    window.BMCM_UI.$$('.inner-tab-btn').forEach(b => b.addEventListener('click', () => {
      const group = b.dataset.group;
      window.BMCM_UI.$$('.inner-tab-btn[data-group="' + group + '"]').forEach(x =>
        x.classList.toggle('active', x === b));
      window.BMCM_UI.$$('.inner-tab-panel[data-group="' + group + '"]').forEach(p =>
        p.classList.toggle('hidden', p.dataset.panel !== b.dataset.panel));
    }));
  }

  const WIDGETS = {
    whitepaper: widgetWhitepaper,
    tokenomics: widgetTokenomics,
    land: widgetLand,
    strategy: widgetStrategy,
    finance: widgetFinance,
    blockchain: widgetBlockchain,
    compliance: widgetCompliance,
    ecosystem: widgetEcosystem
  };

  document.addEventListener('DOMContentLoaded', () => {
    const cat = document.body.dataset.cat;
    if (!cat || !ORDER.includes(cat)) return;
    BMCM_PARTIALS.injectChrome('categories');
    mount(cat);
    if (WIDGETS[cat]) WIDGETS[cat]();
    initInnerTabs();
    window.BMCM_UI.initSync();
  });
})();
