const mongoose = require('mongoose');
const promotionSchema = new mongoose.Schema({
    name: String,
    description: String,
    discountRate: Number,
    startDate: Date,
    endDate: Date
  });
  
  const Promotion = mongoose.model('Promotion', promotionSchema);
  module.exports = Promotion;
  