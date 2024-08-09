<template>
  <div class="col-lg-3 g-4 d-flex flex-column justify-content-between">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid flex-lg-column justify-content-between">
          <router-link class="navbar-brand" aria-current="page" to="/homeview">
            <img src="/images/logo.png" alt="Logo" class="rwd" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref="navbarBtn"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul
              class="navbar-nav me-auto mb-2 mt-lg-5 d-flex flex-column justify-content-between text-center"
            >
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/homeview"
                  @click.prevent="closeNav"
                >
                  首頁
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/list"
                  @click.prevent="closeNav"
                >
                  所有課程
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/detail"
                  @click.prevent="closeNav"
                >
                  課程細節
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/contact"
                  @click.prevent="closeNav"
                >
                  聯絡我們
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <p class="text-center text-secondary d-none d-lg-block">BOXING CLUB</p>
  </div>
</template>

<script>
export default{
  methods: {
    closeNav() {
      if (document.body.offsetWidth < 992) {
        this.$refs.navbarBtn.click()
      }
  }
}
}
</script>
<style>
@media (max-width: 768px) {
  .rwd {
    height: 100px;
  }
  .navbar-toggler {
    margin-left: auto;
  }
}
</style>
