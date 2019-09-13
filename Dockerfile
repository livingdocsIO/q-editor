# Use latest version of Node as the base image
FROM node:10

RUN mkdir -p /app/client
COPY ./client/package.json /app/client
COPY ./client/package-lock.json /app/client
COPY ./client/config.js /app/client/config.js
WORKDIR /app/client
RUN npm install

# Example how to build and pass a jspm gh auth token to the build
# This is needed to install jspm and not running into a github API rate limit
# JSPM_GITHUB_AUTH_TOKEN=$(echo -n livingdocs-automationOC:$GH_TOKEN | base64)
# docker build --build-arg JSPM_GITHUB_AUTH_TOKEN=$JSPM_GITHUB_AUTH_TOKEN -t q-editor .
ARG JSPM_GITHUB_AUTH_TOKEN=a-very-secret-token
RUN node_modules/.bin/jspm install && cp -r jspm_packages /app/client/export/jspm_packages
# Copy the jspm_packages as there are some modules that are not loaded from a bundle
# COPY ./client/jspm_packages /app/client/export/jspm_packages

COPY ./client/favicon.png /app/client/favicon.png
COPY ./client/favicon-playground.png /app/client/favicon-playground.png
COPY ./client/locales /app/client/locales
COPY ./client/export /app/client/export

# Set work directory for run/cmd
WORKDIR /app

# Copy everything else to work directory
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install --production

COPY ./LICENSE /app

COPY ./index.js /app
COPY ./routes /app/routes

COPY config.js /app/config.js

# Run node app with env variable
CMD npm run start
