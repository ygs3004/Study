<template>
  <div>
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],

  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    console.log(context);
    return {
      uName,
      age,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>

<style scoped></style>