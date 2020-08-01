<template>
  <div class="quiz-subgrid-body">
    <div>
      <div
        :class="['quiz__validation--error', 'quiz__text-smallest']"
        v-if="$v.getFreeMessage.$invalid"
      >
        Введите значение
      </div>
      <div
        :class="['quiz__validation--error', 'quiz__text-smallest']"
        v-if="$v.getUserData.$invalid"
      >
        Выберите вариант
      </div>
    </div>
    <div class="quiz-subgrid-body__double">
      <div :class="['container__input']">
        <label :class="['quiz__text-smallest']">{{ title }}</label>
        <input
          type="number"
          @change="updateFreeMessage"
          :class="['quiz__input-classic']"
          placeholder="Введите значение"
        />
      </div>
      <div class="container__select">
        <select
          :value="value"
          v-model.lazy="selectedValue"
          @change="DOMUpdateChecked"
          :class="['quiz__select-classic--mini']"
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
  created() {
    this.changeValidationStatus();
  },
  beforeUpdate() {
    this.changeValidationStatus();
  }
};
</script>

<style lang="scss" scoped>
.container__input {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.container__select {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
