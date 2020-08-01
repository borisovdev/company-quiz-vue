<template>
  <div class="quiz-subgrid-body">
    <div v-if="getSendProgressStatus" class="quiz__loading">
      <svg class="quiz__loading--icon">
        <use :xlink:href="this.getSpritesFolder + '#quiz-loading'"></use>
      </svg>
    </div>
    <transition name="fadeRight" mode="out-in">
      <div v-if="getDataStatus" :class="layout">
        <p :class="successClass">
          {{ successMsg }}
        </p>
      </div>
      <div v-else :class="layout">
        <div>
          <p
            @click="actionAccordion"
            :class="['quiz__total-' + getTheme + '-title']"
          >
            Вы выбрали:
            <svg :class="['quiz__total--icon']">
              <use :xlink:href="this.getSpritesFolder + '#quiz-arrow-down'"></use>
            </svg>
          </p>
          <ul class="quiz__total" :style="{ height: accordeonHeight }">
            <li
              v-for="(obj, idx) in getObjectData"
              :key="idx"
              :class="['quiz__totalItem', 'quiz__text-smallest']"
            >
              <span :class="['quiz__totalItem-' + getTheme + '--name']">{{
                obj.title
              }}</span>
              <p :class="['quiz__totalItem-' + getTheme + '--text']">
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
    ...mapGetters([
      "getTheme",
      "getSpritesFolder",
      "getObjectData",
      "getDataStatus",
      "getSendProgressStatus"
    ])
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
  margin-top: 20px;
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

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
