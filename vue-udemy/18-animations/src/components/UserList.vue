<template>
  <transition-group tag='ul' name='user-list'>
    <li v-for='user in users' :key='user' @click='removeUser(user)'>{{ user }}</li>
  </transition-group>
  <div>
    <input type='text' ref='userNameInput'>
    <button @click='addUser'>사용자 추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
    };
  },
  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-active {
  transition: all 1s ease-in;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>