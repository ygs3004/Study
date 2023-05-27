<template>
  <ul>
    <li v-for='resource in storedResources' :key=resource.id>

    </li>
  </ul>
</template>

<script>
export default {
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