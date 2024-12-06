const mongoose = require('mongoose');
const shoppingCartItemSchema = new mongoose.Schema({
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ShoppingCart',
      required: true
    },
    productItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductItem',
      required: true
    },
    qty: {
      type: Number,
      required: true
    }
  });
  
  const ShoppingCartItem = mongoose.model('ShoppingCartItem', shoppingCartItemSchema);
  module.exports = ShoppingCartItem;
  