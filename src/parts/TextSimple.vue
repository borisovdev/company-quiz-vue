<template>
  <div :class="['container__input']">
    <div
      :class="['quiz__validation--error', 'quiz__text-smallest']"
      v-if="$v.text.$invalid"
    >
      {{
        "Поле должно содержать не менее " +
          $v.text.$params.minLength.min +
          " символов"
      }}
    </div>
    <label>Введите значение</label>
    <input
      type="text"
      :value="getText"
      @change="setText"
      :class="['quiz__input-classic', { 'form-error': $v.text.$error }]"
    />
  </div>
</template>

<script>
import { mixinValidationStatus } from "../assets/mixins";
import { required, minLength } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  mixins: [mixinValidationStatus],
  data() {
    return {
      text: ""
    };
  },
  computed: {
    ...mapGetters(["getUserData", "getFreeMessage"]),
    getText() {
      return this.getUserData;
    }
  },
  validations: {
    text: {
      required,
      minLength: minLength(1)
    }
  },
  created() {
    this.changeValidationStatus();
  },
  beforeUpdate() {
    this.changeValidationStatus();
  },
  methods: {
    ...mapActions([
      "validationStatusTrue",
      "validationStatusFalse",
      "updateChecked",
      "updateFreeMessage"
    ]),
    setText(evt) {
      this.updateChecked(evt.target.value);
      this.text = evt.target.value;
      this.$v.text.$touch();
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
