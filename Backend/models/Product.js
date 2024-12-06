const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  productImage: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
