import {type ArtistListType} from '../Artist/types';
import {Client, type QueryResult} from '@neondatabase/serverless';
import type {Env} from '../../types';
import * as R from 'ramda';
import {querySelectAll} from './queries';

const _createClient = async (env: Env): Promise<Client> => {
	const client = new Client(env.DATABASE_URL);
	await client.connect();
	return client;
};

const getAllArtistsFromNeon = async (env: Env): Promise<ArtistListType> =>
	_createClient(env)
		.then(querySelectAll)
		.then(R.prop('rows')) satisfies Promise<ArtistListType>;

export {getAllArtistsFromNeon};
