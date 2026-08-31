# Page: Land & Property Engines — `land.html`

Category page for the 5 land/property engine documents. Hosts the **land tokenization calculator**.

**URL:** `/land.html` · **Data:** `BMCM.TOKENS_PER_ACRE`, `BMCM.SQFT_PER_ACRE`,
`BMCM.TGE_PRICE` · **Widget:** `categories.js → widgetLand()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | |
| **Calculator** | `ldAcres` (input, default 1), `ldSqft`, `ldSqcm`, `ldTokens`, `ldValue` | Acres → sq ft / sq cm / tokens / TGE value |
| Side cards | — | "Burn-and-Claim Deed" (40,468,564 tokens → 1 acre title) and "₹10 micro-fraction" entry |
| Documents grid (5 cards) | `catCards` | |
| Pager | `catPager` | ← Tokenomics · → Strategy & Roadmap |

## Calculator logic

```
sqft   = acres × 43,560
sqcm   = acres × 40,468,564
tokens = sqcm                  (1 $BMCM = 1 sq cm)
value  = tokens × ₹0.247
```

## Source documents

- `HST/Valuation_Weighted_Land_Lease_Tokenization_Engine.html`
- `HST/Agricultural_Land_Monetization_And_Compliance_Engine.html`
- `HST/Residential_Flats_And_Housing_Tokenization_Engine.html` ($SMART-HOMES)
- `HST/Residential_Flat_Token_Calculations_And_Utilities_Guide.html`
- `HST/Unified_BMCM_Residential_Flat_Tokenization_Engine.html`
