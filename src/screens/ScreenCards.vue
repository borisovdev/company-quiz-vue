<template>
  <div class="quiz-subgrid-body">
    <div
      :class="['quiz__validation--error', 'quiz__text-smallest']"
    >
      <p       v-if="$v.getUserData.$invalid">
              Вы должны выбрать не менее
      {{ $v.getUserData.$params.minLength.min }} вариантов
      </p>
    </div>
    <div class="quiz-subgrid-body__cards">
      <div :class="cardsLayout" v-for="item in getNowItems" :key="item.id">
        <component
          :is="currentScreen"
          :value="item.name"
          v-model.lazy="newCheckedAction"
          :image="item.image"
          :name="item.name"
        ></component>
      </div>
    </div>
    <!-- <free-answer></free-answer> -->
  </div>
</template>

<script>
import { mixinValidationStatus } from "../assets/mixins";
import { required, minLength } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  components: {
    "card-checkbox": () => import("@/parts/CardCheckbox"),
    "card-radio": () => import("@/parts/CardRadio"),
  },
  mixins: [mixinValidationStatus],
  data() {
    return {
      cardsLayout: "quiz-subgrid-body__item"
    };
  },
  computed: {
    ...mapGetters([
      "getNowItems",
      "getNowItemsType",
      "getUserData",
      "getValidationStatus"
    ]),
    currentScreen() {
      switch (this.getNowItemsType) {
        case "cards-checkbox":
          return "card-checkbox";
        case "cards-radio":
          return "card-radio";
        default:
          return "card-checkbox";
      }
    },
    newCheckedAction: {
      get() {
        return this.getUserData;
      },
      set(value) {
        this.updateChecked(value);
      }
    }
  },
  validations: {
    getUserData: {
      required,
      minLength: minLength(1)
    }
  },
  beforeUpdate() {
    this.changeValidationStatus();
  },
  methods: {
    ...mapActions([
      "updateChecked",
      "validationStatusTrue",
      "validationStatusFalse"
    ])
  }
};
</script>
