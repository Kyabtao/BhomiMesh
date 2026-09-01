# BhoomiMesh Site Documentation

Documentation for the BhoomiMesh ($BMCM) demo website: site structure, architecture, per-page
reference and companion notes for every spec document (now embedded directly into the site).

## Site pages

| Page | URL | Documentation |
|---|---|---|
| Home / Dashboard | [../index.html](../index.html) | [home.md](home.md) |
| Documents (28-doc browser + category tiles) | [../documents.html](../documents.html) | [documents.md](documents.md) |
| Unified spec viewer | [../doc.html?d=BhoomiMesh_BMCM_Complete_Project_Master_Index.html](../doc.html?d=BhoomiMesh_BMCM_Complete_Project_Master_Index.html) | per-doc companions in [hst/](hst/) |
| **Whitepaper & Vision** — 70/30 split calculator | [../whitepaper.html](../whitepaper.html) | [whitepaper.md](whitepaper.md) |
| **Tokenomics & Earnings** — 10-year token simulator | [../tokenomics.html](../tokenomics.html) | [tokenomics.md](tokenomics.md) |
| **Land & Property Engines** — land tokenization calculator | [../land.html](../land.html) | [land.md](land.md) |
| **Strategy & Roadmap** — phases, bootstrap, comparison tabs | [../strategy.html](../strategy.html) | [strategy.md](strategy.md) |
| **Investment & Finance** — seed, P&L, investor model tabs | [../finance.html](../finance.html) | [finance.md](finance.md) |
| **Blockchain & Development** — $GR allocation explorer | [../blockchain.html](../blockchain.html) | [blockchain.md](blockchain.md) |
| **Compliance & Risk** — 12 stress-test accordions | [../compliance.html](../compliance.html) | [compliance.md](compliance.md) |
| **Ecosystem & Utilities** — 120-utility browser | [../ecosystem.html](../ecosystem.html) | [ecosystem.md](ecosystem.md) |
| Roadmap & tasks (live tracker) | [../roadmap.html](../roadmap.html) | [roadmap.md](roadmap.md) |
| 404 dead-end page | [../404.html](../404.html) | [404.md](404.md) |

## File tree

```
BhomiMesh/
├── index.html                  # Page 1 — Home: hero, KPIs, price chart, explore grid, pillars
├── documents.html              # Page 2 — Document suite browser (tiles, search, chips, cards)
├── doc.html                    # Page — Unified spec viewer (renders any of the 28 docs via ?d=)
├── whitepaper.html             # Page 3 — Category: 70/30 split calculator
├── tokenomics.html             # Page 4 — Category: 10-year single-token simulator
├── land.html                   # Page 5 — Category: land tokenization calculator
├── strategy.html               # Page 6 — Category: phases / bootstrap / comparison tabs
├── finance.html                # Page 7 — Category: seed / corporate P&L / investor tabs
├── blockchain.html             # Page 8 — Category: $GR allocation explorer
├── compliance.html             # Page 9 — Category: 12 stress-test accordions
├── ecosystem.html              # Page 10 — Category: 120-utility browser
├── roadmap.html                # Page 11 — Milestones & task schedule (tabs + status board)
├── 404.html                    # Dead-end page (works with zero JS)
├── README.md                   # Repository readme
│
├── assets/
│   ├── css/
│   │   └── site.css            # Shared custom styles (grid bg, gradients, control states, animations, doc viewer)
│   └── js/
│       ├── tailwind.config.js  # Tailwind Play CDN config (Inter font) — load after the CDN
│       ├── data.js             # SINGLE SOURCE OF TRUTH: window.BMCM (docs metadata, roadmap, checklist,
│       │                       #   pillars, categories, statuses, price series, 10-yr table,
│       │                       #   $GR allocation, stress tests, phases, seed, P&L, pro-forma,
│       │                       #   category-page registry)
│       ├── data-docs.js        # window.BMCM_DOCS — Tailwind-styled HTML fragment for each of the 28 spec docs
│       ├── data-utilities.js   # window.BMCM_UTILITIES — 120 utilities
│       ├── partials.js         # Shared page chrome: nav (dropdown + mobile menu), footer, toast
│       ├── ui.js               # Shared utilities: esc/href, toast, doc card template, KPI, sync
│       ├── charts.js           # Pure-SVG 10-year price chart → window.BMCM_CHARTS
│       └── pages/
│           ├── home.js         # index.html behaviour
│           ├── documents.js    # documents.html behaviour
│           ├── doc.js          # doc.html behaviour (query-string driven viewer)
│           ├── roadmap.js      # roadmap.html behaviour
│           └── categories.js   # Engine powering ALL 8 category pages + their widgets
│
└── docs/                       # ← this folder (site documentation)
    ├── README.md               # This file
    ├── home.md · documents.md · roadmap.md     # Page docs (core pages)
    ├── whitepaper.md · tokenomics.md · land.md · strategy.md
    ├── finance.md · blockchain.md · compliance.md · ecosystem.md  # Page docs (category pages)
    └── hst/                    # Companion notes for all 28 spec documents
```

## Architecture

- **Static, zero-build.** No bundler, no backend, no framework. Pages are plain HTML + Tailwind
  (Play CDN) + FontAwesome 6 + vanilla JS. Deploys directly to GitHub Pages or any static host.
- **Single data source.** All metadata (28 document cards, 15 roadmap phases, 10 checklist tasks,
  7 pillars, price series) lives in `assets/js/data.js` as `window.BMCM`. The rendered body of
  each spec document lives in `assets/js/data-docs.js` as `window.BMCM_DOCS` (Tailwind-styled
  HTML fragments). Pages never hard-code content — they render from these objects.
- **Shared chrome.** Nav (with Categories dropdown on desktop + hamburger menu on mobile),
  footer and toast are injected by `assets/js/partials.js`
  (`BMCM_PARTIALS.injectChrome(activePage)`), so all pages stay consistent. Works on
  `file://` too (no `fetch`).
- **Category page engine.** All 8 category pages (`whitepaper.html` … `ecosystem.html`) are
  thin HTML shells with `<body data-cat="…">`; `assets/js/pages/categories.js` mounts the
  shared header/facts/cards/pager and dispatches to one widget function per category
  (calculators, simulator, tabs, accordions, utility browser). Adding a 9th category page
  = new HTML shell + one entry in `BMCM.CAT_PAGES` + one widget function.
- **Document viewer.** `doc.html` reads the `?d=<filename>` query parameter, looks up
  `BMCM.DOCS` for the metadata (title, badges, category) and `BMCM_DOCS[f]` for the body,
  and renders everything with the site chrome, prev/next pager and a jump-to dropdown.
- **Script load order (every page):** `data.js` → [`data-docs.js` / `data-utilities.js`] →
  `partials.js` → `ui.js` → [page-specific: `charts.js`] → `assets/js/pages/<page>.js`.
  The Tailwind config script must load in `<head>` immediately after `https://cdn.tailwindcss.com`.
- **Styling convention.** Layout uses Tailwind utilities; the small number of stateful or
  repeated styles (`.chip.active`, `.tab-btn.active`, `#toast.show`, keyframes, doc viewer)
  live in `assets/css/site.css`.

## Running locally

```bash
cd BhomiMesh
python3 -m http.server 8080 --bind 0.0.0.0
# → http://localhost:8080            (home)
# → http://localhost:8080/documents.html   (all 28 docs)
# → http://localhost:8080/doc.html?d=...    (unified viewer for any spec)
# → http://localhost:8080/whitepaper.html · tokenomics.html · land.html ·
#     strategy.html · finance.html · blockchain.html · compliance.html · ecosystem.html
# → http://localhost:8080/roadmap.html
```

## Updating the site

| Change | Where |
|---|---|
| Add / edit a spec document card | `assets/js/data.js` → `DOCS`; add the rendered body fragment to `assets/js/data-docs.js` under `DOC_HTML[filename]`; add a companion note in `docs/hst/` |
| Edit a spec document body | Update the HTML fragment in `assets/js/data-docs.js` (`BMCM_DOCS[filename]`) |
| Add a roadmap phase / checklist task | `assets/js/data.js` → `ROADMAP` / `CHECKLIST` (status must be one of `completed`, `in-progress`, `on-hold`, `not-started`) |
| Add a category chip / nav entry | `assets/js/data.js` → `CATS` (key + label + icon + colors) and `assets/js/partials.js` → `CATS_NAV` |
| Add a category page | new `xxx.html` shell (copy any category page, set `<body data-cat>`), `BMCM.CAT_PAGES` entry in `data.js`, widget in `assets/js/pages/categories.js` |
| Edit a category widget | `assets/js/pages/categories.js` → `widgetXxx()` |
| Utility catalog (120) | `assets/js/data-utilities.js` |
| Change KPI numbers | the `data-target` attributes in `index.html` (keep consistent with `data.js`) |
| Token price series | `assets/js/data.js` → `PRICE` (chart) and `TOKEN_10YR` (simulator table) |
| Nav links / footer / mobile menu | `assets/js/partials.js` |

All figures come from the embedded spec documents and are illustrative — educational demo,
not investment advice.
