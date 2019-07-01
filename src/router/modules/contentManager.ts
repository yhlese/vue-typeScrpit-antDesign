export default {
  path: '/content',
  component: () => import('@/views/content/index.vue'),
  children: ((pre) => [
    {
      path: '/content/article',
      name: `${pre}`,
      component: () => import(`@/views/${pre}/article/inde.vue`),
    },
    {
      path: '/content/article',
      name: `${pre}`,
      component: () => import(`@/views/${pre}/article/inde.vue`),
    },
  ])('content'),
};
