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
    <Swiper-Slide v-for="item in cards" :key="item.id">
      <div class="card-img-top mb-2">
        <img
          style="height: 150px; object-fit: cover"
          class="w-100"
          :src="item.img"
          :alt="item.title"
        />
      </div>
      <div class="card-body mb-4">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h5>{{ item.title }}</h5>
        </div>
      </div>
    </Swiper-Slide>
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
      cards: [
        {
          id: "002",
          title: "002",
          img: "/kuma/images/photo2_0007_list02.png",
        },
        {
          id: "003",
          title: "003",
          img: "/kuma/images/photo2_0006_list03.png",
        },
        {
          id: "004",
          title: "004",
          img: "/kuma/images/photo2_0005_list04.png",
        },
        {
          id: "005",
          title: "005",
          img: "/kuma/images/photo2_0004_list05.png",
        },
        {
          id: "006",
          title: "006",
          img: "/kuma/images/photo2_0003_list06.png",
        },
        {
          id: "007",
          title: "007",
          img: "/kuma/images/photo2_0002_list07.png",
        },
        {
          id: "009",
          title: "009",
          img: "/kuma/images/photo2_0000_list09.png",
        },
      ],
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
