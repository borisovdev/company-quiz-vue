<template>
  <div class="quiz-subgrid-body">
    <div v-if="getSendProgressStatus" class="quiz__loading">
      <svg class="quiz__loading--icon">
        <use xlink:href="sprites/sprite.svg#quiz-loading"></use>
      </svg>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="getDataStatus" :class="layout">
        <p :class="successClass">
          {{ successMsg }}
        </p>
      </div>
      <div v-else :class="layout">
        <div>
          <p @click="actionAccordion" class="quiz__total-title unselectable">
            Вы выбрали:
            <svg class="quiz__total--icon">
              <use xlink:href="sprites/sprite.svg#quiz-arrow-down"></use>
            </svg>
          </p>
          <ul class="quiz__total" :style="{ height: accordeonHeight }">
            <li
              v-for="(obj, idx) in getObjectData"
              :key="idx"
              class="quiz__total-item quiz__text-smallest"
            >
              <span class="quiz__total-item--name">{{ obj.title }}</span>
              <p class="quiz__total-item--text">
                {{
                  obj.chosen instanceof Array
                    ? obj.chosen.join(", ")
                    : obj.chosen
                }}{{ "; " + obj.wrote }}
              </p>
            </li>
          </ul>
        </div>
        <div class="container__input">
          <span>Представьтесь, чтобы мы могли связаться с Вами</span>
          <input
            type="text"
            v-model.lazy="username"
            @change="updateUserName(username)"
            :class="inputTheme"
            placeholder="Ваше имя *"
            required
          />
          <input
            type="email"
            v-model.lazy="useremail"
            @change="updateUserEmail(useremail)"
            :class="inputTheme"
            placeholder="Ваш Email *"
            required
          />
          <input
            type="tel"
            v-model.lazy="userphone"
            @change="updateUserPhone(userphone)"
            :class="inputTheme"
            placeholder="Мессенджер или номер телефона"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  data() {
    return {
      accordeonHeight: "0px",
      successClass: "quiz__success-msg",
      successMsg:
        "Спасибо за ваш выбор! В ближайшее время с вами свяжется наш менеджер!",
      layout: "",
      inputTheme: "quiz__input-classic",
      username: "",
      userphone: "",
      useremail: ""
    };
  },
  computed: {
    ...mapGetters(["getObjectData", "getDataStatus", "getSendProgressStatus"])
  },
  created() {
    this.validationStatusTrue();
  },
  methods: {
    ...mapActions([
      "updateUserName",
      "updateUserPhone",
      "updateUserEmail",
      "validationStatusTrue"
    ]),
    actionAccordion(evt) {
      let elBlock = evt.target.nextElementSibling;
      if (this.accordeonHeight === "0px") {
        this.accordeonHeight = `${elBlock.scrollHeight}px`;
      } else {
        this.accordeonHeight = `${elBlock.scrollHeight}px`;
        this.accordeonHeight = "0px";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container__input {
  display: flex;
  flex-direction: column;
}

.quiz__loading--icon {
  width: 80px;
  height: 80px;
  animation: rotating 1s linear infinite;
}

.quiz__success-msg {
  width: 100%;
  font-size: 18px;
  color: green;
  font-weight: bold;
}

.quiz__total {
  overflow: hidden;
  transition: height 600ms ease;
  &-title {
    width: 100%;
    color: $info-color;
    padding: 8px 0;
    position: relative;
    cursor: pointer;
    &:hover {
      svg {
        transform: rotate(90deg);
      }
    }
  }
  &-item {
    margin-bottom: 6px;
    padding: 5px 10px;
    width: 100%;
    @include flex(row, flex-start, center);
    &--name {
      margin-right: 7px;
      color: $info-color;
    }
    &--text {
      margin: 0;
      color: $dark-text;
    }
  }
  &--icon {
    @include absolute(2px, 10px, 2px, false);
    @include size(15px, 15px);
    transition: all 0.3s ease;
  }
  &--hidden {
    height: 0;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.45s ease-out;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
