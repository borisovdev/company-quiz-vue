<template>
  <aside
    :class="[
      'quiz__grid-sidebar',
      'quiz__sidebar',
      'quiz-text-' + getTheme + '-color'
    ]"
  >
    <header class="quiz__manager">
      <div class="quiz__manager-avatar">
        <img :src="getMain.manager.avatar" :alt="getMain.manager.name" />
      </div>
      <div class="quiz__manager-data">
        <span class="quiz__text-medium">{{ getMain.manager.name }}</span>
        <span class="quiz__text-smallest">{{ getMain.manager.position }}</span>
      </div>
    </header>
    <div class="quiz__separator"></div>
    <div :class="['quiz__help-' + getTheme]">
      <svg :class="['quiz__help-' + getTheme + '-icon']">
        <use :xlink:href="this.getSpritesFolder + '#quiz-question-help'"></use>
      </svg>
      <p class="quiz__text-smallest">
        {{ getNowStep.legend }}
      </p>
    </div>
    <div :class="['quiz__info-' + getTheme]">
      <svg :class="['quiz__info-' + getTheme + '-icon']">
        <use :xlink:href="this.getSpritesFolder + '#quiz-company-info'"></use>
      </svg>
      <p class="quiz__text-smallest">
        {{ getMain.info.maintext }}
      </p>
      <p class="quiz__text-smallest">
        {{ getMain.info.desctext }}
      </p>
    </div>
    <div class="quiz__separator"></div>
    <footer class="quiz__footer">
      <span class="quiz__orgname quiz__text-large">{{
        getMain.brand.name
      }}</span>
      <span class="quiz__tagline quiz__text-standard">{{
        getMain.brand.tagline
      }}</span>
    </footer>
  </aside>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  props: {
    dataMain: {
      type: String,
      default: "/static/data/quiz_main.json"
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["initMain"])
  },
  computed: {
    ...mapGetters([
      "getTheme",
      "getSpritesFolder",
      "getMain",
      "getBrand",
      "getManager",
      "getInfo",
      "getNowStep"
    ])
  },
  created() {
    this.initMain(this.dataMain);
  }
};
</script>

<style lang="scss" scoped>
.quiz__grid-sidebar {
  padding: 0 10px;
  grid-area: quiz-sidebar;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quiz__sidebar {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.quiz__manager {
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.quiz__manager-data {
  display: inherit;
  flex-direction: column;
}

.quiz__manager-avatar {
  height: 85px;
  width: 85px;
  border-radius: 50%;
  overflow: hidden;
  background-color: $light-bg;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.quiz__footer {
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    &:nth-child(1) {
      margin-right: 15px;
    }
    &:nth-child(2) {
      text-align: right;
    }
  }
}

.quiz__orgname {
  line-height: 1.2;
}
.quiz__tagline {
  line-height: 1.2;
}
</style>
