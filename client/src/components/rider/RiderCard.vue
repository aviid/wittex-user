<template>
  <div class="col-md-7 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h3 class="h3 card-header-title">Rider List</h3>
        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item">
            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#riderCardModal">
              <i class="fa fa-plus pr-1"></i>New Rider
            </button>
          </li>
        </ul>
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
            <tr v-for="rider in riders" :key="rider.id">
              <td>{{ rider.id }}</td>
              <td>{{ rider.name }}</td>
              <td>{{ rider.mobile }}</td>
              <td>
                <span class="badge badge-primary">{{ rider.sex }}</span>
              </td>
              <td class="text-center">
                <button class="btn btn-sm btn-warning btn-outline-warning"><i class="fa fa-pen"></i></button>
                <button class="btn btn-sm btn-success btn-outline-success ml-1 px-2"><i class="fa fa-eye"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="card-footer d-flex align-items-center">
        <div class="">
          <button class="btn btn-sm btn-primary mr-2"><i class="fa fa-arrow-left"></i></button>
          <button class="btn btn-sm btn-primary"><i class="fa fa-arrow-right"></i></button>
        </div>
        <div class="ml-auto">
          <span class="badge badge-info">Total Shipment: 45</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      riders: [
        { id: 1, name: 'Esther Esewi', mobile: '0818484833', sex: 'Female' },
        { id: 2, name: 'Blanche Powers', mobile: '08174983991', sex: 'Male' },
        // Add more riders as needed
      ]
    };
  }
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
