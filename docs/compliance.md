# Page: Compliance & Risk — `compliance.html`

Category page for the 4 compliance documents. Hosts the **12 "What If?" stress-test
accordion explorer** grouped by risk category, plus referral/audit summary cards.

**URL:** `/compliance.html` · **Data:** `BMCM.STRESS_TESTS` ·
**Widget:** `categories.js → widgetCompliance()`

## Sections

| Block | IDs | Notes |
|---|---|---|
| Category header | `catHead`, `catFacts` | |
| **Stress-test explorer** | `stGroups` | 12 scenarios from `BMCM.STRESS_TESTS`, grouped into 6 categories (A–F); each is a native `<details>` accordion with question summary + "Solution" body |
| Referral + audit cards | — | Static: single-tier (anti-MLM) referral; 14/14 launch audit, 10x re-verified |
| Documents grid (4 cards) | `catCards` | |
| Pager | `catPager` | ← Blockchain & Dev · → Ecosystem & Utilities |

## Behaviour

`widgetCompliance()` groups `BMCM.STRESS_TESTS` by `cat` field preserving order, then renders
each group as a heading (with count chip) + a stack of `<details>` accordions. Expansion is
pure native HTML — no JS state — so it works with scripts disabled.

## Data provenance

- `BMCM.STRESS_TESTS` (12 items, categories A–F) ← `HST/BhoomiMesh_What_If_Scenario_Stress_Tests.html`
- Referral card ← `HST/BhoomiMesh_Single_Tier_Referral_And_Compliance_Guide.html`
- Audit card ← `HST/Web3_Project_Launch_Checklist_And_Audit.html`
