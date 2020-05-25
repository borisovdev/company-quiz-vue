<template>
  <div>
    <div :class="['error-validation', 'col-12']" v-if="$v.getUserData.$invalid">
      Вы должны выбрать не менее
      {{ $v.getUserData.$params.minLength.min }} вариантов
    </div>
    <div
      v-for="item in getNowItems"
      :key="item.id"
      :class="layout"
      style="margin: 15px 0;"
    >
      <div
        v-if="item.id === 0"
        class="d-flex flex-column justify-content-start align-items-start"
      >
        <label for="" :class="labelTheme" style="margin-bottom: 7px;">{{
          item.label
        }}</label>
        <select
          v-model.lazy="dispathCity"
          @change="newChecked"
          id=""
          :class="selectTheme"
        >
          <option
            v-for="option in getNowItemsFirstOptions"
            :key="option.id"
            :value="item.keyValue + ' ' + option.value"
            >{{ option.value }}</option
          >
        </select>
      </div>
      <div
        v-else
        class="d-flex flex-column justify-content-start align-items-start"
        style="margin: 15px 0;"
      >
        <label for="" :class="labelTheme" style="margin-bottom: 7px;">{{
          item.label
        }}</label>
        <select
          v-model.lazy="deliveryCity"
          @change="newChecked"
          id=""
          :class="selectTheme"
        >
          <option
            v-for="option in getNowItemsSecondOptions"
            :key="option.id"
            :value="item.keyValue + ' ' + option.value"
            >{{ option.value }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinValidationStatus } from "../assets/mixins";
import { createNamespacedHelpers } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  data() {
    return {
      selectTheme: "quiz-input_values-fullwidth",
      labelTheme: "quiz-smalltext",
      layout: "col-12",
      deliveryCity: "Город доставки: Выберите значение",
      dispathCity: "Город отправки: Выберите значение"
    };
  },
  mixins: [mixinValidationStatus],
  methods: {
    ...mapActions([
      "updateCityData",
      "validationStatusTrue",
      "validationStatusFalse"
    ]),
    newChecked(evt) {
      this.updateCityData(evt.target.value);
    }
  },
  computed: {
    ...mapGetters([
      "getUserData",
      "getNowItems",
      "getNowItemsFirstOptions",
      "getNowItemsSecondOptions"
    ])
  },
  validations: {
    getUserData: {
      required,
      minLength: minLength(2)
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
