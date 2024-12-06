const mongoose = require('mongoose');
const shopOrderSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    orderDate: {
      type: Date,
      default: Date.now
    },
    paymentMethodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserPaymentMethod',
      required: true
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true
    },
    shippingMethod: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ShippingMethod',
      required: true
    },
    orderTotal: {
      type: Number,
      required: true
    },
    orderStatus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderStatus',
      required: true
    }
  });
  
  const ShopOrder = mongoose.model('ShopOrder', shopOrderSchema);
  module.exports = ShopOrder;
  