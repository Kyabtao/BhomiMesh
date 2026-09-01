/* =========================================================
   BhoomiMesh site — shared UI utilities (window.BMCM_UI)
   Helpers, toast, KPI count-up animation, mock sync.
   Depends on: data.js
   ========================================================= */
'use strict';

(function () {

  const $  = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /** Relative link into the HST archive (space-safe). */
  const href = f => 'HST/' + f.split('/').map(encodeURIComponent).join('/');

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function toast(msg, icon = 'fa-circle-check') {
    const t = $('#toast');
    if (!t) return;
    $('#toastMsg').textContent = msg;
    $('#toastIcon').className = `fa-solid ${icon} text-emerald-400`;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3800);
  }

  /* ---------- Document card template (shared by documents page + category pages) ---------- */
  function docCardHTML(d, i) {
    const { CATS, MATURITY, LEVEL } = window.BMCM;
    const c = CATS[d.c], mat = MATURITY[d.m];
    return `<article class="card-fade group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-950/40" style="animation:fadeUp .4s ease both;animation-delay:${Math.min(i * 40, 400)}ms">
      <div class="flex items-start justify-between gap-3">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.tile} text-white shadow"><i class="fa-solid ${c.icon}"></i></span>
        <div class="flex flex-wrap justify-end gap-1.5">
          <span class="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${c.tag}">${esc(c.label)}</span>
          ${d.ed ? `<span class="rounded-full border border-slate-600 bg-slate-800 px-2 py-1 text-[10px] font-bold text-slate-400">${esc(d.ed)}</span>` : ''}
        </div>
      </div>
      <h3 class="mt-4 text-base font-bold leading-snug text-white group-hover:text-emerald-200">${esc(d.t)}</h3>
      <p class="mt-2 flex-1 text-[13px] leading-relaxed text-slate-400">${esc(d.d)}</p>
      <div class="mt-3 flex flex-wrap gap-1.5">
        ${d.b.map(b => `<span class="rounded-md bg-slate-800/90 px-2 py-1 text-[10px] font-semibold text-slate-300"><i class="fa-solid fa-tag mr-1 text-[9px] text-slate-500"></i>${esc(b)}</span>`).join('')}
      </div>
      <div class="mt-4 flex items-center justify-between border-t border-slate-800 pt-3.5 text-xs">
        <span class="flex items-center gap-2">
          <span class="flex items-center gap-1.5 ${mat.cls}"><span class="h-1.5 w-1.5 rounded-full ${mat.dot}"></span>${esc(d.m)}</span>
          <span class="rounded-md border px-1.5 py-0.5 text-[10px] font-bold ${LEVEL[d.l]}">${esc(d.l)}</span>
        </span>
        <a href="${href(d.f)}" target="_blank" rel="noopener" class="font-bold text-emerald-300 transition hover:text-emerald-200">Open Spec <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
      </div>
    </article>`;
  }

  /* ---------- KPI count-up (fires when cards scroll into view) ---------- */
  function animateKPIs(root = document) {
    const nums = root.querySelectorAll('.kpi-num');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target;
        const target = parseFloat(el.dataset.target);
        const dec = parseInt(el.dataset.decimals || '0', 10);
        const dur = 1300, t0 = performance.now();
        (function tick(now) {
          const k = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - k, 3);
          el.textContent = (target * eased).toFixed(dec);
          if (k < 1) requestAnimationFrame(tick); else el.textContent = target.toFixed(dec);
        })(t0);
      });
    }, { threshold: 0.4 });
    nums.forEach(n => io.observe(n));
  }

  /* ---------- Mock sync (nav button, available on every page) ---------- */
  function initSync() {
    const btn = $('#syncBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const icon = $('#syncIcon'), label = $('#syncLabel');
      btn.disabled = true;
      icon.className = 'fa-solid fa-spinner fa-spin text-xs';
      label.textContent = 'Syncing…';
      const grid = $('#kpiGrid');
      if (grid) grid.classList.add('flashing');

      setTimeout(() => {
        const D = window.BMCM;
        const docs   = D.DOCS.length;
        const tasks  = D.ROADMAP.length + D.CHECKLIST.length;
        const active = [...D.ROADMAP, ...D.CHECKLIST].filter(t => t.st === 'in-progress').length;
        const stamp  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const ls = $('#lastSync');
        if (ls) ls.textContent = 'Synced ' + stamp;
        const note = $('#docSyncNote');
        if (note) note.textContent = 're-verified ' + stamp + ' from HST/ archive';

        icon.className = 'fa-solid fa-circle-check text-xs';
        label.textContent = 'Synced';
        btn.disabled = false;
        if (grid) grid.classList.remove('flashing');
        toast(`${docs} documents re-verified · ${tasks} tasks reconciled · ${active} active`, 'fa-cloud-arrow-down');

        /* pages that render dynamic lists can re-render here */
        document.dispatchEvent(new CustomEvent('bmcm:synced'));
      }, 1100);
    });
  }

  window.BMCM_UI = { $, $$, esc, href, toast, docCardHTML, animateKPIs, initSync };
})();
