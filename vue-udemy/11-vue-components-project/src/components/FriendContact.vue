<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetail">{{ detailAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailAreVisible">
      <li>
        <strong>Phone: </strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email: </strong>
        {{ email }}
      </li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  /* 컴포넌트에서 props 변수명은 카멜케이스 사용(this를 이용하여 호출할때 '-'를 변수로 쓸수없음) */
  // props: ['name','phoneNumber','emailAddress','isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String, // String이 아닐경우 에러
      // 지원되는 프로퍼티 값 : String, Number, Boolean, Array, Object, Date, Function, Symbol
      required: true // 반드시 프로퍼티가 값이 있어야한다는 의미
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // 기본값 설정 가능(함수로도 가능 function(){})
      // validator: function (value) { // props에 입력된 값이 유효한지 확인
      //   return value === '1' || value === '0'; // 1또는 0이면 true, 아니면 false를 반환
      // },
    },
  },
  // 가지고 있는 이벤트 목록 보여주기
  emits: ['toggle-favorite', 'delete'],
  data() {
    return {
      detailAreVisible: false,
    }
  },
  methods: {
    toggleDetail() {
      this.detailAreVisible = !this.detailAreVisible;
    },
    // 부모 데이터의 불면성을 해칠수 없다
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
  }
};
</script>

<style scoped>

</style>