# api-example

this example shows how to build a javascript container using cloudflare workers.
it serves to see all the limits and possibilities.

## Overview

1. [Install it](#install-it)
2. [Run it](#run-it)
3. [Explanation](#explanation)
   1. [The API](#the-api)
   2. [MongoDB](#mongodb)


## Install it

run `yarn` or `npm install` depending on which package manager you use.

## Run it

run `npm install -g wrangler` then `npx wranger dev src/index.ts`

## Explanation

### The API

the API is managed by the `itty-router` module which is compatible with cloudflare Workers.
it has 4 routes:
- `/helloworld` which only returns helloworld
- `/showArtist/:artist`, instead of `:artist` you put the artist you want to display
- `/addArtist/:artist`, instead of `:artist` you put the artist you want to register
- `/getAllArtists/`, to display all artists registered

### MongoDB

We cannot use MongoDB directly because Workers only supports HTTP requests, we need to follow this 
[link](https://www.mongodb.com/developer/products/atlas/cloudflare-worker-rest-api/)