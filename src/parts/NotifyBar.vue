<template>
  <div class="notifications-quiz">
    <code
      ><slot>{{ content }}</slot></code
    >
  </div>
</template>

<script>
export default {
  props: ["content"]
};
</script>

<style lang="scss" scoped>
.notifications-quiz {
  padding: 0 10px;
  background: #488de8;
  color: white;
}
</style>
