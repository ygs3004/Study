<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return {
      results: []
    }
  },
  methods:{
    loadExperiences(){
      fetch(this.$firebaseUrl)
        .then(response => {
        if(response.ok){
          return response.json();
        }
      })
        .then(data => {
          // console.log(data)
          const result = [];
          for(const id in data){
            result.push({
              id,
              name: data[id].name,
              rating: data[id].rating
            })
          }
          this.results = result;
        });
    },
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>