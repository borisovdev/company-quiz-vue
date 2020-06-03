<template>
  <div class="quiz-subgrid-body">
    <div v-if="getSendProgressStatus" class="quiz__loading">
      <svg
        class="quiz__loading--icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        xml:space="preserve"
      >
        <path
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
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
            <svg
              class="quiz__total--icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 492.004 492.004"
              style="enable-background:new 0 0 492.004 492.004;"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
                  />
                </g>
              </g>
            </svg>
          </p>
          <ul class="quiz__total quiz__total--hidden">
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
  methods: {
    ...mapActions([
      "updateUserName",
      "updateUserPhone",
      "updateUserEmail",
      "validationStatusTrue"
    ]),
    actionAccordion(evt) {
      evt.target.nextElementSibling.classList.toggle("quiz__total--hidden");
    }
  },
  computed: {
    ...mapGetters(["getObjectData", "getDataStatus", "getSendProgressStatus"])
  },
  created() {
    this.validationStatusTrue();
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
}

.quiz__success-msg {
  width: 100%;
  font-size: 18px;
  color: green;
  font-weight: bold;
}

.quiz__total {
  overflow: hidden;
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
</style>
