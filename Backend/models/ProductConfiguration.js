const mongoose = require('mongoose');

const productConfigurationSchema = new mongoose.Schema({
    productItemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductItem',
      required: true
    },
    variationOptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'VariationOption',
      required: true
    }
  });
  
  const ProductConfiguration = mongoose.model('ProductConfiguration', productConfigurationSchema);
  module.exports = ProductConfiguration;
  