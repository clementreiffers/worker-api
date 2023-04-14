import {type Client, type QueryResult} from '@neondatabase/serverless';
import {type ArtistType} from '../Artist/types';

const querySelectAllNeon = async (client: Client): Promise<QueryResult> =>
	client.query('SELECT * FROM artists;');

const queryInsertIntoNeon = (artist: ArtistType) =>
	async (client: Client): Promise<QueryResult> =>
		client.query(`insert into artists (name) values ('${artist.name}');`);

export {querySelectAllNeon, queryInsertIntoNeon};
