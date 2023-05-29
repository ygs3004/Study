import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from '@/components/teams/TeamsList.vue';
import UsersList from '@/components/users/UsersList.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import NotFound from '@/components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* URL이 변함  */
    { path: '/', redirect: '/teams' },
    /* alias 이용시 URL이 변하지 않음 */
    // { path: '/teams', component: TeamsList, alias: '/' },
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    /* Catch All 라우트 */
    // { path: '/:notFound(.*)', redirect: '/teams' },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
