<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetail">Show Details</button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: 'manual',
        name: 'Manuel Lorenz',
        phone: '010 1234 6789',
        email: 'manuel@localhost.com'
      },
    }
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  }
};
</script>

<style scoped>

</style>