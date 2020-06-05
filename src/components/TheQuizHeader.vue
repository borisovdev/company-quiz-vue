<template>
  <header :class="['quiz__grid-header', 'quiz-text-' + getTheme + '-color']">
    <p :class="['quiz__text-largest']">{{ getNowStep.title }}</p>
    <Progress></Progress>
    <p :class="['quiz__text-smallest']">{{ getNowStep.desc }}</p>
  </header>
</template>

<script>
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
