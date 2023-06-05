<template>
  <button @click='addTwo'>+2</button>
</template>

<script>
export default {
  methods: {
    addTwo() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style scoped>

</style>