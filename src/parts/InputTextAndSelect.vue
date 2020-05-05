<template>
  <div class="row">
    <label for="" class=" col-12 quiz-smalltext">{{ title }}</label>
    <div :class="layoutClasses">
      <input
        type="number"
        @input="updateMessage"
        :class="inputTheme"
        placeholder="Введите значение"
      />
    </div>
    <div class="col-4 d-flex justify-content-end align-items-center">
      <select
        :value="value"
        v-model.lazy="updateChecked"
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
import { mapGetters } from "vuex";
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
    };
  },
  methods: {
    updateMessage(evt) {
      this.$store.commit("SET_FREE_MESSAGE", evt.target.value);
    },
  },
  computed: {
    ...mapGetters(["getNowItems"]),
    updateChecked: {
      get() {
        return this.$store.state.userData;
      },
      set(v) {
        this.$store.commit("UPDATE_CHECKED", v);
      },
    },
  },
};
</script>
