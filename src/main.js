import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import './assets/main.css';  // Or the correct path to your CSS file


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
