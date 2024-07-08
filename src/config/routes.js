const jobApi = require('../api/jobApi');
const express = require('express');

module.exports = function setupRoutes(app) {
  // API routes
  app.use('/jobs', jobApi);

  // Root route
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};

