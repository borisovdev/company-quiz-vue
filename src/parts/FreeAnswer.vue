<template>
  <div :class="layoutClasses">
    <label class="quiz-smalltext">{{ title }}</label>
    <input
      type="text"
      :value="getFreeMessage"
      @change="updateFreeMessage"
      :class="inputTheme"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      title: "Ваш вариант ответа",
      layoutClasses: "col-12",
      inputTheme: "quiz-input_light"
    };
  },
  methods: {
    ...mapActions(["updateFreeMessage"])
  },
  computed: {
    ...mapGetters(["getFreeMessage"])
  }
};
</script>
