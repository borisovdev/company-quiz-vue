<template>
  <header class="quiz_manager">
    <div class="manager__avatar">
      <img :src="avatar" alt="manager-avatar" />
    </div>
    <div class="manager_data">
      <span id="manager__name" class="quiz-mediumtext">{{ name }}</span>
      <span id="manager__office" class="quiz-lighttext">{{ position }}</span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    avatar: String,
    name: String,
    position: String
  }
}
</script>