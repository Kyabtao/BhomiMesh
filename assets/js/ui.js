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

  window.BMCM_UI = { $, $$, esc, href, toast, animateKPIs, initSync };
})();
