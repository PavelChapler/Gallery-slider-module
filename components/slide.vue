<script setup lang="ts">
import { ref } from 'vue';
import popup from './popup.vue';

const popupRef = ref();

interface IProp {
  title: string,
  image: string,
  popupObj?: object,
}

defineProps<IProp>();

function openModal() {
  popupRef.value.openModal();
}
</script>

<template>
  <popup ref="popupRef" :image="popupObj?.image" :text="popupObj?.text" />
  <div class="grid">
    <picture>
      <source :srcset="image" media="(max-width: 600px)">
      <img :src="image" alt="cote">
    </picture>
    <div>
      <h2>title</h2>
      <p>
        <a href="">{{ title }}</a>
      </p>
      <div class="inset-0 flex items-center justify-center">
        <button
          type="button"
          class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          @click="openModal"
        >
          Open dialog
        </button>
      </div>
    </div>
  </div>
</template>
