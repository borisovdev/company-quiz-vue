<template>
  <div class="row">
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
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  props: {
    options: Object,
    value: String,
  },
  model: {
    prop: "modelValue",
    event: "change",
  },
  data() {
    return {
      title: "Ваш вариант ответа",
      layoutClasses: "col-8",
      inputTheme: "quiz-input_light",
      selectedValue: "Выберите значение"
    };
  },
  methods: {
    ...mapActions(["updateFreeMessage", "updateChecked"]),
    DOMUpdateChecked(evt) {
      this.updateChecked(evt.target.value);
    }
  },
  computed: {
    ...mapGetters(["getNowItems"]),
  },
};
</script>
