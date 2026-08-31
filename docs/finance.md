# Page: Investment & Finance — `finance.html`

Category page for the 6 finance documents. Hosts a **3-tab financial explorer**:
Seed offering · Corporate P&L (5-yr) · Investor model (5-yr).

**URL:** `/finance.html` · **Data:** `BMCM.SEED`, `BMCM.P5Y`, `BMCM.INVESTOR_PROFORMA` ·
**Widget:** `categories.js → widgetFinance()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | |
| Inner tabs (group `fin`) | `.inner-tab-btn` / `.inner-tab-panel` | |
| **Seed offering** | 4 static tiles + `finUse` (use-of-funds bars) | Raise ₹12.50 Cr, post-money ₹41.50 Cr, seed price ₹0.160, 10-acre collateral; bars 80/10/10 from `BMCM.SEED.use` |
| **Corporate P&L** | `finP5y` | 5-year revenue stream table + gross + OpEx + EBITDA row, from `BMCM.P5Y`; negative Y1 EBITDA shown in orange |
| **Investor model** | `finInv` | 7 metric rows × Y1–Y5, from `BMCM.INVESTOR_PROFORMA`; Y5 column emphasized |
| Documents grid (6 cards) | `catCards` | |
| Pager | `catPager` | ← Strategy · → Blockchain & Dev |

## Data provenance

- `BMCM.SEED` ← `HST/BhoomiMesh_BMCM_Investor_Deck.html` (offering terms + use-of-funds diagram)
- `BMCM.P5Y` ← `HST/Company_Revenue_And_Profitability_Model.html` (5-year P&L table)
- `BMCM.INVESTOR_PROFORMA` ← `HST/BhoomiMesh_BMCM_Investor_Deck.html` (5-year returns table)
- Revenue stream list `BMCM.REVENUE_STREAMS` (used in page facts / docs) ← Company Revenue Model
