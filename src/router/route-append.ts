export default [
  {
    path: "/content",
    name: "content",
    component: () => import("@/pages/content.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/error-page-404",
    name: "error-page-404",
    component: () => import("@/pages/error-page-404.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/index",
    name: "index",
    component: () => import("@/pages/index.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/login",
    name: "login",
    component: () => import("@/pages/login.vue"),
    meta: {
      withMenu: false,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/setting",
    name: "setting",
    component: () => import("@/pages/setting.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  }
]