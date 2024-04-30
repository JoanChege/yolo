#use lightweight node.js base image
FROM node:alpine AS builder

#create a working directory within the container
WORKDIR /app

#copy the package.json
COPY package*.json ./

#install dependencies
RUN npm install

#copy client code
#COPY . .

#expose the client port
EXPOSE 3000

#mount the development directory as a volume
VOLUME [/"app"]

#specify the run command which starts app
CMD ["npm", "start"]