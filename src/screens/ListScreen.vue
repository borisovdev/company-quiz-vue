<template>
  <div class="quiz-subgrid-body">
    <div
      :class="['quiz__validation--error', 'quiz__text-smallest']"
      v-if="$v.getUserData.$invalid"
    >
      Выберите вариант
    </div>
    <div class="quiz-subgrid-body__radios">
      <div
        :class="['container__radio']"
        v-for="item in getNowItems"
        :key="item.id"
      >
        <component
          :is="currentScreen"
          v-model.lazy="inputedData"
          :value="item.name"
          :name="item.name"
        ></component>
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
    return {};
  },
  mixins: [mixinValidationStatus],
  validations: {
    getUserData: {
      required,
      minLength: minLength(1)
    }
  },
  components: {
    "list-item-radio": () => import("@/parts/ListItemRadio"),
    "list-item-checkbox": () => import("@/parts/ListItemCheckbox"),
    "free-answer": () => import("@/parts/FreeAnswer")
  },
  methods: {
    ...mapActions([
      "updateChecked",
      "validationStatusFalse",
      "validationStatusTrue"
    ])
  },
  computed: {
    ...mapGetters(["getNowItemsType", "getUserData", "getNowItems"]),
    currentScreen() {
      switch (this.getNowItemsType) {
        case "list-radio":
          return "list-item-radio";
        case "list-checkbox":
          return "list-item-checkbox";
        default:
          return "list-item-radio";
      }
    },
    inputedData: {
      get() {
        return this.getUserData;
      },
      set(value) {
        this.updateChecked(value);
      }
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
.container__radio {
  display: flex;
}
</style>
