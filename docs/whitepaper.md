# Page: Whitepaper & Vision — `whitepaper.html`

Category page for the 5 whitepaper documents. Hosts the **70/30 landowner split calculator**.

**URL:** `/whitepaper.html` · **Data:** `BMCM.DOCS[c=whitepaper]`, `BMCM.CAT_PAGES.whitepaper`,
protocol constants · **Widget script:** `assets/js/pages/categories.js → widgetWhitepaper()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header (icon, title, tagline) | `catHead`, `catFacts` | Rendered by `mount()` from `BMCM.CAT_PAGES` |
| **70/30 calculator** | `wpAcres` (input), `wpTokens`, `wpLand`, `wpLandVal`, `wpTres`, `wpTresVal`, `wpValue` | Acres input (0.5–1000, default 10) → live split |
| Documents grid (5 cards) | `catCards`, `catCount` | Shared card template |
| Prev / next pager | `catPager` | ← All Documents · → Tokenomics & Earnings |

## Calculator logic

```
tokens     = acres × 40,468,564          (BMCM.TOKENS_PER_ACRE)
landowner  = tokens × 70%                → value = landowner × ₹0.247 (TGE)
treasury   = tokens × 30%                → value = treasury  × ₹0.247
TGE value  = tokens × ₹0.247
```

The 70/30 bar is fixed-width (program constant); only the numbers recompute on input.
The sinking-reserve note (8% of lease rent) is static copy from the grand master whitepaper.

## Source documents

- `HST/BhoomiMesh_BMCM_Grand_Master_Whitepaper.html` (+ v3)
- `HST/BhoomiMesh_BMCM_Complete_Institutional_Whitepaper.html` (+ v2, v3)
