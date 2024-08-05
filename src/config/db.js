const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the connection URI from the environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function
module.exports = connectDB;

// Handle graceful shutdown
const gracefulShutdown = async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to app termination');
    process.exit(0); // Exit process with success
  } catch (err) {
    console.error('Error during graceful shutdown', err);
    process.exit(1); // Exit process with failure
  }
};

// Only set up the shutdown handlers if this is the main module
if (require.main === module) {
  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
}
