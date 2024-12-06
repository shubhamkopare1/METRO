const mongoose = require('mongoose');

const orderLineSchema = new mongoose.Schema({
    productItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductItem',
      required: true
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true
    },
    qty: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  
  const OrderLine = mongoose.model('OrderLine', orderLineSchema);
  module.exports = OrderLine;
  