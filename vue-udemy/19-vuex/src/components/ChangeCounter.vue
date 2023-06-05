<template>
  <button @click='addTwo'>+2</button>
</template>

<script>
export default {
  methods: {
    addTwo() {
      this.$store.dispatch('increment');
    }
  }
};
</script>

<style scoped>

</style>