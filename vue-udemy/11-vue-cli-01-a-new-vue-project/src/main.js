import { createApp } from 'vue';
import App from './App'
import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.mount("#app");

// createApp(App).mount('#app');
