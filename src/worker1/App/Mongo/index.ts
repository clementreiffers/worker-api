import Realm from 'realm-web';

const appId = 'cloudflare-rlmbr';
const atlasService = 'mongodb-atlas';
const app = new Realm.App({id: appId});

const login = async () => {
	const credentials = Realm.Credentials.anonymous();
	try {
		const user = await app.logIn(credentials);
	} catch (error) {
		console.log(error);
	}
};

const findArtists = async () => {
	await login();
	let artists;
	try {
		artists = app.currentUser
			?.mongoClient(atlasService)
			?.db('Artists')
			?.collection('artists');
		console.log(artists);
	} catch (err) {
		console.error('need to login first', err);
	}

	return artists;
};

export {findArtists};
