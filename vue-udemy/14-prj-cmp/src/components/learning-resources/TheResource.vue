<template>
  <base-card>
    <base-button @click="setSeletedTab('stored-resources')"
                 :mode="storedResButtonMode">Stored Resources
    </base-button>
    <base-button @click="setSeletedTab('add-resource')"
                 :mode="addResButtonMode">Add Resource
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        }
      ]
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  methods: {
    setSeletedTab(tab) {
      this.selectedTab = tab;
    }
  }
}
</script>

<style scoped>

</style>