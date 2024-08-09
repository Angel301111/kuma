<template>
  <Swiper
    :modules="modules"
    class="myHomeSwiper"
    :pagination="{ dynamicBullets: true, clickable: true }"
    :navigation="{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <Swiper-Slide>
      <main
        class="d-flex justify-content-center bg1"
      >
        <div class="text-center text-white mt-10 position-relative">
          <h1 class="display-3 mt-5">卓越品質 歷久不衰</h1>
          <p class="display-5 mt-3">讓經營成為享受</p>
          <p
            class="position-absolute top-50 start-50 translate-middle"
          >
            酷碼 期待與您合作
          </p>
        </div>
      </main>
    </Swiper-Slide>
    <swiper-slide>
      <main
        class="d-flex justify-content-center bg2"
      ></main>
    </swiper-slide>
    <button class="swiper-button-next d-none d-lg-block"></button>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  data() {
    return {
      modules: [Pagination, Autoplay, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>