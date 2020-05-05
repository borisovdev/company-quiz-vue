<template>
  <header class="quiz_header">
    <transition name="fade" mode="out-in">
      <p v-for="step in getNowStep" :key="step.id" class="quiz-headtext">
        {{ step.title }}
      </p>
    </transition>
    <Progress></Progress>
    <transition name="fade" mode="out-in">
      <p v-for="step in getNowStep" :key="step.id" class="quiz-smalltext">
        {{ step.desc }}
      </p>
    </transition>
  </header>
</template>

<script>
// import TweenLite from "gsap/TweenLite";
import { mapGetters } from "vuex";
import Progress from "./Progress";

export default {
  data() {
    return {};
  },
  components: {
    Progress
  },
  computed: {
    ...mapGetters(["getCounter", "getNowStep", "isStepsLength"])
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
