#use lightweight node.js base image
FROM node:alpine

#create a working directory within the container
WORKDIR /app

#copy the package.json
COPY package*.json ./

#install dependencies
RUN npm install

#copy backend code
COPY /home/joanchege/dev/code/IP2/yolo/backend/ .

#expose the backend port
EXPOSE 5000

#specify the run command which starts app
CMD ["npm", "start"]