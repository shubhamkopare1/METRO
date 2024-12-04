const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  paymentMethod: { type: String, enum: ['Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery'], required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  paymentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment', paymentSchema);
