<template>
  <label :class="['quiz__card', 'quiz-card-' + getTheme + '-theme']">
    <img :src="image" :alt="name" />
    <div :class="['quiz__card-title', 'quiz__text-smallest', focusClass]">
      <span class="card__name">{{ name }}</span>
    </div>
    <input
      type="radio"
      :checked="$_mixinUpdateRadio_shouldBeChecked"
      :value="value"
      @change="$_mixinUpdateRadio_update"
      class="radiohidden"
    />
  </label>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { mixinUpdateRadio } from "../assets/mixins";
const { mapGetters } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  mixins: [mixinUpdateRadio],
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
  data() {
    return {
      focusClass: ""
    };
  },
  computed: {
    ...mapGetters(["getTheme", "getUserData"])
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
