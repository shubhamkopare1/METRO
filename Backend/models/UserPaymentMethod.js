const userPaymentMethodSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SiteUser',
      required: true
    },
    paymentTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PaymentType',
      required: true
    },
    provider: String,
    accountNumber: String,
    expiryDate: Date,
    isDefault: {
      type: Boolean,
      default: false
    }
  });
  
  const UserPaymentMethod = mongoose.model('UserPaymentMethod', userPaymentMethodSchema);
  module.exports = UserPaymentMethod;
  