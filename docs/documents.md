# Page: Documents — `documents.html`

Browser for the full 34-document BhoomiMesh specification suite: client-side search, category
filter chips, a responsive card grid and a graceful empty state. Every card links out to the
real source document in `HST/`.

**URL:** `/documents.html` · **Doc:** this file · **Scripts:** `data.js`, `partials.js`,
`ui.js`, `pages/documents.js`

## Layout

| Block | Element IDs | Notes |
|---|---|---|
| Page header (back link, title, source note, search box) | `docSyncNote`, `searchInput`, `clearSearch` | Search updates the grid live on every keystroke; `Esc` or the ✕ button clears it |
| Category filter chips | `chipRow` | 10 chips: **All** + 9 categories, each with a live doc count |
| Result counter | `resultCount` | "Showing **n** of 34 documents in *Category* matching *query*" |
| Card grid (1 / 2 / 3 columns) | `cardsGrid` | Cards stagger-fade in (≤ 400 ms delay) |
| Empty state | `emptyState` | Dashed panel with icon, explanation and **Clear search & filters** button (`resetFilters`) |

## Card anatomy

Each card (one per entry in `BMCM.DOCS`) shows:

1. **Category icon tile** — gradient tile + FontAwesome icon from `BMCM.CATS[<cat>].tile/.icon`
2. **Category tag** (+ optional **edition badge** `v2` / `v3` for reissued docs)
3. **Title** and **description** (extracted from the source document)
4. **Tool badges** (`d.b`) — e.g. `Solidity`, `₹ INR`, `120 Utilities`, `70/30`
5. **Footer** — maturity dot+label (`BMCM.MATURITY`), level chip (`Core` / `Advanced` /
   `Standard` from `BMCM.LEVEL`), and **Open Spec →** linking to `HST/<file>` (URL-encoded,
   opens in a new tab)

## Filtering logic (`pages/documents.js`)

```
filteredDocs() = BMCM.DOCS
  .filter(d => state.cat === 'all'  || d.c === state.cat)   // category chip
  .filter(d => every whitespace token of state.q is contained in
               title + description + category label + badges)  // multi-word AND search
```

- State: `{ q: '', cat: 'all' }` — chips and search compose (AND).
- Chips re-render on each click to move the `.chip.active` highlight; the grid and counter
  re-render on every search input.
- **Empty state** appears whenever the combined filter yields 0 results; **reset** clears both
  `q` and `cat`.

## Categories & counts

| Key | Label | Docs |
|---|---|---|
| `whitepaper` | Whitepaper & Vision | 5 |
| `tokenomics` | Tokenomics & Earnings | 5 |
| `land` | Land & Property Engines | 5 |
| `strategy` | Strategy & Roadmap | 3 |
| `finance` | Investment & Finance | 6 |
| `blockchain` | Blockchain & Dev | 3 |
| `compliance` | Compliance & Risk | 4 |
| `ecosystem` | Ecosystem & Utilities | 2 |
| `index` | Project Index | 1 |

(Total: **34** — counts are computed from `BMCM.DOCS`, never hard-coded.)

## Extending

- **New document:** drop the HTML file into `HST/`, add one entry to `BMCM.DOCS` in
  `assets/js/data.js` (`t, f, c, m, l, d, b`, optional `ed`), and add a companion note in
  `docs/hst/`. The chip count, grid, search index and KPI all update automatically.
- **New category:** add a key to `BMCM.CATS` (label, icon, tag/tile color classes) — a chip
  appears automatically.
