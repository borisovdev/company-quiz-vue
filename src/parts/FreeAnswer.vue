<template>
  <div :class="layoutClasses">
    <label class="quiz-smalltext">{{ title }}</label>
    <input
      type="text"
      :value="getFreeMessage"
      @input="updateMessage"
      :class="inputTheme"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Ваш вариант ответа",
      layoutClasses: "col-12",
      inputTheme: "quiz-input_light"
    };
  },
  methods: {
    updateMessage(evt) {
      this.$store.commit("SET_FREE_MESSAGE", evt.target.value);
    }
  },
  computed: {
    ...mapGetters(["getFreeMessage"])
  }
};
</script>
