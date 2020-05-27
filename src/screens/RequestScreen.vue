<template>
  <div class="row">
    <transition name="fade" mode="out-in">
      <div v-if="getDataStatus" :class="layout">
        <p :class="successClass">
          {{ successMsg }}
        </p>
      </div>
      <div v-else :class="layout">
        <div>
          <p @click="actionAccordion" class="title-chosen unselectable">
            Вы выбрали:
            <svg
              class="icon-accordeon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
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
          <ul class="list-chosen hidden-accordeon">
            <li
              v-for="(obj, idx) in getObjectData"
              :key="idx"
              class="list-chosen__item quiz-smalltext"
            >
              <span class="list-chosen__title">{{ obj.title }}</span>
              <p class="list-chosen__description">
                {{
                  obj.chosen instanceof Array
                    ? obj.chosen.join(", ")
                    : obj.chosen
                }}{{ "; " + obj.wrote }}
              </p>
            </li>
          </ul>
        </div>
        <div>
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
      successClass: "text-success",
      successMsg:
        "Спасибо за ваш выбор! В ближайшее время с вами свяжется наш менеджер!",
      layout: "col-12",
      inputTheme: "quiz-input_light",
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
      evt.target.nextElementSibling.classList.toggle("hidden-accordeon");
    }
  },
  computed: {
    ...mapGetters(["getObjectData", "getDataStatus"])
  },
  created() {
    this.validationStatusTrue();
  }
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.45s ease-out;
}

.hidden-accordeon {
  height: 0;
}

.list-chosen {
  overflow: hidden;

  &__item {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 6px;
    @include flex(row, flex-start, center);
  }

  &__title {
    margin-right: 7px;
    color: $info-color;
  }

  &__description {
    margin: 0;
    color: $dark-text;
  }
}

.title-chosen {
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

.icon-accordeon {
  @include absolute(2px, 10px, 2px, false);
  @include size(15px, 15px);
  transition: all 0.3s ease;
}

.text-success {
  width: 100%;
  font-size: 18px;
  color: green;
  font-weight: $bold;
}
</style>
