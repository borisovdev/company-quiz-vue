import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    main: {
      brand: {
        name: "",
        tagline: "",
      },
      manager: {
        avatar: "",
        name: "",
        position: "",
      },
      info: {
        maintext: "",
        desctext: "",
      },
    },
    steps: [],
    user: {
      name: "",
      phone: "",
      email: "",
    },
    objectData: {
      0: {
        title: "",
        chosen: "",
        wrote: "",
      },
    },
    counter: 0,
    userData: [],
    freeMessage: "",
    dataSended: false,
  },
  mutations: {
    NEXT_COUNT(state) {
      state.counter + 1 < state.steps.length ? state.counter++ : false;
      Vue.set(state.objectData, state.counter - 1, {});
      Vue.set(
        state.objectData[`${state.counter - 1}`],
        "title",
        state.steps[`${state.counter - 1}`].title
      ),
        Vue.set(
          state.objectData[`${state.counter - 1}`],
          "chosen",
          state.userData
        );
      Vue.set(
        state.objectData[`${state.counter - 1}`],
        "wrote",
        state.freeMessage
      );
      state.userData = [];
      state.freeMessage = "";
    },
    PREV_COUNT(state) {
      state.counter >= 1 ? state.counter-- : false;
      state.userData = state.objectData[`${state.counter}`]["chosen"];
      state.freeMessage = state.objectData[`${state.counter}`]["wrote"];
    },
    UPDATE_MESSAGE(state, message) {
      state.freeMessage = message;
    },
    UPDATE_CHECKED(state, list) {
      state.userData = list;
    },
    SET_QUIZ_MAIN(state, main) {
      state.main.brand.name = main.brand.name;
      state.main.brand.tagline = main.brand.tagline;
      state.main.manager.avatar = main.manager.avatar;
      state.main.manager.name = main.manager.name;
      state.main.manager.position = main.manager.position;
      state.main.info.maintext = main.info.maintext;
      state.main.info.desctext = main.info.desctext;
    },
    SET_STEPS(state, steps) {
      state.steps = steps;
    },
    SET_FREE_MESSAGE(state, msg) {
      state.freeMessage = msg;
    },
    SET_USER_NAME(state, value) {
      state.user.name = value;
    },
    SET_USER_PHONE(state, value) {
      state.user.phone = value;
    },
    SET_USER_EMAIL(state, value) {
      state.user.email = value;
    },
    TRUE_DATA_STATUS(state) {
      state.dataSended = true;
    },
  },
  getters: {
    getMain: (state) => state.main,
    getBrand: (state) => state.brand,
    getManager: (state) => state.manager,
    getInfo: (state) => state.info,
    getCounter: (state) => state.counter,
    getDataStatus: (state) => state.dataSended,
    getUserData: (state) =>
      state.userData.filter((item, idx) => {
        return idx === state.counter;
      }),
    getObjectData: (state) => state.objectData,
    getFreeMessage: (state) => state.freeMessage,
    getUser: (state) => state.user,
    isStepsLength: (state) => state.steps.length,
    isNowStep: (state) => {
      return state.counter + 1;
    },
    getSteps: (state) => state.steps,
    getNowStep: (state) =>
      state.steps.filter((item, idx) => {
        return idx === state.counter;
      }),
    getNowItems: (state, getters) => {
      for (let i = 0; i < getters.getNowStep.length; i++) {
        return getters.getNowStep[i].items;
      }
    },
    getNowItemsFirstOptions: (state, getters) => {
      let mainLength = getters.getNowStep.length;
      for (let i = 0; i < mainLength; i++) {
        return getters.getNowStep[i].items[0].options;
      }
    },
    getNowItemsSecondOptions: (state, getters) => {
      let mainLength = getters.getNowStep.length;
      for (let i = 0; i < mainLength; i++) {
        return getters.getNowStep[i].items[1].options;
      }
    },
    getNowItemsType: (state, getters) => {
      for (let i = 0; i < getters.getNowStep.length; i++) {
        return getters.getNowStep[i].items_type;
      }
    },
  },
  actions: {
    nextCount({ commit }) {
      commit("NEXT_COUNT");
    },
    prevCount({ commit }) {
      commit("PREV_COUNT");
    },
    updateMessage({ commit }) {
      commit("UPDATE_MESSAGE");
    },
    updateChecked({ commit }) {
      commit("UPDATE_CHECKED");
    },
    initMain({ commit }, payload) {
      axios.get(payload).then((response) => {
        commit("SET_QUIZ_MAIN", response.data.main);
      });
    },
    initSteps({ commit }, payload) {
      axios.get(payload).then((response) => {
        commit("SET_STEPS", response.data.steps);
      });
    },
  },
  modules: {},
});
