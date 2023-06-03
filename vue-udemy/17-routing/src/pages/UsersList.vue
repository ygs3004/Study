<template>
  <button @click='confirmInput'>Confirm</button>
  <button @click='saveChanges'>Save Changes</button>
  <ul>
    <user-item v-for='user in users' :key='user.id' :name='user.fullName' :role='user.role'></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  dat() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      // 뒤로가기
      // this.$router.back();
      // 앞으로가기
      // this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    }

  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You get unsaved changes!');
      next(userWantsToLeave);
    }

  },
  unmounted() {
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>