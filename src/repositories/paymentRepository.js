const Payment = require('../models/Payment');

class PaymentRepository {
  async createPayment(paymentData) {
    const payment = new Payment(paymentData);
    return await payment.save();
  }

  async getPaymentById(paymentId) {
    return await Payment.findById(paymentId).populate('bookingId');
  }

  async updatePayment(paymentId, updateData) {
    return await Payment.findByIdAndUpdate(paymentId, updateData, { new: true });
  }

  async deletePayment(paymentId) {
    return await Payment.findByIdAndDelete(paymentId);
  }

  async getAllPayments() {
    return await Payment.find().populate('bookingId');
  }

  async getPaymentsByBooking(bookingId) {
    return await Payment.find({ bookingId });
  }
}

module.exports = new PaymentRepository();
