import * as fs from "fs";
import * as toml from "toml";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

const manageArgPassed = () => {
  const argv = yargs(hideBin(process.argv)).argv;
  if (!argv?.tomlPath) throw new Error("give a toml file to use this script!");

  return argv;
};

const getParameter = (data) => (paramName, paramColumn) =>
  toml.parse(data.toString())[paramName] ||
  toml.parse(data.toString())[paramColumn][paramName] ||
  new Error(`${paramName} in toml not defined correctly`);

const readTomlFile = ({ tomlPath }) => {
  fs.readFile(tomlPath, (err, data) => {
    if (err) throw err;
    const dataGetter = getParameter(data);
    const language = dataGetter("command", "build");
    console.log("language", language);
  });
};

const main = () => {
  const data = manageArgPassed();
  readTomlFile(data);
};

main();
