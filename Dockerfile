FROM node AS builder

COPY package.json package.json

RUN yarn global add wrangler
RUN yarn

COPY ./ ./

RUN wrangler publish --dry-run --outdir=./build

FROM ubuntu AS worker

RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev nodejs npm
RUN mkdir ./build ./worker2

RUN npm install -g workerd

COPY --from=builder ./build ./build
COPY ./worker2 ./worker2
COPY my-config.capnp ./


EXPOSE 8080 8081

ENTRYPOINT ["workerd"]
CMD ["serve", "my-config.capnp"]