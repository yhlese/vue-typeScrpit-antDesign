/**
 * description：左侧菜单栏配置
 */
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
        path: '/content/article/index',
      },
      {
        title: '项目',
        icon: 'snippets',
        path: '/content/project/index',
      },
    ],
  },
];
