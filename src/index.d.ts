declare module "*.vue" {
  import { Component, DefineComponent } from "vue";
  const component: Component & DefineComponent<any, any, any>;
  export default component;
}
