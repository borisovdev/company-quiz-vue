<template>
  <div class="progress">
    <div class="progress_bar">
      <div
        :class="['progress__inner', 'quiz-progress-' + getTheme + '-color']"
        :style="{ width: progressBarWidth + '%' }"
      ></div>
    </div>
    <p class="progress_text">
      <span id="quiz_question_now">{{ isNowStep }}</span> из
      <span id="quiz_question_total">{{ isStepsLength }}</span> вопросов
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  methods: {},
  computed: {
    ...mapGetters(["getTheme", "isNowStep", "isStepsLength"]),
    progressBarWidth() {
      return (this.isNowStep / this.isStepsLength) * 100;
    }
  }
};
</script>

<style lang="scss" scoped>
#quiz_question_now {
  font-size: 11pt;
}

#quiz_question_total {
  opacity: 0.6;
}

.progress {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.progress_bar {
  background-color: #e1e1e1;
  width: 75%;
  height: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}
.progress__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  height: 100%;
  width: calc(0% + 5%);
  transition: 0.4s width linear;
}
.progress_text {
  margin: 0 0 0 5px;
  font-size: 10pt;
  text-align: right;
}
</style>
