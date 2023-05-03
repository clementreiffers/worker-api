#FROM ubuntu AS worker

#RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev nodejs npm

#RUN npm install -g workerd

# then you can use workerd to serve your capnp config


ARG ARCH=x86_64

FROM --platform=$ARCH ubuntu
ADD https://github.com/cloudflare/workerd/releases/download/v1.20230419.0/workerd-linux-64.gz ./

RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev

RUN gunzip workerd-linux-64.gz

RUN mv workerd-linux-64 usr/local/bin/workerd

RUN chmod +x usr/local/bin/workerd

