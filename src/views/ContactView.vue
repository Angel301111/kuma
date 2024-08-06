<template>
  <div
    class="banner d-flex justify-content-between align-items-center bg-light px-5"
    style="height: 100px"
  >
    <p class="m-0">聯絡我們</p>
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
        <li class="breadcrumb-item active" aria-current="page">聯絡我們</li>
      </ol>
    </nav>
  </div>
  <section class="w-75 mx-auto my-4">
    <div
      class="my-4 rounded d-flex justify-content-center align-items-center"
      style="height: 50px; background-color: #dcdcdc"
    >
      <p class="m-0 text-secondary">
        專業是我們的基礎，質感是我們的堅持，聆聽您的需求是我們的榮幸
      </p>
    </div>
    <FormForm v-slot="{ errors }">
      <div class="mb-3">
        <label for="name" class="form-label">
          姓名(必填)
          <span class="text-danger">*</span>
        </label>
        <FieldField
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
        />
        <ErrorMessage name="姓名" class="invalid-feedback" />
      </div>

      <div class="mb-3">
        <label for="title" class="form-label"> 稱謂 </label>
        <FieldField
          id="title"
          name="稱謂"
          as="select"
          class="form-control"
          :class="{
            'is-invalid': errors['稱謂'],
          }"
          placeholder="請輸入稱謂"
          rules=""
        >
          <option value="">請選擇</option>
          <option value="">先生</option>
          <option value="">女士</option>
        </FieldField>
        <ErrorMessage name="稱謂" class="invalid-feedback" />
      </div>
      <div class="mb-3">
          <label for="Email" class="form-label">
            Email(必填)
            <span class="text-danger">*</span>
          </label>
          <FieldField
            id="Email"
            name="Email"
            type="Email"
            class="form-control"
            :class="{ 'is-invalid': errors['Email'] }"
            placeholder="請輸入 Email"
            rules="email|required"/>
          <ErrorMessage name="Email" class="invalid-feedback" />
        </div>
      <div class="mb-3">
        <label for="address" class="form-label"> 主旨 </label>
        <FieldField
          id="address"
          name="主旨"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['主旨'] }"
          placeholder="請輸入主旨"
          rules=""
        />
        <ErrorMessage name="主旨" class="invalid-feedback" />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea name="留言" id="message" class="form-control"></textarea>
      </div>
      <div class="">
        <button type="submit" class="btn btn-primary w-100 rounded-pill">
          傳送
        </button>
      </div>
    </FormForm>
  </section>
</template>