<template>
  <label :class="['quiz-card', 'card-' + getTheme + '-theme']">
    <img :src="image" />
    <div
      :class="[titleClasses, focusClass]"
      style="text-align: center;"
    >
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
.card__name {
  color: $dark-text;
}

.card-classic-theme {
  .active {
    background: $info-color;
    .card__name {
      color: white;
    }
  }
}
.card-amethyst-theme {
  .active {
    background: #b6247f;
    .card__name {
      color: white;
    }
  }
}

.quiz-card {
  width: 100%;
  height: 140px;
  margin: 15px auto;
  position: relative;
  // overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.3s ease;
  &:hover {
    .quiz-card__title {
      box-shadow: 0px 0px 15px -3px #d5242c;
    }
  }
  input {
    &:checked {
      //position: relative;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__title {
    position: absolute;
    width: 85%;
    bottom: -10px;
    //left: 50%;
    //margin-left: -25%;
    padding: 7px 15px;
    background-color: #ffffff;
    border-radius: 5px;
    transition: inherit;
  }
}

@media (max-width: 576px) {
  .quiz-card {
    height: 120px;
    width: 100%;
    margin: 7px auto;
    overflow: hidden;
    &__title {
      width: 100%;
      bottom: 0;
      font-size: 8pt;
    }
  }
}
</style>
