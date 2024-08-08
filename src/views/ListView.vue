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
        <li class="nav-item">
          <a class="nav-link nav-link-outline" href="#">All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-outline" href="#">華麗</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-outline" href="#">復古</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-outline" href="#">極簡</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-outline" href="#">質感</a>
        </li>
      </ul>
    </section>
    <section>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card p-4 p-md-0">
            <img
              src="/images/photo2_0008_list01.png"
              class="card-img-top"
              alt=""
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0007_list02.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0006_list03.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0005_list04.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0004_list05.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0003_list06.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0002_list07.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0001_list08.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  p-4 p-md-0">
            <img
              src="/images/photo2_0000_list09.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0 mt-4">
              <h5 class="card-title">001</h5>
              <p class="card-text text-secondary">
                拳擊boxing別名搏擊，是一項由兩位選手對賽的體育運動...
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
</template>

<style>
.nav-link-outline {
  border-bottom: 1px #f5f5f5 solid;
}
.nav-link-outline:hover {
  border-bottom: 3px purple solid;
}
</style>
