FROM node AS builder

COPY package.json package.json

RUN yarn global add wrangler
RUN yarn

# then you can use wrangler command to build or publish what you want