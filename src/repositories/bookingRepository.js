const Booking = require('../models/Booking');

class BookingRepository {
  async createBooking(bookingData) {
    const booking = new Booking(bookingData);
    return await booking.save();
  }

  async getBookingById(bookingId) {
    return await Booking.findById(bookingId).populate('userId workspaceId');
  }

  async updateBooking(bookingId, updateData) {
    return await Booking.findByIdAndUpdate(bookingId, updateData, { new: true });
  }

  async deleteBooking(bookingId) {
    return await Booking.findByIdAndDelete(bookingId);
  }

  async getAllBookings() {
    return await Booking.find().populate('userId workspaceId');
  }

  async getBookingsByUser(userId) {
    return await Booking.find({ userId }).populate('workspaceId');
  }
}

module.exports = new BookingRepository();
