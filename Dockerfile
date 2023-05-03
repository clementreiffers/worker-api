FROM node AS builder

COPY package.json package.json

RUN yarn global add wrangler
RUN yarn

COPY ./ ./

RUN wrangler publish --dry-run --outdir=./build

FROM ghcr.io/clementreiffers/workerd AS worker

RUN mkdir ./build ./worker2

COPY --from=builder ./build ./build
COPY ./worker2 ./worker2
COPY my-config.capnp ./


EXPOSE 8080 8081

ENTRYPOINT ["workerd"]
CMD ["serve", "my-config.capnp"]