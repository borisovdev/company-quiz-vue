<template>
  <div class="progress">
    <div class="progress_bar">
      <div class="progress__inner" :style="{ width: progressBarWidth + '%' }"></div>
    </div>
    <p class="progress_text">
      <span id="quiz_question_now">{{ isNowStep }}</span> из
      <span id="quiz_question_total">{{ isStepsLength }}</span> вопросов
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  methods: {},
  computed: {
    ...mapGetters(["isNowStep", "isStepsLength"]),
    progressBarWidth() {
      return (this.isNowStep / this.isStepsLength) * 100;
    }
  }
}
</script>