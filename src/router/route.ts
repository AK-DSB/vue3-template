import type { RouteRecordRaw } from "vue-router";

export const constantRoute: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "Login", // 命名路由
    meta: {
      title: "登录",
      hidden: true,
      icon: "Promotion",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    name: "Layout",
    meta: {
      title: "",
      hidden: false,
      icon: "Avatar",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
];
