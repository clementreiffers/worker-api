ARG GIT

FROM alpine AS downloader
ARG GIT
RUN apk add git

RUN if [ -z $GIT ]; then \
      echo "you need to specify GIT link" ; \
      exit 1 ; \
    else \
      git clone $GIT source ; \
    fi

FROM node AS arg-setter

ARG BUILD_COMMAND
ARG IMAGE

COPY ./ ./
COPY --from=downloader source/wrangler.toml ./

RUN yarn

RUN IMAGE=$(node src/index.js --tomlPath wrangler.toml --valuePath build.image)
RUN BUILD_COMMAND=$(node src --tomlPath wrangler.toml --valuePath build.command)

RUN echo $img $build_cmd > truc

# ARG IMAGE=img
ARG BUILD_COMMAND=$build_cmd

FROM $IMAGE AS builder
ARG BUILD_COMMAND

COPY --from=downloader ./source ./

RUN if [ -z $BUILD_COMMAND -z $IMAGE ]; then \
      echo "you need to specify either IMAGE or BUILD_COMMAND arg" ; \
      exit 1 ; \
    else \
      $BUILD_COMMAND ; \
    fi

RUN echo $BUILD_COMMAND > truc
