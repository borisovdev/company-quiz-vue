<template>
  <div id="quiz_form" class="quiz-grid__body">
    <!--    <notify-bar :content="getObjectData"></notify-bar>-->
    <!--    <notify-bar :content="getUserData"></notify-bar>-->
    <!-- <notify-bar :content="response"></notify-bar>
    <notify-bar :content="reject"></notify-bar> -->
    <div class="quiz-fields" :class="['quiz-text-' + getTheme + '-color']">
      <transition name="fade" mode="out-in">
        <fieldset v-if="getCounter < isStepsLength" :key="getCounter">
          <component :is="currentScreen"></component>
        </fieldset>
      </transition>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  components: {
    "notify-bar": () => import("@/parts/NotifyBar"),
    "cards-screen": () => import("@/screens/CardsScreen"),
    "radios-screen": () => import("@/screens/RadiosScreen"),
    "request-screen": () => import("@/screens/RequestScreen"),
    "text-and-select": () => import("@/parts/TextAndSelect"),
    "text-simple": () => import("@/parts/TextSimple"),
    selects: () => import("@/parts/Selects")
  },
  props: {
    response: {
      default: ""
    },
    reject: {
      default: ""
    }
  },
  methods: {},
  computed: {
    ...mapState({
      userData: state => state.userData
    }),
    ...mapGetters([
      "getTheme",
      "getCounter",
      "isStepsLength",
      "getNowItemsType",
      "getObjectData",
      "getUserData"
    ]),
    currentScreen() {
      switch (this.getNowItemsType) {
        case "card":
          return "cards-screen";
        case "request":
          return "request-screen";
        case "text-and-select":
          return "text-and-select";
        case "selects":
          return "selects";
        case "text":
          return "text-simple";
        default:
          return "radios-screen";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.quiz-grid__body {
  grid-area: quiz-body;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.45s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
