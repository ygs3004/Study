<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return{
      friends: [
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