const mongoose = require('mongoose');

const variationOptionSchema = new mongoose.Schema({
    variation_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Variation',
      required: true
    },
    value: {
      type: String,
      required: true
    }
  });
  
  const VariationOption = mongoose.model('VariationOption', variationOptionSchema);
  module.exports = VariationOption;
  