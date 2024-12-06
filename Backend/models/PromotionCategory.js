const mongoose = require('mongoose');

const promotionCategorySchema = new mongoose.Schema({
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductCategory',
      required: true
    },
    promotionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Promotion',
      required: true
    }
  });
  
  const PromotionCategory = mongoose.model('PromotionCategory', promotionCategorySchema);
  module.exports = PromotionCategory;
  