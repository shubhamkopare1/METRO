const mongoose = require('mongoose');
const paymentTypeSchema = new mongoose.Schema({
    value: {
      type: String,
      required: true
    }
  });
  
  const PaymentType = mongoose.model('PaymentType', paymentTypeSchema);
  module.exports = PaymentType;
  