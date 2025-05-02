import Vue from "vue";
import App from "./App.vue";
import { i18n } from "./i18n";

Vue.config.productionTip = false;

// Добавляем i18n как глобальное свойство
Vue.prototype.$i18n = i18n;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
