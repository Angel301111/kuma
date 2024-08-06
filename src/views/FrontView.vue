<template>
  <div class="container-fluid">
    <div class="row">
      <Navbar />
      <div class="col-lg-9 sticky-footer">
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

<style>
.sticky-footer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
