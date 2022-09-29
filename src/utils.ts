export const makeStatusResponse = (status: number) =>
  new Response(null, {
    status,
  });
