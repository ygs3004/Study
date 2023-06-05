export default {
  addProductToCart(context, productData) {
    context.commit('addProductToCart', productData);
  },

  removeProductFromCart(context, prodId) {
    context.commit('removeProductFromCart', prodId);
  },
};
