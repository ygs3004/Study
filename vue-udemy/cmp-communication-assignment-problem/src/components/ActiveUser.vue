<template>
  <h2>이름: {{ user.name }}</h2>
  <h3>나이: {{ user.age }}</h3>
</template>

<script>
export default {
  props: {
    user: {
      name: {
        type: String,
        require: true,
      },
      age: {
        type: Number,
        require: true,
      }
    }
  },
}
</script>

<style scoped>

</style>