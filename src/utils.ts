export const makeStatusResponse = (status: number) =>
  new Response(null, {
    status,
  });

export const makeBadge = (hits: number) => {
  const formatted = new Intl.NumberFormat("kr-KO").format(hits);
  const width = `Views:  ${formatted}`.length * 6.5;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${
    width + 10
  }" height="20" role="img" aria-label="Views ${formatted}">
    <title>Views ${formatted}</title>
    <g shape-rendering="crispEdges">
    <rect x="0" width="${width + 3}" height="20" fill="#ff2e88"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
      <text x="${
        width * 5
      }" y="140" transform="scale(.1)" fill="#fff" textLength="${
    width * 9
  }">Views:  ${formatted}</text>
    </g>
  </svg>
  `;
  return svg;
};
