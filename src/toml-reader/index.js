import * as fs from "fs";
import * as toml from "toml";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

const manageArgPassed = () => {
  const argv = yargs(hideBin(process.argv)).argv;
  if (!argv?.tomlPath) throw new Error("give a toml file to use this script!");

  return argv;
};

const readTomlFile = ({ tomlPath }) => {
  fs.readFile(tomlPath, (err, data) => {
    if (err) throw err;
    const language = toml.parse(data.toString())?.workerd_config?.lang;
    if (language) {
      console.log(language);
    } else {
      throw new Error("Language in toml not defined correctly");
    }
  });
};

const main = () => {
  const data = manageArgPassed();
  readTomlFile(data);
};

main();
