export default {
  login(context) {
    context.commit('setAuth', true);
  },
  logout(context) {
    context.commit('setAuth', false);
  },
};
