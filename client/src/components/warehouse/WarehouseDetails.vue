<template>
  <div class="col-md-5 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Package Details</h2>
        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item">
            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#WarehouseShipmentModal">
              <i class="fa fa-plus pr-1"></i>Add Shipment
            </button>
          </li>
        </ul>
      </header>
      <div class="card-body">
        <div class="row mb-2" v-for="(item, index) in items" :key="index">
          <div class="col-md-5">
            <h4 class="h4 text-muted mb-1">{{ item.label }}</h4>
          </div>
          <div class="col-md-7">
            <span class="align-middle font-weight-semibold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"WarehouseDetails",
  data() {
    return {
      items: [
        { label: 'Item', value: '2Packs of Rice' },
        { label: 'Address', value: 'flat 3, house 23, Street name, Estate name, City' },
        { label: "Sender's Name", value: 'Joshua Elebekire' },
        { label: "Sender's Mobile", value: '+234803849834' },
        { label: "Receiver's Name", value: 'Edemakiota Janiaghi' },
        { label: "Receiver's Mobile", value: '+2349039409022' },
        { label: 'Batch', value: 'BTCH2902903' },
        { label: 'Amount', value: 'N 4,500' },
        { label: 'Sent Date/Time', value: '23/05/2024 12:40pm' },
        { label: 'Delivered Date/Time', value: '23/05/2024 3:45pm' },
        { label: 'Status', value: 'In Warehouse' }
      ]
    };
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
