import {Router} from 'itty-router';
import * as R from 'ramda';

type UrlQueryType = {
	params: Record<string, string>;
};

const artists: ArtistListType = [];
type ArtistType = {
	name: string;
	musicList: string[] | undefined;
};

type ArtistListType = ArtistType[];

const _artistFactory = (artist: string): ArtistType => R.applySpec({
	name: artist,
})(artist) as ArtistType;

const _registerArtist = (artistList: ArtistListType) =>
	(artist: ArtistType): string => {
		artistList.push(artist);
		console.log(artistList);
		return 'artist ' + artist.name + ' added!';
	};

const _computeAddArtist = (artistList: ArtistListType) =>
	(artist: string): string =>
		R.pipe(_artistFactory, _registerArtist(artistList))(artist);

const addArtist = (artists: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		decodeURIComponent,
		_computeAddArtist(artists),
		okResponse,
	)(req.params.artist);

const getArtist = (req: UrlQueryType): Response => R.pipe(
	decodeURIComponent,
	okResponse,
)(req.params.artist);

const okResponse = (body: string): Response => new Response(body, {status: 200});
const notFound = (): Response => new Response('Not found', {status: 404});

// eslint-disable-next-line new-cap
const router = Router(); // No "new", as this is not a real class

const helloWorld = (): Response => okResponse('helloworld');

router.get('/helloworld', helloWorld);
router.get('/showArtist/:artist', getArtist);
router.get('/addArtist/:artist', addArtist(artists));
router.all('*', notFound);

export default {fetch: router.handle};
