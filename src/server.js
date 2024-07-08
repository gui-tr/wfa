const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const setupSwagger = require('./config/swagger');
const setupRoutes = require('./config/routes');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Debugging: Check if connectDB is defined
console.log(connectDB); // Should log [Function: connectDB]

try {
    // Connect to the database
    connectDB();
} catch (err) {
    console.error('Error connecting to the database', err);
}

// Middleware to parse JSON
app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Setup routes
setupRoutes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
