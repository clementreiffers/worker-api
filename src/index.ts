import {Router} from 'itty-router';
import {addArtist, getAllArtists, getArtist} from './App/Artist';
import {notFound, okResponse} from './App/Response';
import {type Env} from './types';

// eslint-disable-next-line new-cap
const router = Router(); // No "new", as this is not a real class

const helloWorld = (): Response => okResponse('helloworld');

const createAndHandleRouter = async (request: Request, env: Env, ctx: ExecutionContext) => {
	router.get('/helloworld', helloWorld)
		.get('/getArtist/:artist', getArtist(env))
		.post('/addArtist/', addArtist(env))
		.get('/getAllArtists', getAllArtists(env))
		.all('*', notFound);

	return router.handle(request, env, ctx);
};

export default {fetch: createAndHandleRouter};
