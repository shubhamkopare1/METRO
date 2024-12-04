const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  shippingAddress: { type: String, required: true },
  shippingStatus: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
  shippingDate: { type: Date },
  deliveryDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Shipping', shippingSchema);
