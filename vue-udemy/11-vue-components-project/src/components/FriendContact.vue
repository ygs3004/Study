<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)':''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
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
    'emailAddress',
    'isFavorite'
  ],
  data() {
    return {
      detailAreVisible: false,
      friendIsFavorite: this.isFavorite,
    }
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
    // 부모 데이터의 불면성을 해칠수 없다
    toggleFavorite() {
      // if (this.isFavorite === '1'){  (x) 불가능
      if (this.friendIsFavorite === '1'){
        this.friendIsFavorite ='0';
      }else {
        this.friendIsFavorite = '1';
      }
    },
  }
};
</script>

<style scoped>

</style>