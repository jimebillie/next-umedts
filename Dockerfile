FROM node:20.12.2-slim

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

CMD npm start