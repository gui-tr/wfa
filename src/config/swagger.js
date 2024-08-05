const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

// Load the OpenAPI document
let swaggerDocument;
try {
  swaggerDocument = YAML.load(path.join(__dirname, '..', 'doc', 'openapi.yml'));
} catch (error) {
  console.error('Error loading Swagger document:', error);
  process.exit(1); // Exit the application if the Swagger document cannot be loaded
}

// Function to setup Swagger UI
const setupSwagger = (app) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = setupSwagger;
