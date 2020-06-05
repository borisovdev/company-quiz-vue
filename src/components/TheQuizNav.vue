<template>
  <transition name="fade" mode="out-in">
    <div v-if="getDataStatus"></div>
    <div
      v-else
      class="quiz__grid-nav quiz__nav"
      :class="['quiz-text-' + getTheme + '-color']"
    >
      <div
        :class="[
          'quiz__nav-notify',
          { 'quiz__validation--error': getValidationStatus === 'INVALID' },
          'quiz__text-smallest'
        ]"
        v-if="getValidationStatus === 'INVALID'"
      >
        {{ validationMsg }}
      </div>
      <div
        :class="['quiz__nav-skip']"
        v-if="!requiredStep && Number(isNowStep) !== Number(isStepsLength)"
      >
        <button :class="['quiz__btn-skip']" @click.prevent="nextCount">
          Пропустить вопрос
        </button>
      </div>
      <div class="quiz__control">
        <button
          :class="[
            prevBtnClasses,
            'quiz-btn-' + getTheme + '-prev',
            turnOff(disabledClass, 'prev')
          ]"
          :disabled="getCounter === 0"
          @click.prevent="prevCount"
        >
          <svg class="quiz__btn-icon">
            <use xlink:href="sprites/sprite.svg#quiz-nav-arrow-prev"></use>
          </svg>
          {{ prevText }}
        </button>
        <button
          v-if="getCounter + 1 === isStepsLength"
          type="submit"
          :class="[nextBtnClasses, 'quiz-btn-' + getTheme + '-next']"
        >
          {{ sendingText }}
        </button>
        <button
          v-else
          :class="[
            nextBtnClasses,
            'quiz-btn-' + getTheme + '-next',
            turnOff(disabledClass, 'next')
          ]"
          :disabled="getCounter === isStepsLength"
          @click.prevent="nextStep"
        >
          {{ nextText }}
          <svg class="quiz__btn-icon">
            <use xlink:href="sprites/sprite.svg#quiz-nav-arrow-next"></use>
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  props: {
    requiredStep: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prevText: "Назад",
      nextText: "Далее",
      sendingText: "Отправить заявку",
      prevBtnClasses: ["quiz__btn-prev", "quiz__text-smallest"],
      nextBtnClasses: ["quiz__btn-next", "quiz__text-smallest"],
      disabledClass: "quiz__btn--disabled",
      validationMsg: ""
    };
  },
  computed: {
    ...mapGetters([
      "getTheme",
      "isNowStep",
      "getCounter",
      "getDataStatus",
      "isStepsLength",
      "getUser",
      "getObjectData",
      "getValidationStatus"
    ])
  },
  methods: {
    ...mapActions(["nextCount", "prevCount"]),
    nextStep() {
      if (this.getValidationStatus === "INVALID") {
        this.validationMsg = "Проверьте правильность заполненных данных";
      } else {
        this.nextCount();
      }
    },
    // Общий метод для добавления класса отключения
    turnOff(className, direction) {
      if (typeof className === "string" && typeof direction === "string") {
        if (direction === "prev" && Number(this.getCounter) === 0) {
          return className;
        }
        if (
          direction === "next" &&
          this.getCounter + 1 === this.isStepsLength
        ) {
          return className;
        }
      } else {
        // console.log('[QUIZ_NAV] Аргументы должны быть строкой!')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.quiz__grid-nav {
  grid-area: quiz-nav;
}

.quiz__nav {
  padding: 5px 0;
  margin: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.quiz__nav-skip {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.quiz__btn-next,
.quiz__btn-prev {
  padding: 15px 5px;
  margin: 5px 10px;
  width: 40%;
  text-align: center;
  border: none;
  transition: all 0.3s ease;
  svg {
    margin: 0 5px;
    width: 12px;
    height: 8px;
  }
}

.quiz__btn-skip {
  padding: 13px 20px;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    letter-spacing: 0.1em;
  }
}

.quiz__btn-icon {
  fill: white;
}

.quiz__btn--disabled {
  opacity: 0.25;
}

.quiz__control {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quiz__nav-notify {
  width: 100%;
  margin-bottom: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.45s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
