<template>
  <form @submit.prevent="$emit('updateUser', inputName, inputAge)">
    <div>
      <label>이름</label>
      <input type="text" v-model="inputName"/>
    </div>
    <div>
      <label>나이</label>
      <input type="number" v-model="inputAge"/>
    </div>
    <button>변경</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputName: '',
      inputAge: '',
    }
  }
}
</script>

<style scoped>

</style>