<template>
  <div>
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
        <select v-model.lazy="updateChecked" id="" :class="selectTheme">
          <option
            v-for="option in getNowItemsFirstOptions"
            :key="option.id"
            :value="option.value"
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
        <select @change="updateMessage" id="" :class="selectTheme">
          <option
            v-for="option in getNowItemsSecondOptions"
            :key="option.id"
            :value="option.value"
            >{{ option.value }}</option
          >
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectTheme: "quiz-input_values-fullwidth",
      labelTheme: "quiz-smalltext",
      layout: "col-12",
    };
  },
  computed: {
    ...mapGetters([
      "getNowItems",
      "getNowItemsFirstOptions",
      "getNowItemsSecondOptions",
    ]),
    updateChecked: {
      get() {
        return this.$store.state.userData;
      },
      set(v) {
        this.$store.commit("UPDATE_CHECKED", v);
      },
    },
  },
  methods: {
    updateMessage(evt) {
      this.$store.commit("SET_FREE_MESSAGE", evt.target.value);
    },
  },
};
</script>
