# toml-reader

this project serve to read toml files efficiently and use the result directly into a terminal.

## Overview

## Install it

run `npm i`

## Run it

run `npm start`

## Use it

create a toml file called `example.toml` and [Run it](#run-it).
this toml file has to be in this format:
```toml
[workerd_config]
lang = "typescript"
```
and then you will have this result :
```shell
$ npm start                                                                                                                              worker-api/git/builder-pod !+

> toml-reader@1.0.0 start
> node index.js

typescript
```

## New versions

it has to :
- permit new paths to find all values, and permit another toml file name
- declare multipaths to get multiple values
- give all values separated by commas
