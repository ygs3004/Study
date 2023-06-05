<template>
  <button @click='login' v-if='!isAuth'>Login</button>
  <button @click='logout' v-if='isAuth'>Logout</button>
  <p>{{ isTestAuth }}</p>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    }
  },

  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>

</style>