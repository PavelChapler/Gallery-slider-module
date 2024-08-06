<script setup lang="ts">
const slides = [
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide1',
    id: 23,
    popup: {
      image: 'https://avatars.mds.yandex.net/i?id=d29310481adc73a4f32233087b00bfba_l-4290069-images-thumbs&n=13',
      text: 'Вот такие вот дела',
    },
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=9b180942205c944f9db5685820808ec89d2cd67f-12602632-images-thumbs&n=13',
    title: 'Slide2',
    id: 2323,
    popup: {
      image: 'https://i.pinimg.com/originals/8b/f6/96/8bf696fe7045f94be2d21c23c5f61a1c.jpg',
      text: 'ЧУВАААААК',
    },
  },
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide3',
    id: 53434,
  },
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide4 ',
    id: 565656,
  },
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide5 ',
    id: 5656,
  },
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide6 ',
    id: 562656,
  },
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide7 ',
    id: 56232356,
  },
  {
    image: 'https://cs12.pikabu.ru/post_img/2021/08/06/8/og_og_162825147023332017.jpg',
    title: 'Slide8 ',
    id: 5626523236,
  },
];
</script>

<template>
  <div class="py-20">
    <p class="text-center text-xl">
      ● Для детей
    </p>
    <h1 class="text-center text-9xl mt-1">
      <span style="color: orange" class="caret-amber-500">
        Игровой
      </span>
      <br>
      маршрут
    </h1>
    <p class="text-center mt-20">
      Нейродинамические детские площадки дарят особенный <br>
      чувственный опыт: возможность представить себя на <br>
      диковинных берегах, на таинственном острове с <br>
      природными валунами, не покидая города.
    </p>

    <slider class="mt-20" :slides="slides">
      <template #slide="{ slide }">
        <slide :title="slide.title" :image="slide.image" :popup-obj="slide.popup"></slide>
      </template>
    </slider>
  </div>
</template>
