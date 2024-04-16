<template>
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Batch</h2>
        <ul class="list-inline ml-auto mb-0">
          <li class="list-inline-item">
            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#staticBatch">
              <i class="fa fa-plus pr-1"></i>Create Batch
            </button>
          </li>
        </ul>
      </header>

      <div class="mt-4">
        <div class="row">
          <div class="col-md-12">
            <!-- Additional content can be added here if needed -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Batch </th>
                  <th scope="col">Driver</th>
                  <th scope="col">Items</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>BT39828</td>
                  <td>Esther Esewi</td>
                  <td>5</td>
                  <td><span class="badge badge-success">In progress</span></td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-primary btn-outline-primary mr-1" data-bs-toggle="modal" data-bs-target="#ViewstaticBatch"><i class="fa fa-eye"></i></button>
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
