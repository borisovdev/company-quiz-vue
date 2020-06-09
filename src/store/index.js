import Vue from "vue";
import Vuex from "vuex";
import moduleQuiz from "./modules/moduleQuiz";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    moduleCompanyQuiz: moduleQuiz
  }
});
