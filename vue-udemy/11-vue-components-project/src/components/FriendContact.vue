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
  // props: ['name','phoneNumber','emailAddress','isFavorite'],
  props: {
    name: {
      type: String, // String이 아닐경우 에러
      // 지원되는 프로퍼티 값 : String, Number, Boolean, Array, Object, Date, Function, Symbol
      required: true // 반드시 프로퍼티가 값이 있어야한다는 의미
    },
    phoneNumber:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    isFavorite:{
      type: String,
      required: false,
      default: '0', // 기본값 설정 가능(함수로도 가능 function(){})
      validator: function (value) { // props에 입력된 값이 유효한지 확인
        return value === '1' || value === '0'; // 1또는 0이면 true, 아니면 false를 반환
      },
    },
  },
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