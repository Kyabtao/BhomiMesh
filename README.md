# BhoomiMesh

**BhoomiMesh ($BMCM)** — Real-World-Asset land tokenization protocol for India, minted on the sovereign
**GrinRex L1** blockchain ($GR). Every $BMCM token is backed by square centimeters of verified Indian land
(1 Acre = 40,468,564 sq cm = 40.4M $BMCM), with a 70/30 landowner split, 30-year leases and an 8% sinking reserve.

## 🌐 Demo Website

A fully working, responsive multi-page demo website — **no build step, ready to deploy as-is**
(e.g. GitHub Pages). Dark slate theme, Tailwind CSS (CDN), FontAwesome 6, pure vanilla JavaScript.

### Pages

| Page | What it has |
|---|---|
| `index.html` | Hero, animated **KPI counters** (34 docs · 9 categories · 120+ utilities · active tasks · land target · 30.8x ROI), **10-year $BMCM price chart** (pure SVG), 7-pillar audit summary |
| `documents.html` | **34-document spec browser** — live search, 9 category filter chips, cards with tool badges / maturity / edition tags, graceful empty state, direct links into `HST/` |
| `roadmap.html` | **Live milestone & task schedule** — tabbed 24-month roadmap (15 phases) + TGE pre-launch checklist (10 tasks), status badges (Completed / In Progress / On Hold / Not Started), status filters, progress bar |

Every page shares a sticky nav with the brand and a **manual sync/refresh button** (mock sync with
toast + "last synced" stamp).

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
├── documents.html        # Document suite browser page
├── roadmap.html          # Milestones & task schedule page
├── assets/
│   ├── css/site.css      # Shared custom styles
│   └── js/
│       ├── tailwind.config.js
│       ├── data.js       # Single source of truth: 34 docs, roadmap, checklist, pillars
│       ├── partials.js   # Shared nav / footer / toast
│       ├── ui.js         # Helpers, toast, KPI count-up, mock sync
│       ├── charts.js     # SVG price chart
│       └── pages/        # home.js · documents.js · roadmap.js
├── docs/                 # Site documentation (one file per page + 34 spec companions)
│   ├── README.md         # Structure, architecture, how to extend
│   ├── home.md · documents.md · roadmap.md
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
