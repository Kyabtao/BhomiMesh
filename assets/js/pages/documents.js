/* =========================================================
   Page: documents.html (34-document spec suite browser)
   Client-side search, category filter chips, card grid and
   graceful empty state.
   Depends on: data.js, partials.js, ui.js
   ========================================================= */
'use strict';

(function () {

  const state = { q: '', cat: 'all' };

  /* ---------- Category filter chips ---------- */
  function renderChips() {
    const row = document.getElementById('chipRow');
    if (!row) return;
    const { CATS, DOCS } = window.BMCM;

    row.innerHTML = Object.entries(CATS).map(([key, c]) => {
      const count = key === 'all' ? DOCS.length : DOCS.filter(d => d.c === key).length;
      return `<button data-cat="${key}" class="chip flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition
        ${key === 'all' ? 'border-slate-600 bg-slate-800/80 text-slate-200' : 'border-slate-700 bg-slate-900/70 text-slate-400 hover:border-slate-500'}
        ${key === state.cat ? 'active' : ''}">
        <i class="fa-solid ${c.icon}"></i>${c.label}
        <span class="rounded-full bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">${count}</span>
      </button>`;
    }).join('');

    window.BMCM_UI.$$('#chipRow .chip').forEach(b =>
      b.addEventListener('click', () => { state.cat = b.dataset.cat; renderChips(); renderCards(); })
    );
  }

  /* ---------- Search + category filtering ---------- */
  function filteredDocs() {
    const q = state.q.trim().toLowerCase();
    const { DOCS, CATS } = window.BMCM;
    return DOCS.filter(d => {
      if (state.cat !== 'all' && d.c !== state.cat) return false;
      if (!q) return true;
      const hay = (d.t + ' ' + d.d + ' ' + CATS[d.c].label + ' ' + d.b.join(' ')).toLowerCase();
      return q.split(/\s+/).every(tok => hay.includes(tok));
    });
  }

  /* ---------- Card grid ---------- */
  function renderCards() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;
    const { CATS, MATURITY, LEVEL } = window.BMCM;
    const { esc, href } = window.BMCM_UI;

    const list = filteredDocs();
    document.getElementById('resultCount').innerHTML =
      `Showing <strong class="text-slate-300">${list.length}</strong> of ${window.BMCM.DOCS.length} documents` +
      (state.cat !== 'all' ? ` in <strong class="text-emerald-300">${esc(CATS[state.cat].label)}</strong>` : '') +
      (state.q.trim() ? ` matching “<strong class="text-slate-300">${esc(state.q.trim())}</strong>”` : '');

    document.getElementById('emptyState').classList.toggle('hidden', list.length > 0);

    grid.innerHTML = list.map((d, i) => {
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
    }).join('');
  }

  /* ---------- Wire up controls ---------- */
  function initControls() {
    const { $ } = window.BMCM_UI;
    const search = $('#searchInput'), clearBtn = $('#clearSearch');

    search.addEventListener('input', () => {
      state.q = search.value;
      clearBtn.classList.toggle('hidden', !search.value);
      renderCards();
    });
    search.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        search.value = ''; state.q = '';
        clearBtn.classList.add('hidden');
        renderCards();
      }
    });
    clearBtn.addEventListener('click', () => {
      search.value = ''; state.q = '';
      clearBtn.classList.add('hidden');
      renderCards();
      search.focus();
    });
    $('#resetFilters').addEventListener('click', () => {
      state.q = ''; state.cat = 'all';
      search.value = '';
      clearBtn.classList.add('hidden');
      renderChips();
      renderCards();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    BMCM_PARTIALS.injectChrome('documents');
    renderChips();
    renderCards();
    initControls();
    window.BMCM_UI.initSync();
  });
})();
