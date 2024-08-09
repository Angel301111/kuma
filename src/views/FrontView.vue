<template>
  <div class="container-fluid">
    <div class="row">
      <Navbar />
      <div class="col-lg-9 d-flex flex-column min-vh-100">
        <div class="mb-auto">
          <router-view />
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
