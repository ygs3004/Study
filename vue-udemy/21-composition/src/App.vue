<template>
  <section class="container">
    <user-data
      :age="age"
      :first-name="firstName"
      :last-name="lastName"
      class="a"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { computed, ref, watch } from 'vue';
import UserData from '@/components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const age = ref(20);

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

    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    return {
      userName,
      firstName,
      lastName,
      lastNameInput,
      age,
      setAge,
      setLastName,
    };
  },
};
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