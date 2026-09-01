/* =========================================================
   Page: doc.html — unified viewer for all 28 spec documents.
   Reads doc filename from ?d= query param, renders BMCM_DOCS[f]
   with site chrome (nav/footer) and prev/next pager.
   ========================================================= */
'use strict';

(function () {

  const { $, esc } = window.BMCM_UI;

  function currentFile() {
    const u = new URL(window.location.href);
    const f = u.searchParams.get('d');
    const docs = window.BMCM.DOCS;
    if (f && docs.some(d => d.f === f)) return f;
    return docs[0].f;
  }

  function render(f) {
    const { DOCS, CATS, MATURITY, LEVEL } = window.BMCM;
    const doc = DOCS.find(d => d.f === f);
    if (!doc) return;
    const c = CATS[doc.c], mat = MATURITY[doc.m];

    document.title = `${doc.t} — BhoomiMesh ($BMCM)`;

    // badges
    $('#docBadges').innerHTML = `
      <span class="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${c.tag}"><i class="fa-solid ${c.icon} mr-1"></i>${esc(c.label)}</span>
      <span class="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold ${mat.cls}"><span class="h-1.5 w-1.5 rounded-full ${mat.dot}"></span>${esc(doc.m)}</span>
      <span class="rounded-md border px-1.5 py-0.5 text-[10px] font-bold ${LEVEL[doc.l]}">${esc(doc.l)}</span>
      ${doc.b.map(b => `<span class="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300">${esc(b)}</span>`).join('')}
    `;

    $('#docHeading').innerHTML = `
      <h1 class="text-3xl font-extrabold text-white sm:text-4xl">${esc(doc.t)}</h1>
      <p class="mt-2 max-w-3xl text-sm text-slate-400">${esc(doc.d)}</p>
    `;

    const idx = DOCS.findIndex(d => d.f === f);
    $('#docCount').innerHTML = `Document <strong class="text-slate-300">${idx + 1}</strong> of ${DOCS.length} in the suite`;

    // populate jump dropdown
    const sel = $('#docJump');
    const prevSel = sel.value;
    sel.innerHTML = DOCS.map((d, i) => `<option value="${esc(d.f)}"${d.f === f ? ' selected' : ''}>${i + 1}. ${esc(d.t)}</option>`).join('');
    if (prevSel && prevSel !== f) {
      // noop
    }

    // body
    const html = (window.BMCM_DOCS && window.BMCM_DOCS[f]) || '';
    $('#docBody').innerHTML = html || `
      <div class="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-6 py-12 text-center text-slate-500">
        <i class="fa-solid fa-file-circle-exclamation text-2xl"></i>
        <p class="mt-3">Document content not found.</p>
      </div>`;

    // pager
    const prev = DOCS[idx - 1];
    const next = DOCS[idx + 1];
    $('#docPager').innerHTML = `
      ${prev ? `<a href="doc.html?d=${encodeURIComponent(prev.f)}" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm transition hover:border-emerald-500/40">
        <i class="fa-solid fa-arrow-left text-slate-600 group-hover:text-emerald-300"></i>
        <span class="min-w-0">
          <span class="block text-[11px] uppercase tracking-wider text-slate-500">Previous</span>
          <span class="block truncate font-semibold text-slate-200 group-hover:text-emerald-200">${esc(prev.t)}</span>
        </span>
      </a>` : `<a href="documents.html" class="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm transition hover:border-emerald-500/40">
        <i class="fa-solid fa-arrow-left text-slate-600 group-hover:text-emerald-300"></i>
        <span class="block font-semibold text-slate-200 group-hover:text-emerald-200">All Documents</span>
      </a>`}
      ${next ? `<a href="doc.html?d=${encodeURIComponent(next.f)}" class="group flex items-center justify-end gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm transition hover:border-emerald-500/40">
        <span class="min-w-0 text-right">
          <span class="block text-[11px] uppercase tracking-wider text-slate-500">Next</span>
          <span class="block truncate font-semibold text-slate-200 group-hover:text-emerald-200">${esc(next.t)}</span>
        </span>
        <i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-emerald-300"></i>
      </a>` : `<a href="roadmap.html" class="group flex items-center justify-end gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm transition hover:border-emerald-500/40">
        <span class="block font-semibold text-slate-200 group-hover:text-emerald-200">Roadmap &amp; Tasks</span>
        <i class="fa-solid fa-arrow-right text-slate-600 group-hover:text-emerald-300"></i>
      </a>`}
    `;

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  document.addEventListener('DOMContentLoaded', () => {
    BMCM_PARTIALS.injectChrome('doc');
    const f = currentFile();
    render(f);

    $('#docJump').addEventListener('change', e => {
      const nf = e.target.value;
      const url = new URL(window.location.href);
      url.searchParams.set('d', nf);
      history.pushState({ f: nf }, '', url.toString());
      render(nf);
    });

    window.addEventListener('popstate', () => render(currentFile()));

    window.BMCM_UI.initSync();
  });
})();
