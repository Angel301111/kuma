<template>
  <main class="">
    <div
      class="banner d-flex justify-content-between align-items-center bg-light px-5"
      style="height: 100px"
    >
      <p class="m-0">所有課程</p>
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb m-0">
          <li class="breadcrumb-item">
            <router-link
              to="/homeview"
              class="breadcrumb-link"
              style="text-decoration: none; color: #6c757d"
            >
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">所有課程</li>
        </ol>
      </nav>
    </div>
    <section class="mt-lg-10 my-4">
      <ul class="nav justify-content-center">
        <li class="nav-item hr">
          <a class="nav-link nav-link-outline" href="#">All</a>
        </li>
        <li class="nav-item hr">
          <a class="nav-link nav-link-outline" href="#">華麗</a>
        </li>
        <li class="nav-item hr">
          <a class="nav-link nav-link-outline" href="#">復古</a>
        </li>
        <li class="nav-item hr">
          <a class="nav-link nav-link-outline" href="#">極簡</a>
        </li>
        <li class="nav-item hr">
          <a class="nav-link nav-link-outline" href="#">質感</a>
        </li>
      </ul>
    </section>
    <section>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="item in cards" :key="item.id">
          <div class="card p-4 p-md-0">
            <div class="card-img">
              <img :src="item.img" class="card-img-top" :alt="item.title" />
              <div class="overlay">
                <div class="text-center">
                  <h5>{{ item.title }}</h5>
                  <p>{{ item.details }}</p>
                  <div class="links fs-4 d-flex justify-content-around">
                    <div href="#" class="link">
                      <i class="bi bi-arrows-angle-contract"></i
                    ></div>
                    <div class="link">
                      <i
                        class="bi bi-search-heart"
                        @click.prevent="openModal(item)"
                      ></i
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text text-secondary">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center my-5">
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </main>
  <Modal ref="imgModal" :modalCard="card"></Modal>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      cards: [
        {
          id: "001",
          title: "001",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0008_list01.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "002",
          title: "002",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0007_list02.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "003",
          title: "003",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0006_list03.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "004",
          title: "004",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0005_list04.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "005",
          title: "005",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0004_list05.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "006",
          title: "006",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0003_list06.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "007",
          title: "007",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0002_list07.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
        {
          id: "009",
          title: "009",
          description: "拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...",
          img: "/kuma/images/photo2_0000_list09.png",
          details: "扁平化 极简 白 童趣 红绿",
        },
      ],
      card: {}
    };
  },
  methods: {
    openModal(item){
      this.card = item
      this.$refs.imgModal.showModal()
    }
  }
};
</script>

<style>
.hr {
  border-bottom: 1px #f5f5f5 solid;
}
.nav-link-outline {
  border-bottom: 3px solid transparent;
}
.nav-link-outline:hover {
  border-bottom: 3px purple solid;
}
.card-img {
  position: relative;
  overflow: hidden;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 0, 128, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 5px;
  cursor: pointer;
}
.card-img:hover .overlay {
  opacity: 1;
}

.link {
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.link:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
}
</style>
