# Page: Home / Dashboard — `index.html`

The landing page of the BhoomiMesh site. Introduces the protocol, shows headline KPIs, the
10-year single-token price chart, quick entry points to the other pages and the 7-pillar audit
summary.

**URL:** `/index.html` (site root) · **Doc:** this file · **Scripts:** `data.js`, `partials.js`,
`ui.js`, `charts.js`, `pages/home.js`

## Sections (top → bottom)

| # | Section | Element IDs | Rendered by |
|---|---|---|---|
| 1 | **Nav** (sticky) — brand, page links, last-synced stamp, Sync button | `siteNav`, `syncBtn`, `lastSync` | `partials.js` (injected) |
| 2 | **Hero** — badge, headline, protocol summary, CTA buttons (→ documents / roadmap), protocol-fact chips, 4 supply/pricing stat tiles | — | static HTML |
| 3 | **KPI cards** (6, animated count-up) — 28 docs · 9 categories · 120+ utilities · 8 active tasks · 50-acre M12 land target · 30.8x ROI | `kpiGrid`, `.kpi-num[data-target]` | `ui.js` → `animateKPIs()` |
| 4 | **Token economics** — single-token 10-year lifecycle copy, 3 exit-stat tiles, SVG price chart | `priceChart` | `charts.js` → `buildPriceChart()` |
| 5 | **Page shortcuts** — two link cards to `documents.html` and `roadmap.html` | — | static HTML |
| 6 | **7 Core Pillars** — audit-pillar cards + final audit result banner | `pillarGrid` | `pages/home.js` → `renderPillars()` |
| 7 | **Footer** — about, site pages, key spec docs, disclaimer | `siteFooter` | `partials.js` (injected) |
| 8 | **Toast** — bottom-right notification | `toast`, `toastMsg`, `toastIcon` | `partials.js` (injected) |

## Behaviour

- **KPI count-up:** each `.kpi-num` counts from 0 to its `data-target` (cubic ease-out, 1.3 s)
  when scrolled ≥ 40% into view (`IntersectionObserver`). `data-decimals="1"` enables decimals
  (used by the 30.8x ROI card).
- **Price chart:** pure SVG (no library). Y grid at ₹1–₹4, area fill gradient, line + hoverable
  points (`<title>` tooltips per year), gold labels at Y0 / Y3 / Y5 / Y10. Data: `BMCM.PRICE`
  (11 points from `Single_Token_Price_Calculation_Chart.html`).
- **Sync button (mock):** spinner + "Syncing…" for 1.1 s → KPI grid flashes, nav shows
  "Synced HH:MM:SS", toast reports `28 documents re-verified · 25 tasks reconciled · 8 active`,
  then dispatches a `bmcm:synced` DOM event (home re-flashes the KPI grid).
- **Pillars:** 7 cards rendered from `BMCM.PILLARS`, each stamped *Verified*.

## Data used (from `assets/js/data.js`)

`BMCM.PILLARS` (7 items), `BMCM.PRICE` (11 values), `BMCM.DOCS.length` / `ROADMAP` / `CHECKLIST`
(sync toast counts). KPI targets are static `data-target` attributes in this page.

## Extending

- Add a KPI card: clone a `.kpi` block, set `data-target` (and `data-decimals` if needed) —
  the count-up picks it up automatically.
- Add a pillar: append to `BMCM.PILLARS` in `data.js`.
- Change chart style: edit `buildPriceChart` in `assets/js/charts.js` only.
