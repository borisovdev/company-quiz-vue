<template>
  <label :class="[labelClasses, focusClass]">
    <input
      type="checkbox"
      :checked="$_mixinUpdateCheckbox_shouldBeChecked"
      :value="value"
      @change="$_mixinUpdateCheckbox_update"
    />
    <div :class="['quiz__radio-name']">
      <span>{{ name }}</span>
    </div>
  </label>
</template>

<script>
import { mixinUpdateCheckbox } from "../assets/mixins";

export default {
  mixins: [mixinUpdateCheckbox],
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
