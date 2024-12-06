const shoppingCartSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  });
  
  const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);
  module.exports = ShoppingCart;
  