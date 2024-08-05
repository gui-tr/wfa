const bookingRepository = require('../repositories/bookingRepository');

class BookingApi {
  async getAllBookings(req, res) {
    try {
      const bookings = await bookingRepository.getAllBookings();
      res.status(200).send(bookings);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createBooking(req, res) {
    try {
      const booking = await bookingRepository.createBooking(req.body);
      res.status(201).send(booking);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getBookingById(req, res) {
    try {
      const booking = await bookingRepository.getBookingById(req.params.id);
      if (!booking) {
        return res.status(404).send('Booking not found');
      }
      res.status(200).send(booking);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateBooking(req, res) {
    try {
      const booking = await bookingRepository.updateBooking(req.params.id, req.body);
      if (!booking) {
        return res.status(404).send('Booking not found');
      }
      res.status(200).send(booking);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteBooking(req, res) {
    try {
      const booking = await bookingRepository.deleteBooking(req.params.id);
      if (!booking) {
        return res.status(404).send('Booking not found');
      }
      res.status(200).send('Booking deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new BookingApi();
