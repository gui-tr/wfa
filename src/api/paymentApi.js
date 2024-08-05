const paymentRepository = require('../repositories/paymentRepository');

class PaymentApi {
  async getAllPayments(req, res) {
    try {
      const payments = await paymentRepository.getAllPayments();
      res.status(200).send(payments);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createPayment(req, res) {
    try {
      const payment = await paymentRepository.createPayment(req.body);
      res.status(201).send(payment);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getPaymentById(req, res) {
    try {
      const payment = await paymentRepository.getPaymentById(req.params.id);
      if (!payment) {
        return res.status(404).send('Payment not found');
      }
      res.status(200).send(payment);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updatePayment(req, res) {
    try {
      const payment = await paymentRepository.updatePayment(req.params.id, req.body);
      if (!payment) {
        return res.status(404).send('Payment not found');
      }
      res.status(200).send(payment);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deletePayment(req, res) {
    try {
      const payment = await paymentRepository.deletePayment(req.params.id);
      if (!payment) {
        return res.status(404).send('Payment not found');
      }
      res.status(200).send('Payment deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new PaymentApi();
