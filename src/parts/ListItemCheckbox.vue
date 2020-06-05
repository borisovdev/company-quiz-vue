<template>
  <div :class="[labelClasses, focusClass]">
    <div :class="['quiz__listItem-classic--customCheckbox', focusClass]"></div>
    <label>
      <input
        type="checkbox"
        class="radiohidden"
        :checked="$_mixinUpdateCheckbox_shouldBeChecked"
        :value="value"
        @change="$_mixinUpdateCheckbox_update"
      />
      <span :class="['quiz__listItem-classic--name']">{{ name }}</span>
    </label>
  </div>
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
      labelClasses: "quiz__listItem-classic quiz__text-small quiz__text--medium"
    };
  }
};
</script>
