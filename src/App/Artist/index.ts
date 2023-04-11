import {type ArtistListType, type ArtistType} from './types';
import * as R from 'ramda';
import {okResponse} from '../Response';
import {type UrlQueryType} from '../Response/types';

const _artistFactory = (artist: string): ArtistType => R.applySpec({
	name: R.identity, musicList: undefined,
})(artist) as ArtistType;

const _computeAddArtist = (artistList: ArtistListType) =>
	(artist: string): boolean => R.pipe(
		_artistFactory,
		R.tap((artistCreated: ArtistType) => artistList.push(artistCreated)),
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

// Const getArtist = (artistList: ArtistListType) =>
// 	(req: UrlQueryType): Response => R.pipe(
// 		decodeURIComponent,
// 		(artist: string): string => R.filter(_isArtistSearched(artist), artistList),
// 		okResponse,
// 	)(req.params.artist);

const getArtist = (artistList: ArtistListType) =>
	(req: UrlQueryType): Response => {
		const artistFound = [];
		const artistSearched = decodeURIComponent(req.params.artist);
		for (const e of artistList) {
			console.log(e);
			if (_isArtistSearched(artistSearched)(e.name)) {
				artistFound.push(e);
			}
		}

		return okResponse(JSON.stringify(artistFound));
	};

const getAllArtists = (artistList: ArtistListType) => (): Response =>
	R.pipe(
		R.pluck('name'),
		JSON.stringify,
		okResponse,
	)(artistList);

export {addArtist, getArtist, getAllArtists};
