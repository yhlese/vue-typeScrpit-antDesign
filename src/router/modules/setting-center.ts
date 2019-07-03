export default {
  path: '/setting',
  component: () => import('@/views/content/index.vue'),
  redirect: '/setting/user',
  children: (pre => [
    {
      path: `/${pre}/user`,
      name: `${pre}-user`,
      component: () => import(`@/views/${pre}/user.vue`),
    },
    {
      path: `/${pre}/set`,
      name: `${pre}-set`,
      component: () => import(`@/views/${pre}/set.vue`),
    },
  ])('setting'),
};
