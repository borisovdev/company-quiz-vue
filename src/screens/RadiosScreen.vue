<template>
  <div class="row">
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      layout: "col-12"
    };
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
