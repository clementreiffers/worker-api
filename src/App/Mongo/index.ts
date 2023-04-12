import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import {type ArtistType} from '../Artist/types';
import {MONGO_URL} from './mongoConstant';

const _connectMongo = () => {
	mongoose.connect(MONGO_URL)
		.then(() => {
			console.log('connected to the database!');
		},
		)
		.catch(err => {
			console.log(err);
		});
};

const _isMongoConnected = () =>
	mongoose.connection.readyState === 1;

const _connectIfNotConnected = (): void => {
	if (!_isMongoConnected) {
		_connectMongo();
	}
};

const schema = new Schema({
	name: {type: String, required: true},
	musicList: String,
});

// eslint-disable-next-line @typescript-eslint/naming-convention
const MongoArtist = mongoose.model('MongoArtist', schema);

const _saveArtist = async (artist: ArtistType) =>
	new MongoArtist(artist).save().catch(console.log);

const pushArtistToMongo = (artist: ArtistType): void => {
	_connectIfNotConnected();
	void _saveArtist(artist);
};

export {pushArtistToMongo};
