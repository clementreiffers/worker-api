/* AddEventListener('fetch', event => {
	event.respondWith(handle(event.request));
}); */

const test = (request, env, ctx) => new Response(JSON.stringify(env));

async function handle(request) {
	return new Response('Hello World\n');
}

export default {fetch: test};
