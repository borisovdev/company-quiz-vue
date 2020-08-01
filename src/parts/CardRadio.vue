<template>
  <div class="quiz__card-container" ref="cardContainer">
    <label
      :class="['quiz__card', 'quiz-card-' + getTheme + '-theme']"
      ref="cardItem"
      @mousemove="rotateIt"
      @mouseout="disableRotate"
    >
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
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { mixinUpdateRadio } from "../assets/mixins";
import { gsap } from "gsap";
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
  },
  methods: {
    parallaxIt(evt) {
      let container = this.$refs.cardContainer;
      let relX = evt.pageX - container.getBoundingClientRect().left;
      let relY = evt.pageY - container.getBoundingClientRect().top;
      let posX =
        ((relX - container.offsetWidth / 2) / container.offsetWidth) * -10;
      let posY =
        ((relY - container.offsetWidth / 2) / container.offsetWidth) * -10;

      gsap.to(container, {
        x: posX,
        y: posY,
        scale: 1.05,
        duration: 0.35
      });
    },
    rotateIt(evt) {
      let container = this.$refs.cardContainer;
      let el = this.$refs.cardItem;
      let height = container.clientHeight;
      let width = container.clientWidth;
      let xVal = evt.offsetX === undefined ? evt.layerX : evt.offsetX;
      let yVal = evt.offsetY === undefined ? evt.layerY : evt.offsetY;
      let yRotation = 20 * ((xVal - width / 2) / width);
      let xRotation = -20 * ((yVal - height / 2) / height);

      gsap.to(el, {
        rotationX: xRotation + "deg",
        rotationY: yRotation + "deg",
        scale: 1.06,
        duration: 0.15
      });
    },
    disableParallax() {
      gsap.to(this.$refs.cardIten, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.35
      });
    },
    disableRotate() {
      gsap.to(this.$refs.cardItem, {
        transform: "none",
        scale: 1,
        duration: 0.35
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
