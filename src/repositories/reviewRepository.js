const Review = require('../models/Review');

class ReviewRepository {
  async createReview(reviewData) {
    const review = new Review(reviewData);
    return await review.save();
  }

  async getReviewById(reviewId) {
    return await Review.findById(reviewId).populate('userId workspaceId');
  }

  async updateReview(reviewId, updateData) {
    return await Review.findByIdAndUpdate(reviewId, updateData, { new: true });
  }

  async deleteReview(reviewId) {
    return await Review.findByIdAndDelete(reviewId);
  }

  async getAllReviews() {
    return await Review.find().populate('userId workspaceId');
  }

  async getReviewsByWorkspace(workspaceId) {
    return await Review.find({ workspaceId }).populate('userId');
  }

  async getReviewsByUser(userId) {
    return await Review.find({ userId }).populate('workspaceId');
  }
}

module.exports = new ReviewRepository();
