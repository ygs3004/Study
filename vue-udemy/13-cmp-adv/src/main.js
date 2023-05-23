import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
// import BadgeList from './components/BadgeList.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from "@/components/BaseCard.vue";



const app = createApp(App);

// app.component('the-header', TheHeader);
// app.component('user-info', UserInfo);
// app.component('badge-list', BadgeList);
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
