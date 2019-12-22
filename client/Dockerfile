FROM node:lts-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm install react-router-dom
RUN npm install react-scripts start

COPY . .
EXPOSE 3000


