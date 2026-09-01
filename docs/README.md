# BhoomiMesh Site Documentation

Documentation for the BhoomiMesh ($BMCM) demo website: site structure, architecture, per-page
reference and companion notes for every spec document in `HST/`.

## Site pages

| Page | URL | Documentation |
|---|---|---|
| Home / Dashboard | [../index.html](../index.html) | [home.md](home.md) |
| Documents (28-doc browser + category tiles) | [../documents.html](../documents.html) | [documents.md](documents.md) |
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
| Spec archive (28 HTML docs) | [../HST/](../HST/) | [hst/](hst/) — one markdown companion per document |

## File tree

```
BhomiMesh/
├── index.html                  # Page 1 — Home: hero, KPIs, price chart, explore grid, pillars
├── documents.html              # Page 2 — Document suite browser (tiles, search, chips, cards)
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
│   │   └── site.css            # Shared custom styles (grid bg, gradients, control states, animations)
│   └── js/
│       ├── tailwind.config.js  # Tailwind Play CDN config (Inter font) — load after the CDN
│       ├── data.js             # SINGLE SOURCE OF TRUTH: window.BMCM (docs, roadmap, checklist,
│       │                       #   pillars, categories, statuses, price series, 10-yr table,
│       │                       #   $GR allocation, stress tests, phases, seed, P&L, pro-forma,
│       │                       #   category-page registry)
│       ├── data-utilities.js   # window.BMCM_UTILITIES — 120 utilities (generated from HST)
│       ├── partials.js         # Shared page chrome: nav (dropdown + mobile menu), footer, toast
│       ├── ui.js               # Shared utilities: esc/href, toast, doc card template, KPI, sync
│       ├── charts.js           # Pure-SVG 10-year price chart → window.BMCM_CHARTS
│       └── pages/
│           ├── home.js         # index.html behaviour
│           ├── documents.js    # documents.html behaviour
│           ├── roadmap.js      # roadmap.html behaviour
│           └── categories.js   # Engine powering ALL 8 category pages + their widgets
│
├── docs/                       # ← this folder (site documentation)
│   ├── README.md               # This file
│   ├── home.md · documents.md · roadmap.md     # Page docs (core pages)
│   ├── whitepaper.md · tokenomics.md · land.md · strategy.md
│   ├── finance.md · blockchain.md · compliance.md · ecosystem.md  # Page docs (category pages)
│   └── hst/                    # Companion docs for all 28 HST spec documents
│
└── HST/                        # 28 original spec documents (HTML) + Task.txt brief
```

## Architecture

- **Static, zero-build.** No bundler, no backend, no framework. Pages are plain HTML + Tailwind
  (Play CDN) + FontAwesome 6 + vanilla JS. Deploys directly to GitHub Pages or any static host.
- **Single data source.** All content (28 documents, 15 roadmap phases, 10 checklist tasks,
  7 pillars, price series) lives in `assets/js/data.js` as `window.BMCM`. Pages never hard-code
  content — they render from this object.
- **Shared chrome.** Nav (with Categories dropdown on desktop + hamburger menu on mobile),
  footer and toast are injected by `assets/js/partials.js`
  (`BMCM_PARTIALS.injectChrome(activePage)`), so all 11 pages stay consistent. Works on
  `file://` too (no `fetch`).
- **Category page engine.** All 8 category pages (`whitepaper.html` … `ecosystem.html`) are
  thin HTML shells with `<body data-cat="…">`; `assets/js/pages/categories.js` mounts the
  shared header/facts/cards/pager and dispatches to one widget function per category
  (calculators, simulator, tabs, accordions, utility browser). Adding a 9th category page
  = new HTML shell + one entry in `BMCM.CAT_PAGES` + one widget function.
- **Script load order (every page):** `data.js` → [`data-utilities.js`] → `partials.js` →
  `ui.js` → [page-specific: `charts.js`] → `assets/js/pages/<page>.js`. The Tailwind config
  script must load in `<head>` immediately after `https://cdn.tailwindcss.com`.
- **Styling convention.** Layout uses Tailwind utilities; the small number of stateful or
  repeated styles (`.chip.active`, `.tab-btn.active`, `#toast.show`, keyframes) live in
  `assets/css/site.css`.

## Running locally

```bash
cd BhomiMesh
python3 -m http.server 8080 --bind 0.0.0.0
# → http://localhost:8080            (home)
# → http://localhost:8080/documents.html   (all 28 docs)
# → http://localhost:8080/whitepaper.html · tokenomics.html · land.html ·
#     strategy.html · finance.html · blockchain.html · compliance.html · ecosystem.html
# → http://localhost:8080/roadmap.html
```

## Updating the site

| Change | Where |
|---|---|
| Add / edit a spec document card | `assets/js/data.js` → `DOCS` (add the HTML file to `HST/`, then a companion note in `docs/hst/`) |
| Add a roadmap phase / checklist task | `assets/js/data.js` → `ROADMAP` / `CHECKLIST` (status must be one of `completed`, `in-progress`, `on-hold`, `not-started`) |
| Add a category chip / nav entry | `assets/js/data.js` → `CATS` (key + label + icon + colors) and `assets/js/partials.js` → `CATS_NAV` |
| Add a category page | new `xxx.html` shell (copy any category page, set `<body data-cat>`), `BMCM.CAT_PAGES` entry in `data.js`, widget in `assets/js/pages/categories.js` |
| Edit a category widget | `assets/js/pages/categories.js` → `widgetXxx()` |
| Utility catalog (120) | `assets/js/data-utilities.js` — regenerate from `HST/BhoomiMesh_100_Plus_Utilities_Master_List.html` if it changes |
| Change KPI numbers | the `data-target` attributes in `index.html` (keep consistent with `data.js`) |
| Token price series | `assets/js/data.js` → `PRICE` (chart) and `TOKEN_10YR` (simulator table) |
| Nav links / footer / mobile menu | `assets/js/partials.js` |

All figures come from the spec documents in `HST/` and are illustrative — educational demo,
not investment advice.
