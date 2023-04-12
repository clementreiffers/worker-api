import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import {type ArtistType} from '../Artist/types';
import {mongoUrl} from './mongoConstant';

const _connectMongo = () => {
	void mongoose.connect(mongoUrl);
	mongoose.connection.on('connected', () => {
		console.log('Connected to Mongo!!');
	});
	mongoose.connection.on('error', () => {
		console.log('not connected to Mongo...');
	});
};

const _isMongoConnected = () =>
	mongoose.connection.readyState === 1;

const _connectIfNotConnected = (): void => {
	_connectMongo();
};

const schema = new Schema({
	name: {type: String, required: true},
	musicList: String,
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const MongoArtist = mongoose.model('MongoArtist', schema);

const _saveArtist = async (artist: ArtistType) =>
	new MongoArtist(artist).save().catch(console.log);

_connectIfNotConnected();

const pushArtistToMongo = (artist: ArtistType): void => {
	_connectIfNotConnected();
	void _saveArtist(artist);
};

export {pushArtistToMongo};
