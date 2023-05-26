import * as toml from 'toml';
import {readFile} from 'fs';
import {hideBin} from 'yargs/helpers';
import yargs from 'yargs';

const readTomlFile = ({tomlPath, valuePath}) => {
	readFile(tomlPath, (err, data) => {
		if (err) {
			throw err;
		}

		if (!tomlPath || !valuePath) {
			throw new Error('missing --tomlPath or --valuePath');
		}

		console.log(valuePath.split('.').reduce((obj, key) => obj[key], toml.parse(data.toString())));
	});
};

const main = () => {
	readTomlFile(yargs(hideBin(process.argv)).argv);
};

main();

