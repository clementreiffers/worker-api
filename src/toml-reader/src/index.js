import * as toml from 'toml';
import {readFile} from 'fs';

const readTomlFile = ({tomlPath, valuePath}) => {
	readFile(tomlPath, (err, data) => {
		if (err) {
			throw err;
		}

		const dataParsed = toml.parse(data.toString());
		const resultat = valuePath.split('.').reduce((obj, key) => obj[key], dataParsed);
		console.log(resultat);
	});
};

const main = () => {
	readTomlFile({tomlPath: 'wrangler.toml', valuePath: 'build.container'});
};

main();

