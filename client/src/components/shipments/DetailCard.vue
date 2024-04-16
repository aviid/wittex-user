<template>
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Batch</h2>
        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item">
            <input type="date" class="form-control form-control-sm" placeholder="dd-mm-yyyy" />
          </li>
        </ul>
      </header>
    
       <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Batch</th>
              <th scope="col">Driver</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BT39828</td>
              <td>Esther Esewi</td>
              <td>Sent</td>
              <td class="text-center">
                <button class="btn btn-sm btn-primary btn-outline-primary mr-1"><i class="fa fa-eye"></i></button>
                <button class="btn btn-sm btn-danger btn-outline-danger"><i class="fa fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>BT39828</td>
              <td>Esther Esewi</td>
              <td>Sent</td>
              <td class="text-center">
                <button class="btn btn-sm btn-primary btn-outline-primary mr-1"><i class="fa fa-eye"></i></button>
                <button class="btn btn-sm btn-danger btn-outline-danger"><i class="fa fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="card-footer d-flex align-items-center">
        <div class="">
          <button class="btn btn-sm btn-primary mr-2"> <i class="fa fa-arrow-left"></i> </button>
          <button class="btn btn-sm btn-primary"> <i class="fa fa-arrow-right"></i> </button>
        </div>
      </footer>
      
    </div>
  </div>
</template>

