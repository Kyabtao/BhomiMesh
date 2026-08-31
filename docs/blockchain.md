# Page: Blockchain & Development — `blockchain.html`

Category page for the 3 blockchain documents. Hosts the **$GR master allocation**
visualization plus smart-contract and L1-feature reference cards.

**URL:** `/blockchain.html` · **Data:** `BMCM.GR_ALLOCATION` ·
**Widget:** `categories.js → widgetBlockchain()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | |
| **$GR allocation** | `grAlloc` | 5 pool cards rendered from `BMCM.GR_ALLOCATION`: name, % + coin count, gradient width bar, vesting note |
| Smart contracts card | — | Static: `BhoomiMeshToken.sol`, `LandownerLeasePortal.sol`, `SinkingReplacementReserve.sol` + link to dev guide |
| L1 features grid | — | Static 6-feature chips (EVM, consensus KYC, teleport bridges, $GR gas, state snapshots, ERC-3643) |
| Documents grid (3 cards) | `catCards` | |
| Pager | `catPager` | ← Finance · → Compliance & Risk |

## Data provenance

- `BMCM.GR_ALLOCATION` ← `HST/BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html` (allocation table, 1B $GR)
- Contract list + L1 features ← `HST/BhoomiMesh_Smart_Contract_Code_And_Developer_Guide.html`,
  `HST/GrinChain_L1_Blockchain_Architecture.html`, `HST/GrinRex_GR_Master_Whitepaper.html`
