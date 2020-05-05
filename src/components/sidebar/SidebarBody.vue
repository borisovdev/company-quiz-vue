<template>
  <div class="quiz_info">
    <p id="quiz_info_maintext" class="quiz-smalltext">
      {{ mainText }}
    </p>
    <p id="quiz_info_desctext" class="quiz-smalltext">
      {{ descText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    mainText: String,
    descText: String
  }
}
</script>