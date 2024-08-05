const express = require('express');
const reviewApi = require('../api/reviewApi');

const router = express.Router();

router.route('/')
  .get(reviewApi.getAllReviews)
  .post(reviewApi.createReview);

router.route('/:id')
  .get(reviewApi.getReviewById)
  .put(reviewApi.updateReview)
  .delete(reviewApi.deleteReview);

module.exports = router;
