const express = require('express');
const paymentApi = require('../api/paymentApi');

const router = express.Router();

router.route('/')
  .get(paymentApi.getAllPayments)
  .post(paymentApi.createPayment);

router.route('/:id')
  .get(paymentApi.getPaymentById)
  .put(paymentApi.updatePayment)
  .delete(paymentApi.deletePayment);

module.exports = router;
