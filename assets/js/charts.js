/* =========================================================
   BhoomiMesh site — charts (window.BMCM_CHARTS)
   Pure-SVG renderers, no charting library.
   Depends on: data.js
   ========================================================= */
'use strict';

(function () {

  /**
   * 10-year single-token price chart (₹).
   * Renders grid, area fill, line, hoverable points and key labels
   * into the <svg> element with the given id.
   */
  function buildPriceChart(svgId) {
    const PRICE = window.BMCM.PRICE;
    const svg = document.getElementById(svgId);
    if (!svg) return;

    const W = 640, H = 300, PL = 52, PR = 20, PT = 18, PB = 34;
    const maxY = 4.8;
    const x = i => PL + i * (W - PL - PR) / (PRICE.length - 1);
    const y = v => H - PB - (v / maxY) * (H - PT - PB);

    let g = '';
    [1, 2, 3, 4].forEach(v => {
      g += `<line x1="${PL}" y1="${y(v)}" x2="${W - PR}" y2="${y(v)}" stroke="#1e293b" stroke-width="1"/>
            <text x="${PL - 8}" y="${y(v) + 4}" text-anchor="end" font-size="11" fill="#64748b">₹${v}</text>`;
    });

    const pts  = PRICE.map((v, i) => `${x(i)},${y(v)}`).join(' ');
    const area = `M ${x(0)},${y(PRICE[0])} ` +
      PRICE.map((v, i) => `L ${x(i)},${y(v)}`).join(' ') +
      ` L ${x(PRICE.length - 1)},${H - PB} L ${x(0)},${H - PB} Z`;

    const keyPts = [0, 3, 5, 10];

    svg.innerHTML = `
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      ${g}
      <path d="${area}" fill="url(#areaFill)"/>
      <polyline points="${pts}" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      ${PRICE.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="#020617" stroke="#34d399" stroke-width="2"><title>Year ${i}: ₹${v.toFixed(3)}</title></circle>`).join('')}
      ${keyPts.map(i => `<text x="${x(i)}" y="${y(PRICE[i]) - 10}" text-anchor="middle" font-size="11" font-weight="700" fill="#fbbf24">₹${PRICE[i].toFixed(3)}</text>
                         <text x="${x(i)}" y="${H - 12}" text-anchor="middle" font-size="11" fill="#64748b">Y${i}</text>`).join('')}
      <line x1="${PL}" y1="${H - PB}" x2="${W - PR}" y2="${H - PB}" stroke="#334155" stroke-width="1"/>`;
  }

  window.BMCM_CHARTS = { buildPriceChart };
})();
