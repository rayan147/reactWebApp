FROM node:lts-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
RUN npm install nodemon
RUN npm install
COPY . .

EXPOSE 5000


CMD [ "npm", "run", "dev" ]