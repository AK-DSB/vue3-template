import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "@/App.vue";
import "ant-design-vue/dist/antd.css";
import "virtual:svg-icons-register";
import "@/styles/index.scss";

import globalComponent from "@/components/index";
const app = createApp(App);

app.use(Antd);
app.use(globalComponent);
console.log(import.meta.env.VITE_APP_BASE_API);

app.mount("#app");
