<template>
  <div class="row">
    <pre class="col-12 display-validation">
      {{ $v }}
    </pre>
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
import { required, minLength } from "vuelidate/lib/validators";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  data() {
    return {
      layout: "col-12"
    };
  },
  validations: {
    getUserData: {
      required,
      minLength: minLength(1),
    },
  },
  components: {
    "radio-input": () => import("@/parts/RadioInput"),
    "free-answer": () => import("@/parts/FreeAnswer")
  },
  methods: {
    ...mapActions(["updateChecked"])
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
  }
};
</script>

<style lang="scss" scoped>
.error-validation {
  color: red;
  font-size: 10px;
}
.display-validation {
  font-size: 10px;
}
</style>
