<template>
  <free-message></free-message>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("moduleCompanyQuiz");
export default {
  components: {
    "free-message": () => import("@/parts/FreeAnswer")
  },
  methods: {
    ...mapActions(["validationStatusTrue"])
  },
  created() {
    this.validationStatusTrue();
  }
};
</script>

<style lang="scss" scoped></style>
