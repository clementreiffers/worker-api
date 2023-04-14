import {Router} from 'itty-router';
import type {ArtistListType} from './App/Artist/types';
import {addArtist, getAllArtists, getArtist} from './App/Artist';
import {notFound, okResponse} from './App/Response';
import {type Env} from './types';
import {Client} from '@neondatabase/serverless';
import {getAllArtistsFromNeon} from './App/Neon';

const artists: ArtistListType = [];

// eslint-disable-next-line new-cap
const router = Router(); // No "new", as this is not a real class

const helloWorld = (): Response => okResponse('helloworld');

const myAsyncFunction = async (): Promise<Response> => new Promise(resolve => {
	setTimeout(() => {
		resolve(okResponse('Hello World!'));
	}, 1000);
});

const createAndHandleRouter = async (request: Request, env: Env, ctx: ExecutionContext) => {
	router.get('/helloworld', helloWorld);
	router.get('/showArtist/:artist', getArtist(artists));
	router.get('/addArtist/:artist', addArtist(env));
	router.get('/getAllArtists', getAllArtists(env));
	router.get('/myAsyncFunction', myAsyncFunction);
	router.all('*', notFound);

	return router.handle(request, env, ctx);
};

export default {fetch: createAndHandleRouter};
