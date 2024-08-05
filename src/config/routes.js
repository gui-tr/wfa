const express = require('express');
const workspaceApi = require('../api/workspaceApi');
const userApi = require('../api/userApi');
const bookingApi = require('../api/bookingApi');
const paymentApi = require('../api/paymentApi');
const reviewApi = require('../api/reviewApi');

module.exports = function setupRoutes(app) {
  // API routes
  app.use('/workspaces', workspaceApi);
  app.use('/users', userApi);
  app.use('/bookings', bookingApi);
  app.use('/payments', paymentApi);
  app.use('/reviews', reviewApi);

  // Root route
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
};
