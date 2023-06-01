FROM node:alpine
RUN apk add git img
RUN npm install --global gettoml

ADD prebuild.sh /prebuild.sh
RUN chmod +x /prebuild.sh

ADD template.Dockerfile /template.Dockerfile

ENTRYPOINT ["/prebuild.sh"]
