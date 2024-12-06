
const mongoose = require('mongoose');

const userAddressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true
  },
  isDefault: {
    type: Boolean,
    default: false
  }
});

const UserAddress = mongoose.model('UserAddress', userAddressSchema);
module.exports = UserAddress;
