import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";

import "@/assets/css/reset.sass";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "@/assets/css/style.sass";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: { Notify }, // import Quasar plugins and add here
});

app.mount("#app");
