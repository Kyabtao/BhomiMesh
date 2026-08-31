# BhoomiMesh

**BhoomiMesh ($BMCM)** — Real-World-Asset land tokenization protocol for India, minted on the sovereign
**GrinRex L1** blockchain ($GR). Every $BMCM token is backed by square centimeters of verified Indian land
(1 Acre = 40,468,564 sq cm = 40.4M $BMCM), with a 70/30 landowner split, 30-year leases and an 8% sinking reserve.

## 🌐 Demo Website

The repo root contains a fully working, responsive demo website (`index.html`) — a single-file dashboard with
**no build step**, ready to deploy as-is (e.g. GitHub Pages):

- **Dark slate-900 theme** built with **Tailwind CSS (CDN)** + **FontAwesome 6 (CDN)** + **Inter** font
- **Top nav** with project brand and a **manual sync/refresh button** (mock sync with toast feedback)
- **KPI summary cards** with animated counters (34 documents, 9 categories, 120+ utilities, active tasks, land target, 30.8x ROI)
- **Token economics band** with a pure-SVG 10-year $BMCM price chart (₹0.247 → ₹4.448, 30.8x ROI)
- **Interactive search + category filter chips** (All, Whitepaper, Tokenomics, Land Engines, Strategy, Finance, Blockchain, Compliance, Ecosystem, Index)
- **Project card grid** — all 34 spec documents with category tags, edition badges (v2/v3), tool badges, maturity/level indicators, and links to the full documents
- **Live Milestone / Task Schedule** — tabbed tables (24-month master roadmap + TGE pre-launch checklist) with status badges (Completed / In Progress / On Hold / Not Started), status filter chips, and a progress bar
- **7 Core Pillars** audit section (100% verified)
- **Pure vanilla JavaScript** — client-side search, filtering, mock sync states, graceful empty states. No frameworks, no backend.

### Run locally

```bash
cd BhomiMesh
python3 -m http.server 8080 --bind 0.0.0.0
# open http://localhost:8080
```

(Or just open `index.html` directly — it uses only CDN assets and relative links.)

## 📁 Repository layout

| Path | Contents |
|---|---|
| `index.html` | Demo website (dashboard) |
| `HST/` | 34 project specification documents (HTML): whitepapers, tokenomics models, tokenization engines, 24-month roadmap, investor decks, compliance & risk, 120+ utilities catalog, smart-contract dev guide, launch audit |
| `HST/Task.txt` | Original extraction/website brief for this dashboard |

Key documents: [Master Project Index](HST/BhoomiMesh_BMCM_Complete_Project_Master_Index.html) ·
[Grand Master Whitepaper](HST/BhoomiMesh_BMCM_Grand_Master_Whitepaper.html) ·
[24-Month Roadmap & $GR Coin Plan](HST/BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html) ·
[120+ Utilities Catalog](HST/BhoomiMesh_100_Plus_Utilities_Master_List.html) ·
[Smart Contract Dev Guide](HST/BhoomiMesh_Smart_Contract_Code_And_Developer_Guide.html)

> ⚠️ **Disclaimer:** This is a project-specification demo. Figures (prices, ROI, projections) come from the
> spec documents and are illustrative — not investment advice.
