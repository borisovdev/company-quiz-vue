<template>
  <div
    :class="['quiz__listItem-classic-' + getTheme, labelClasses, focusClass]"
  >
    <div
      :class="[
        'quiz__listItem-classic-' + getTheme + '--customRadio',
        focusClass
      ]"
    ></div>
    <label>
      <input
        type="radio"
        class="radiohidden"
        :checked="$_mixinUpdateRadio_shouldBeChecked"
        :value="value"
        @change="$_mixinUpdateRadio_update"
      />
      <span :class="['quiz__listItem-classic' + getTheme + '--name']">{{
        name
      }}</span>
    </label>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");
import { mixinUpdateRadio, mixinFunHelpers } from "../assets/mixins";

export default {
  mixins: [mixinUpdateRadio, mixinFunHelpers],
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    name: String,
    value: String,
    modelValue: {
      default: ""
    }
  },
  data() {
    return {
      focusClass: "",
      labelClasses: "quiz__text-small quiz__text--medium"
    };
  },
  computed: {
    ...mapGetters(["getTheme"])
  }
};
</script>
