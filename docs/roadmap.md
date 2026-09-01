# Page: Roadmap — `roadmap.html`

Live milestone / task schedule for the project: two tabbed tables (24-month master roadmap and
TGE pre-launch checklist) with status badges, status filter chips and a stacked progress bar.

**URL:** `/roadmap.html` · **Doc:** this file · **Scripts:** `data.js`, `partials.js`,
`ui.js`, `pages/roadmap.js`

## Layout

| Block | Element IDs | Notes |
|---|---|---|
| Page header (back link, title) | — | static |
| **Tabs** — *24-Month Roadmap* / *TGE Pre-Launch* | `.tab-btn[data-tab]` | Switching tabs resets the status filter to **All** |
| Status filter chips | `tblChips` | All / Completed / In Progress / On Hold / Not Started, with live counts for the active tab |
| Progress bar | `progressLabel`, `progressPct`, `progressBar` | "n of N completed" + % ; segments sized by status (emerald / sky / amber / slate) |
| Task table | `thPhase`, `thWindow`, `taskBody` | Horizontally scrollable below ~760 px |
| Table empty state | `tblEmpty` | Shown when a status filter leaves zero rows |
| Source note | — | Links to the two HST docs the schedule was extracted from |

## Table columns

| Tab | # / Phase | Milestone / Task | Window / Target | Owner | Source Doc | Status |
|---|---|---|---|---|---|---|
| 24-Month Roadmap | `P0`–`P6` badge | phase name | `M0–M2` … `M24+` | team | link to the governing HST spec | status badge |
| TGE Pre-Launch | `01`–`10` | checklist item | target month | team | "Checklist" | status badge |

**Status metadata** (`BMCM.STATUS`) drives badge + icon + progress-segment colors:
`completed` (emerald, `fa-circle-check`) · `in-progress` (sky, `fa-circle-half-stroke`) ·
`on-hold` (amber, `fa-pause`) · `not-started` (slate, `fa-clock`).

## Current data

- **Roadmap:** 15 rows — 2 completed · 4 in progress · 8 not started · 1 on hold
  (24-month plan: Legal/Testnet → Seed & $GR Genesis → TGE & DEX → Lease Portal →
  CEX & Sinking Fund → Sub-Tokens).
- **Checklist:** 10 rows — 2 completed · 4 in progress · 4 not started
  (10-point TGE pre-launch operational checklist).
- Combined: **25 tracked tasks, 8 active** (feeds the Home page "Active Tasks" KPI and the
  sync toast).

## Behaviour (`pages/roadmap.js`)

- State: `{ tab: 'roadmap', status: 'all' }`.
- `renderTable()` rebuilds rows, toggles the table/empty-state visibility, then re-renders the
  status chips and progress bar (chips + bar are always consistent with the visible tab).
- Status chips filter rows only; the progress bar always reflects the **full** tab dataset.

## Extending

- **New phase / task:** append to `BMCM.ROADMAP` (`p, w, name, owner, st, doc`) or
  `BMCM.CHECKLIST` (`n, name, owner, w, st`) in `assets/js/data.js`. Counts, progress bar,
  filters and the Home KPI update automatically — keep `st` in the four allowed values.
- **New status value:** extend `BMCM.STATUS` (label, badge/icon/segment classes) and the
  chip order array in `renderTblChips`.
