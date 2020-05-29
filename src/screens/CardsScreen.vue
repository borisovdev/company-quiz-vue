<template>
  <div class="quiz-subgrid-body">
    <div :class="['error-validation']" v-if="$v.getUserData.$invalid">
      Вы должны выбрать не менее
      {{ $v.getUserData.$params.minLength.min }} вариантов
    </div>
    <div class="quiz-subgrid-body__cards">
      <div :class="cardsLayout" v-for="item in getNowItems" :key="item.id">
        <checkbox-card
          :value="item.name"
          v-model.lazy="newCheckedAction"
          :image="item.image"
          :name="item.name"
        ></checkbox-card>
      </div>
    </div>
    <free-answer></free-answer>
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
      cardsLayout: "quiz-subgrid-body__item"
    };
  },
  mixins: [mixinValidationStatus],
  components: {
    "checkbox-card": () => import("@/parts/CheckboxCard"),
    "free-answer": () => import("@/parts/FreeAnswer")
  },
  validations: {
    getUserData: {
      required,
      minLength: minLength(1)
    }
  },
  methods: {
    ...mapActions([
      "updateChecked",
      "validationStatusTrue",
      "validationStatusFalse"
    ])
  },
  computed: {
    ...mapGetters(["getNowItems", "getUserData", "getValidationStatus"]),
    newCheckedAction: {
      get() {
        return this.getUserData;
      },
      set(value) {
        this.updateChecked(value);
      }
    }
  },
  beforeUpdate() {
    this.changeValidationStatus();
  }
};
</script>
