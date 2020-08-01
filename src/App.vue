<template>
  <div id="app">
    <section style="padding: 0 7px; margin: 15px 0 20px;">
      <form
        @submit.prevent="sendDataToScenario"
        id="quiz"
        class="quiz__container"
      >
        <div :class="['quiz-grid', 'quiz-bg-' + theme + '-color']">
          <quiz-header></quiz-header>
          <quiz-body
            :response="serverResponse"
            :reject="serverReject"
          ></quiz-body>
          <quiz-nav :requiredStep="getNowStep.required"></quiz-nav>
          <quiz-sidebar :data-main="dataMain"></quiz-sidebar>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import store from "./store";
import axios from "axios";
import Vuelidate from "vuelidate";
import QuizHeader from "./components/TheQuizHeader";
import QuizBody from "./components/TheQuizBody";
import QuizNav from "./components/TheQuizNav";
import QuizSidebar from "./components/TheQuizSidebar";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

Vue.use(Vuelidate);

export default {
  store,
  name: "App",
  props: {
    theme: {
      type: String,
      default: "classic"
    },
    dataAction: {
      default: "/web-components/company-quiz-vue/api/QuizMail.php"
    },
    dataMain: {
      default: "/data/quiz_main.json"
    },
    dataSource: {
      default: "/data/quiz_steps.json"
    }
  },
  data() {
    return {
      serverResponse: "",
      serverReject: ""
    };
  },
  components: {
    QuizHeader,
    QuizBody,
    QuizNav,
    QuizSidebar
  },
  methods: {
    ...mapActions([
      "setTheme",
      "nextCount",
      "prevCount",
      "initSteps",
      "changeDataStatusToTrue",
      "changeSendProgressStatus"
    ]),
    requestParams() {
      return {
        method: "POST",
        url: this.dataAction,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          userFullinfo: this.getUser,
          quizData: this.getObjectData
        },
        onUploadProgress: () => {
          this.changeSendProgressStatus(true);
        }
      };
    },
    sendDataToScenario() {
      axios(this.requestParams())
        .then(response => {
          this.serverResponse = response;
          this.changeSendProgressStatus(false);
          if (response.data === "success") {
            this.changeDataStatusToTrue();
          }
        })
        .catch(reject => {
          this.serverReject = reject;
        });
    }
  },
  computed: {
    ...mapGetters([
      "getUser",
      "getObjectData",
      "getNowStep",
      "getSendProgressStatus"
    ])
  },
  created() {
    this.setTheme(this.theme);
    this.initSteps(this.dataSource);
  }
};
</script>

<style lang="scss">
@import "./assets/scss/normalize.scss"; // Base
@import "./assets/scss/grid.scss"; // Layout
@import "./assets/scss/typography.scss"; //Typography
@import "./assets/scss/elements.scss"; // Elements
@import "./assets/scss/animations.scss"; // Animations

// Main
#app {
  font-family: $default-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-text;
  // margin-top: 60px;
}

.quiz__container {
  background-color: transparent;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

// Additional
.form--error {
  border-color: red;
}
.radiohidden {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
}
.quiz__separator {
  width: 60%;
  height: 1px;
  background-color: white;
  margin: 15px 0;
}
</style>
