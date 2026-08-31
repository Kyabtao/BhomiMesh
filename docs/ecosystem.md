# Page: Ecosystem & Utilities — `ecosystem.html`

Category page for the 2 ecosystem documents. Hosts the **120-utility browser**:
12 sector tabs + keyword filter over the full catalog, plus the 8 sub-token strip.

**URL:** `/ecosystem.html` · **Data:** `window.BMCM_UTILITIES` (generated) ·
**Widget:** `categories.js → widgetEcosystem()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | |
| **Utility browser** | `ecoSectorTitle`, `ecoSearch`, `ecoTabs`, `ecoCount`, `ecoList` | Sector tabs (12) + search input; list re-renders on both |
| Sub-token strip | — | Static 8 chips: $GAME-REX, $SOCIAL-REX, $BIZ-REX, $AGRI, $AIR, $ECO, $SMART, $META + 10% royalty note |
| Documents grid (2 cards) | `catCards` | |
| Pager | `catPager` | ← Compliance · → Roadmap & Tasks |

## Behaviour

- State: `{ sector: 0, q: '' }` (category index + search string).
- Tabs re-render to move the active highlight; list shows the active sector's 10 utilities,
  filtered by `q` (matches name + description). Global utility count (120) shown in the count line.
- `Esc` clears the search. Empty-match state shows a friendly dashed panel.
- Utility numbering is global (`sector × 10 + index + 1`) so #1–#120 match the master list doc.

## Data provenance

`assets/js/data-utilities.js` is **generated** from
`HST/BhoomiMesh_100_Plus_Utilities_Master_List.html` (12 sectors × 10 = 120 utilities,
name + description each). Regenerate with the extraction script if the source doc changes.
