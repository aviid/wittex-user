<template>
  <div class="col-md-7 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h3 class="h3 card-header-title">Package List</h3>
      </header>

      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Sex</th>
              <th class="text-center" scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.mobile }}</td>
              <td><span class="badge badge-primary">{{ item.sex }}</span></td>
              <td class="text-center">
                <button class="btn btn-sm btn-warning btn-outline-warning"><i class="fa fa-pen"></i></button>
                <button class="btn btn-sm btn-success btn-outline-success ml-1 px-2"><i class="fa fa-eye"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="card-footer d-flex align-items-center">
        <div>
          <button class="btn btn-sm btn-primary mr-2"><i class="fa fa-arrow-left"></i></button>
          <button class="btn btn-sm btn-primary"><i class="fa fa-arrow-right"></i></button>
        </div>
        <div class="ml-auto">
          <span class="badge badge-info">Total Shipment: {{ totalShipments }}</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Esther Esewi', mobile: '0818484833', sex: 'Female' },
        { id: 2, name: 'Blanche Powers', mobile: '08174983991', sex: 'Male' },
        { id: 3, name: 'Blanche Powers', mobile: 'Dropbox Inc.', sex: 'On Transit' },
        { id: 4, name: 'Blanche Powers', mobile: 'Dropbox Inc.', sex: 'On Transit' },
        { id: 5, name: 'Blanche Powers', mobile: 'Dropbox Inc.', sex: 'On Transit' },
        { id: 6, name: 'Blanche Powers', mobile: 'Dropbox Inc.', sex: 'On Transit' },
        { id: 7, name: 'Blanche Powers', mobile: 'Dropbox Inc.', sex: 'On Transit' },
      ],
    };
  },
  computed: {
    totalShipments() {
      return this.items.length;
    },
  },
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
