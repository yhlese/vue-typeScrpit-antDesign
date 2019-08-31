export default {
  path: '/content',
  component: () => import('@/views/content/index.vue'),
  children: (pre => [
    {
      path: `/${pre}/article`,
      name: `${pre}-article`,
      component: () => import(`@/views/${pre}/article/index.vue`),
    },
    {
      path: `/${pre}/article/add`,
      name: `${pre}-article-add`,
      component: () => import(`@/views/${pre}/article/add.vue`),
    },
    {
      path: `/${pre}/project`,
      name: `${pre}-project`,
      component: () => import(`@/views/${pre}/project/index.vue`),
    },
  ])('content'),
};
