<template>
  <section class="container">
    <!--    <h2>{{ userName }}</h2>-->
    <!--    <h3>{{ age }}</h3>-->
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </section>
</template>

<script>
import { isReactive, isRef, reactive, ref, toRefs } from 'vue';

export default {
  setup() {
    const user = reactive({
      name: 'Ygs',
      age: 20,
    });
    const uAge = ref(31);

    console.log(isRef(uAge));
    console.log(isReactive(user));
    const userRefs = toRefs(user);

    setTimeout(() => {
      user.name = 'Yoon Gun Soo';
      user.age = 21;
    }, 2000);

    return {
      user: user,
      name: userRefs.name,
      age: userRefs.age,
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