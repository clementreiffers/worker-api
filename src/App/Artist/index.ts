import {type ArtistType} from './types';
import * as R from 'ramda';
import {internalError, okResponse} from '../Response';
import {type UrlQueryType} from '../Response/types';
import {addArtistToNeon, getAllArtistsFromNeon} from '../Neon';
import {type Env} from '../../types';
import {type IRequest} from 'itty-router';

const artistFactory = (artist: ArtistType): ArtistType => R.applySpec({
	name: artist.name, musicList: artist?.musicList,
})(artist) as ArtistType;

const addArtist = (env: Env) =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
	async (request: IRequest): Promise<Response> => request.json()
		.then((data: Record<string, unknown>) => data as ArtistType)
		.then(addArtistToNeon(env))
		.then(okResponse)
		.catch(internalError);

const _isArtistSearched = (artistSearched: string) =>
	(artistName: string): boolean =>
		artistName.toLowerCase().includes(artistSearched.toLowerCase());

const getArtist = (env: Env) =>
	async (req: UrlQueryType): Promise<Response> => {
		const artistSearched = decodeURIComponent(req.params.artist);
		return getAllArtistsFromNeon(env)
			.then(R.pipe(
				R.filter((artistStored: ArtistType) => _isArtistSearched(artistSearched)(artistStored.name)),
				JSON.stringify,
				okResponse,
			));
	};

const _formalizeArtistsResponse = R.pipe(
	R.pluck('name'),
	JSON.stringify,
	okResponse);

const getAllArtists = (env: Env) =>
	async (): Promise<Response> =>
		getAllArtistsFromNeon(env)
			.then(_formalizeArtistsResponse);

export {addArtist, getArtist, getAllArtists, artistFactory};
