FROM node AS builder

COPY package.json package.json
# RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev

RUN yarn global add wrangler
RUN yarn

COPY ./ ./

RUN npm wrangler publish --dry-run --outdir=./build

FROM ubuntu AS worker

RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev nodejs npm
RUN mkdir build

COPY --from=builder ./build ./build
COPY --from=builder my-config.capnp ./

RUN npm install -g workerd

ENTRYPOINT ["workerd"]
CMD ["serve", "my-config.capnp"]