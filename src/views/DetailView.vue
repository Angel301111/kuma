<template>
  <div
    class="banner d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center bg-light px-5 hp100"
  >
    <p class="m-0">課程細節</p>
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb m-0">
        <li class="breadcrumb-item">
          <router-link to="/homeview" class="breadcrumb-link">
            首頁
          </router-link>
        </li>
        <li class="breadcrumb-item" aria-current="page">課程細節</li>
      </ol>
    </nav>
  </div>
  <section class="container mt-4">
    <div class="row">
      <div class="col-lg-7">
        <img src="/images/photo2_0008_list01.png" alt="001" class="img-fluid" />
        <div class="row row-cols-2 row-cols-lg-3 g-4 my-4">
          <div class="col" v-for="item in photos" :key="item.id">
            <img :src="item.img" :alt="item.title" class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <button type="button" class="btn btn-light rounded-circle">
          <i class="bi bi-arrow-left"></i>
        </button>
        <button type="button" class="btn btn-light rounded-circle ms-2">
          <i class="bi bi-arrow-right"></i>
        </button>
        <h1 class="h3 mt-4">日本ウェルター級挑戦者決 定8回戰</h1>
        <hr />
        <ul>
          <li>首页廣告轮播圖片尺寸依設計為主</li>
          <li>导览列/网页字型：预设系统字型</li>
          <li>以上两点如有特殊需求请告知</li>
          <li>网页语系，功能按钮，标题名称皆以酷码为主</li>
        </ul>
        <ul class="position-relative list-style-none">
          <li class="">
            <i class="bi bi-folder2 position-absolute" style="left: 5px"></i
            >模版需求分类
          </li>
          <li>扁平化，极简，白，童趣，红，绿</li>
        </ul>
        <hr />
      </div>
    </div>
  </section>
  <section class="container">
    <p>Related items</p>
    <Swiper></Swiper>
  </section>
</template>

<script>
import Swiper from "../components/Swiper.vue";

export default {
  components: {
    Swiper,
  },
  data() {
    return {
      photos: [
        {
          img: "/kuma/images/photo2_0008_list01.png",
          title: "001",
          id: "001",
        },
        {
          img: "/kuma/images/photo2_0008_list01.png",
          title: "001",
          id: "002",
        },
        {
          img: "/kuma/images/photo2_0008_list01.png",
          title: "001",
          id: "003",
        },
        {
          img: "/kuma/images/photo2_0008_list01.png",
          title: "001",
          id: "004",
        },
        {
          img: "/kuma/images/photo2_0008_list01.png",
          title: "001",
          id: "005",
        },
      ],
    };
  },
};
</script>
