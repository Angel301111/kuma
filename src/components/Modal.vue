<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content position-relative">
        <button
          type="button"
          class="btn-close position-absolute top--5 end-0"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <img :src="modalCard.img" :alt="modalCard.title" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  props: {
    modalCard: {}
  },
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
