# api-example

this example shows how to build a javascript container using cloudflare workers.
it serves to see all the limits and possibilities.

## Overview

1. [Try on your machine](#try-on-your-machine)
   1. [Install it](#install-it)
   2. [Run it](#run-it)
2. [Try inside a docker image](#try-inside-a-docker-image)
   1. [Build it](#build-the-docker-image)
   2. [Run it](#)
2. [Explanation](#explanation)
   1. [The API](#the-api)
   2. [MongoDB](#mongodb)
   3. [NeonDB](#neondb)
   4. [Turso](#turso)

## Try on your machine

### Install it

run `yarn` or `npm install` depending on which package manager you use.

then you have to put a secret to wrangler to be able to communicate with the DB as below:
`yarn wrangler secret put DATABASE_URL`. This command will ask you the value of this secret, so put it.

### Run it

run `npm install -g wrangler` then `npx wranger dev src/index.ts`

## Try inside a docker image

### Build the docker image

At the root of the project, run `docker-buildx build --tag=artist-worker .`

### Run the docker image

once the step [build the docker image](#build-the-docker-image) is ok, you can now
run `docker run -p 8080:8080 artist-worker`. 
you can then run in another terminal `curl 127.0.0.1:8080` with all different routes 
of [The API](#the-api) !

## Explanation

### The API

the API is managed by the `itty-router` module which is compatible with cloudflare Workers.
it has 4 routes:
- `/helloworld` which only returns helloworld
- `/showArtist/:artist`, instead of `:artist` you put the artist you want to display
- `/addArtist/:artist`, instead of `:artist` you put the artist you want to register
- `/getAllArtists/`, to display all artists registered

### The Databases

#### MongoDB

We cannot use MongoDB directly because Workers only supports HTTP requests, we need to follow this 
[link](https://www.mongodb.com/developer/products/atlas/cloudflare-worker-rest-api/)

#### NeonDB

Thanks to their native REST API, we can directly communicate with the database.
It's used in this example to see how we can store data to create a stateful API.

#### Turso

Turso is the most powerful database I will use in this kind of project.
see here for more information : [Turso](https://chiselstrike.com/)