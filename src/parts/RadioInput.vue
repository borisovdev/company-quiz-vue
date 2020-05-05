<template>
  <label :class="labelClasses">
    <input
      type="radio"
      :checked="shouldBeChecked"
      :value="value"
      @change="updateRadio"
    />
    <div :class="titleClasses">
      <span>{{ name }}</span>
    </div>
  </label>
</template>

<script>
export default {
  data() {
    return {
      labelClasses: "quiz-input_select quiz-smalltext_semibold",
      titleClasses: "quiz-label-text"
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
