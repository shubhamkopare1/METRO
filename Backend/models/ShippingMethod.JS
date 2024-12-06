const shippingMethodSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });
  
  const ShippingMethod = mongoose.model('ShippingMethod', shippingMethodSchema);
  module.exports = ShippingMethod;
  