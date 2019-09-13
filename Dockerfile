FROM node:9-alpine

RUN apk add --no-cache tini
WORKDIR /app
ADD ./ /app
ADD ./client/jspm_packages /app/client/export/jspm_packages
ENTRYPOINT  ["/sbin/tini", "-g", "--"]
CMD ["node", "index.js"]
