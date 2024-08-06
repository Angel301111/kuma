<template>
  <div class="col-lg-3 g-4 d-flex flex-column justify-content-between">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div
          class="container-fluid flex-lg-column justify-content-between"
        >
          <a class="navbar-brand m-0" href="#">
            <img src="/images/logo.png" alt="Logo" class="rwd" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
                >
                  首頁
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/list"
                >
                  所有課程
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/detail"
                >
                  課程細節
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link sidelink"
                  aria-current="page"
                  to="/contact"
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
<style>
@media (max-width: 768px){
  .rwd {
    height: 100px;
  }
  .navbar-toggler{
    margin-left: auto;
  }
}
</style>
