<template>
  <div class="quiz__grid-body">
    <!--    <notify-bar :content="getObjectData"></notify-bar>-->
    <!--    <notify-bar :content="getUserData"></notify-bar>-->
    <!-- <notify-bar :content="response"></notify-bar>
    <notify-bar :content="reject"></notify-bar> -->
    <div :class="['quiz-text-' + getTheme + '-color']">
      <transition name="fadeLeft" mode="out-in">
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
  props: {
    response: {
      default: ""
    },
    reject: {
      default: ""
    }
  },
  components: {
    "notify-bar": () => import("@/parts/NotifyBar"),
    "cards-screen": () => import("@/screens/CardsScreen"),
    "radios-screen": () => import("@/screens/RadiosScreen"),
    "request-screen": () => import("@/screens/RequestScreen"),
    "text-and-select": () => import("@/parts/TextAndSelect"),
    "text-simple": () => import("@/parts/TextSimple"),
    "selects-double": () => import("@/parts/SelectsDouble")
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
          return "selects-double";
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
.quiz__grid-body {
  grid-area: quiz-body;
}
</style>
