# Page: Strategy & Roadmap — `strategy.html`

Category page for the 3 strategy documents. Hosts a **3-tab execution explainer**:
24-month phases · 1-acre bootstrap · lean-vs-seed comparison, plus the freehold-first note.

**URL:** `/strategy.html` · **Data:** `BMCM.PHASES`, `BMCM.BOOTSTRAP_MONTHS`,
`BMCM.BOOTSTRAP_COMPARE` · **Widget:** `categories.js → widgetStrategy()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | |
| Inner tabs (group `str`) | `.inner-tab-btn` / `.inner-tab-panel` | Shared helper `initInnerTabs()` in categories.js |
| **Phases** — vertical timeline, P1–P6 | `strPhases` | Rendered from `BMCM.PHASES` (id, months, title, desc); links to `roadmap.html` |
| **Bootstrap** — Y1 month table | `strBoot` | `BMCM.BOOTSTRAP_MONTHS` (5 windows: M1–2 … M10–12) |
| **Compare** — 7-row table | `strComp` | `BMCM.BOOTSTRAP_COMPARE` (1-acre lean vs 10-acre seed) |
| Freehold-first card | — | Static: Y1–Y3 freehold + rent reinvested, portal opens Y4 |
| Documents grid (3 cards) | `catCards` | |
| Pager | `catPager` | ← Land Engines · → Investment & Finance |

## Data provenance

- `BMCM.PHASES` ← [`BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html`](../doc.html?d=BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html) (6 phase boxes)
- `BMCM.BOOTSTRAP_MONTHS` / `BMCM.BOOTSTRAP_COMPARE` ← [`1_Acre_Lean_Bootstrap_Plan.html`](../doc.html?d=1_Acre_Lean_Bootstrap_Plan.html) (month table + comparison table)
- Freehold card ← [`Freehold_First_3_Year_Strategy_Plan.html`](../doc.html?d=Freehold_First_3_Year_Strategy_Plan.html) (headings/structure; qualitative only)
