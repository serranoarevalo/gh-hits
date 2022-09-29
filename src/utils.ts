export const makeStatusResponse = (status: number) =>
  new Response(null, {
    status,
  });

export const makeBadge = (hits: number) => {
  // to do
  const formatted = new Intl.NumberFormat("kr-KO").format(hits);
  const width = formatted.length * 8.4;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}"  height="20" viewBox="0 0 ${
    width * 10
  } 200" role="img" aria-label="hits: ${formatted}">
    <title>hits: ${formatted}</title>
    <linearGradient id="a" x2="0" y2="100%">
      <stop offset="0" stop-opacity=".1" stop-color="#EEE"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <mask id="m"><rect width="${
      width * 10
    }" height="200" rx="30" fill="#FFF"/></mask>
    <g mask="url(#m)">
      <rect width="300" height="200" fill="#555"/>
      <rect width="${width * 10 - 300}" height="200" fill="#2A2A2A" x="300"/>
      <rect width="${width * 10}" height="200" fill="url(#a)"/>
    </g>
    <g aria-hidden="true" fill="#fff" text-anchor="start" font-family="Verdana,DejaVu Sans,sans-serif" font-size="110">
      <text x="60" y="148" textLength="200" fill="#000" opacity="0.25">hits</text>
      <text x="50" y="138" textLength="200">hits</text>
      <text x="355" y="148" fill="#000" opacity="0.25">${formatted}</text>
      <text x="345" y="138">${formatted}</text>
    </g>
  </svg> 
  `;
  return svg;
};
