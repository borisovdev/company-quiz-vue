<template>
  <label :class="['quiz__card', 'quiz-card-' + getTheme + '-theme']">
    <img :src="image" />
    <div :class="['quiz__card-title', 'quiz__text-smallest', focusClass]">
      <span class="card__name">{{ name }}</span>
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
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  data() {
    return {
      focusClass: ""
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
    ...mapGetters(["getTheme", "getUserData"]),
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
.quiz__card {
  width: 100%;
  height: 140px;
  margin: 15px auto;
  position: relative;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease;
  &:hover {
    .quiz__card-title {
      box-shadow: 0px 0px 15px -3px #d5242c;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &-title {
    position: absolute;
    width: 85%;
    bottom: -10px;
    padding: 7px 15px;
    text-align: center;
    border-radius: 5px;
    transition: inherit;
  }
}

@media (max-width: 576px) {
  .quiz__card {
    height: 120px;
    width: 100%;
    margin: 7px auto;
    overflow: hidden;
    &-title {
      width: 100%;
      bottom: 0;
      font-size: 8pt;
    }
  }
}
</style>
