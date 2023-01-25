<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return{
      friends: [
        {
          id: 'manual',
          name: 'Manuel Lorenz',
          phone: '010 1234 6789',
          email: 'manuel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '010 2345 2929',
          email: 'julie@localhost.com'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>