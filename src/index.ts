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

const createAndHandleRouter = async (request: Request, env: Env, ctx: ExecutionContext) => {
	const client = new Client(env.DATABASE_URL);
	await client.connect();
	const allArtists = await getAllArtistsFromNeon(client);

	router.get('/helloworld', helloWorld);
	router.get('/showArtist/:artist', getArtist(artists));
	router.get('/addArtist/:artist', addArtist(artists));
	router.get('/getAllArtists', getAllArtists(allArtists));
	router.all('*', notFound);

	return router.handle(request, env, ctx);
};

export default {fetch: createAndHandleRouter};
