const userReviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderedProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductItem',
    required: true
  },
  ratingValue: {
    type: Number,
    required: true
  },
  comment: String
});

const UserReview = mongoose.model('UserReview', userReviewSchema);
module.exports = UserReview;
