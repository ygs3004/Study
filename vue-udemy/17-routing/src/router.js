import TeamsList from '@/pages/TeamsList.vue';
import UsersList from '@/pages/UsersList.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import NotFound from '@/pages/NotFound.vue';
import TeamsFooter from '@/pages/TeamsFooter.vue';
import UsersFooter from '@/pages/UsersFooter.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* URL이 변함  */
    { path: '/', redirect: '/teams' },
    /* alias 이용시 URL이 변하지 않음 */
    // { path: '/teams', component: TeamsList, alias: '/' },
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },

    /* Catch All 라우트 */
    // { path: '/:notFound(.*)', redirect: '/teams' },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',

  // 페이지를 변경할때 자동 호출
  // 뒤로가기 등시 페이지의 스크롤 위치를 저장
  scrollBehavior(_, __, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  },
});

// 페이지 이동(navigate)할때마다 실행
router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to);
  console.log(from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }

  // next 호출 -> 페이지 이동을 허용
  // next(false); // next 호출 -> 페이지 이동을 금지

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
