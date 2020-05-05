<template>
  <label class="quiz-card">
    <img :src="image" />
    <div :class="[titleClasses, focusClass]" style="text-align: center;">
      <span>{{ name }}</span>
    </div>
    <input
      type="checkbox"
      :checked="shouldBeChecked"
      :value="value"
      @change="updateInput"
      class="radiohidden"
    />
  </label>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      focusClass: "",
      titleClasses: "quiz-card__title quiz-smalltext text-center"
    };
  },
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    image: String,
    name: String,
    value: String,
    modelValue: {
      default: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    ...mapGetters(["getUserData"]),
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      } else {
        return this.modelValue === this.trueValue;
      }
    }
  },
  methods: {
    updateInput(evt) {
      let isChecked = evt.target.checked;

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }

      isChecked ? (this.focusClass = "active") : (this.focusClass = "");
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  background: $info-color;
  color: white;
}
</style>
