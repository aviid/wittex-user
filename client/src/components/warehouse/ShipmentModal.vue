<template>
  <div class="modal fade" id="WarehouseShipmentModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add New Shipment</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <select class="form-control">
              <option value="batch">BTC2309093 James Doe</option>
              <option value="batch">BTC2309094 Jane Doe</option>
            </select>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Add Shipment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ShipmentModal",
};
</script>

<style>
/* Add your CSS styles here */
</style>
