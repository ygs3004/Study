<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetail">{{detailAreVisible ? 'Hide':'Show'}} Details</button>
    <ul v-if="detailAreVisible">
      <li>
        <strong>Phone: </strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  /* 컴포넌트에서 props 변수명은 카멜케이스 사용(this를 이용하여 호출할때 '-'를 변수로 쓸수없음) */
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  data() {
    return {
      detailAreVisible: false,
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