module.exports = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      frameOut: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error-page-404/index.vue'),
  },
];
