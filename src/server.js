const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const setupSwagger = require('./config/swagger');
const setupRoutes = require('./config/routes');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passportConfig'); // Import the passport configuration

// Load environment variables from .env file
dotenv.config();

if (!process.env.SESSION_SECRET || !process.env.JWT_SECRET) {
  console.error('FATAL ERROR: SESSION_SECRET and JWT_SECRET must be set.');
  process.exit(1);
}

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Security middlewares
app.use(helmet()); // Adds security-related HTTP headers
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Debugging: Check if connectDB is defined
console.log(connectDB); // Should log [Function: connectDB]

// Connect to the database
connectDB().catch(err => {
  console.error('Error connecting to the database:', err);
  process.exit(1); // Exit the process with failure
});

// Express session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key', 
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent only over HTTPS in production
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  },
}));


// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Setup Swagger
setupSwagger(app);

// Setup routes
setupRoutes(app);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0); // Exit the process with success
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0); // Exit the process with success
  });
});
