export default [
  {
    path: "/content/article/add",
    name: "content-article-add",
    component: () => import("@/views/content/article/add.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/content/article/index",
    name: "content-article-index",
    component: () => import("@/views/content/article/index.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/content/index",
    name: "content-index",
    component: () => import("@/views/content/index.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/content/project/index",
    name: "content-project-index",
    component: () => import("@/views/content/project/index.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/setting/index",
    name: "setting-index",
    component: () => import("@/views/setting/index.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/setting/set",
    name: "setting-set",
    component: () => import("@/views/setting/set.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  },{
    path: "/setting/user",
    name: "setting-user",
    component: () => import("@/views/setting/user.vue"),
    meta: {
      withMenu: true,
      ignoreCollapseMenu: false,
    }
  }
]