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
                  <quiz-body
                    :response="serverResponse"
                    :reject="serverReject"
                  ></quiz-body>
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
      default: "/api/send_data.php",
    },
    dataSource: {
      type: String,
      default: "/static/data/steps.json",
    },
    dataMain: {
      type: String,
      default: "/static/data/quiz_main.json",
    },
  },
  data() {
    return {
      serverResponse: "",
      serverReject: "",
    };
  },
  components: {
    QuizHeader,
    QuizBody,
    QuizNav,
    QuizSidebar,
  },
  methods: {
    sendDataToScenario() {
      const params = {
        method: "POST",
        url: this.dataAction,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          userFullinfo: this.getUser,
          quizData: this.getObjectData,
        },
      };
      axios(params)
        .then((response) => {
          this.serverResponse = response;
          if (response.data === "success") {
            this.$store.commit("TRUE_DATA_STATUS");
          }
        })
        .catch((reject) => {
          this.serverReject = reject;
        });
    },
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
@import "./assets/scss/bootstrap-grid.scss";
@import "./assets/scss/normalize.scss";

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
  //padding: 30px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
}

.quiz_area {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #efefef;
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
  width: 100%;
  height: 1px;
  background-color: $dark-bg;
  margin: 15px 0;
}

// Inputs
.quiz-input_light {
  width: 100%;
  padding: 8px 10px;
  margin: 10px 0;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
  &:focus {
    box-shadow: 0px 1px 1px rgba(133, 200, 79, 0.25);
  }
}

.quiz-input_select {
  width: 100%;
  padding: 7px 15px;
  margin: 7px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.2);
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}

.quiz-input_mini {
  width: 75%;
  padding: 5px 10px;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}

.quiz-input_values {
  width: 20%;
  padding: 8px 10px;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}
.quiz-input_values-fullwidth {
  width: 100%;
  padding: 8px 10px;
  overflow: hidden;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(15, 28, 45, 0.1);
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
}

.quiz-label-text {
  margin-left: 10px;
}
</style>
