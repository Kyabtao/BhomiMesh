/* =========================================================
   Page: roadmap.html (Milestones & task schedule)
   Tabbed tables (24-month roadmap / TGE pre-launch
   checklist), status filter chips and progress bar.
   Depends on: data.js, partials.js, ui.js
   ========================================================= */
'use strict';

(function () {

  const state = { tab: 'roadmap', status: 'all' };

  const currentTasks = () => state.tab === 'roadmap' ? window.BMCM.ROADMAP : window.BMCM.CHECKLIST;
  const visibleTasks = () => currentTasks().filter(t => state.status === 'all' || t.st === state.status);

  /* ---------- Table rows ---------- */
  function renderTable() {
    const body = document.getElementById('taskBody');
    if (!body) return;
    const { STATUS } = window.BMCM;
    const { esc, href } = window.BMCM_UI;

    const isRoad = state.tab === 'roadmap';
    document.getElementById('thPhase').textContent  = isRoad ? 'Phase' : '#';
    document.getElementById('thWindow').textContent = isRoad ? 'Window' : 'Target';

    const rows = visibleTasks();
    body.innerHTML = rows.map(t => {
      const s = STATUS[t.st];
      return `<tr class="border-b border-slate-800/70 transition hover:bg-slate-900/60">
        <td class="px-5 py-3.5">
          ${isRoad
            ? `<span class="rounded-lg bg-slate-800 px-2 py-1 font-mono text-xs font-bold text-sky-300">${esc(t.p)}</span>`
            : `<span class="font-mono text-xs font-bold text-slate-500">${String(t.n).padStart(2, '0')}</span>`}
        </td>
        <td class="px-5 py-3.5 font-medium text-slate-200">${esc(t.name)}</td>
        <td class="px-5 py-3.5 font-mono text-xs text-slate-400">${esc(t.w)}</td>
        <td class="px-5 py-3.5 text-slate-400">${esc(t.owner)}</td>
        <td class="px-5 py-3.5">${isRoad
          ? `<a href="${href(t.doc)}" target="_blank" rel="noopener" class="text-xs font-semibold text-emerald-300/90 hover:text-emerald-200" title="${esc(t.doc)}"><i class="fa-solid fa-file-lines mr-1.5"></i>Spec</a>`
          : `<span class="text-xs text-slate-600">Checklist</span>`}</td>
        <td class="px-5 py-3.5"><span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${s.badge}"><i class="fa-solid ${s.icon}"></i>${s.label}</span></td>
      </tr>`;
    }).join('');

    body.closest('.overflow-x-auto').classList.toggle('hidden', rows.length === 0);
    const empty = document.getElementById('tblEmpty');
    empty.classList.toggle('hidden', rows.length > 0);
    empty.classList.toggle('flex', rows.length === 0);

    renderTblChips();
    renderProgress();
  }

  /* ---------- Status filter chips ---------- */
  function renderTblChips() {
    const host = document.getElementById('tblChips');
    if (!host) return;
    const tasks = currentTasks();
    const { STATUS } = window.BMCM;
    const order = ['all', 'completed', 'in-progress', 'on-hold', 'not-started'];

    host.innerHTML = order.map(k => {
      const label = k === 'all' ? 'All' : STATUS[k].label;
      const count = k === 'all' ? tasks.length : tasks.filter(t => t.st === k).length;
      return `<button data-st="${k}" class="tbl-chip flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition
        ${k === 'all' ? 'border-slate-600 bg-slate-800/80 text-slate-300' : 'border-slate-700 bg-slate-900/70 text-slate-500 hover:border-slate-500'}
        ${k === state.status ? 'active' : ''}">
        ${k === 'all' ? '<i class="fa-solid fa-table-list"></i>' : `<i class="fa-solid ${STATUS[k].icon}</i>`}${label}
        <span class="rounded-full bg-slate-800 px-1.5 text-[10px]">${count}</span>
      </button>`;
    }).join('');

    window.BMCM_UI.$$('#tblChips .tbl-chip').forEach(b =>
      b.addEventListener('click', () => { state.status = b.dataset.st; renderTable(); })
    );
  }

  /* ---------- Progress bar ---------- */
  function renderProgress() {
    const tasks = currentTasks();
    const { STATUS } = window.BMCM;
    const done = tasks.filter(t => t.st === 'completed').length;
    const pct = Math.round(done / tasks.length * 100);

    document.getElementById('progressLabel').textContent =
      `${done} of ${tasks.length} ${state.tab === 'roadmap' ? 'roadmap phases' : 'TGE checklist items'} completed`;
    document.getElementById('progressPct').textContent = pct + '%';
    document.getElementById('progressBar').innerHTML = Object.entries(STATUS).map(([k, s]) => {
      const n = tasks.filter(t => t.st === k).length;
      return n ? `<span class="${s.seg}" style="width:${(n / tasks.length) * 100}%"></span>` : '';
    }).join('');
  }

  /* ---------- Tabs ---------- */
  function initTabs() {
    window.BMCM_UI.$$('.tab-btn').forEach(b => b.addEventListener('click', () => {
      state.tab = b.dataset.tab;
      state.status = 'all';
      window.BMCM_UI.$$('.tab-btn').forEach(x => x.classList.toggle('active', x === b));
      renderTable();
    }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    BMCM_PARTIALS.injectChrome('roadmap');
    renderTable();
    initTabs();
    window.BMCM_UI.initSync();
  });
})();
