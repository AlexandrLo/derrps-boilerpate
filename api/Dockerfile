FROM node:15.8.0-alpine as base
RUN npm i -g npm@latest
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
EXPOSE 8080

FROM base as development
ENV NODE_ENV=development
RUN apk add --no-cache --virtual .gyp python make g++ \
    && npm i
COPY --chown=node:node . .
USER node
CMD [ "npm", "run", "dev" ]
