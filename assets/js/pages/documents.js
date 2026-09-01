/* =========================================================
   Page: documents.html (28-document spec suite browser)
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

  /* ---------- Card grid (template shared via BMCM_UI.docCardHTML) ---------- */
  function renderCards() {
    const grid = document.getElementById('cardsGrid');
    if (!grid) return;
    const { CATS } = window.BMCM;
    const { esc, docCardHTML } = window.BMCM_UI;

    const list = filteredDocs();
    document.getElementById('resultCount').innerHTML =
      `Showing <strong class="text-slate-300">${list.length}</strong> of ${window.BMCM.DOCS.length} documents` +
      (state.cat !== 'all' ? ` in <strong class="text-emerald-300">${esc(CATS[state.cat].label)}</strong>` : '') +
      (state.q.trim() ? ` matching “<strong class="text-slate-300">${esc(state.q.trim())}</strong>”` : '');

    document.getElementById('emptyState').classList.toggle('hidden', list.length > 0);
    grid.innerHTML = list.map(docCardHTML).join('');
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

  /* ---------- Category tiles (links to dedicated category pages) ---------- */
  function renderCatTiles() {
    const host = document.getElementById('catTiles');
    if (!host) return;
    const { CATS, DOCS } = window.BMCM;
    const { esc } = window.BMCM_UI;
    const cats = ['whitepaper', 'tokenomics', 'land', 'strategy', 'finance', 'blockchain', 'compliance', 'ecosystem'];
    host.innerHTML = cats.map(cat => {
      const c = CATS[cat];
      const n = DOCS.filter(d => d.c === cat).length;
      return `<a href="${cat}.html" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 transition hover:-translate-y-0.5 hover:border-emerald-500/40">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${c.tile} text-sm text-white"><i class="fa-solid ${c.icon}"></i></span>
        <span class="min-w-0">
          <span class="block truncate text-[13px] font-bold text-slate-200 group-hover:text-emerald-200">${esc(c.label)}</span>
          <span class="block text-[11px] text-slate-500">${n} docs · open page <i class="fa-solid fa-arrow-right text-[9px]"></i></span>
        </span>
      </a>`;
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    BMCM_PARTIALS.injectChrome('documents');
    renderCatTiles();
    renderChips();
    renderCards();
    initControls();
    window.BMCM_UI.initSync();
  });
})();
