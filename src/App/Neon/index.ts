import {type ArtistListType} from '../Artist/types';
import {type Client} from '@neondatabase/serverless';

const getAllArtistsFromNeon = async (client: Client) => {
	const {rows} = await client.query('SELECT * FROM artists;');
	return rows as ArtistListType;
};

export {getAllArtistsFromNeon};
