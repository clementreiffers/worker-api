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

FROM node AS builder

COPY ./ usr/local/bin/gettoml
COPY --from=downloader source ./source

RUN cd /usr/local/bin/gettoml &&  yarn

RUN build_command=$(gettoml --tomlPath wrangler.toml --valuePath build.command --defaultValue 'echo ""')

RUN if [ -z $build_command ]; then \
      echo "you need to specify build command in toml" ; \
      exit 1 ; \
    else \
      $BUILD_COMMAND ; \
    fi

FROM node AS capnp-creator

RUN git clone https://github.com/clementreiffers/capnp-generator

# let's reimplement capnp-generator
