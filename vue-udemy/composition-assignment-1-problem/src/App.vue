<template>
  <h2>My Course Goal</h2>

  <!-- Separate Refs -->
  <!--  <h3 v-if="showGoal">{{ courseGoal }}</h3>-->

  <!-- Ref Object -->
  <!-- <h3 v-if="goal.showGoal">{{ goal.courseGoal }}</h3>-->

  <!-- Reactive Object -->
  <!--  <h3 v-if="goal.showGoal">{{ goal.courseGoal }}</h3>-->

  <!--Options API-->
  <h3 v-if="showGoal">{{ courseGoal }}</h3>

  <button @click="toggleGoal">Toggle Goal</button>
</template>

<script>
export default {
  data() {
    return {
      courseGoal: 'becoming a vue of master',
      showGoal: true,
    };
  },
  methods: {
    toggleGoal() {
      this.showGoal = !this.showGoal;
    },
  },

  // setup() {
  // Separate refs
  // const courseGoal = ref('becoming a vue of master');
  // const showGoal = ref(true);
  // const toggleGoal = () => {
  //   showGoal.value = !showGoal.value;
  // };
  // Ref Object
  // const goal = ref({
  //   courseGoal: 'becoming a vue of master',
  //   showGoal: true,
  // });
  // const toggleGoal = () => {
  //   goal.value.showGoal = !goal.value.showGoal;
  // };
  // Reactive Object
  // const goal = reactive({
  //   courseGoal: 'becoming a vue of master',
  //   showGoal: true,
  // });
  //
  // const toggleGoal = () => {
  //   goal.showGoal = !goal.showGoal;
  // };
  // return {
  // Separate refs
  // courseGoal,
  // showGoal,
  // toggleGoal,
  //
  // Ref Object
  // goal,
  // toggleGoal,
  // Reactive Object
  //   goal,
  //   toggleGoal,
  // };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 3rem;
  text-align: center;
}
</style>
