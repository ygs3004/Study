<template>
  <button @click='inc'>+2</button>
  <button @click='increase({value:11})'>+11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addTwo() {
    //   this.$store.dispatch('increment');
    // }

    // ...mapActions(['increment', 'increase'])

    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    })
  }
};
</script>

<style scoped>

</style>