# BhoomiMesh

**BhoomiMesh ($BMCM)** — Real-World-Asset land tokenization protocol for India, minted on the sovereign
**GrinRex L1** blockchain ($GR). Every $BMCM token is backed by square centimeters of verified Indian land
(1 Acre = 40,468,564 sq cm = 40.4M $BMCM), with a 70/30 landowner split, 30-year leases and an 8% sinking reserve.

## 🌐 Demo Website

A fully working, responsive multi-page demo website — **no build step, ready to deploy as-is**
(e.g. GitHub Pages). Dark slate theme, Tailwind CSS (CDN), FontAwesome 6, pure vanilla JavaScript.

### Pages (11 total)

| Page | What it has |
|---|---|
| `index.html` | Hero, animated **KPI counters** (34 docs · 9 categories · 120+ utilities · active tasks · land target · 30.8x ROI), **10-year $BMCM price chart** (pure SVG), explore grid, 7-pillar audit summary |
| `documents.html` | **34-document spec browser** — category tiles, live search, 9 filter chips, cards with tool badges / maturity / edition tags, graceful empty state, direct links into `HST/` |
| `whitepaper.html` | **70/30 landowner split calculator** — enter acres, see the live token split & TGE value |
| `tokenomics.html` | **10-year single-token simulator** — year slider drives price, dividends, ROI + full model table |
| `land.html` | **Land tokenization calculator** — acres → sq ft / sq cm / $BMCM tokens / ₹ value + deed-redemption & micro-fraction cards |
| `strategy.html` | **3-tab execution explorer** — 6-phase timeline, 1-acre Y1 bootstrap table, lean-vs-seed comparison + freehold-first note |
| `finance.html` | **3-tab financial explorer** — seed offering + use-of-funds bars, 5-year corporate P&L, 5-year investor pro-forma |
| `blockchain.html` | **$GR allocation explorer** — 1B supply, 5 pools with vesting + smart contracts & L1 feature reference |
| `compliance.html` | **12 stress-test accordions** grouped in 6 risk categories, each with its architectural solution |
| `ecosystem.html` | **120-utility browser** — 12 sector tabs + keyword search + 8 sub-token strip |
| `roadmap.html` | **Live milestone & task schedule** — tabbed 24-month roadmap (15 phases) + TGE pre-launch checklist (10 tasks), status badges, status filters, progress bar |

Every page shares a sticky nav (Categories dropdown on desktop, hamburger menu on mobile) with
the brand and a **manual sync/refresh button** (mock sync with toast + "last synced" stamp).
Every page — including all 8 category pages — has a documentation file in [`docs/`](docs/README.md).

### Run locally

```bash
cd BhomiMesh
python3 -m http.server 8080 --bind 0.0.0.0
# → http://localhost:8080            (home)
# → http://localhost:8080/documents.html
# → http://localhost:8080/roadmap.html
```

### Repository layout

```
├── index.html            # Home / dashboard page
├── documents.html        # Document suite browser (all 34 docs + category tiles)
├── whitepaper.html       # Category page: 70/30 split calculator
├── tokenomics.html       # Category page: 10-year token simulator
├── land.html             # Category page: land tokenization calculator
├── strategy.html         # Category page: phases / bootstrap / comparison
├── finance.html          # Category page: seed / P&L / investor model
├── blockchain.html       # Category page: $GR allocation explorer
├── compliance.html       # Category page: 12 stress-test accordions
├── ecosystem.html        # Category page: 120-utility browser
├── roadmap.html          # Milestones & task schedule page
├── assets/
│   ├── css/site.css      # Shared custom styles
│   └── js/
│       ├── tailwind.config.js
│       ├── data.js       # Single source of truth: 34 docs, roadmap, checklist, pillars,
│       │                 #   10-yr table, $GR allocation, stress tests, seed, P&L, …
│       ├── data-utilities.js  # 120 utilities (generated from HST catalog)
│       ├── partials.js   # Shared nav (dropdown + mobile menu) / footer / toast
│       ├── ui.js         # Helpers, shared doc-card template, toast, KPI, mock sync
│       ├── charts.js     # SVG price chart
│       └── pages/        # home.js · documents.js · roadmap.js · categories.js (all 8
│                         #   category pages + their widgets)
├── docs/                 # Site documentation (one file per page + 34 spec companions)
│   ├── README.md         # Structure, architecture, how to extend
│   ├── home.md · documents.md · roadmap.md
│   ├── whitepaper.md · tokenomics.md · land.md · strategy.md
│   ├── finance.md · blockchain.md · compliance.md · ecosystem.md
│   └── hst/              # Markdown companion for every HST spec document
└── HST/                  # 34 original spec documents (HTML) + Task.txt brief
```

### Key documents

[Master Project Index](HST/BhoomiMesh_BMCM_Complete_Project_Master_Index.html) ·
[Grand Master Whitepaper](HST/BhoomiMesh_BMCM_Grand_Master_Whitepaper.html) ·
[24-Month Roadmap & $GR Coin Plan](HST/BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html) ·
[120+ Utilities Catalog](HST/BhoomiMesh_100_Plus_Utilities_Master_List.html) ·
[Smart Contract Dev Guide](HST/BhoomiMesh_Smart_Contract_Code_And_Developer_Guide.html) ·
[Site documentation](docs/README.md)

> ⚠️ **Disclaimer:** This is a project-specification demo. Figures (prices, ROI, projections) come from the
> spec documents and are illustrative — not investment advice.
