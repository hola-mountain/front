import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { Quasar, Notify, Loading } from "quasar";

import "@/assets/css/reset.sass";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "@/assets/css/style.sass";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);
app.use(Quasar, {
  plugins: { Notify, Loading },
});

app.mount("#app");
