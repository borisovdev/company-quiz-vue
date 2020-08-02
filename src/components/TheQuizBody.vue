<template>
  <div class="quiz__grid-body">
    <!-- <notify-bar :content="getObjectData"></notify-bar> -->
    <!-- <notify-bar :content="getUserData"></notify-bar> -->
    <!-- <notify-bar :content="response"></notify-bar> -->
    <!-- <notify-bar :content="reject"></notify-bar> -->
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
const { mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");

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
    "screen-cards": () => import("@/screens/ScreenCards"),
    "screen-list": () => import("@/screens/ScreenList"),
    "screen-request": () => import("@/screens/ScreenRequest"),
    "text-and-select": () => import("@/parts/TextAndSelect"),
    "text-simple": () => import("@/parts/TextSimple"),
    "selects-double": () => import("@/parts/SelectsDouble")
  },
  data() {
    return {};
  },
  computed: {
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
        case "cards-checkbox":
          return "screen-cards";
        case "cards-radio":
          return "screen-cards";
        case "list-radio":
          return "screen-list";
        case "list-checkbox":
          return "screen-list";
        case "text-and-select":
          return "text-and-select";
        case "selects":
          return "selects-double";
        case "text":
          return "text-simple";
        case "request":
          return "screen-request";
        default:
          return "screen-list";
      }
    }
  },
  methods: {
    changeStarterStatus(x) {
      this.starterVisible = x;
    }
  }
};
</script>

<style lang="scss" scoped>
.quiz__grid-body {
  grid-area: quiz-body;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 10px;
  }
 
  &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); 
      border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
}
</style>
