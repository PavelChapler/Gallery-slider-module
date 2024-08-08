<script setup lang="ts">
interface IProp {
  currentSlideIndex: number,
  slidesLength: number,
}

defineProps<IProp>();
</script>

<template>
  <div class="navbar">
    <span>{{ currentSlideIndex + 1 }} / {{ slidesLength }}</span>
  </div>
</template>

<style scoped>

</style>
