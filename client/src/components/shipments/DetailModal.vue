<template>
  <div class="modal fade" id="shipmentDetailModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Shipment Details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-2">
            <div class="col-md-5">
              <h4 class="h4 text-muted mb-1">Item</h4>
            </div>
            <div class="col-md-7">
              <span class="align-middle font-weight-semibold">2Packs of Rice</span>
            </div>
          </div>
          <!-- Other rows omitted for brevity -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Print</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailModal",
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
