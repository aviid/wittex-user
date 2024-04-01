<template>
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h3 class="h3 card-header-title">Shipment List</h3>
        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item">
            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <i class="fa fa-plus pr-1"></i>Add Shipment
            </button>
          </li>
        </ul>
      </header>

      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Sender</th>
              <th scope="col">Mobile</th>
              <th scope="col">Status</th>
              <th class="text-center" scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="shipment in shipments" :key="shipment.id">
              <td>{{ shipment.id }}</td>
              <td>{{ shipment.sender }}</td>
              <td>{{ shipment.mobile }}</td>
              <td><span class="badge badge-primary">{{ shipment.status }}</span></td>
              <td class="text-center">
                <button class="btn btn-sm btn-warning btn-outline-warning"><i class="fa fa-pen"></i></button>
                <button class="btn btn-sm btn-success btn-outline-success ml-1 px-2" data-bs-toggle="modal" data-bs-target="#shipmentDetailModal"><i class="fa fa-eye"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="card-footer d-flex align-items-center">
        <div>
          <button class="btn btn-sm btn-primary mr-2"> <i class="fa fa-arrow-left"></i> </button>
          <button class="btn btn-sm btn-primary"> <i class="fa fa-arrow-right"></i> </button>
        </div>
        <div class="ml-auto">
          <span class="badge badge-info">Total Shipment: {{ shipments.length }}</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name:"DashShipmentCard",
  data() {
    return {
      shipments: [
        { id: 1, sender: 'Esther Esewi', mobile: '0818484833', status: 'On Transit' },
        { id: 2, sender: 'Blanche Powers', mobile: '08174983991', status: 'On Transit' },
        // Add more shipment data here as needed
      ]
    };
  }
};
</script>
