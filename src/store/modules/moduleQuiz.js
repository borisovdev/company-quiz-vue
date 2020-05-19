import Vue from "vue";
import axios from "axios";

const moduleQuiz = {
  namespaced: true,
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
    TRUE_DATA_STATUS(state) {
      state.dataSended = true;
    },
    NEXT_COUNT(state) {
      state.counter + 1 < state.steps.length ? state.counter++ : false;
      Vue.set(state.objectData, state.counter - 1, {});
      Vue.set(
        state.objectData[`${state.counter - 1}`],
        "title",
        state.steps[`${state.counter - 1}`].title
      );
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
    UPDATE_FREE_MESSAGE(state, message) {
      state.freeMessage = message;
    },
    UPDATE_CHECKED(state, list) {
      state.userData = list;
    },
    UPDATE_CITY_DATA(state, value) {
      let index;
      state.userData.find((element, idx) => {
        if (element.slice(0, 14) === value.slice(0, 14)) {
          index = idx;
          return true;
        } else {
          return false;
        }
      })
        ? state.userData.splice(index, 1, value)
        : state.userData.push(value);
    },
    UPDATE_USER_NAME(state, value) {
      state.user.name = value;
    },
    UPDATE_USER_PHONE(state, value) {
      state.user.phone = value;
    },
    UPDATE_USER_EMAIL(state, value) {
      state.user.email = value;
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
  },

  getters: {
    getMain: (state) => state.main,
    getSteps: (state) => state.steps,
    getBrand: (state) => state.brand,
    getManager: (state) => state.manager,
    getInfo: (state) => state.info,
    getCounter: (state) => state.counter,
    getDataStatus: (state) => state.dataSended,
    getUserData: state => state.userData,
    getObjectData: (state) => state.objectData,
    getFreeMessage: (state) => state.freeMessage,
    getUser: (state) => state.user,
    isStepsLength: (state) => state.steps.length,
    isNowStep: (state) => {
      return state.counter + 1;
    },
    getNowUserData: (state) =>
      state.userData.filter((item, idx) => {
        return idx === state.counter;
      }),
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
    updateFreeMessage({ commit }, event) {
      commit("UPDATE_FREE_MESSAGE", event.target.value);
    },
    updateChecked({ commit }, payload) {
      commit("UPDATE_CHECKED", payload);
    },
    updateCityData({ commit }, payload) {
      commit("UPDATE_CITY_DATA", payload);
    },
    updateUserName({ commit }, payload) {
      commit("UPDATE_USER_NAME", payload);
    },
    updateUserEmail({ commit }, payload) {
      commit("UPDATE_USER_EMAIL", payload);
    },
    updateUserPhone({ commit }, payload) {
      commit("UPDATE_USER_PHONE", payload);
    },
    changeDataStatusToTrue({ commit }) {
      commit("TRUE_DATA_STATUS");
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
  }
};

export default moduleQuiz;
