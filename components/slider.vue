<script setup lang="ts">
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';

const swiperRef = ref(null);

const swiperInstance = ref();

function onSwiper(swiper: object) {
  swiperInstance.value = swiper;
}

function goToPrevSlide() {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
}

function goToNextSlide() {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
}

const currentSlide = ref();
function onSlideChange(swiper: object) {
  currentSlide.value = swiper.realIndex;
}

interface ISlide {
  image: string,
}
interface IProp {
  slides: ISlide[]
}

withDefaults(defineProps<IProp>(), {
  slides: () => [
    {
      image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    },
    {
      image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    },
    {
      image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    },
  ],
});
</script>

<template>
  <div>
    <div>
      <swiper
        ref="swiperRef"
        class="swiper-container"
        :slides-per-view="slides.length / 2"
        :space-between="50"
        :centered-slides="true"
        :loop="true"
        :modules="[SwiperNavigation, SwiperPagination]"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <swiper-slide v-for="slide in slides" :key="slide.id">
          <slot name="slide" :slide="slide"></slot>
        </swiper-slide>
      </swiper>
      <slider-navbar @prev-slide="goToPrevSlide()" @next-slide="goToNextSlide" />
      <slider-pagiantor :currentSlideIndex="currentSlide" :slidesLength="slides.length" />
    </div>
  </div>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.swiper-slide.active {
  transform: scale(1.2);
  opacity: 1;
}

.swiper-slide-active {
  transform: scale(1.2);
  opacity: 1;
}

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content img {
  width: 100%;
  height: auto;
}
</style>
