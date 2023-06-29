# api-example

this example shows how to build a javascript container using cloudflare workers.
it serves to see all the limits and possibilities.

## Overview

1. [Try on your machine](#try-on-your-machine)
   1. [Install it](#install-it)
   2. [Run it](#run-it)
2. [Try inside a docker image](#try-inside-a-docker-image)
   1. [Build it](#build-the-docker-image)
   2. [Run it](#run-the-docker-image)
   3. [Push the docker image to GitHub](#push-the-docker-image-to-github)
3. [Kubernetes](#kubernetes)
4. [Explanation](#explanation)
   1. [The API](#the-api)
   2. [The Databases](#the-databases)
      1. [MongoDB](#mongodb)
      2. [NeonDB](#neondb)
      3. [Turso](#turso)
   3. [Configure it yourself](#configure-it-yourself)
5. [Cloud Architecture](#cloud-architecture)
6. [Links](#links)

## Try on your machine

### Install it

run `yarn` or `npm install` depending on which package manager you use.

then you have to put a secret to wrangler to be able to communicate with the DB as below:
`yarn wrangler secret put DATABASE_URL`. This command will ask you the value of this secret, so put it.

### Run it

run `npm install -g wrangler` then `npx wranger dev src/index.js`

## Try inside a docker image

### Build the docker image

At the root of the project, run `docker-buildx build --tag=artist-worker .`

you can also use the Makefile by running `make build-docker`

### Run the docker image

once the step [build the docker image](#build-the-docker-image) is ok, you can now
run `docker run -p 8080:8080 artist-worker`. 
you can then run in another terminal `curl 127.0.0.1:8080` with all different routes 
of [The API](#the-api) !

you can also use the Makefile by running `make build-run-docker`, it will always build the image
before running it.

### Push the docker image to GitHub

follow this [link from dev.to](https://dev.to/github/publishing-a-docker-image-to-githubs-container-repository-4n50)
or this [link from official GitHub documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)

## Kubernetes

before apply all the file, follow this [link](https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx).
You'll see how to create the cluster with kind with all ports to open and how to install ingress-nginx.

You can find the kubernetes files in the `kubernetes` folder.
you can run the command `make build-push-docker` to apply all of them.

if you want to delete all resources in your cluster, run `make delete-kubernetes-ressources`

### Scaleway

if you push to scaleway, deploy the ingress controller given by them and configure it as a LoadBalancer.


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

### Configure It Yourself

There is a [cap'n'proto](https://capnproto.org) file to configure all workers and sockets.

in this example, it runs 2 workers in the same runtime, and it works using only 10 Mo memory!
if you want to test it with a bigger configuration, let's see this 
[GitHub Repo](https://github.com/clementreiffers/capnp-generator).

> **Note**
> By default, there is a limitation of 128 Mo per workers
> with the worker example `src/index.js` you can run only approximately 700 workers
> at the same time instead of 3000 with the worker `worker2/index.js`


## Cloud architecture

The architecture must fulfill the following requirements:

```mermaid
flowchart LR
    receiver --> builder --> deployer --> runner
```
> **Note**
> This architecture is designed to facilitate the deployment of JS/Wasm code from a client to a server. 
> Once this architecture is operational, it needs to be secured.

### Explanations

#### receiver

The receiver component is responsible for receiving the code from a client and configuring the Cap'n'Proto 
file to enable the build process.

#### builder

The builder component compiles the project for a specific client and prepares it for deployment.

#### deployer

Once the build step is completed, the project is automatically deployed.

#### runner

The runner component allows the client to access the results of their build without having to make any changes to 
the architecture.

### complete architecture

### arch v9

```mermaid
flowchart LR
    subgraph cloud 
        S3
       fake-cf-api --> |PUT| S3[(S3)]
       get-worker-sources -->|GET| S3
       kaniko --> registry[(registry)] --> pod
        subgraph Kubernetes 
            
            
            subgraph receiver 
                fake-cf-api
            end
            fake-cf-api --> |create or update| WorkerDefinition
            fake-cf-api --> |create| WorkerDeployment
            fake-cf-api --> |create| secrets
            secrets --> |get| kaniko & pod
            controller --> |create| job-builder
            controller --> |watch| WorkerDefinition
            controller --> |get| WorkerDeployment
            
           controller --> |create while job pod done| runner
            subgraph api-server
               subgraph secrets
                  configMap([user-secrets])
               end
               subgraph runner
                  ingress([ingress]) & pod([pod]) & service([service])
               end
                WorkerDefinition([WorkerDefinition])--> |references| WorkerDeployment([WorkerDeployment])
               job-builder([JobBuilder])
            end
            job-builder --> pod-builder
            subgraph pod-builder
                prebuild[get which worker to be build] --> get-worker-sources --> capnp-generator --> kaniko
            end
        end
    end
```

let's zoom what happened with CRD :

```mermaid
flowchart TB
    subgraph Kubernetes
        fake-cf-api -->|create| WorkerDeployment & WorkerDefinition & WorkerCreator
        WorkerCreator .-> |references| WorkerDeployment & WorkerDefinition
        WorkerCreator --> |create| runner
        WorkerCreator --> |create| jobBuilder
        
        subgraph step
            jobBuilder
            subgraph references 
                WorkerDefinition & WorkerDeployment
            end
        end
    end
```

```mermaid
---
title: Simple sample
---
stateDiagram-v2
    [*] --> FakeCfApi
    FakeCfApi -->  WorkerCreator : accounts,scripts to reload
    FakeCfApi --> WorkerDefinition : accounts,scripts,creds
    WorkerDefinition --> WorkerDeployment : references current-depl
    WorkerCreator --> WorkerDefinition : update
    WorkerCreator --> WorkerDeployment : create with image,accounts,scripts
    WorkerCreator --> JobBuilder : create build
    WorkerCreator --> Runner : create while build finished
    Registry --> Runner
    JobBuilder --> Registry
    Runner --> [*]
```



WorkerDefinition :
- porter le nom du worker 
- propriétés non versionables d'un worker
- référencer le WorkerDeployment actif

WorkerDeployment :
- labels (scripts, accounts)
- un pour chaque version d'un worker (code Js au sein d'un exec complet)
- cred S3

le controller : 
- watch MAJ WorkerDefinition
- voir ce qui a été modif?
  - si depl actif != =>lire WorkerDepl => JobBuilder (modif uniquement ce qui est necessaire si besoin)
- watch job label "JobBuilder"
  - si ok => creer/maj runner
  - sinon => remonter erreur dans WorkerDeployment

fake-api:
- recois le code
- genere num version UIDv4
- upload S3 -> uniq path with numVer
- create WorkerDepl:
  - numVer
  - nomWorker
- create/update WorkerDef:
  - update numVer actif
- ref WorkerDepl

secrets:
- écrit grâce à la fake-api


## Links


- [Cloudflare Worker](https://workers.cloudflare.com)
- [Workerd NPM Package](https://www.npmjs.com/package/workerd)
- [TypeScript Lang](https://www.typescriptlang.org)
- [How to build Rust to WebAssembly for Workerd](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
- [Memory limits](https://community.cloudflare.com/t/workers-memory-limit/491329/2)
- [HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/)

