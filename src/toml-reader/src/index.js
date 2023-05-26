import * as toml from 'toml';
import {exec} from 'child_process';
import {readFile} from 'fs';

const readTomlFile = ({tomlPath}) => {
	readFile(tomlPath, (err, data) => {
		if (err) {
			throw err;
		}

		const dataParsed = toml.parse(data.toString());
		const {build} = dataParsed;

		if (build?.container && build?.dir) {
			// Here we'll directly pull the docker image, execute it, and recuperate all build while they're finished
			console.log('image:', build.image);
			console.log('dir:', build.dir);
			const command = `docker run ${build.container}`;
			console.log(command);
		} else if (build.command) {
			// Here we'll directly execute our generic build image with a command provided by user in the toml file

		} else {
			throw new Error('build not correctly defined');
		}
	});
};

const main = () => {
	readTomlFile({tomlPath: 'wrangler.toml'});
};

main();

