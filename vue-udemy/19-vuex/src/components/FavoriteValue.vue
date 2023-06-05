<template>
  <h3>{{ counter }}</h3>
  <h3>Favorite do more</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    }
  }
};
</script>

<style scoped>

</style>