# BhoomiMesh Site Documentation

Documentation for the BhoomiMesh ($BMCM) demo website: site structure, architecture, per-page
reference and companion notes for every spec document in `HST/`.

## Site pages

| Page | URL | Documentation |
|---|---|---|
| Home / Dashboard | [../index.html](../index.html) | [home.md](home.md) |
| Documents (34-doc browser) | [../documents.html](../documents.html) | [documents.md](documents.md) |
| Roadmap & tasks | [../roadmap.html](../roadmap.html) | [roadmap.md](roadmap.md) |
| Spec archive (34 HTML docs) | [../HST/](../HST/) | [hst/](hst/) — one markdown companion per document |

## File tree

```
BhomiMesh/
├── index.html                  # Page 1 — Home: hero, KPIs, tokenomics chart, pillars
├── documents.html              # Page 2 — Document suite browser (search + filters + cards)
├── roadmap.html                # Page 3 — Milestones & task schedule (tabs + status board)
├── README.md                   # Repository readme
│
├── assets/
│   ├── css/
│   │   └── site.css            # Shared custom styles (grid bg, gradients, control states, animations)
│   └── js/
│       ├── tailwind.config.js  # Tailwind Play CDN config (Inter font) — load after the CDN
│       ├── data.js             # SINGLE SOURCE OF TRUTH: window.BMCM (docs, roadmap, checklist,
│       │                       #   pillars, categories, statuses, token price series)
│       ├── partials.js         # Shared page chrome: nav, footer, toast → window.BMCM_PARTIALS
│       ├── ui.js               # Shared utilities: esc/href, toast, KPI count-up, mock sync
│       ├── charts.js           # Pure-SVG 10-year price chart → window.BMCM_CHARTS
│       └── pages/
│           ├── home.js         # index.html behaviour
│           ├── documents.js    # documents.html behaviour (search, chips, cards, empty state)
│           └── roadmap.js      # roadmap.html behaviour (tabs, status filter, progress bar)
│
├── docs/                       # ← this folder (site documentation)
│   ├── README.md               # This file
│   ├── home.md                 # Page doc: index.html
│   ├── documents.md            # Page doc: documents.html
│   ├── roadmap.md              # Page doc: roadmap.html
│   └── hst/                    # Companion docs for all 34 HST spec documents
│
└── HST/                        # 34 original spec documents (HTML) + Task.txt brief
```

## Architecture

- **Static, zero-build.** No bundler, no backend, no framework. Pages are plain HTML + Tailwind
  (Play CDN) + FontAwesome 6 + vanilla JS. Deploys directly to GitHub Pages or any static host.
- **Single data source.** All content (34 documents, 15 roadmap phases, 10 checklist tasks,
  7 pillars, price series) lives in `assets/js/data.js` as `window.BMCM`. Pages never hard-code
  content — they render from this object.
- **Shared chrome.** Nav, footer and toast are injected by `assets/js/partials.js`
  (`BMCM_PARTIALS.injectChrome(activePage)`), so the three pages stay consistent. Works on
  `file://` too (no `fetch`).
- **Script load order (every page):** `data.js` → `partials.js` → `ui.js` → [page-specific:
  `charts.js`] → `assets/js/pages/<page>.js`. The Tailwind config script must load in `<head>`
  immediately after `https://cdn.tailwindcss.com`.
- **Styling convention.** Layout uses Tailwind utilities; the small number of stateful or
  repeated styles (`.chip.active`, `.tab-btn.active`, `#toast.show`, keyframes) live in
  `assets/css/site.css`.

## Running locally

```bash
cd BhomiMesh
python3 -m http.server 8080 --bind 0.0.0.0
# → http://localhost:8080  (home)
# → http://localhost:8080/documents.html
# → http://localhost:8080/roadmap.html
```

## Updating the site

| Change | Where |
|---|---|
| Add / edit a spec document card | `assets/js/data.js` → `DOCS` (add the HTML file to `HST/`, then a companion note in `docs/hst/`) |
| Add a roadmap phase / checklist task | `assets/js/data.js` → `ROADMAP` / `CHECKLIST` (status must be one of `completed`, `in-progress`, `on-hold`, `not-started`) |
| Add a category chip | `assets/js/data.js` → `CATS` (key + label + icon + color classes) |
| Change KPI numbers | the `data-target` attributes in `index.html` (keep consistent with `data.js`) |
| Token price series | `assets/js/data.js` → `PRICE` (11 points, Year 0–10, ₹) |
| Nav links / footer | `assets/js/partials.js` |

All figures come from the spec documents in `HST/` and are illustrative — educational demo,
not investment advice.
