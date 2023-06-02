import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "@/App.vue";
import "ant-design-vue/dist/antd.css";
import "virtual:svg-icons-register";
import "@/styles/index.scss";
import router from "./router";
import pinia from "./store";

import globalComponent from "@/components/index";
const app = createApp(App);

app.use(Antd);
app.use(globalComponent);
app.use(router);
app.use(pinia);

app.mount("#app");
