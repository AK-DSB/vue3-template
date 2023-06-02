import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./route";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

nprogress.configure({
  easing: "ease", // 动画方式
  speed: 1000, // 递增进度条的速度
  // showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: "body", //指定进度条的父容器
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;

router.beforeEach(async (to, from, next) => {
  nprogress.start();
  next();
});

router.afterEach(async (to, from) => {
  nprogress.done();
});
