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

// Const _isArtistExist = (artistList: ArtistListType) =>
// 	(artist: string): boolean => {
// 		const verify = R.pipe(
// 			R.pluck('name'),
// 			R.includes(artist),
// 		)(artistList);
//
// 		return true;
// 	};

const getArtist = (artists: ArtistListType) =>
	(req: UrlQueryType): Response => R.pipe(
		decodeURIComponent,
		okResponse,
	)(req.params.artist);

export {addArtist, getArtist};
