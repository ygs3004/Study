<template>
  <h2>ManageGoals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal">SetGoal</button>
  <error-alert v-if="inputIsValid">
    <h2>입력값이 존재하지 않습니다.</h2>
    <p>값을 입력해주세요.</p>
    <button @click="confirmError">닫기</button>
  </error-alert>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";
export default{
  components: {
    ErrorAlert
  },
  data(){
    return{
      inputIsValid: false,
    }
  },
  methods:{
    setGoal(){
      const enteredValue = this.$refs.goal.value;
      if(enteredValue === ''){
        this.inputIsValid = true;
      }
    },
    confirmError(){
      this.inputIsValid = false;
    }
  }
}
</script>
