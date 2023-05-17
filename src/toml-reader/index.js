import * as fs from "fs";
import * as toml from "toml";

fs.readFile("example.toml", (err, data) => {
  if (err) throw err;
  const language = toml.parse(data.toString())?.workerd_config?.lang;
  if (language) {
    console.log(language);
  } else {
    throw new Error("Language in toml not defined correctly");
  }
});
