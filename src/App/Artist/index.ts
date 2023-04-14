import {type ArtistListType, type ArtistType} from './types';
import * as R from 'ramda';
import {okResponse} from '../Response';
import {type UrlQueryType} from '../Response/types';
import {type Client} from '@neondatabase/serverless';
import {getAllArtistsFromNeon} from '../Neon';
import {type Env} from '../../types';

const _artistFactory = (artist: string): ArtistType => R.applySpec({
	name: R.identity, musicList: undefined,
})(artist) as ArtistType;

const _computeAddArtist = (artistList: ArtistListType) =>
	(artist: string): boolean => R.pipe(
		_artistFactory,
		R.tap((artistCreated: ArtistType) => artistList.push(artistCreated)),
		// PushArtistToMongo,
		R.T,
	)(artist);

const _isArtistExist = (artistList: ArtistListType) =>
	(artist: string): boolean =>
		R.pipe(
			(artistList: ArtistListType): ArtistListType => artistList, // Todo : Comprends pas pourquoi ts m'oblige ça
			R.pluck('name'),
			R.includes(artist),
		)(artistList);

const _computeAddArtistIfNoExists = (artistList: ArtistListType) =>
	(artist: string): Response =>
		R.ifElse(
			_isArtistExist(artistList),
			() => okResponse(String(false)),
			R.pipe(_computeAddArtist(artistList), String, okResponse),
		)(artist);

const addArtist = (artists: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		decodeURIComponent,
		_computeAddArtistIfNoExists(artists),
	)(req.params.artist);

const _isArtistSearched = (artistSearched: string) =>
	(artistName: string): boolean =>
		artistName.toLowerCase().includes(artistSearched.toLowerCase());

const getArtist = (artistList: ArtistListType) =>
	(req: UrlQueryType) => {
		const artistSearched = decodeURIComponent(req.params.artist);
		return R.pipe(
			R.filter((artistStored: ArtistType) => _isArtistSearched(artistSearched)(artistStored.name)),
			JSON.stringify,
			R.tap(console.log),
			okResponse,
		)(artistList);
	};

const _formalizeArtistsResponse = R.pipe(
	R.pluck('name'),
	JSON.stringify,
	okResponse);

const getAllArtists = (env: Env) =>
	async (): Promise<Response> =>
		getAllArtistsFromNeon(env)
			.then(R.tap(data => {
				console.log('received:', data);
			}))
			.then(_formalizeArtistsResponse);

export {addArtist, getArtist, getAllArtists};
