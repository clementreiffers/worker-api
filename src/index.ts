import {Router} from 'itty-router';
import type {ArtistListType} from './App/Artist/types';
import {addArtist, getAllArtists, getArtist} from './App/Artist';
import {notFound, okResponse} from './App/Response';

const artists: ArtistListType = [];

// eslint-disable-next-line new-cap
const router = Router(); // No "new", as this is not a real class

const helloWorld = (): Response => okResponse('helloworld');

router.get('/helloworld', helloWorld);
router.get('/showArtist/:artist', getArtist(artists));
router.get('/addArtist/:artist', addArtist(artists));
router.get('/getAllArtists', getAllArtists(artists));
router.all('*', notFound);

export default {fetch: router.handle};
