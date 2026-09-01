# Page: Tokenomics & Earnings — `tokenomics.html`

Category page for the 5 tokenomics documents. Hosts the **single-token 10-year simulator**.

**URL:** `/tokenomics.html` · **Data:** `BMCM.TOKEN_10YR`, `BMCM.CAT_PAGES.tokenomics` ·
**Widget script:** `assets/js/pages/categories.js → widgetTokenomics()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | From `BMCM.CAT_PAGES` |
| **Simulator** | `tkYear` (range 0–10), `tkYearLabel`, stat tiles `tkPrice` `tkFloor` `tkBacking` `tkDiv` `tkCum` `tkTotal` `tkRoi`, fixed `tkEntry` | Slider drives all tiles + table row highlight |
| Full model table (11 rows) | `tkTable` (rows carry `data-year`) | Static HTML; selected row gets `bg-emerald-500/10` + white text |
| Documents grid (5 cards) | `catCards` | |
| Pager | `catPager` | ← Whitepaper · → Land & Property Engines |

## Behaviour

`setYear(y)` reads `BMCM.TOKEN_10YR[y]` and updates:

- token price, circle-rate floor, land backing (sq cm)
- annual + cumulative cash dividends, total realized value, ROI multiple
- highlights the matching `tr[data-year]` in the table

Default state: Year 10 (₹4.448 + ₹3.180 = ₹7.628, 30.8x).

## Source documents

- [`Single_Token_Price_Calculation_Chart.html`](../doc.html?d=Single_Token_Price_Calculation_Chart.html) (full 11-row table)
- [`BhoomiMesh_10_Year_Token_Price_And_Market_Simulation.html`](../doc.html?d=BhoomiMesh_10_Year_Token_Price_And_Market_Simulation.html)
- [`BhoomiMesh_All_Stakeholders_Earnings_And_Incentive_Blueprint.html`](../doc.html?d=BhoomiMesh_All_Stakeholders_Earnings_And_Incentive_Blueprint.html)
- [`Dividend_Distribution_And_Portfolio_Scenarios_Guide.html`](../doc.html?d=Dividend_Distribution_And_Portfolio_Scenarios_Guide.html)
- [`Unallocated_Token_Treasury_And_Land_Appreciation_Unlocking_Engine.html`](../doc.html?d=Unallocated_Token_Treasury_And_Land_Appreciation_Unlocking_Engine.html)
