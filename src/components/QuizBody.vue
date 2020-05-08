<template>
  <div id="quiz_form">
    <!-- <notify-bar>{{ $store.state.objectData }}</notify-bar>
    <notify-bar>{{ $store.state.userData }}</notify-bar> -->
    <!-- <notify-bar>{{ response }}</notify-bar>
    <notify-bar>{{ reject }}</notify-bar> -->
    <div class="quiz-fields">
      <transition name="fade" mode="out-in">
        <fieldset v-if="getCounter < isStepsLength" :key="getCounter">
          <component :is="currentScreen"></component>
        </fieldset>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    "notify-bar": () => import("@/parts/NotifyBar"),
    "cards-screen": () => import("@/screens/CardsScreen"),
    "radios-screen": () => import("@/screens/RadiosScreen"),
    "request-screen": () => import("@/screens/RequestScreen"),
    "input-text-and-select": () => import("@/parts/InputTextAndSelect"),
    "input-select-and-text": () => import("@/parts/InputSelectAndText")
  },
  props: {
    response: {
      type: String,
      default: ""
    },
    reject: {
      type: String,
      default: ""
    }
  },
  methods: {},
  computed: {
    ...mapState({
      userData: state => state.userData
    }),
    ...mapGetters(["getCounter", "isStepsLength", "getNowItemsType"]),
    currentScreen() {
      switch (this.getNowItemsType) {
        case "card":
          return "cards-screen";
        case "request":
          return "request-screen";
        case "text-and-select":
          return "input-text-and-select";
        case "select-and-text":
          return "input-select-and-text";
        default:
          return "radios-screen";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
