import * as toml from 'toml';
import {readFile} from 'fs';
import {hideBin} from 'yargs/helpers';
import yargs from 'yargs';

const readTomlFile = ({tomlPath, valuePath, defaultValue}) => {
	readFile(tomlPath, (err, data) => {
		if (err) {
			throw err;
		}

		if (tomlPath ?? valuePath ?? defaultValue === undefined) {
			throw new Error('missing --tomlPath or --valuePath or --defaultValue');
		}

		const value = valuePath.split('.').reduce((obj, key) => obj[key], toml.parse(data.toString()));
		console.log(value || defaultValue);
	});
};

const main = () => {
	readTomlFile(yargs(hideBin(process.argv)).argv);
};

main();

