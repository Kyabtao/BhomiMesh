/* =========================================================
   BhoomiMesh site — shared page chrome (nav / footer / toast)
   Each page contains <div id="siteNav"></div> and
   <div id="siteFooter"></div>; call injectChrome(activePage)
   on DOMContentLoaded to mount them. Works on file:// and http.
   ========================================================= */
'use strict';

(function () {

  const PAGES = [
    { id: 'home',      href: 'index.html',      label: 'Home' },
    { id: 'documents', href: 'documents.html',  label: 'All Documents' },
    { id: 'roadmap',   href: 'roadmap.html',    label: 'Roadmap' },
    { id: 'docs',      href: 'docs/README.md',  label: 'Docs' }
  ];

  const CATS_NAV = [
    { href: 'whitepaper.html', label: 'Whitepaper & Vision',     icon: 'fa-book-open' },
    { href: 'tokenomics.html', label: 'Tokenomics & Earnings',   icon: 'fa-chart-line' },
    { href: 'land.html',       label: 'Land & Property Engines', icon: 'fa-house-chimney' },
    { href: 'strategy.html',   label: 'Strategy & Roadmap',      icon: 'fa-route' },
    { href: 'finance.html',    label: 'Investment & Finance',    icon: 'fa-hand-holding-dollar' },
    { href: 'blockchain.html', label: 'Blockchain & Dev',        icon: 'fa-cubes' },
    { href: 'compliance.html', label: 'Compliance & Risk',       icon: 'fa-shield-halved' },
    { href: 'ecosystem.html',  label: 'Ecosystem & Utilities',   icon: 'fa-satellite-dish' }
  ];

  const navLink = (href, label, active) =>
    `<a href="${href}" class="transition ${active ? 'text-emerald-300' : 'text-slate-300 hover:text-emerald-300'}">${label}</a>`;

  const mLink = (href, icon, label, active) =>
    `<a href="${href}" class="flex items-center gap-2 rounded-lg px-3 py-2 transition ${active ? 'bg-emerald-500/10 text-emerald-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}">
      <i class="fa-solid ${icon} w-4 ${active ? 'text-emerald-400' : 'text-slate-500'}"></i>${label}</a>`;

  const NAV_HTML = (active) => `
  <nav class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
      <a href="index.html" class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-amber-500 shadow-lg shadow-emerald-900/50">
          <i class="fa-solid fa-earth-asia text-white"></i>
        </span>
        <span class="leading-tight">
          <span class="block text-base font-extrabold tracking-tight text-white">BhoomiMesh</span>
          <span class="block text-[11px] font-semibold uppercase tracking-widest text-emerald-400/90">$BMCM · GrinRex L1</span>
        </span>
      </a>
      <div class="hidden items-center gap-6 text-sm font-medium lg:flex">
        ${navLink('index.html', 'Home', active === 'home')}
        <div class="group relative">
          <button class="flex items-center gap-1.5 transition ${active === 'categories' ? 'text-emerald-300' : 'text-slate-300 hover:text-emerald-300'}">
            Categories <i class="fa-solid fa-chevron-down text-[10px]"></i>
          </button>
          <div class="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
            <div class="w-64 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl shadow-slate-950">
              <a href="documents.html" class="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
                <span class="flex items-center gap-2.5"><i class="fa-solid fa-border-all w-4 text-slate-400"></i>All Documents</span>
                <span class="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">${window.BMCM.DOCS.length}</span>
              </a>
              <div class="mx-3 my-1.5 border-t border-slate-800"></div>
              ${CATS_NAV.map(c => `
              <a href="${c.href}" class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white">
                <i class="fa-solid ${c.icon} w-4 text-slate-500"></i>${c.label}
              </a>`).join('')}
            </div>
          </div>
        </div>
        ${navLink('roadmap.html', 'Roadmap', active === 'roadmap')}
        ${navLink('docs/README.md', 'Docs', active === 'docs')}
      </div>
      <div class="flex items-center gap-3">
        <span id="lastSync" class="hidden text-xs text-slate-500 sm:block">Not synced yet</span>
        <button id="syncBtn" class="flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50">
          <i id="syncIcon" class="fa-solid fa-rotate text-xs"></i><span id="syncLabel">Sync Docs</span>
        </button>
        <button id="menuBtn" class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 transition hover:text-white lg:hidden" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="hidden border-t border-slate-800 bg-slate-950/95 px-4 py-4 lg:hidden">
      <div class="grid grid-cols-2 gap-1.5 text-sm font-medium">
        ${mLink('index.html', 'fa-house', 'Home', active === 'home')}
        ${mLink('documents.html', 'fa-border-all', 'All Documents', active === 'documents')}
        ${CATS_NAV.map(c => mLink(c.href, c.icon, c.label, false)).join('')}
        ${mLink('roadmap.html', 'fa-route', 'Roadmap', active === 'roadmap')}
        ${mLink('docs/README.md', 'fa-circle-question', 'Docs', active === 'docs')}
      </div>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer class="border-t border-slate-800/80 bg-slate-950">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-3">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-amber-500"><i class="fa-solid fa-earth-asia text-sm text-white"></i></span>
          <span class="text-base font-extrabold text-white">BhoomiMesh <span class="text-xs font-bold text-emerald-400">($BMCM)</span></span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-slate-500">
          Real-world-asset land tokenization protocol. Every $BMCM token is backed by square centimeters of
          verified Indian land, minted on the sovereign GrinRex L1 ($GR) blockchain.
        </p>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Site Pages</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-500">
          <li><a href="index.html" class="hover:text-emerald-300">Home — Overview, KPIs &amp; Economics</a></li>
          <li><a href="documents.html" class="hover:text-emerald-300">Documents — ${window.BMCM.DOCS.length} spec suite browser</a></li>
          <li><a href="roadmap.html" class="hover:text-emerald-300">Roadmap — Milestones &amp; tasks</a></li>
          <li><a href="docs/README.md" class="hover:text-emerald-300">Docs — Site documentation</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400">Key Spec Documents</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-500">
          <li><a class="hover:text-emerald-300" href="doc.html?d=BhoomiMesh_BMCM_Complete_Project_Master_Index.html"><i class="fa-solid fa-compass mr-2 text-emerald-500"></i>Master Project Index</a></li>
          <li><a class="hover:text-emerald-300" href="doc.html?d=BhoomiMesh_BMCM_Grand_Master_Whitepaper.html"><i class="fa-solid fa-book-open mr-2 text-emerald-500"></i>Grand Master Whitepaper</a></li>
          <li><a class="hover:text-emerald-300" href="doc.html?d=BhoomiMesh_BMCM_Investor_Deck.html"><i class="fa-solid fa-hand-holding-dollar mr-2 text-emerald-500"></i>Investor Deck</a></li>
          <li><a class="hover:text-emerald-300" href="doc.html?d=BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html"><i class="fa-solid fa-route mr-2 text-emerald-500"></i>24-Month Roadmap</a></li>
          <li><a class="hover:text-emerald-300" href="doc.html?d=BhoomiMesh_100_Plus_Utilities_Master_List.html"><i class="fa-solid fa-list-check mr-2 text-emerald-500"></i>120+ Utilities Catalog</a></li>
          <li><a class="hover:text-emerald-300" href="doc.html?d=BhoomiMesh_Smart_Contract_Code_And_Developer_Guide.html"><i class="fa-solid fa-code mr-2 text-emerald-500"></i>Smart Contract Dev Guide</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800/80">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-600 sm:flex-row sm:px-6">
        <span>© 2026 BhoomiMesh Protocol · GrinRex Technologies Ltd · Demo dashboard — educational use, not investment advice.</span>
        <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="text-slate-500 transition hover:text-emerald-300"><i class="fa-solid fa-arrow-up mr-1"></i>Back to top</button>
      </div>
    </div>
  </footer>`;

  const TOAST_HTML = `
  <div id="toast" class="pointer-events-none fixed bottom-6 right-6 z-[60] flex -translate-x-4 items-center gap-3 rounded-xl border border-emerald-500/40 bg-slate-900/95 px-4 py-3 opacity-0 shadow-2xl shadow-emerald-950/50 transition-all duration-300" role="status">
    <span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15"><i id="toastIcon" class="fa-solid fa-circle-check text-emerald-400"></i></span>
    <span class="text-sm font-semibold text-slate-200" id="toastMsg">Synced</span>
  </div>`;

  function injectChrome(activePage) {
    const navHost = document.getElementById('siteNav');
    const footHost = document.getElementById('siteFooter');
    if (navHost) navHost.outerHTML = NAV_HTML(activePage);
    if (footHost) footHost.outerHTML = FOOTER_HTML;
    document.body.insertAdjacentHTML('beforeend', TOAST_HTML);

    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
        menuBtn.firstElementChild.className =
          menu.classList.contains('hidden') ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
      });
    }
  }

  window.BMCM_PARTIALS = { injectChrome, PAGES };
})();
