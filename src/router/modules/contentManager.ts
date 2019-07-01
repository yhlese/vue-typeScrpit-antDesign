export default {
  path: '/content',
  component: () => import('@/views/content/index.vue'),
  children: (pre => [
    {
      path: '/content/article',
      name: `${pre}-article`,
      component: () => import(`@/views/${pre}/article/index.vue`),
    },
    {
      path: '/content/project',
      name: `${pre}-project`,
      component: () => import(`@/views/${pre}/project/index.vue`),
    },
  ])('content'),
};
