<template>
  <label :class="[labelClasses, focusClass]">
    <input
      type="radio"
      :checked="$_mixinUpdateRadio_shouldBeChecked"
      :value="value"
      @change="$_mixinUpdateRadio_update"
    />
    <div :class="['quiz__radio-name']">
      <span>{{ name }}</span>
    </div>
  </label>
</template>

<script>
import { mixinUpdateRadio } from "../assets/mixins";

export default {
  mixins: [mixinUpdateRadio],
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
      labelClasses: "quiz__radio-classic quiz__text-small quiz__text--medium"
    };
  }
};
</script>
