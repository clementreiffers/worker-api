ARG language
ARG github

FROM debian AS downloader
#RUN git clone ${github}
RUN apt-get update && apt-get install -y tomlq
COPY Dockerfiles/wrangler.toml .
RUN tomlq -r lang wrangler.toml



FROM node AS ts_builder

COPY src/worker1/package.json package.json

RUN yarn global add wrangler
RUN yarn

COPY Dockerfiles ./

RUN wrangler publish --dry-run --outdir=./build

FROM rust:latest as rs_builder

COPY Dockerfiles ./

RUN cargo install -q worker-build
RUN worker-build --release
RUN mv *.capnp ./build

FROM ubuntu AS worker-builder
ADD https://github.com/cloudflare/workerd/releases/download/v1.20230419.0/workerd-linux-64.gz ./

RUN apt-get update && apt-get install -y clang libc++-dev

RUN gunzip workerd-linux-64.gz

RUN mv workerd-linux-64 usr/local/bin/workerd

RUN chmod +x usr/local/bin/workerd

RUN mkdir ./build ./worker2

COPY --from=ts_builder ./build ./build
COPY src/worker2 ./worker2
COPY Dockerfiles ./
RUN workerd compile my-config.capnp > serv.out

# why do we use ubuntu in prod : https://github.com/cloudflare/workerd/issues/286
FROM ubuntu AS worker

RUN apt-get update && apt-get install -y libc++-dev

COPY --from=worker-builder serv.out .

CMD ["./serv.out"]
