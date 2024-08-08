<script setup lang="ts">

const emit = defineEmits(['nextSlide', 'prevSlide']);

</script>

<template>
  <div class="custom-pagination">
    <button type="button" @click="emit('prevSlide')">
      Prev
    </button>
    <span>{{ currentSlide }} / {{ totalSlides }}</span>
    <button type="button" @click="emit('nextSlide')">
      Next
    </button>
  </div>
</template>

<style scoped>
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}
</style>
