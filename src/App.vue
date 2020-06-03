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
    theme: {
      type: String,
      default: "classic"
    },
    dataAction: {
      default: "/api/MailEngine.php"
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
// Base
@import "./assets/scss/normalize.scss";
// Layout
@import "./assets/scss/grid.scss";
// Animations
@import "./assets/scss/animations.scss";
// Elements
@import "./assets/scss/elements.scss";

// Main
#app {
  font-family: $default-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-text;
  margin-top: 60px;
}

.quiz__container {
  background-color: transparent;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

// Themes
@each $theme-name, $theme-map in $themes {
  .quiz-bg-#{$theme-name}-color {
    background: #{map-get($theme-map, bg)};
  }
  .quiz-text-#{$theme-name}-color {
    color: #{map-get($theme-map, text)};
  }
  .quiz-progress-#{$theme-name}-color {
    background: #{map-get($theme-map, progress)};
  }
  .quiz-btn-#{$theme-name}-next {
    background: #{map-get($theme-map, btn-next)};
    color: #{map-get($theme-map, btn-text)};
  }
  .quiz-btn-#{$theme-name}-prev {
    background: #{map-get($theme-map, btn-prev)};
    color: #{map-get($theme-map, btn-text)};
  }
  .quiz-card-#{$theme-name}-theme {
    .card__name {
      color: #{map-get($theme-map, card-text)};
    }
    .quiz__card-title {
      background: #{map-get($theme-map, card-bg)};
    }
    .active {
      background: #{map-get($theme-map, card-bg-active)};
      .card__name {
        color: #{map-get($theme-map, card-text-active)};
      }
    }
  }
}

// Notifications
@each $notify-key, $notify-map in $notify-colors {
  @each $notify-map-name, $notify-map-value in $notify-map {
    .quiz__#{$notify-key}--#{$notify-map-name} {
      color: #{$notify-map-value};
      fill: #{$notify-map-value};
    }
  }
}

// Typograpohy
@each $size-key, $size-value in $typography-sizes {
  .quiz__text-#{$size-key} {
    font-size: #{$size-value};
  }
}

@each $weight-key, $weight-value in $typography-weights {
  .quiz__text--#{$weight-key} {
    font-weight: #{$weight-value};
  }
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
