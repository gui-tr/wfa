# Use the official Node.js image from the Docker Hub
FROM node:18.16.0

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies, including dev dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Install nodemon globally
RUN npm install -g nodemon

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the application with nodemon
CMD ["nodemon", "src/server.js"]
