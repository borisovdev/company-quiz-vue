<template>
  <header class="quiz-grid__header quiz_header">
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
import Progress from "./Progress";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");

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
.quiz-grid__header {
  grid-area: quiz-header;
}

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
