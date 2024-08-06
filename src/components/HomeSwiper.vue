<template>
  <Swiper
    :modules="modules"
    class="mySwiper"
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
        class="d-flex justify-content-center"
        style="
          background-image: url('/images/home01.png');
          height: 100vh;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        "
      >
        <div class="text-center text-white mt-10" style="position: relative">
          <h1 class="display-3 mt-5">卓越品質 歷久不衰</h1>
          <p class="display-5 mt-3">讓經營成為享受</p>
          <p
            class=""
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          >
            酷碼 期待與您合作
          </p>
        </div>
      </main>
    </Swiper-Slide>
    <swiper-slide>
      <main
        class="d-flex justify-content-center"
        style="
          background-image: url('/images/home02.png');
          height: 100vh;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        "
      >
        <div class="text-center text-white mt-10" style="position: relative">
          <h1 class="display-3 mt-5">卓越品質 歷久不衰</h1>
          <p class="display-5 mt-3">讓經營成為享受</p>
          <p
            class=""
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          >
            酷碼 期待與您合作
          </p>
        </div>
      </main>
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

<style>
.swiper-button-next {
  background: url("/images/home02.png") no-repeat;
  background-size: 75px 75px;

  text-indent: 55%;
  background-color: white;
  color: gray;
  width: 150px;
  height: 75px;
  border: none;
  outline: none;
}

.swiper-button-next::after {
  font-size: 20px;
}

.swiper-pagination-bullet {
  background: white;
  height: 20px;
  width: 20px;
}
</style>
