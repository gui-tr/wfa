const reviewRepository = require('../repositories/reviewRepository');

class ReviewApi {
  async getAllReviews(req, res) {
    try {
      const reviews = await reviewRepository.getAllReviews();
      res.status(200).send(reviews);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async createReview(req, res) {
    try {
      const review = await reviewRepository.createReview(req.body);
      res.status(201).send(review);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async getReviewById(req, res) {
    try {
      const review = await reviewRepository.getReviewById(req.params.id);
      if (!review) {
        return res.status(404).send('Review not found');
      }
      res.status(200).send(review);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateReview(req, res) {
    try {
      const review = await reviewRepository.updateReview(req.params.id, req.body);
      if (!review) {
        return res.status(404).send('Review not found');
      }
      res.status(200).send(review);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteReview(req, res) {
    try {
      const review = await reviewRepository.deleteReview(req.params.id);
      if (!review) {
        return res.status(404).send('Review not found');
      }
      res.status(200).send('Review deleted');
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = new ReviewApi();
