import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./tailwind.css";
import router from "./router";
import store from "./store/store";

import db from "./firebase/init.js";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import globalComponents from "./plugins/globalComponents.js";

const app = createApp(App);

globalComponents.install(app);

app.use(router);
app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
