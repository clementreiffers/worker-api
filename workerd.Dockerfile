FROM ubuntu AS worker-builder
ADD https://github.com/cloudflare/workerd/releases/download/v1.20230419.0/workerd-linux-64.gz ./

RUN apt-get update && apt-get install -y clang libc++-dev

RUN gunzip workerd-linux-64.gz

RUN mv workerd-linux-64 usr/local/bin/workerd

RUN chmod +x usr/local/bin/workerd
