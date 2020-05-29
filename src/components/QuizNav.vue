<template>
  <transition name="fade" mode="out-in">
    <div v-if="getDataStatus"></div>
    <div v-else id="quiz_nav" class="quiz-grid__nav">
      <div
        :class="[
          'quiz__nav-notify',
          { 'error-validation': getValidationStatus === 'INVALID' }
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
          :class="[prevBtnClasses, turnOff(disabledClass, 'prev')]"
          :disabled="getCounter === 0"
          @click.prevent="prevCount"
        >
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.61289 5.90976C2.72188 6.03008 2.90327 6.03008 3.01607 5.90976C3.12506 5.79352 3.12506 5.60004 3.01607 5.48406L0.971736 3.3035L7.71775 3.3035C7.87501 3.30322 8 3.1699 8 3.00217C8 2.83443 7.87501 2.69678 7.71775 2.69678L0.971736 2.69678L3.01607 0.520278C3.12505 0.399964 3.12505 0.206215 3.01607 0.0902361C2.90327 -0.0300784 2.72163 -0.0300784 2.61289 0.0902362L0.0845978 2.78701C-0.0281995 2.90326 -0.0281994 3.09674 0.0845978 3.21272L2.61289 5.90976Z"
              fill="white"
            /></svg
          >{{ prevText }}
        </button>
        <button
          v-if="getCounter + 1 === isStepsLength"
          type="submit"
          :class="nextBtnClasses"
        >
          {{ sendingText }}
        </button>
        <button
          v-else
          :class="[nextBtnClasses, turnOff(disabledClass, 'next')]"
          :disabled="getCounter === isStepsLength"
          @click.prevent="nextStep"
        >
          {{ nextText
          }}<svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.38711 0.0902358C5.27812 -0.0300786 5.09673 -0.0300786 4.98393 0.0902358C4.87494 0.206485 4.87494 0.399964 4.98393 0.515943L7.02826 2.6965H0.282248C0.124992 2.69678 0 2.8301 0 2.99783C0 3.16557 0.124992 3.30322 0.282248 3.30322H7.02826L4.98393 5.47972C4.87494 5.60004 4.87494 5.79379 4.98393 5.90976C5.09673 6.03008 5.27837 6.03008 5.38711 5.90976L7.9154 3.21299C8.0282 3.09674 8.0282 2.90326 7.9154 2.78728L5.38711 0.0902358Z"
              fill="white"
            />
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
  data() {
    return {
      prevText: "Назад",
      nextText: "Далее",
      sendingText: "Отправить заявку",
      prevBtnClasses: "quiz-button_prev quiz-smalltext",
      nextBtnClasses: "quiz-button_next quiz-smalltext",
      disabledClass: "button-disabled",
      validationMsg: ""
    };
  },
  props: {
    requiredStep: {
      type: Boolean,
      default: false
    }
  },
  methods: {
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
    },
    ...mapActions(["nextCount", "prevCount"])
  },
  computed: {
    ...mapGetters([
      "isNowStep",
      "getCounter",
      "getDataStatus",
      "isStepsLength",
      "getUser",
      "getObjectData",
      "getValidationStatus"
    ])
  }
};
</script>

<style lang="scss" scoped>
.quiz-grid__nav {
  grid-area: quiz-nav;
}

#quiz_nav {
  width: 100%;
  padding: 5px 0;
  margin: 15px 0;
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

.quiz__btn-skip {
  padding: 13px 20px;
  border: none;
  background: transparent;
  color: $dark-text;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.35s ease;
  &:hover {
    letter-spacing: 0.1em;
  }
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

.quiz-button_next,
.quiz-button_prev {
  width: 40%;
  padding: 15px 5px;
  margin: 5px 10px;
  text-align: center;
  color: #ffffff;
  border: none;
  transition: all 0.3s ease;
  svg {
    margin: 0 5px;
    width: 12px;
    height: 8px;
  }
}

.quiz-button_prev {
  background: #888888;
  &:hover {
    box-shadow: 0 0 15px -3px #888888;
  }
}

.quiz-button_next {
  background: linear-gradient(270deg, #d5242c 0%, #ff1b25 100%);
  &:hover {
    box-shadow: 0 0 15px -3px #d5242c;
  }
}

.button-disabled {
  opacity: 0.25;
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
