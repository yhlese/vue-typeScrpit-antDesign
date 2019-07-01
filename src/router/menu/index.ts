export const menuAside = [
  {
    title: '内容',
    icon: 'snippets',
    path: '/',
  },
  {
    title: '内容管理',
    icon: 'snippets',
    path: '/content',
    children: [
      {
        title: '文章',
        icon: 'snippets',
        path: '/content/article',
      },
      {
        title: '项目',
        icon: 'snippets',
        path: '/content/project',
      },
    ],
  },
];
