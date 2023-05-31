ARG GIT

FROM alpine AS downloader
ARG GIT
RUN apk add git

RUN if [ -z $GIT ]; then \
      echo "you need to specify GIT link" ; \
      exit 1 ; \
    else \
      git clone $GIT /source ; \
    fi

FROM node AS prebuild

ENV toml_getter='npx gettoml --tomlPath /source/wrangler.toml'

RUN export image=$($toml_getter --valuePath image --defaultValue node)
RUN export build_command=$($toml_getter --valuePath build.command)

RUN echo "export image=$image" >> /commands/cmd.sh
RUN echo "export build_command=$build_command" >> /commands/cmd.sh


