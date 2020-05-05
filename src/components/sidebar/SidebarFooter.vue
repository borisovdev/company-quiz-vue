<template>
  <footer class="quiz_footer">
    <span id="quiz__orgname" class="quiz-headtext">{{ brandName }}</span>
    <span id="quiz__tagline" class="quiz-bigtext">{{ brandTagline }}</span>
  </footer>
</template>

<script>
export default {
  props: {
    brandName: String,
    brandTagline: String
  }
}
</script>