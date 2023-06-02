import SvgIcon from "./SygIcon/index.vue";
import { Component, DefineComponent } from "vue";
import App from "@/App.vue";

interface GlobalComponents {
  [key: string]: Component & DefineComponent<any, any, any>;
}

const allGlobalComponent: GlobalComponents = { SvgIcon };

// 对外暴露插件对象
export default {
  // 必须叫install方法
  install(app: App<Element>) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
  },
};
