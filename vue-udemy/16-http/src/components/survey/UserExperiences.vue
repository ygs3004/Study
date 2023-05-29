<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='loadExperiences'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isLoading'>Loading...</p>
      <p v-else-if='!isLoading && error'>{{error}}</p>
      <p v-else-if='!isLoading && (!results || results.length === 0)'>No Stored Experieces found. Start adding some survey result first.</p>
      <ul v-else-if='!isLoading && results && results.length > 0'>
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
      results: [],
      isLoading: false,
      error: null,
    }
  },
  methods:{
    // 에러 발생, 잘못된 URL
    loadExperiences(){
      this.isLoading = true;
      this.error = null;
      fetch('https://udemy-vue-http-c66d7-default-rtdb.firebaseio.com/survyes.json')
        .then(response => {
          if(response.ok){
            return response.json();
          }
        })
        .then(data => {
          // console.log(data)
          this.isLoading = false;
          const result = [];
          for(const id in data){
            result.push({
              id,
              name: data[id].name,
              rating: data[id].rating
            })
          }
          this.results = result;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.';
        });
    },
  },
  mounted(){
    this.loadExperiences();
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