import {Router} from 'itty-router';
import {addArtist, getAllArtists, getArtist} from './App/Artist';
import {notFound, okResponse} from './App/Response';
import {type Env} from './types';

// eslint-disable-next-line new-cap
const router = Router(); // No "new", as this is not a real class

const helloWorld = (): Response => okResponse('helloworld');

const createAndHandleRouter = async (request: Request, env: Env, ctx: ExecutionContext) => {
	router.get('/helloworld', helloWorld);
	router.get('/getArtist/:artist', getArtist(env));
	router.post('/addArtist/', addArtist(env));
	router.get('/getAllArtists', getAllArtists(env));
	router.all('*', notFound);

	return router.handle(request, env, ctx);
};

export default {fetch: createAndHandleRouter};
