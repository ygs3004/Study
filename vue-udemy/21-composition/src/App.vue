<template>
  <section class="container">
    <!--    <h2>{{ userName }}</h2>-->
    <!--    <h3>{{ age }}</h3>-->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script setup>
// import { ref } from 'vue';

import { reactive } from 'vue';

const user = reactive({
  name: 'Ygs',
  age: 20,
});

// const userName = ref('Maximilian');
// const age = ref(31);

setTimeout(() => {
  // userName.value = 'Max';
  // age.value = 30;
  user.name = 'Yoon Gun SOo';
  user.age = 21;
}, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>