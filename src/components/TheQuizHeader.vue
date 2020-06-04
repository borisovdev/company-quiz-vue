<template>
  <header :class="['quiz__grid-header', 'quiz-text-' + getTheme + '-color']">
    <transition name="fadeRight" mode="out-in">
      <p
        v-for="step in getNowStep"
        :key="step.id"
        :class="['quiz__text-largest']"
      >
        {{ step.title }}
      </p>
    </transition>
    <Progress></Progress>
    <transition name="fade" mode="out-in">
      <p v-for="step in getNowStep" :key="step.id" class="quiz__text-smallest">
        {{ step.desc }}
      </p>
    </transition>
  </header>
</template>

<script>
// import TweenLite from "gsap/TweenLite";
import Progress from "./TheProgress";
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
    ...mapGetters(["getTheme", "getCounter", "getNowStep", "isStepsLength"])
  }
};
</script>

<style lang="scss" scoped>
.quiz__grid-header {
  grid-area: quiz-header;
}
</style>
