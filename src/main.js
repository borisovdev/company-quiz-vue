import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import "./assets/scss/bootstrap-grid.scss"; // Необходимо добавление при создании веб-компонента!
// import "./assets/scss/normalize.scss";
// import "./assets/scss/_plugins/quiz.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
