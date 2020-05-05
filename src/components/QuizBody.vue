<template>
  <div id="quiz_form">
    <!-- <notify-bar>{{ $store.state.objectData }}</notify-bar>
    <notify-bar>{{ $store.state.userData }}</notify-bar> -->
    <!-- <notify-bar>{{ response }}</notify-bar>
    <notify-bar>{{ reject }}</notify-bar> -->
    <div class="quiz-fields">
      <transition name="fade" mode="out-in">
        <fieldset v-if="getCounter < isStepsLength" :key="getCounter">
          <component :is="currentScreenComponent"></component>
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
    "select-and-text": () => import("@/parts/InputSelectAndText")
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
    currentScreenComponent() {
      if (this.getNowItemsType === "card") {
        return "cards-screen";
      } else if (this.getNowItemsType === "request") {
        return "request-screen";
      } else if (this.getNowItemsType === "text-and-select") {
        return "input-text-and-select";
      } else if (this.getNowItemsType === "select-and-text") {
        return "select-and-text";
      } else {
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
