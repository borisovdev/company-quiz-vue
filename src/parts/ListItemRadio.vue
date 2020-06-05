<template>
  <div :class="[labelClasses, focusClass]">
    <div :class="['quiz__listItem-classic--customRadio', focusClass]"></div>
    <label>
      <input
        type="radio"
        class="radiohidden"
        :checked="$_mixinUpdateRadio_shouldBeChecked"
        :value="value"
        @change="$_mixinUpdateRadio_update"
      />
      <span :class="['quiz__listItem-classic--name']">{{ name }}</span>
    </label>
  </div>
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
      labelClasses: "quiz__listItem-classic quiz__text-small quiz__text--medium"
    };
  }
};
</script>
