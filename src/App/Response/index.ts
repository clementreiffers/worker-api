const okResponse = (body: string): Response => new Response(body, {status: 200});
const notFound = (): Response => new Response('Not found', {status: 404});

const internalError = (): Response => new Response('Internal error', {status: 500});

export {okResponse, notFound, internalError};
