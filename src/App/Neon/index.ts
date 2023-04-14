import {type ArtistListType, type ArtistType} from '../Artist/types';
import {Client} from '@neondatabase/serverless';
import type {Env} from '../../types';
import * as R from 'ramda';
import {queryInsertIntoNeon, querySelectAllNeon} from './queries';

const _createClient = async (env: Env): Promise<Client> => {
	const client = new Client(env.DATABASE_URL);
	await client.connect();
	return client;
};

const getAllArtistsFromNeon = async (env: Env): Promise<ArtistListType> =>
	_createClient(env)
		.then(querySelectAllNeon)
		.then(R.prop('rows')) satisfies Promise<ArtistListType>;

const addArtistToNeon = (env: Env) =>
	async (artist: ArtistType): Promise<string> =>
		_createClient(env)
			.then(queryInsertIntoNeon(artist))
			.then(JSON.stringify);

export {getAllArtistsFromNeon, addArtistToNeon};
