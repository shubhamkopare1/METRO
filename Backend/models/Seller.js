const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  storeName: { type: String, required: true, unique: true }, 
  storeDescription: { type: String, maxlength: 500 }, 
  storeLogo: { url: String, filename: String }, 
  storeLocation: { city: String, state: String, country: String }, 
  contactNumber: { type: String }, 
  email: { type: String, required: true, unique: true }, 
  rating: { type: Number, min: 1, max: 5, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Seller', sellerSchema);
