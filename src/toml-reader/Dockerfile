ARG BUILD_COMMAND
ARG IMAGE=alpine
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
