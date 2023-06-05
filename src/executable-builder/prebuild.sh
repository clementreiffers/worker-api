#!/bin/sh

if [ -z $GIT ]; then
    echo "you need to specify GIT link" ;
    exit 1 ;
else
    git clone $GIT /source ;
fi

toml_getter='gettoml --tomlPath /source/wrangler.toml'

BUILD_DESTINATION_DIR=${BUILD_DESTINATION_DIR:-dist}
IMAGE=$($toml_getter --valuePath image --defaultValue node)
BUILD_COMMAND=$($toml_getter --valuePath build.command)

cp template.Dockerfile /source/Dockerfile

img build /source \
    --tag build:latest \
    --build-arg IMAGE="$IMAGE" \
    --build-arg BUILD_COMMAND="$BUILD_COMMAND" \
    --build-arg BUILD_DESTINATION_DIR="$BUILD_DESTINATION_DIR"

# img unpack build:latest --target ./build

