<template>
  <div :class="[layoutClasses]">
    <label class="quiz-smalltext">{{ title }}</label>
    <input
      type="text"
      :value="getText"
      @change="setText"
      :class="[inputTheme, { 'form--error': $v.text.$error }]"
    />
    <div class="error-validate" v-if="!$v.text.minLength">
      Поле должно содержать не менее
      {{ $v.text.$params.minLength.min }} символов
    </div>
  </div>
</template>

<script>
import { minLength } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  data() {
    return {
      title: "Ваш вариант ответа",
      layoutClasses: "container__input",
      inputTheme: "quiz-input_light".toString(),
      text: ""
    };
  },
  validations: {
    text: {
      minLength: minLength(4)
    }
  },
  methods: {
    ...mapActions(["updateFreeMessage"]),
    setText(event) {
      this.updateFreeMessage(event);
      this.text = event.target.value;
      this.$v.text.$touch();
    }
  },
  computed: {
    ...mapGetters(["getFreeMessage"]),
    getText() {
      return this.getFreeMessage;
    }
  }
};
</script>

<style lang="scss" scoped>
.container__input {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
