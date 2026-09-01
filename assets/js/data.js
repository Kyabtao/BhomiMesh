/* =========================================================
   BhoomiMesh site — data module (window.BMCM)
   All structured data extracted from the 28 spec documents
   (now embedded in the site via data-docs.js).
   Every page reads from this single source.
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

  /* ---------- 28 spec documents ----------
     t: title · f: key used in data-docs.js (filename of original spec)
     c: category · m: maturity · l: level
     ed: edition badge (optional) · d: description · b: tool badges */
  const DOCS = [
    { t: 'Grand Master Whitepaper', f: 'BhoomiMesh_BMCM_Grand_Master_Whitepaper.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core',
      d: 'Flagship institutional whitepaper — the 12 core equations, the 70/30 landowner lease program, the sinking-reserve protocol and multi-tier land acquisition analysis across India.',
      b: ['RWA', '₹ INR', '12 Equations', '70/30'] },
    { t: 'Institutional Whitepaper', f: 'BhoomiMesh_BMCM_Complete_Institutional_Whitepaper.html', c: 'whitepaper', m: 'Audit Verified', l: 'Core',
      d: 'Complete institutional specification & multi-token whitepaper — brand story, token unit standard, 70/30 mechanics and 30-year lease-expiry safeguards.',
      b: ['RWA', 'Multi-Token', '70/30'] },

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
    { t: 'Complete Investor Deck & Master Document', f: 'BhoomiMesh_Complete_Investor_Deck_And_Full_Project_Master_Document.html', c: 'finance', m: 'Investor Grade', l: 'Core',
      d: 'Combined grand-master deck and full project document — offering terms, 10-year pro-forma portfolio simulation and the single-token lifecycle.',
      b: ['10-Yr Pro-Forma', 'Master Doc'] },
    { t: 'Company Revenue & Profitability Model', f: 'Company_Revenue_And_Profitability_Model.html', c: 'finance', m: 'Financial Model', l: 'Core',
      d: 'Five corporate revenue streams — SPV administration fee (10–15%), blockchain fees, royalties and treasury appreciation — in a 5-year P&L (₹ Cr).',
      b: ['5-Yr P&L', '5 Revenue Streams'] },
    { t: 'Market Feasibility & Profitability', f: 'BhoomiMesh_Market_Feasibility_And_Profitability_Analysis.html', c: 'finance', m: 'Financial Model', l: 'Advanced',
      d: 'Real-world Indian demand validation across 3 stakeholder groups, monthly SPV OpEx, EBITDA break-even at 12 acres, CAC vs LTV and bear stress tests.',
      b: ['OpEx', 'CAC / LTV', 'Bear Tests'] },

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

  /* ---------- Protocol constants ---------- */
  const TOKENS_PER_ACRE = 40468564;   /* 1 Acre = 40,468,564 sq cm = 40.46M $BMCM */
  const SQFT_PER_ACRE = 43560;
  const TGE_PRICE = 0.247;            /* ₹ per token at TGE */
  const SEED_PRICE = 0.160;           /* ₹ per token in seed round (35% discount) */
  const SINKING_PCT = 8;              /* % of lease rent to Sinking Replacement Reserve */
  const LANDOWNER_PCT = 70;

  /* ---------- 10-year single-token table (all columns, ₹) ---------- */
  const TOKEN_10YR = [
    { y: 0,  price: 0.247, floor: 0.160, backing: 1.00, div: 0.000, cum: 0.000, total: 0.247, roi: '1.0x (base)' },
    { y: 1,  price: 0.315, floor: 0.210, backing: 1.10, div: 0.031, cum: 0.031, total: 0.346, roi: '1.4x' },
    { y: 2,  price: 0.412, floor: 0.285, backing: 1.21, div: 0.057, cum: 0.088, total: 0.469, roi: '1.9x' },
    { y: 3,  price: 0.618, floor: 0.410, backing: 1.38, div: 0.088, cum: 0.176, total: 0.794, roi: '3.2x' },
    { y: 4,  price: 0.865, floor: 0.590, backing: 1.75, div: 0.130, cum: 0.306, total: 0.995, roi: '4.0x' },
    { y: 5,  price: 1.548, floor: 1.050, backing: 2.50, div: 0.240, cum: 0.546, total: 2.094, roi: '8.5x' },
    { y: 6,  price: 1.982, floor: 1.380, backing: 2.76, div: 0.317, cum: 0.863, total: 2.299, roi: '9.3x' },
    { y: 7,  price: 2.393, floor: 1.720, backing: 3.02, div: 0.388, cum: 1.251, total: 2.781, roi: '11.3x' },
    { y: 8,  price: 2.980, floor: 2.180, backing: 3.35, div: 0.492, cum: 1.743, total: 3.472, roi: '14.1x' },
    { y: 9,  price: 3.663, floor: 2.750, backing: 3.69, div: 0.615, cum: 2.358, total: 4.278, roi: '17.3x' },
    { y: 10, price: 4.448, floor: 3.380, backing: 4.00, div: 0.756, cum: 3.180, total: 7.628, roi: '30.8x' }
  ];

  /* ---------- $GR native coin allocation (1B supply) — Launch Timeline doc ---------- */
  const GR_ALLOCATION = [
    { name: 'Validator Staking Rewards',      pct: 35, coins: '350M', vest: 'Emitted linearly over 10 years to L1 node validators' },
    { name: 'Public Genesis & DEX Liquidity', pct: 25, coins: '250M', vest: '40% unlocked at Genesis TGE, 60% vested over 12 months' },
    { name: 'Ecosystem & Developer Grants',   pct: 20, coins: '200M', vest: 'Vested monthly over 36 months for dApp developers' },
    { name: 'Core Protocol Engineering Team', pct: 12, coins: '120M', vest: '12-month cliff, then 36-month linear monthly vesting' },
    { name: 'Strategic Advisory & Backers',   pct: 8,  coins: '80M',  vest: '6-month cliff, then 24-month linear monthly vesting' }
  ];

  /* ---------- 12 "What If?" stress tests (categories A–F) ---------- */
  const STRESS_TESTS = [
    { cat: 'Government & Regulatory', q: 'India bans VDAs or raises VDA tax to 50%?',
      a: '$BMCM is built on the ERC-3643 permissioned RWA standard and can migrate into a SEBI / GIFT City IFSC regulated tokenized-REIT wrapper. Physical titles under BhoomiReserve SPV remain 100% legal under the Transfer of Property Act 1882.' },
    { cat: 'Government & Regulatory', q: 'Local authorities re-zone rural protocol land to industrial/commercial?',
      a: 'Government circle rates jump 3x–10x — the on-chain circle-rate floor for $BMCM rises automatically, delivering instant capital gains to token holders.' },
    { cat: 'Legal & Title Security', q: 'A land title dispute arises on a protocol plot after 5 years?',
      a: 'Land is acquired only with 30-year non-encumbrance certificates and title insurance. On litigation, the Sinking Replacement Reserve swaps the disputed plot for an unencumbered one instantly.' },
    { cat: 'Legal & Title Security', q: 'A landowner passes away during a 30-year lease?',
      a: 'A registered 30-year lease deed runs with the land and binds legal heirs. The heir inherits the 70% $BMCM wallet and keeps receiving monthly rental dividends seamlessly.' },
    { cat: 'Market & Financial Crisis', q: 'A major warehousing tenant (Flipkart/Amazon) defaults on rent?',
      a: 'Multi-tenant diversification caps any single tenant at <5% of lease rent. Dark-store plots near cities re-lease to quick-commerce providers (Blinkit, Zepto, Instamart) within 30 days.' },
    { cat: 'Market & Financial Crisis', q: 'Indian inflation surges to 15–20% per year?',
      a: 'All commercial leases carry built-in 10–15% rent-escalation clauses, so rent rises with inflation — boosting buyback/burn volume and staker dividend payouts.' },
    { cat: 'Technical & Network', q: 'The underlying L2 (Base / Polygon) shuts down?',
      a: 'Daily state snapshots are recorded. A migration contract re-mints $BMCM 1:1 on Ethereum mainnet or Solana without losing any land-backing data.' },
    { cat: 'Technical & Network', q: 'A user loses their private key holding $BMCM?',
      a: 'ERC-3643 permissioned identity (PAN/Aadhaar KYC) lets the SPV execute an on-chain identity key recovery (forcedTransfer()) after 2FA video verification, reissuing tokens to a new wallet.' },
    { cat: 'Tenant & Physical Land', q: 'A natural disaster damages physical warehouses?',
      a: 'All structures carry 100% property & business-interruption insurance (HDFC ERGO, ICICI Lombard), reimbursing 100% of lost lease rent during repairs.' },
    { cat: 'Tenant & Physical Land', q: 'Solar technology becomes obsolete?',
      a: 'Solar plots re-purpose into EV-charging hubs, logistics depots or vertical hydroponic farms within 60 days.' },
    { cat: 'Token Liquidity & Exchange', q: 'A centralized exchange (WazirX/CoinDCX) gets hacked?',
      a: '$BMCM trades primarily on DEXs (Uniswap v3 / Raydium) where users keep 100% self-custody in non-custodial wallets (MetaMask, TrustWallet).' },
    { cat: 'Token Liquidity & Exchange', q: 'A whale buys 51% of circulating $BMCM?',
      a: 'Titles stay locked under BhoomiReserve SPV. To claim land the whale must run BurnAndClaimDeed(), permanently destroying 51% of circulating supply and raising land backing per remaining token.' }
  ];

  /* ---------- 6-phase 24-month roadmap detail — Launch Timeline doc ---------- */
  const PHASES = [
    { id: 'Phase 1', months: 'Months 1–3',  title: 'Legal & Testnet',
      d: 'Incorporate GrinRex Technologies Ltd and BhoomiReserve SPV Pvt Ltd. Deploy L1 Devnet/Testnet. Complete 30-year NEC verification for the 10-acre seed parcel in the Jewar Airport corridor, UP.' },
    { id: 'Phase 2', months: 'Months 4–6',  title: 'Seed Raise & $GR Genesis',
      d: 'Close the ₹12.50 Cr ($1.5M) seed round. Complete the 10-acre seed land acquisition. GrinRex L1 mainnet launch & $GR coin genesis event.' },
    { id: 'Phase 3', months: 'Months 7–9',  title: '$BMCM TGE & DEX Launch',
      d: '$BMCM Token Generation Event — mint 404.6M tokens backed by 10 acres. List on Uniswap, WazirX, CoinDCX at ₹0.247. Activate the 100% lease-rent buyback & burn engine.' },
    { id: 'Phase 4', months: 'Months 10–12', title: 'Landowner Lease Portal',
      d: 'Launch the 30-year landowner lease portal (70/30 split). Scale the land reserve to 50 acres. $BMCM price reaches ₹0.285–₹0.315.' },
    { id: 'Phase 5', months: 'Months 13–18', title: 'Tier-1 CEX & Sinking Fund',
      d: 'List $GR and $BMCM on KuCoin, Gate.io, Bitget. Activate the 8% Sinking Land Replacement Reserve. Scale the reserve to 250 acres.' },
    { id: 'Phase 6', months: 'Months 19–24', title: 'Sub-Tokens & Scaling',
      d: 'Launch $GAME-REX and $SOCIAL-REX sub-tokens on GrinRex L1. Scale the land reserve to 750+ acres across 10 Indian states.' }
  ];

  /* ---------- 1-acre bootstrap: Year-1 month-by-month ---------- */
  const BOOTSTRAP_MONTHS = [
    { w: 'Month 1–2',   ops: 'Incorporate BhoomiReserve SPV Pvt Ltd. Sign the 30-year registered lease for 1 acre in the Jewar Airport corridor, UP.', fin: 'Mints 40,468,564 $BMCM tokens.' },
    { w: 'Month 3',     ops: 'Deploy ERC-3643 smart contract. Transfer 70% (28.3M) to the landowner; 30% (12.1M) to treasury.', fin: 'Initial DEX liquidity listing at ₹0.247.' },
    { w: 'Month 4–5',   ops: 'Lease the acre to a quick-commerce provider (Flipkart/Blinkit/Zepto) for warehousing at ₹83,333/month.', fin: 'First monthly lease rent lands in the SPV account.' },
    { w: 'Month 6–9',   ops: 'Activate the 100% lease-revenue buyback & burn engine — ~250,000 tokens burned monthly off DEXs.', fin: 'Circulating supply drops every month.' },
    { w: 'Month 10–12', ops: 'Year-1 audit: price at ₹0.285, landowner earning ₹70k/mo yield, 3 new landowners sign 30-year leases.', fin: 'Land reserve scales to 4 acres for Year 2.' }
  ];

  /* ---------- 1-acre lean vs 10-acre seed launch comparison ---------- */
  const BOOTSTRAP_COMPARE = [
    { metric: 'Upfront capital needed',   lean: '₹0 (zero capex, 30-yr lease)', seed: '₹10.0 Cr (~$1.2M)' },
    { metric: 'Initial token supply',     lean: '40,468,564 $BMCM',             seed: '404,685,640 $BMCM' },
    { metric: 'Year-1 gross rent income', lean: '₹10.0 Lakhs / yr',             seed: '₹1.25 Cr / yr' },
    { metric: 'Year-1 tokens burned',     lean: '3.03M (7.5%)',                 seed: '40.4M (10.0%)' },
    { metric: 'Year-1 staker APY',        lean: '12.5% cash dividend',          seed: '12.5% cash dividend' },
    { metric: 'Year-2 land reserve',      lean: '4 acres (via 70/30 leases)',   seed: '50 acres' },
    { metric: 'Execution risk',           lean: 'Ultra-low (zero debt)',        seed: 'Medium (needs seed raise)' }
  ];

  /* ---------- Seed round offering — Investor Deck ---------- */
  const SEED = {
    raise: '₹12.50 Cr', postMoney: '₹41.50 Cr', price: '₹0.160',
    discount: '35% below the ₹0.247 TGE price', collateral: '10 Acres (404,685,640 sq cm), Jewar Airport / Yamuna Expressway corridor, UP',
    use: [
      { pct: 80, label: 'Seed land acquisition', detail: '₹10.0 Cr — acquisition & deed registration of 10 acres' },
      { pct: 10, label: 'Audits & legal SPV', detail: '₹1.25 Cr — CertiK audit, RERA filings, SPV incorporation' },
      { pct: 10, label: 'Liquidity & marketing', detail: '₹1.25 Cr — Uniswap v3 / WazirX / CoinDCX market-making' }
    ]
  };

  /* ---------- 5 corporate revenue streams — Company Revenue Model ---------- */
  const REVENUE_STREAMS = [
    { name: 'Property Management & SPV Admin Fee', icon: 'fa-building', desc: '10–15% of gross rent deducted upfront for asset ops, tenant management, SRO filings, GPS fencing. ₹1.44 Cr/yr at 120 acres → ₹105 Cr/yr at 2,500 acres.' },
    { name: 'GrinRex L1 Gas Validator Yield', icon: 'fa-bolt', desc: 'Genesis validator nodes earn 50% of network gas in $GR — ₹3.5 Cr to ₹15 Cr per year high-margin yield.' },
    { name: '30% Treasury Appreciation & OTC Sales', icon: 'fa-vault', desc: 'Treasury $BMCM appreciates from ₹0.247 toward ₹4.448; small OTC sales to institutional VCs under 24-month lockups.' },
    { name: '1.5% Secondary Market Royalties', icon: 'fa-arrow-right-arrow-left', desc: '1.5% on every exchange trade and deed redemption — ₹1.0 Cr/yr on ₹100 Cr annual volume.' },
    { name: '10% Sub-Token Ecosystem Royalties', icon: 'fa-diagram-project', desc: '10% of all $GAME-REX / $SOCIAL-REX / $BIZ-REX transaction fees flow to corporate profits.' }
  ];

  /* ---------- 5-year corporate P&L (₹ Cr) ---------- */
  const P5Y = {
    rows: [
      { name: '12% Property Management Fee', v: [0.15, 0.99, 6.48, 24.56, 105.00] },
      { name: 'L1 Gas Validator Yield',      v: [0.25, 1.20, 4.50, 12.00, 35.00] },
      { name: '1% Trading Royalty Fees',     v: [0.10, 0.60, 3.20, 10.50, 42.00] },
      { name: 'Sub-Token Ecosystem Royalties', v: [0.00, 0.25, 1.80, 8.50, 28.00] }
    ],
    gross:  [0.50, 3.04, 15.98, 55.56, 210.00],
    opex:   [0.87, 1.80, 4.20, 12.00, 28.00],
    ebitda: [-0.37, 1.24, 11.78, 43.56, 182.00]
  };

  /* ---------- 5-year investor pro-forma — Investor Deck ---------- */
  const INVESTOR_PROFORMA = [
    { name: 'Treasury land reserve',      v: ['10', '50', '250', '750', '2,500 acres'] },
    { name: 'Treasury land value (₹ Cr)', v: ['12.5', '75.0', '450.0', '1,575.0', '6,250.0'] },
    { name: 'Gross annual lease rent (₹ Cr)', v: ['1.25', '8.25', '54.0', '204.7', '875.0'] },
    { name: 'Tokens bought & burned / yr', v: ['40.4M', '202.3M', '809.3M', '2.02B', '5.05B $BMCM'] },
    { name: 'Staking cash dividend APY',  v: ['12.5%', '13.8%', '14.2%', '15.0%', '15.5%'] },
    { name: '$BMCM floor price (₹)',      v: ['0.247', '0.412', '0.618', '0.865', '1.548'] },
    { name: 'Combined staker return / yr', v: ['+27.5%', '+31.3%', '+34.2%', '+38.0%', '+42.5%'] }
  ];

  /* ---------- Category page registry (file, tagline, hero facts) ---------- */
  const CAT_PAGES = {
    whitepaper: {
      tagline: 'The institutional specification: 12 core equations, the 70/30 landowner lease program, the 30-year lease structure and the sinking-reserve safeguard.',
      facts: [
        { k: 'Core equations', v: '12', sub: 'mathematical foundations' },
        { k: 'Landowner split', v: '70 / 30', sub: 'of every tokenized lease' },
        { k: 'Lease term', v: '30 yrs', sub: 'registered NEC-backed deeds' },
        { k: 'Sinking reserve', v: '8%', sub: 'of lease rent at every expiry' }
      ]
    },
    tokenomics: {
      tagline: 'Every rupee of the model — the single-token 10-year lifecycle, portfolio simulation, stakeholder incentives and the treasury unlock engine.',
      facts: [
        { k: 'Y10 token price', v: '₹4.448', sub: 'from ₹0.247 at TGE' },
        { k: 'Y10 dividends', v: '₹3.180', sub: 'cumulative per token' },
        { k: 'Total realized ROI', v: '30.8x', sub: 'per single token, Y0→Y10' },
        { k: 'Y10 portfolio', v: '₹2,250 Cr', sub: '50,000 acres simulated' }
      ]
    },
    land: {
      tagline: 'The tokenization engines: valuation-weighted land leases, agricultural monetization, and residential housing ($SMART-HOMES) on one master token.',
      facts: [
        { k: 'Tokens / acre', v: '40.47M', sub: '40,468,564 sq cm' },
        { k: 'Entry point', v: '₹10', sub: 'micro-fractions of land' },
        { k: 'Housing APY boost', v: '3% → 15%', sub: '$SMART-HOMES engine' },
        { k: 'Deed redemption', v: 'Burn', sub: '40.47M tokens → 1 acre title' }
      ]
    },
    strategy: {
      tagline: 'How the project ships: the 6-phase 24-month roadmap, the zero-capex 1-acre bootstrap and the freehold-first 3-year plan.',
      facts: [
        { k: 'Roadmap length', v: '24 mo', sub: '6 phases, month-by-month' },
        { k: 'Bootstrap capex', v: '₹0', sub: '1-acre Year-1 launch' },
        { k: 'Y2 reserve (lean)', v: '4 acres', sub: 'organic landowner referrals' },
        { k: 'Freehold window', v: 'Y1–Y3', sub: 'rent fully reinvested' }
      ]
    },
    finance: {
      tagline: 'The money story: the ₹12.50 Cr seed round, 5 corporate revenue streams, 5-year P&L and the investor returns model.',
      facts: [
        { k: 'Seed raise', v: '₹12.50 Cr', sub: 'at ₹0.160 per token' },
        { k: 'Post-money', v: '₹41.50 Cr', sub: '35% seed discount' },
        { k: 'Y5 gross revenue', v: '₹210 Cr', sub: 'corporate, 5 streams' },
        { k: 'Y5 EBITDA', v: '₹182 Cr', sub: 'break-even in Year 2' }
      ]
    },
    blockchain: {
      tagline: 'The infrastructure: GrinChain sovereign L1, the $GR dual-asset economy, production Solidity contracts and developer tooling.',
      facts: [
        { k: '$GR total supply', v: '1B', sub: 'native gas coin' },
        { k: 'EVM compatible', v: 'Yes', sub: 'teleport bridges included' },
        { k: 'Smart contracts', v: '3', sub: 'production Solidity' },
        { k: 'Consensus', v: 'KYC', sub: 'identity-aware validators' }
      ]
    },
    compliance: {
      tagline: 'Risk, stress-tested: 12 black-swan "What If?" scenarios with architectural solutions, single-tier referral compliance and the 14/14 launch audit.',
      facts: [
        { k: 'Stress scenarios', v: '12', sub: '6 risk categories' },
        { k: 'Audit matrix', v: '14/14', sub: 'documents verified' },
        { k: 'Re-verification', v: '10x', sub: 'deep audit passes' },
        { k: 'Referral tiers', v: '1', sub: 'single-tier, anti-MLM' }
      ]
    },
    ecosystem: {
      tagline: 'What the token actually does: 120 concrete utilities across 12 sectors plus the 8-industry GrinRex sub-token ecosystem.',
      facts: [
        { k: 'Utilities', v: '120+', sub: 'across 12 sectors' },
        { k: 'Sub-tokens', v: '8', sub: '$GAME, $SOCIAL, $BIZ…' },
        { k: 'Master royalty', v: '10%', sub: 'sub-token fees burn $BMCM' },
        { k: 'Staking rewards', v: '₹ INR', sub: 'monthly cash dividends' }
      ]
    }
  };

  window.BMCM = { CATS, MATURITY, LEVEL, DOCS, ROADMAP, CHECKLIST, PILLARS, STATUS, PRICE,
    TOKENS_PER_ACRE, SQFT_PER_ACRE, TGE_PRICE, SEED_PRICE, SINKING_PCT, LANDOWNER_PCT,
    TOKEN_10YR, GR_ALLOCATION, STRESS_TESTS, PHASES, BOOTSTRAP_MONTHS, BOOTSTRAP_COMPARE,
    SEED, REVENUE_STREAMS, P5Y, INVESTOR_PROFORMA, CAT_PAGES };
})();
