import {Router} from 'itty-router';
import {addArtist, getAllArtists, getArtist} from './App/Artist';
import {notFound, okResponse} from './App/Response';
import {type Env} from './types';
import {linearRegression, predict} from 'clementreiffers-linear-regression';

// eslint-disable-next-line new-cap
const router = Router(); // No "new", as this is not a real class

const helloWorld = (): Response => okResponse('helloworld');

const computeLinearRegression = (): Response => {
	const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const y = [2, 4, 6, 8, 10, 12, 14, 16, 18];

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
	const lin = linearRegression(x, y);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	return okResponse(String(predict(10, lin)));
};

const createAndHandleRouter = async (request: Request, env: Env, ctx: any) => {
	router.get('/helloworld', helloWorld)
		.get('/getArtist/:artist', getArtist(env))
		.post('/addArtist/', addArtist(env))
		.get('/getAllArtists', getAllArtists(env))
		.get('/linear-regression', computeLinearRegression)
		.all('*', notFound);

	return router.handle(request, env, ctx);
};

export default {fetch: createAndHandleRouter};
