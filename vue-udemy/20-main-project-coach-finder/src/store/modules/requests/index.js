import mutations from '@/store/modules/requests/mutations.js';
import actions from '@/store/modules/requests/actions.js';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations,
  actions,
};
