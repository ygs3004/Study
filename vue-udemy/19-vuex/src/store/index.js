import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions.js';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
