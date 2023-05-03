FROM ubuntu AS worker

RUN apt-get update && apt-get install -y clang libc++-dev libc++abi-dev nodejs npm

RUN npm install -g workerd

# then you can use workerd to serve your capnp config