FROM node:20.9.0-slim

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

CMD yarn start