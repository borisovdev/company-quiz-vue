<template>
  <div class="row">
    <div :class="['error-validation', 'col-12']" v-if="$v.getUserData.$invalid">
      Выберите вариант
    </div>
    <div :class="layout" v-for="item in getNowItems" :key="item.id">
      <radio-input
        :value="item.name"
        v-model.lazy="newRadioAction"
        :name="item.name"
      ></radio-input>
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
      layout: "col-12"
    };
  },
  mixins: [mixinValidationStatus],
  validations: {
    getUserData: {
      required,
      minLength: minLength(1)
    }
  },
  components: {
    "radio-input": () => import("@/parts/RadioInput"),
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
    ...mapGetters(["getUserData", "getNowItems"]),
    newRadioAction: {
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
