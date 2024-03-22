FROM node:20.9.0-slim


WORKDIR /usr/app


COPY . .

RUN npm run build

CMD ["npm", "start"]