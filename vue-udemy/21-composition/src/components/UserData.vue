<template>
  <div>
    <h2>{{ uName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],

  setup(props, context) {
    const uName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);
    return {
      uName,
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