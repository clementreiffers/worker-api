ARG GIT
ARG IMAGE=alpine
ARG BUILD_COMMAND

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

COPY ./ ./
COPY --from=downloader source/wrangler.toml ./

RUN yarn

RUN node src/index.js --tomlPath wrangler.toml --valuePath build.image --defaultValue alpine > image
RUN node src --tomlPath wrangler.toml --valuePath build.command --defaultValue 'echo ""' > build_command

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
