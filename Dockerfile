# Use the official Node.js image as the base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /admin-frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 5100

# Start the app in development mode
CMD ["npm", "run", "dev"]
