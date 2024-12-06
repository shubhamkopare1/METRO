const mongoose = require('mongoose');
const variationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  });
  
  const Variation = mongoose.model('Variation', variationSchema);
  module.exports = Variation;
  