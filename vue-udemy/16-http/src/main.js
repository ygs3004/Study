import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$firebaseUrl = 'https://udemy-vue-http-c66d7-default-rtdb.firebaseio.com/survyes.json';
