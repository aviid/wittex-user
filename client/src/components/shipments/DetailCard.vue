<template>
  <div class="col-md-5 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Batch</h2>
      </header>
    
      <div class="mt-4">
        <div class="row">
          <div class="col-md-12"></div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Batch</th>
                  <th scope="col">Driver</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BT39828</td>
                  <td>Esther Esewi</td>
                  <td>Sent</td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-danger btn-outline-danger"><i class="fa fa-trash"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
