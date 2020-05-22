<template>
  <div class="row">
    <pre class="col-12 display-validation">
      {{ $v }}
    </pre>
    <div :class="['error-validation', 'col-12']" v-if="$v.getUserData.$invalid">
      Вы должны выбрать не менее
      {{ $v.getUserData.$params.minLength.min }} вариантов
    </div>
    <div :class="layout" v-for="item in getNowItems" :key="item.id">
      <checkbox-card
        :value="item.name"
        v-model.lazy="newCheckedAction"
        :image="item.image"
        :name="item.name"
      ></checkbox-card>
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
      layout: "col-6 col-sm-6 col-lg-4",
    };
  },
  components: {
    "checkbox-card": () => import("@/parts/CheckboxCard"),
    "free-answer": () => import("@/parts/FreeAnswer"),
  },
  validations: {
    getUserData: {
      required,
      minLength: minLength(1),
    },
  },
  methods: {
    ...mapActions(["updateChecked"]),
  },
  computed: {
    ...mapGetters(["getNowItems", "getUserData"]),
    newCheckedAction: {
      get() {
        return this.getUserData;
      },
      set(value) {
        this.updateChecked(value);
      },
    },
  },
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
