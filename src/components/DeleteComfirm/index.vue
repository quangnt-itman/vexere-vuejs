<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Bạn có chắc chắn xóa không?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              ref="cancle"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="handleDeleteStation"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    handleDeleteStation() {
      this.$refs.cancle.click();
      this.$store.dispatch("fetchDeleteStation", this.id);
    },
  },
};
</script>

<style>
</style>