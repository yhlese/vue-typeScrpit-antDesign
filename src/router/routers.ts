const files = require.context('./modules', false, /\.ts$/);
const ROUTERS: any = [];

files.keys().forEach((key) => {
  ROUTERS.push(files(key).default);
});
const frameIn = [
  ...ROUTERS,
];


const frameOut = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
];

export default [
  ...frameOut,
  ...frameIn,
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error-page-404/index.vue'),
  },
];
