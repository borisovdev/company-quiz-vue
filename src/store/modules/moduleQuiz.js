import Vue from "vue";
import axios from "axios";

const moduleQuiz = {
  namespaced: true,
  state: {
    theme: "",
    main: {
      brand: {
        name: "",
        tagline: ""
      },
      manager: {
        avatar: "",
        name: "",
        position: ""
      },
      info: {
        maintext: "",
        desctext: ""
      }
    },
    steps: [],
    user: {
      name: "",
      phone: "",
      email: ""
    },
    objectData: {
      0: {
        title: "",
        chosen: null,
        wrote: null
      }
    },
    counter: 0,
    userData: [],
    spritesFolder: "",
    freeMessage: "",
    dataSended: false,
    sendOnProgress: false,
    validationStatus: "INVALID"
  },
  mutations: {
    SET_THEME(state, payload) {
      state.theme = payload.toLowerCase();
    },
    SET_SPRITES_FOLDER(state, payload) {
      state.spritesFolder = payload;
    },
    TRUE_DATA_STATUS(state) {
      state.dataSended = true;
    },
    CHANGE_SEND_PROGRESS_STATUS(state, payload) {
      state.sendOnProgress = Boolean(payload);
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
        // Проверяем часть строки, в которой содержится тип доставки
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
    VALIDATION_STATUS_TRUE(state) {
      state.validationStatus = "VALID";
    },
    VALIDATION_STATUS_FALSE(state) {
      state.validationStatus = "INVALID";
    }
  },

  getters: {
    getTheme: state => state.theme,
    getSpritesFolder: state => state.spritesFolder,
    getMain: state => state.main,
    getSteps: state => state.steps,
    getBrand: state => state.brand,
    getManager: state => state.manager,
    getInfo: state => state.info,
    getCounter: state => state.counter,
    getDataStatus: state => state.dataSended,
    getUserData: state => state.userData,
    getObjectData: state => state.objectData,
    getFreeMessage: state => state.freeMessage,
    getUser: state => state.user,
    getValidationStatus: state => state.validationStatus,
    isStepsLength: state => state.steps.length,
    isNowStep: state => state.counter + 1,
    getSendProgressStatus: state => state.sendOnProgress,
    getNowStep: state => state.steps.find((item, idx) => idx === state.counter),
    getNowItemsType: (state, getters) => getters.getNowStep.items_type,
    getNowItems: (state, getters) => getters.getNowStep.items,
    getNowItemsFirstOptions: (state, getters) =>
      getters.getNowStep.items[0].options,
    getNowItemsSecondOptions: (state, getters) =>
      getters.getNowStep.items[1].options
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
    changeSendProgressStatus({ commit }, payload) {
      commit("CHANGE_SEND_PROGRESS_STATUS", payload);
    },
    validationStatusTrue({ commit }) {
      commit("VALIDATION_STATUS_TRUE");
    },
    validationStatusFalse({ commit }) {
      commit("VALIDATION_STATUS_FALSE");
    },
    setTheme({ commit }, payload) {
      commit("SET_THEME", payload);
    },
    setSpritesFolder({ commit }, payload) {
      commit("SET_SPRITES_FOLDER", payload);
    },
    initMain({ commit }, payload) {
      axios.get(payload).then(response => {
        commit("SET_QUIZ_MAIN", response.data.main);
      });
    },
    initSteps({ commit }, payload) {
      axios.get(payload).then(response => {
        commit("SET_STEPS", response.data.steps);
      });
    }
  }
};

export default moduleQuiz;
