const mongoose = require('mongoose');

const productItemSchema = new mongoose.Schema({
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    SKU: {
      type: String,
      required: true,
      unique: true
    },
    qtyInStock: {
      type: Number,
      required: true
    },
    productImage: String,
    price: {
      type: Number,
      required: true
    }
  });
  
  const ProductItem = mongoose.model('ProductItem', productItemSchema);
  module.exports = ProductItem;
  