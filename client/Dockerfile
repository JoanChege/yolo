# Use lightweight node.js base image
FROM node:12-alpine

# Create a working directory within the container
WORKDIR /app

# Copy the package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy client code
COPY . .

# Expose the client port
EXPOSE 3000


# Specify the run command which starts app
CMD ["npm", "start"]
