export default [
  { path: '/404', component: '@/pages/404', title: '页面丢失' },
  { path: '/login', component: '@/pages/Login/index.tsx', title: '登录' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
        title: false,
      },
      {
        path: '/home',
        component: '@/pages/Home',
        title: '首页',
      },
      {
        path: '/map',
        title: '地图呀',
        component: '@/pages/Map',
      },
      {
        path: '/list',
        title: '列表页',
        component: '@/pages/TablePage',
      },
    ],
  },
];
