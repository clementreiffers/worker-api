import {type ArtistListType, type ArtistType} from './types';
import * as R from 'ramda';
import {okResponse} from '../Response';
import {type UrlQueryType} from '../Response/types';

const _artistFactory = (artist: string): ArtistType => R.applySpec({
	name: R.identity, musicList: undefined,
})(artist) as ArtistType;

const _computeAddArtist = (artistList: ArtistListType) =>
	(artist: string): boolean =>
		R.ifElse(
			_isArtistExist(artistList),
			R.F,
			() => {
				R.append(_artistFactory(artist), artistList);
				return true;
			},
		)(artist);

const _isArtistExist = (artistList: ArtistListType) =>
	(artist: string): boolean =>
		R.pipe(
			(artistList: ArtistListType): ArtistListType => artistList, // Todo : Comprends pas pourquoi ts m'oblige ça
			R.pluck('name'),
			R.includes(artist),
		)(artistList);

const addArtist = (artists: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		decodeURIComponent,
		_computeAddArtist(artists),
		String,
		okResponse,
	)(req.params.artist);

const getArtist = (artistList: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		decodeURIComponent,
		// (artist: string): string[] => R.pluck(artist, artistList),
		okResponse,
	)(req.params.artist);

const getAllArtists = (artistList: ArtistListType) => (): Response =>
	R.pipe(
		R.pluck('name'),
		JSON.stringify,
		okResponse,
	)(artistList);

export {addArtist, getArtist, getAllArtists};
