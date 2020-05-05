<template>
  <aside class="quiz_sidebar col-12 col-md-4">
    <sidebar-header
      :avatar="getMain.manager.avatar"
      :name="getMain.manager.name"
      :position="getMain.manager.position"
    ></sidebar-header>
    <div class="quiz-separator"></div>
    <sidebar-body
      :mainText="getMain.info.maintext"
      :descText="getMain.info.desctext"
    ></sidebar-body>
    <div class="quiz-separator"></div>
    <sidebar-footer
      :brandName="getMain.brand.name"
      :brandTagline="getMain.brand.tagline"
    ></sidebar-footer>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    dataMain: {
      type: String,
      default: '/static/data/quiz_main.json'
    }
  },
  data() {
    return {};
  },
  components: {
    "sidebar-header": () => import("./sidebar/SidebarHeader"),
    "sidebar-body": () => import("./sidebar/SidebarBody"),
    "sidebar-footer": () => import("./sidebar/SidebarFooter")
  },
  methods: {},
  computed: {
    ...mapGetters(["getMain", "getBrand", "getManager", "getInfo"])
  },
  created() {
    this.$store.dispatch("initMain", this.dataMain);
  }
};
</script>
