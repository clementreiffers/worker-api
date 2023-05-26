ARG BUILD_COMMAND
ARG IMAGE=alpine

FROM $IMAGE AS builder
ARG BUILD_COMMAND

RUN if [ -z $BUILD_COMMAND -z $IMAGE ]; then \
      echo "you need to specify either IMAGE or BUILD_COMMAND arg" ; \
      exit 1 ; \
    else \
      $BUILD_COMMAND ; \
    fi

RUN echo $BUILD_COMMAND > truc

