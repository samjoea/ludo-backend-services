FROM node:18.12.1-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ENV NODE_ENV production

EXPOSE 8765

CMD [ "yarn", "start" ]