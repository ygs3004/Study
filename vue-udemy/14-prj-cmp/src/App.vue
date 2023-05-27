<template>
  <ul>
    <learning-resource v-for='res in storedResources'
                       :key='res.id'
                       :title='res.title'
                       :description='res.description'
                       :link='res.link'>
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from '@/components/learning-resources/LearningResource.vue';
export default {
  components: {
    LearningResource
  },
  data(){
    return {
      storedResources: [
        {
          id:'공식가이드',
          title: '공식가이드',
          description: 'Vue.js 공식 가이드',
          link: 'https://vuejs.org',
        },
        {
          id:'구글',
          title: '구글',
          description: '구글배우기',
          link: 'https://google.org',
        }
      ]
    }
  }
};
</script>
<style>
</style>