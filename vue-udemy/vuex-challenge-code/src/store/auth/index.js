import loginActions from './actions.js';
import loginGetters from './getters.js';
import loginMutations from './mutations.js';

export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: loginMutations,
  actions: loginActions,
  getters: loginGetters,
};
