const express = require('express');
const bookingApi = require('../api/bookingApi');

const router = express.Router();

router.route('/')
  .get(bookingApi.getAllBookings)
  .post(bookingApi.createBooking);

router.route('/:id')
  .get(bookingApi.getBookingById)
  .put(bookingApi.updateBooking)
  .delete(bookingApi.deleteBooking);

module.exports = router;
