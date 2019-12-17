FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

EXPOSE 5000
CMD [ "npm", "run dev" ]