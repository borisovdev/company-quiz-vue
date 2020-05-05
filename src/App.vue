<template>
  <div id="app">
    <section class="quiz-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form @submit.prevent="sendDataToScenario" id="quiz">
              <div class="row">
                <div class="quiz-area col-12 col-md-8">
                  <quiz-header></quiz-header>
                  <quiz-body :response="serverResponse" :reject="serverReject"></quiz-body>
                  <quiz-nav></quiz-nav>
                </div>
                <quiz-sidebar :data-main="dataMain"></quiz-sidebar>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import store from "./store";
import QuizHeader from "./components/QuizHeader";
import QuizBody from "./components/QuizBody";
import QuizNav from "./components/QuizNav";
import QuizSidebar from "./components/QuizSidebar";
import { mapGetters } from "vuex";

export default {
  store,
  name: "App",
  props: {
    dataAction: {
      type: String,
      default: "/api/send_data.php"
    },
    dataSource: {
      type: String,
      default: "/static/data/steps.json"
    },
    dataMain: {
      type: String,
      default: "/static/data/quiz_main.json"
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
            this.$store.commit("TRUE_DATA_STATUS");
          }
        })
        .catch(reject => {
          this.serverReject = reject;
        });
    }
  },
  computed: {
    ...mapGetters(["getUser", "getObjectData"]),
  },
  created() {
    this.$store.dispatch("initSteps", this.dataSource);
  },
};
</script>

<style lang="scss">
@import "./assets/scss/bootstrap-grid.scss"; // Необходимо добавление при создании веб-компонента!
@import "./assets/scss/normalize.scss";
@import "./assets/scss/_plugins/quiz.scss";

#app {
  font-family: $default-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-text;
  margin-top: 60px;
}
</style>
