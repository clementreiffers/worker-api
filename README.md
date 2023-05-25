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

run `npm install -g wrangler` then `npx wranger dev src/index.ts`

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
> with the worker example `src/index.ts` you can run only approximately 700 workers
> at the same time instead of 3000 with the worker `worker2/index.ts` 

## Cloud architecture

### arch v1

in order to optimize all the process, we can think of a context like that :

```mermaid
flowchart TB
    db[(database)] --> workerd-1 --> db
    
    admin --> |Set JavaScript / Wasm files using SSH| Volume
    subgraph Kubernetes-Cluster 
        subgraph workerd-1
            worker1
            worker2
            worker3
            worker...
        end
        Volume --> |JS / WASM files| workerd-1
        Volume --> |trigger| w1
        subgraph workerd-2
            w1[capnp-generator] --> w2[workerd1-controller]
        end
        w2 --> |save Capnp config generated| Volume
        w2 --> |restart with a new Capnp file| workerd-1
    end
    
    client <--> |HTTP| worker1 & worker2 & worker3 & worker...
    
```

this schema could evolve because of workers that can use only HTTP requests.
To save the capnp file, we will maybe save it into a database fetch-able using HTTP only.

problems :
- **how to restart workerd-1 with args?**

### arch v2

```mermaid
flowchart LR
    admin --> |ssh: JS/Wasm/Capnp| Volume
    subgraph Kubernetes-Cluster
        Volume --> |trigger| Killer-Restarter-Pod --> Linux-Depl

        HPA --> |instantiate in another node| Linux-Depl

        subgraph Linux-Depl
           subgraph Linux-1
              manager-1 --> |restart docker| workerd-1
           end
           subgraph Linux-2
              manager-2 --> |restart docker| workerd-2 
           end
        end
        workerd-1 & workerd-2 --> |Get Files| Volume
    end
```

> **Note :**
> - we don't need any arguments while restarting the Linux-Depl

> **Warning :**
> - how to kill / restart pods ?
> - Less Scalable than Arch V1 due to multiple managers
> - Consume more resources than V1

but here we don't need any arguments while restarting the Linux-Depl


### arch v3

```mermaid
flowchart LR
    admin --> |ssh| Volume
    admin --> |triggered| Volume
    subgraph Kubernetes-Cluster
        HPA --> worker-deployment
      subgraph worker-deployment
         subgraph workerd-1 
             direction LR
             worker1-1
             worker2-1
         end
         subgraph workerd-2
             direction LR
             worker1-2
             worker2-2
         end
      end
   
      subgraph Volume
          direction LR
          config.capnp
          restarter
          files
          capnp-generator
      end
      worker-deployment --> |get Files| Volume
      Volume --> |restart| worker-deployment
   end
```
> **Note :**
> - all workerd inside the worker-deployment will reed the `config.capnp` file
> - there is no args because the config has to be `config.capnp` file
> - The `config.capnp` can be build manually or dynamically
> - the admin restart the worker-deployment manually => can be automatized by himself if ssh done
> - More scalable than V2
> - Less resources than V1 (No Managers & File watcher)

> **Warning :**
> - needs a CI/CD => we have to build&test all projects, generate a capnp file and then send it using SSH


1st step : send the tar file
2nd step : give the route api, S3 token api, url S3

### arch v4

```mermaid
flowchart TB
   admin --> Git -->|webhook| controller & CRD
   Git --> |clone| builder
   builder --> |push| registry --> |pull| workerPod
    subgraph Kubernetes
        builder(job pod: download + build + push) --> controller
        CRD --> controller
        controller --> deployment
        deployment --> workerPod --> |GET| secrets
    end
    client --> |HTTPS| workerPod

```
pour les secrets, voir openssl ou gpg pour chiffrer l'executable
gpg asymétrique donc mieux

## Links


- [Cloudflare Worker](https://workers.cloudflare.com)
- [Workerd NPM Package](https://www.npmjs.com/package/workerd)
- [TypeScript Lang](https://www.typescriptlang.org)
- [How to build Rust to WebAssembly for Workerd](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
- [Memory limits](https://community.cloudflare.com/t/workers-memory-limit/491329/2)
- [HTMLRewriter](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter/)
