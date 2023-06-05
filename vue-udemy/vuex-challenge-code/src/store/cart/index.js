import cartActions from './actions.js';
import cartGetters from './getters.js';
import cartMutations from './mutations.js';

export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  actions: cartActions,
  getters: cartGetters,
  mutations: cartMutations,
};
