import { createStore } from 'vuex';
import productModule from './product/index.js';
import loginModule from './auth/index.js';
import cartModule from './cart/index.js';

export default createStore({
  modules: {
    product: productModule,
    auth: loginModule,
    cart: cartModule,
  },
  state() {},
  actions() {},
  getters() {},
  mutations() {},
});
