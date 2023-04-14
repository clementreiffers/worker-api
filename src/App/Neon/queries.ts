import {type Client, type QueryResult} from '@neondatabase/serverless';

const querySelectAll = async (client: Client): Promise<QueryResult> =>
	client.query('SELECT * FROM artists;');

export {querySelectAll};
