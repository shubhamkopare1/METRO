const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  unitNumber: {
    type: String,
    required: false,
    trim: true
  },
  streetNumber: {
    type: String,
    required: false,
    trim: true
  },
  addressLine1: {
    type: String,
    required: true,
    trim: true
  },
  addressLine2: {
    type: String,
    required: false,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  region: {
    type: String,
    required: false,
    trim: true
  },
  postalCode: {
    type: String,
    required: true,
    trim: true
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',  
    required: true
  }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;

  