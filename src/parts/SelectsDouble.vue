<template>
  <div>
    <div>
      <div
        :class="['quiz__validation--error', 'quiz__text-smallest']"
        v-if="$v.getUserData.$invalid"
      >
        Вы должны выбрать не менее
        {{ $v.getUserData.$params.minLength.min }} вариантов
      </div>
    </div>
    <div class="quiz-subgrid-body__radios">
      <div v-for="item in getNowItems" :key="item.id" style="margin: 15px 0;">
        <div v-if="item.id === 0" class="container__select">
          <label :class="['quiz__text-smallest']" style="margin-bottom: 7px;">{{
            item.label
          }}</label>
          <select
            v-model.lazy="dispathCity"
            @change="newChecked"
            :class="['quiz__select-classic']"
          >
            <option
              v-for="option in getNowItemsFirstOptions"
              :key="option.id"
              :value="item.keyValue + ' ' + option.value"
              >{{ option.value }}</option
            >
          </select>
        </div>
        <div v-else class="container__select" style="margin: 15px 0;">
          <label
            for=""
            :class="['quiz__text-smallest']"
            style="margin-bottom: 7px;"
            >{{ item.label }}</label
          >
          <select
            v-model.lazy="deliveryCity"
            @change="newChecked"
            id=""
            :class="['quiz__select-classic']"
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
  </div>
</template>

<script>
import { mixinValidationStatus } from "../assets/mixins";
import { required, minLength } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  data() {
    return {
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

<style lang="scss" scoped>
.container__select {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
