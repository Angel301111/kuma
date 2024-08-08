<template>
  <Swiper
    :breakpoints="{
      768: { slidesPerView: 3 },
      1020: { slidesPerView: 4 },
    }"
    :modules="modules"
    class="mySwiper"
    :slides-per-view="2"
    :space-between="50"
    :pagination="{ dynamicBullets: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
  >
    <Swiper-Slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>111</h5>
        </div>
      </div>
    </Swiper-Slide>
    <swiper-slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>222</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>222</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>222</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>222</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>222</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          src="/images/photo2_0007_list02.png"
          alt=""
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>222</h5>
        </div>
      </div>
    </swiper-slide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default {
  data() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
:deep(.swiper-pagination-bullet) {
  background: purple;
  width: 10px;
  height: 10px;
}
</style>
