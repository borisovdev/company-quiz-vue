<template>
  <div class="row">
    <div
      :class="['error-validation', 'col-12']"
      v-if="$v.getFreeMessage.$invalid"
    >
      Введите значение
    </div>
    <div :class="['error-validation', 'col-12']" v-if="$v.getUserData.$invalid">
      Выберите вариант
    </div>
    <label for="" class=" col-12 quiz-smalltext">{{ title }}</label>
    <div :class="layoutClasses">
      <input
        type="number"
        @change="updateFreeMessage"
        :class="inputTheme"
        placeholder="Введите значение"
      />
    </div>
    <div class="col-4 d-flex justify-content-end align-items-center">
      <select
        :value="value"
        v-model.lazy="selectedValue"
        @change="DOMUpdateChecked"
        class="quiz-input_values"
        style="width: 100%;"
      >
        <option
          v-for="item in getNowItems"
          :value="item.value"
          :key="item.id"
          :selected="item.id === 0"
          >{{ item.text }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mixinValidationStatus } from "../assets/mixins";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  props: {
    options: Object,
    value: String
  },
  model: {
    prop: "modelValue",
    event: "change"
  },
  data() {
    return {
      title: "Ваш вариант ответа",
      layoutClasses: "col-8",
      inputTheme: "quiz-input_light",
      selectedValue: "Выберите значение"
    };
  },
  mixins: [mixinValidationStatus],
  methods: {
    ...mapActions([
      "updateFreeMessage",
      "updateChecked",
      "validationStatusTrue",
      "validationStatusFalse"
    ]),
    DOMUpdateChecked(evt) {
      this.updateChecked(evt.target.value);
    }
  },
  computed: {
    ...mapGetters(["getNowItems", "getUserData", "getFreeMessage"])
  },
  validations: {
    getUserData: {
      required,
      minLength: minLength(1)
    },
    getFreeMessage: {
      required,
      minLength: minLength(1)
    }
  },
  beforeUpdate() {
    this.changeValidationStatus();
  }
};
</script>
