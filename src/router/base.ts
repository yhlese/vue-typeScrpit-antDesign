module.exports = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      frameOut: true,
    },
    component: () => import('@/views/login.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/notFound.vue'),
  },
];
