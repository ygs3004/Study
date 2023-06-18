<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

// const uName = ref('YGS');
// const user = reactive({
//   name: 'Ygs',
//   age: 20,
// });
const firstName = ref('');
const lastName = ref('');
const age = ref(20);

// watch(age, (newValue, oldValue) => {
//   console.log('Old age: ', oldValue);
//   console.log('New age: ', newValue);
// });

const userName = computed(() => firstName.value + ' ' + lastName.value);

watch([age, userName], (newValues, oldValues) => {
  console.log('Old age: ', oldValues[0]);
  console.log('New age: ', newValues[0]);

  console.log('Old Name: ', oldValues[1]);
  console.log('New Name: ', newValues[1]);
});

const setAge = () => {
  age.value = 32;
};

// const setFirstName = (event) => {firstName.value = event.target.value;
// };
//
// const setLastName = (event) => {lastName.value = event.target.value;
// };
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