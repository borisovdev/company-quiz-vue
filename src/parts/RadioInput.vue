<template>
  <label :class="[labelClasses]">
    <input
      type="radio"
      :checked="shouldBeChecked"
      :value="value"
      @change="updateRadio"
    />
    <div :class="['quiz__radio-name']">
      <span>{{ name }}</span>
    </div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      focusClass: "",
      labelClasses: "quiz__radio-classic quiz__text-small quiz__text--medium"
    };
  },
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
  methods: {
    updateRadio() {
      this.$emit("change", this.value);
    }
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue == this.value;
    }
  }
};
</script>
