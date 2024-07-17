const jobApi = require('../api/jobApi');
const workspaceApi = require('../api/workspaceApi');
const express = require('express');

module.exports = function setupRoutes(app) {
  // API routes
  app.use('/jobs', jobApi);
  app.use('/workspaces', workspaceApi);

  // Root route
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};

