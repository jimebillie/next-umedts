FROM node:20.9.0-slim


WORKDIR /app


COPY . /app

RUN npm run build

CMD ["npm", "start"]