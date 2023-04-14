import {type ArtistListType, type ArtistType} from '../Artist/types';
import {Client, type QueryResult} from '@neondatabase/serverless';
import type {Env} from '../../types';
import * as R from 'ramda';
import {queryInsertIntoNeon, querySelectAllNeon} from './queries';
import {artistFactory} from '../Artist';

const _createClient = async (env: Env): Promise<Client> => {
	const client = new Client(env.DATABASE_URL);
	await client.connect();
	return client;
};

const getAllArtistsFromNeon = async (env: Env): Promise<ArtistListType> =>
	_createClient(env)
		.then(querySelectAllNeon)
		.then(R.prop('rows')) satisfies Promise<ArtistListType>;

const addArtistToNeon = async (env: Env, artist: string): Promise<string> =>
	_createClient(env)
		.then(queryInsertIntoNeon(artistFactory(artist)))
		.then(JSON.stringify);

export {getAllArtistsFromNeon, addArtistToNeon};
