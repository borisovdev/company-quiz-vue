<template>
  <div class="row">
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
