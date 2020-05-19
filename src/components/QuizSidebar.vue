<template>
  <aside class="quiz_sidebar col-12 col-md-4">
    <header class="quiz_manager">
      <div class="manager__avatar">
        <img :src="getMain.manager.avatar" alt="manager-avatar" />
      </div>
      <div class="manager_data">
        <span id="manager__name" class="quiz-mediumtext">{{
          getMain.manager.name
        }}</span>
        <span id="manager__office" class="quiz-lighttext">{{
          getMain.manager.position
        }}</span>
      </div>
    </header>
    <div class="quiz-separator"></div>
    <div class="quiz_info">
      <p id="quiz_info_maintext" class="quiz-smalltext">
        {{ getMain.info.maintext }}
      </p>
      <p id="quiz_info_desctext" class="quiz-smalltext">
        {{ getMain.info.desctext }}
      </p>
    </div>
    <div class="quiz-separator"></div>
    <footer class="quiz_footer">
      <span id="quiz__orgname" class="quiz-headtext">{{
        getMain.brand.name
      }}</span>
      <span id="quiz__tagline" class="quiz-bigtext">{{
        getMain.brand.tagline
      }}</span>
    </footer>
  </aside>
</template>

<script>
// import { mapGetters } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("moduleCompanyQuiz");

export default {
  props: {
    dataMain: {
      type: String,
      default: "/static/data/quiz_main.json",
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["initMain"])
  },
  computed: {
    ...mapGetters(["getMain", "getBrand", "getManager", "getInfo"]),
  },
  created() {
    this.initMain(this.dataMain);
  },
};
</script>

<style lang="scss" scoped>
.quiz_sidebar {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.quiz_manager {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.manager_data {
  display: inherit;
  flex-direction: column;
}

.manager__avatar {
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

.quiz_info {
  flex: 1 0 auto;
}

.quiz_footer {
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
</style>
