<template>
  <active-user
      :user="user">
  </active-user>
  <user-data @updateUser="updateUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '이름을 입력해주세요',
        age: '나이를 입력해주세요',
      }
    };
  },
  methods: {
    updateUser(name, age) {
      this.user.name = name;
      this.user.age = age;
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
