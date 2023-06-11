import mutations from '@/store/modules/requests/mutations.js';
import actions from '@/store/modules/requests/actions.js';
import getters from '@/store/modules/requests/getters.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
};
