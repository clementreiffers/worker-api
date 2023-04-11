import {type ArtistListType, type ArtistType} from './types';
import * as R from 'ramda';
import {okResponse} from '../Response';
import {type UrlQueryType} from '../Response/types';

const _artistFactory = (artist: string): ArtistType => R.applySpec({
	name: R.identity, musicList: undefined,
})(artist) as ArtistType;

const _registerArtist = (artistList: ArtistListType) =>
	(artist: ArtistType): string => {
		artistList.push(artist);
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

const _isArtistExist = (artistList: ArtistListType) =>
	(artist: string): boolean =>
		R.pipe(
			(artistList: ArtistListType): ArtistListType => artistList, // Todo : Comprends pas pourquoi ts m'oblige ça
			R.pluck('name'),
			R.includes(artist),
		)(artistList);

const getArtist = (artistList: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		decodeURIComponent,
		_isArtistExist(artistList),
		String,
		okResponse,
	)(req.params.artist);

const getAllArtists = (artistList: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		R.pluck('name'),
		JSON.stringify,
		okResponse,
	)(artistList);

export {addArtist, getArtist, getAllArtists};
