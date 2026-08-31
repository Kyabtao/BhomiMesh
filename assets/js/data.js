/* =========================================================
   BhoomiMesh site — data module (window.BMCM)
   All structured data extracted from the 34 spec documents
   in HST/. Every page reads from this single source.
   ========================================================= */
'use strict';

(function () {

  /* ---------- Categories (filter chips) ---------- */
  const CATS = {
    all:          { label: 'All Documents',           icon: 'fa-border-all',        tag: 'bg-slate-500/15 text-slate-300 border-slate-500/40',    tile: 'from-slate-500 to-slate-700' },
    whitepaper:   { label: 'Whitepaper & Vision',     icon: 'fa-book-open',         tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40', tile: 'from-emerald-500 to-teal-700' },
    tokenomics:   { label: 'Tokenomics & Earnings',   icon: 'fa-chart-line',        tag: 'bg-amber-500/15 text-amber-300 border-amber-500/40',     tile: 'from-amber-500 to-orange-700' },
    land:         { label: 'Land & Property Engines', icon: 'fa-house-chimney',     tag: 'bg-teal-500/15 text-teal-300 border-teal-500/40',        tile: 'from-teal-500 to-cyan-700' },
    strategy:     { label: 'Strategy & Roadmap',      icon: 'fa-route',             tag: 'bg-violet-500/15 text-violet-300 border-violet-500/40',   tile: 'from-violet-500 to-purple-700' },
    finance:      { label: 'Investment & Finance',    icon: 'fa-hand-holding-dollar', tag: 'bg-rose-500/15 text-rose-300 border-rose-500/40',       tile: 'from-rose-500 to-pink-700' },
    blockchain:   { label: 'Blockchain & Dev',        icon: 'fa-cubes',             tag: 'bg-sky-500/15 text-sky-300 border-sky-500/40',            tile: 'from-sky-500 to-blue-700' },
    compliance:   { label: 'Compliance & Risk',       icon: 'fa-shield-halved',     tag: 'bg-orange-500/15 text-orange-300 border-orange-500/40',   tile: 'from-orange-500 to-red-700' },
    ecosystem:    { label: 'Ecosystem & Utilities',   icon: 'fa-satellite-dish',    tag: 'bg-lime-500/15 text-lime-300 border-lime-500/40',         tile: 'from-lime-500 to-green-700' },
    index:        { label: 'Project Index',           icon: 'fa-compass',           tag: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/40',   tile: 'from-indigo-500 to-blue-700' }
  };

  const MATURITY = {
    'Audit Verified':  { cls: 'text-emerald-300', dot: 'bg-emerald-400' },
    'Production Spec': { cls: 'text-sky-300',     dot: 'bg-sky-400' },
    'Financial Model': { cls: 'text-amber-300',   dot: 'bg-amber-400' },
    'Execution Plan':  { cls: 'text-violet-300',  dot: 'bg-violet-400' },
    'Investor Grade':  { cls: 'text-rose-300',    dot: 'bg-rose-400' },
    'Catalog':         { cls: 'text-lime-300',    dot: 'bg-lime-400' },
    'Audit Report':    { cls: 'text-teal-300',    dot: 'bg-teal-400' }
  };

  const LEVEL = {
    Core:     'border-amber-500/50 text-amber-300',
    Advanced: 'border-violet-500/50 text-violet-300',
    Standard: 'border-slate-600 text-slate-400'
  };

  /* ---------- 34 spec documents ----------
     t: title · f: file inside HST/ · c: category · m: maturity · l: level
     ed: edition badge (optional) · d: description · b: tool badges */
  const DOCS = [
    { t: 'Grand Master Whitepaper', f: 'BhoomiMesh_BMCM_Grand_Master_Whitepaper.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core',
      d: 'Flagship institutional whitepaper — the 12 core equations, the 70/30 landowner lease program, the sinking-reserve protocol and multi-tier land acquisition analysis across India.',
      b: ['RWA', '₹ INR', '12 Equations', '70/30'] },
    { t: 'Grand Master Whitepaper', f: 'BhoomiMesh_BMCM_Grand_Master_Whitepaper 3.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core', ed: 'v3',
      d: 'GrinRex-minted edition of the grand master spec — brand narrative, global competitive scorecard and supply-conversion metrics on the sovereign L1.',
      b: ['RWA', 'GrinRex L1', 'Scorecard'] },
    { t: 'Institutional Whitepaper', f: 'BhoomiMesh_BMCM_Complete_Institutional_Whitepaper.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core',
      d: 'Complete institutional specification & multi-token whitepaper — brand story, token unit standard, 70/30 mechanics and 30-year lease-expiry safeguards.',
      b: ['RWA', 'Multi-Token', '70/30'] },
    { t: 'Institutional Whitepaper', f: 'BhoomiMesh_BMCM_Complete_Institutional_Whitepaper 2.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core', ed: 'v2',
      d: 'Rupees edition with global competitive analysis, a numerical scorecard and 5-year pro-forma financial projections for the protocol.',
      b: ['₹ INR', '5-Yr Pro-Forma'] },
    { t: 'Institutional Whitepaper', f: 'BhoomiMesh_BMCM_Complete_Institutional_Whitepaper 3.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core', ed: 'v3',
      d: 'Rupees edition deepening the 30-year landowner lease tokenization program, with the full rule set and mechanics of the 70/30 split.',
      b: ['₹ INR', 'Lease Program'] },

    { t: 'Single Token 10-Year Price Chart', f: 'Single_Token_Price_Calculation_Chart.html', c: 'tokenomics', m: 'Financial Model', l: 'Core',
      d: 'Step-by-step 10-year lifecycle of one $BMCM token — ₹0.247 entry, annual cash dividends, ₹7.628 Year-10 exit (30.8x) with three exit options.',
      b: ['Unit Economics', '₹ INR', '30.8x ROI'] },
    { t: '10-Year Token Price & Market Simulation', f: 'BhoomiMesh_10_Year_Token_Price_And_Market_Simulation.html', c: 'tokenomics', m: 'Financial Model', l: 'Advanced',
      d: 'Macro pro-forma: 10 acres scaling to 50,000 acres, a ₹2,250 Cr portfolio, the buyback & burn engine and over-buy / over-sell market stress tests.',
      b: ['10-Yr Model', 'Buyback & Burn', '₹ Cr'] },
    { t: 'All-Stakeholders Earnings Blueprint', f: 'BhoomiMesh_All_Stakeholders_Earnings_And_Incentive_Blueprint.html', c: 'tokenomics', m: 'Financial Model', l: 'Core',
      d: 'Positive-sum value engine — detailed earning methods and the master incentive matrix for landowners, investors, SPV, validators, DePIN and AI agents.',
      b: ['Incentive Matrix', '6 Stakeholders'] },
    { t: 'Dividend Distribution & Portfolio Scenarios', f: 'Dividend_Distribution_And_Portfolio_Scenarios_Guide.html', c: 'tokenomics', m: 'Financial Model', l: 'Standard',
      d: 'Four portfolio scenarios: mixed leased/vacant land, the treasury 30% dividend policy, freehold vs leasehold, and staked vs unstaked yield boosters.',
      b: ['Dividend Policy', '4 Scenarios'] },
    { t: 'Unallocated Token Treasury Engine', f: 'Unallocated_Token_Treasury_And_Land_Appreciation_Unlocking_Engine.html', c: 'tokenomics', m: 'Production Spec', l: 'Advanced',
      d: 'Fixed minting with dynamic unallocated lockup — land appreciation progressively unlocks treasury tokens over time: the “development dividend”.',
      b: ['Treasury Engine', 'Unlock Schedule'] },

    { t: 'Valuation-Weighted Land Lease Engine', f: 'Valuation_Weighted_Land_Lease_Tokenization_Engine.html', c: 'land', m: 'Production Spec', l: 'Advanced',
      d: 'Valuation-weighted token minting formulas, landowner tokenization comparison tables and the independent valuation & title verification workflow.',
      b: ['Smart Contracts', 'Valuation'] },
    { t: 'Agricultural Land Monetization Engine', f: 'Agricultural_Land_Monetization_And_Compliance_Engine.html', c: 'land', m: 'Production Spec', l: 'Advanced',
      d: 'Five legal, high-yield farmland monetization streams with full compliance mapping, plus a traditional-vs-BhoomiMesh farmland yield comparison.',
      b: ['Agri', 'Compliance', '₹ INR'] },
    { t: 'Residential Flats & Housing Engine', f: 'Residential_Flats_And_Housing_Tokenization_Engine.html', c: 'land', m: 'Production Spec', l: 'Advanced',
      d: '$SMART-HOMES engine: the 70/30 residential homeowner lease model, a 3% → 15% APY yield-boost engine and the prime Indian metros shortlist.',
      b: ['Housing', '$SMART-HOMES', '15% APY'] },
    { t: 'Residential Flat Token Calculations', f: 'Residential_Flat_Token_Calculations_And_Utilities_Guide.html', c: 'land', m: 'Financial Model', l: 'Standard',
      d: 'Valuation-weighted flat tokenization formulas, three real-world case studies (₹1.50 Cr flat) and deep-dive specs for residential utilities #121–128.',
      b: ['Case Studies', 'Utilities 121–128'] },
    { t: 'Unified BMCM Residential Flat Engine', f: 'Unified_BMCM_Residential_Flat_Tokenization_Engine.html', c: 'land', m: 'Production Spec', l: 'Standard',
      d: 'One master token for everything — the unified $BMCM residential tokenization flow plus 8 new high-yield residential utilities (#121–128).',
      b: ['Unified Model', 'Utilities 121–128'] },

    { t: 'Launch Timeline & $GR Coin Planning', f: 'BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html', c: 'strategy', m: 'Execution Plan', l: 'Core',
      d: '$GR native coin plan (1B supply allocation & vesting), the six-phase 24-month master execution roadmap and the 10-point TGE pre-launch checklist.',
      b: ['Roadmap', '$GR', '24 Months'] },
    { t: 'Freehold-First 3-Year Strategy', f: 'Freehold_First_3_Year_Strategy_Plan.html', c: 'strategy', m: 'Execution Plan', l: 'Core',
      d: 'Years 1–3 on 100% freehold company land reinvesting lease rents; the landowner lease portal opens in Y4, with a freehold-vs-day-1-lease comparison.',
      b: ['3-Yr Plan', 'Reinvestment'] },
    { t: '1-Acre Lean Bootstrap Plan', f: '1_Acre_Lean_Bootstrap_Plan.html', c: 'strategy', m: 'Execution Plan', l: 'Standard',
      d: 'Zero-capex launch from a single acre: the month-by-month Year-1 execution timeline and the viral organic path to a 10-acre land reserve.',
      b: ['Bootstrap', 'Zero Capex'] },

    { t: 'Investor Deck', f: 'BhoomiMesh_BMCM_Investor_Deck.html', c: 'finance', m: 'Investor Grade', l: 'Core',
      d: 'Seed round memorandum — the ₹12.50 Cr raise at ₹0.160, the ₹235 Lakh Cr opportunity, 5-year investor returns model and use of seed capital.',
      b: ['Seed ₹12.5 Cr', '5-Yr Model'] },
    { t: 'Investor Deck', f: 'BhoomiMesh_BMCM_Investor_Deck 2.html', c: 'finance', m: 'Investor Grade', l: 'Core', ed: 'v2',
      d: 'Updated Rupees-edition investor deck with refreshed offering terms and the competitive-moat analysis vs all RWA alternatives.',
      b: ['Seed ₹12.5 Cr', 'Moat'] },
    { t: 'Complete Investor Deck & Master Document', f: 'BhoomiMesh_Complete_Investor_Deck_And_Full_Project_Master_Document.html', c: 'finance', m: 'Investor Grade', l: 'Core',
      d: 'Combined grand-master deck and full project document — offering terms, 10-year pro-forma portfolio simulation and the single-token lifecycle.',
      b: ['10-Yr Pro-Forma', 'Master Doc'] },
    { t: 'Company Revenue & Profitability Model', f: 'Company_Revenue_And_Profitability_Model.html', c: 'finance', m: 'Financial Model', l: 'Core',
      d: 'Five corporate revenue streams — SPV administration fee (10–15%), blockchain fees, royalties and treasury appreciation — in a 5-year P&L (₹ Cr).',
      b: ['5-Yr P&L', '5 Revenue Streams'] },
    { t: 'Market Feasibility & Profitability', f: 'BhoomiMesh_Market_Feasibility_And_Profitability_Analysis.html', c: 'finance', m: 'Financial Model', l: 'Advanced',
      d: 'Real-world Indian demand validation across 3 stakeholder groups, monthly SPV OpEx, EBITDA break-even at 12 acres, CAC vs LTV and bear stress tests.',
      b: ['OpEx', 'CAC / LTV', 'Bear Tests'] },
    { t: 'Market Feasibility & Profitability', f: 'BhoomiMesh_Market_Feasibility_And_Profitability_Analysis 2.html', c: 'finance', m: 'Financial Model', l: 'Advanced', ed: 'v2',
      d: 'Updated feasibility analysis with revised unit economics and refreshed bear-market sensitivity scenarios for the SPV operation.',
      b: ['OpEx', 'Sensitivity'] },

    { t: 'GrinChain L1 Blockchain Architecture', f: 'GrinChain_L1_Blockchain_Architecture.html', c: 'blockchain', m: 'Production Spec', l: 'Core',
      d: 'Sovereign RWA Layer-1 architecture — the dual-asset $GR economy (gas vs land token), EVM compatibility, consensus-KYC node specs and teleport bridges.',
      b: ['L1', 'EVM', '$GR'] },
    { t: 'Smart Contract Code & Dev Guide', f: 'BhoomiMesh_Smart_Contract_Code_And_Developer_Guide.html', c: 'blockchain', m: 'Production Spec', l: 'Advanced',
      d: 'Production Solidity — BhoomiMeshToken.sol, LandownerLeasePortal.sol and SinkingReplacementReserve.sol with a complete developer integration guide.',
      b: ['Solidity', '3 Contracts', 'Dev Guide'] },
    { t: 'GrinRex ($GR) Master Whitepaper', f: 'GrinRex_GR_Master_Whitepaper.html', c: 'blockchain', m: 'Audit Verified', l: 'Core',
      d: 'Institutional whitepaper for the native gas coin — brand narrative, token unit standard, competitive scorecard, pro-forma and the “cons-free” risk matrix.',
      b: ['₹ INR', 'Risk Matrix'] },

    { t: '12 “What If?” Scenario Stress Tests', f: 'BhoomiMesh_What_If_Scenario_Stress_Tests.html', c: 'compliance', m: 'Audit Verified', l: 'Advanced',
      d: 'Twelve black-swan scenarios — VDA tax shocks, re-zoning, title disputes, tenant defaults, hard forks, lost keys, whale takeovers — each with mitigations.',
      b: ['12 Scenarios', 'Risk Matrix'] },
    { t: '12 “What If?” Scenario Stress Tests', f: 'BhoomiMesh_What_If_Scenario_Stress_Tests 2.html', c: 'compliance', m: 'Audit Verified', l: 'Advanced', ed: 'v2',
      d: 'Updated stress-test suite with revised probability/impact scoring and refreshed mitigation playbooks for every black-swan scenario.',
      b: ['12 Scenarios', 'Updated'] },
    { t: 'Single-Tier Referral & Compliance Guide', f: 'BhoomiMesh_Single_Tier_Referral_And_Compliance_Guide.html', c: 'compliance', m: 'Audit Verified', l: 'Standard',
      d: 'The single-tier (1-level) referral architecture benchmarked against multi-level marketing, plus three fully compliant community growth programs.',
      b: ['1-Tier', 'Anti-MLM'] },
    { t: 'Web3 Launch Checklist & Audit', f: 'Web3_Project_Launch_Checklist_And_Audit.html', c: 'compliance', m: 'Audit Report', l: 'Core',
      d: 'The 7-pillar documentation standard for Web3/RWA launches with the 14/14 verification audit matrix — 100% complete, zero missing items.',
      b: ['7 Pillars', '14/14 Audit'] },

    { t: '120+ Protocol Utilities Master List', f: 'BhoomiMesh_100_Plus_Utilities_Master_List.html', c: 'ecosystem', m: 'Catalog', l: 'Core',
      d: '120 concrete utilities across 12 sectors — physical land, AI agents, DePIN, drone airspace, solar & carbon, agriculture, DeFi, AR, governance, civic, logistics and sub-tokens.',
      b: ['120 Utilities', '12 Sectors'] },
    { t: 'GrinRex L1 Multi-Industry Ecosystem', f: 'GrinRex_L1_Multi_Industry_Ecosystem_Architecture.html', c: 'ecosystem', m: 'Production Spec', l: 'Advanced',
      d: 'Sub-token ecosystem architecture — $GAME-REX, $SOCIAL-REX, $BIZ-REX, $AGRI, $AIR, $ECO, $SMART, $META and how each compounds value into $GR and $BMCM.',
      b: ['8 Sub-Tokens', 'L1'] },

    { t: 'Master Project Index', f: 'BhoomiMesh_BMCM_Complete_Project_Master_Index.html', c: 'index', m: 'Audit Report', l: 'Core',
      d: 'Master index of the 11 core specification documents plus the 10-times audit checklist: brand consistency, INR precision, 70/30 and sub-token verification.',
      b: ['Master Index', 'Audit ×10'] }
  ];

  /* ---------- 24-month master roadmap ---------- */
  const ROADMAP = [
    { p: 'P0', w: 'M0–M2',  name: '11-document master spec suite authored',        owner: 'Documentation Team', st: 'completed',   doc: 'BhoomiMesh_BMCM_Complete_Project_Master_Index.html' },
    { p: 'P0', w: 'M2–M3',  name: '10-times deep audit — 100% verification pass',   owner: 'QA & Audit',         st: 'completed',   doc: 'BhoomiMesh_BMCM_Complete_Project_Master_Index.html' },
    { p: 'P1', w: 'M1–M2',  name: 'Incorporate GrinRex Technologies Ltd + BhoomiReserve SPV', owner: 'Legal Counsel', st: 'in-progress', doc: 'BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html' },
    { p: 'P1', w: 'M2–M3',  name: 'GrinChain L1 Devnet / Testnet deployment',       owner: 'Core Engineering',   st: 'in-progress', doc: 'GrinChain_L1_Blockchain_Architecture.html' },
    { p: 'P1', w: 'M1–M3',  name: '10-Acre seed parcel (Jewar) NEC & SRO deeds → IPFS', owner: 'Land Operations',  st: 'in-progress', doc: 'BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html' },
    { p: 'P2', w: 'M3–M5',  name: 'CertiK & OpenZeppelin smart-contract audits',    owner: 'Security',           st: 'in-progress', doc: 'BhoomiMesh_Smart_Contract_Code_And_Developer_Guide.html' },
    { p: 'P2', w: 'M4–M5',  name: 'Seed round close — ₹12.50 Cr @ ₹0.160',         owner: 'Fundraising',        st: 'not-started', doc: 'BhoomiMesh_BMCM_Investor_Deck.html' },
    { p: 'P2', w: 'M6',     name: 'GrinRex L1 mainnet & $GR genesis event',         owner: 'Core Engineering',   st: 'not-started', doc: 'GrinChain_L1_Blockchain_Architecture.html' },
    { p: 'P3', w: 'M7',     name: '$BMCM TGE — 404.6M tokens @ ₹0.247',             owner: 'Protocol Treasury',  st: 'not-started', doc: 'BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html' },
    { p: 'P3', w: 'M7–M8',  name: 'DEX launch + 24-month liquidity lock (Uniswap / WazirX / CoinDCX)', owner: 'Treasury & MM', st: 'not-started', doc: 'BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html' },
    { p: 'P4', w: 'M10–M12',name: 'Landowner lease portal live (70/30 split)',      owner: 'Product',            st: 'not-started', doc: 'BhoomiMesh_BMCM_Complete_Institutional_Whitepaper.html' },
    { p: 'P5', w: 'M13–M15',name: 'Tier-1 CEX listings — KuCoin, Gate.io, Bitget',  owner: 'Partnerships',       st: 'not-started', doc: 'BhoomiMesh_BMCM_And_GrinRex_GR_Launch_Timeline_And_Coin_Planning.html' },
    { p: 'P5', w: 'M16–M18',name: 'Sinking Land Replacement Reserve activation (8%)', owner: 'Treasury',         st: 'not-started', doc: 'BhoomiMesh_BMCM_Grand_Master_Whitepaper.html' },
    { p: 'P6', w: 'M19–M24',name: '$GAME-REX & $SOCIAL-REX sub-token launches',     owner: 'Ecosystem',          st: 'not-started', doc: 'GrinRex_L1_Multi_Industry_Ecosystem_Architecture.html' },
    { p: 'P6', w: 'M24+',   name: 'Multi-state sub-portals — $BHOOMI-MH / -UP / -KA', owner: 'Ecosystem',        st: 'on-hold',     doc: 'BhoomiMesh_100_Plus_Utilities_Master_List.html' }
  ];

  /* ---------- TGE pre-launch checklist ---------- */
  const CHECKLIST = [
    { n: 1,  name: 'Legal opinion letter — utility classification confirmed',        owner: 'Legal Counsel',  w: 'M6', st: 'completed' },
    { n: 2,  name: 'Security audit reports published (CertiK & OpenZeppelin)',        owner: 'Security',       w: 'M5', st: 'in-progress' },
    { n: 3,  name: '3-of-5 Gnosis Safe multi-sig for protocol treasury & SPV funds',  owner: 'Treasury Ops',   w: 'M6', st: 'in-progress' },
    { n: 4,  name: '100% DEX liquidity locked 24 months via timelock',                owner: 'Treasury Ops',   w: 'M7', st: 'not-started' },
    { n: 5,  name: 'CoinGecko & CoinMarketCap pre-listing + API telemetry',           owner: 'Partnerships',   w: 'M6', st: 'in-progress' },
    { n: 6,  name: 'Section 115BBH 1% VDA TDS automated deduction engine',            owner: 'Protocol Dev',   w: 'M7', st: 'not-started' },
    { n: 7,  name: 'IBBI valuer report for the 10-Acre Jewar seed parcel',            owner: 'Land Operations',w: 'M5', st: 'in-progress' },
    { n: 8,  name: 'SRO 30-year non-encumbrance records uploaded to IPFS',            owner: 'Land Operations',w: 'M4', st: 'completed' },
    { n: 9,  name: 'Community airdrop & bounty campaign (testnet + stakers)',         owner: 'Community',      w: 'M7', st: 'not-started' },
    { n: 10, name: 'Market-maker agreements — WazirX, CoinDCX, Uniswap v3',           owner: 'Partnerships',   w: 'M7', st: 'not-started' }
  ];

  /* ---------- 7 audit pillars ---------- */
  const PILLARS = [
    { icon: 'fa-drafting-compass', name: 'Vision & Technical Architecture', d: 'Grand master whitepaper, GrinChain L1 specs, production smart contracts' },
    { icon: 'fa-calculator',       name: 'Tokenomics & Mathematical Models', d: '10-year simulation, single-token chart, dividend scenarios, treasury engine' },
    { icon: 'fa-handshake',        name: 'Fundraising & Investor Relations', d: 'Seed deck & memo (₹12.50 Cr), complete master investment document' },
    { icon: 'fa-store',            name: 'Market Feasibility & Unit Economics', d: 'Demand validation, SPV OpEx, break-even, CAC vs LTV, corporate P&L' },
    { icon: 'fa-rocket',           name: 'Execution & Growth Strategy',     d: '1-Acre lean bootstrap, freehold-first 3-year plan, 24-month roadmap' },
    { icon: 'fa-diagram-project',  name: 'Ecosystem Utilities & Multi-Tokens', d: '120+ utility catalog, 8-industry sub-token architecture' },
    { icon: 'fa-scale-balanced',   name: 'Legal, Compliance & Risk',        d: '12 black-swan stress tests, single-tier referral, launch audit matrix' }
  ];

  /* ---------- Task status metadata ---------- */
  const STATUS = {
    'completed':   { label: 'Completed',   badge: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',  icon: 'fa-circle-check',    seg: 'bg-emerald-500' },
    'in-progress': { label: 'In Progress', badge: 'border-sky-500/40 bg-sky-500/10 text-sky-300',             icon: 'fa-circle-half-stroke', seg: 'bg-sky-500' },
    'on-hold':     { label: 'On Hold',     badge: 'border-amber-500/40 bg-amber-500/10 text-amber-300',       icon: 'fa-pause',           seg: 'bg-amber-500' },
    'not-started': { label: 'Not Started', badge: 'border-slate-600 bg-slate-700/20 text-slate-400',          icon: 'fa-clock',           seg: 'bg-slate-600' }
  };

  /* ---------- Single token 10-year price (₹) — from Single_Token_Price_Calculation_Chart.html ---------- */
  const PRICE = [0.247, 0.315, 0.412, 0.618, 0.865, 1.548, 1.982, 2.393, 2.980, 3.663, 4.448];

  window.BMCM = { CATS, MATURITY, LEVEL, DOCS, ROADMAP, CHECKLIST, PILLARS, STATUS, PRICE };
})();
