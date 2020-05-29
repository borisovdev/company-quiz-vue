<template>
  <div id="app">
    <section class="quiz-section">
      <form
        @submit.prevent="sendDataToScenario"
        id="quiz"
        class="quiz-container"
      >
        <div class="quiz-grid quiz-area">
          <quiz-header></quiz-header>
          <quiz-body
            :response="serverResponse"
            :reject="serverReject"
          ></quiz-body>
          <quiz-nav :requiredStep="getNowStep[0].required"></quiz-nav>
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
import QuizHeader from "./components/QuizHeader";
import QuizBody from "./components/QuizBody";
import QuizNav from "./components/QuizNav";
import QuizSidebar from "./components/QuizSidebar";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

Vue.use(Vuelidate);

export default {
  store,
  name: "App",
  props: {
    dataAction: {
      default: "/api/QuizMail.php"
    },
    dataSource: {
      default: "/static/quiz_steps.json"
    },
    dataMain: {
      default: "/static/quiz_main.json"
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
      "nextCount",
      "prevCount",
      "initSteps",
      "changeDataStatusToTrue"
    ]),
    sendDataToScenario() {
      const params = {
        method: "POST",
        url: this.dataAction,
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          userFullinfo: this.getUser,
          quizData: this.getObjectData
        }
      };
      axios(params)
        .then(response => {
          this.serverResponse = response;
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
    ...mapGetters(["getUser", "getObjectData", "getNowStep"])
  },
  created() {
    this.initSteps(this.dataSource);
  }
};
</script>

<style lang="scss">
@import "./assets/scss/normalize.scss";

// Layout
.quiz-grid {
  width: 100%;
  padding: 10px 15px;
  display: grid;
  grid-template-areas:
    "quiz-header quiz-sidebar"
    "quiz-body quiz-sidebar"
    "quiz-nav quiz-sidebar";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
  @include media-max($break-md) {
    grid-template-areas:
      "quiz-header"
      "quiz-body"
      "quiz-nav"
      "quiz-sidebar";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}
.quiz-subgrid-body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}
.quiz-subgrid-body__cards {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
  @include media-max($break-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}
.quiz-subgrid-body__radios {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 10px;
}
.quiz-subgrid-body__double {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  place-items: end end;
  @include media-max($break-sm) {
    grid-template-columns: 1fr;
  }
}

// Main
#app {
  font-family: $default-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-text;
  margin-top: 60px;
}

#quiz {
  background-color: transparent;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

.quiz-section {
  padding: 0 7px;
  margin: 15px 0 20px;
}

.quiz-area {
  background-color: #efefef;
}

// Validations
.error-validation {
  color: red;
  font-size: 12px;
}
.display-validation {
  font-size: 12px;
}
.form--error {
  border-color: red;
}

// Typograpohy
.quiz-lighttext {
  font-size: 10pt;
}
.quiz-smalltext {
  font-size: 9pt;
  i {
    font-style: normal;
    color: $info-color;
  }
}
.quiz-smalltext_semibold {
  font-size: 10pt;
}
.quiz-mediumtext {
  font-size: 12pt;
}
.quiz-bigtext {
  font-size: 10pt;
  text-transform: uppercase;
}
.quiz-headtext {
  font-size: 18pt;
}

// Additional
.radiohidden {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
}

.quiz-separator {
  width: 60%;
  height: 1px;
  background-color: white;
  margin: 15px 0;
}

// Inputs
.quiz-input_light {
  width: 100%;
  padding: 8px 0;
  margin: 10px 0 0;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  &:focus {
    box-shadow: 0 1px 1px rgba(133, 200, 79, 0.25);
  }
}

.quiz-input_select {
  width: 100%;
  padding: 7px 0;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.2);
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.quiz-input_mini {
  width: 75%;
  padding: 5px 10px;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.quiz-input_values {
  width: 20%;
  padding: 8px 10px;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.quiz-input_values-fullwidth {
  width: 100%;
  padding: 8px 10px;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.quiz-label-text {
  margin-left: 10px;
}
</style>
