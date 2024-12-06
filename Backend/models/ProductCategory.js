const mongoose = require('mongoose');
const productCategorySchema = new mongoose.Schema({
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductCategory'
    },
    categoryaName: {
      type: String,
      required: true
    }
  });
  
  const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
  module.exports = ProductCategory;
  