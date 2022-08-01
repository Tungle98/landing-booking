import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  el: "#app",
  render: (h) => h(App),
});
