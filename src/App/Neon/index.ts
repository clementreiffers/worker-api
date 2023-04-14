import {type ArtistListType} from '../Artist/types';
import {Client} from '@neondatabase/serverless';
import type {Env} from '../../types';

const _createClient = async (env: Env): Promise<Client> => {
	const client = new Client(env.DATABASE_URL);
	await client.connect();
	return client;
};

const getAllArtistsFromNeon = async (env: Env): Promise<ArtistListType> => {
	const client = await _createClient(env);
	const {rows} = await client.query('SELECT * FROM artists;');
	return rows as ArtistListType;
};

export {getAllArtistsFromNeon};
