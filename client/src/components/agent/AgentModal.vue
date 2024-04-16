<template>
  <div class="modal fade" id="riderCardModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add New Agent</h1>
        </div>
        <div class="modal-body">
          <h4 class="text-uppercase">Personal Details</h4>
          <div class="row">
           
            <div class="col-md-6">
              <input type="text" class="form-control mb-2" placeholder="Name" />
              <input type="email" class="form-control mb-2" placeholder="Email Address" />
              <input type="text" class="form-control mb-2" placeholder="Mobile Number" />
              <select class="form-control" f>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="col-md-5 text-center">
              <img src="@/assets/img/avatars/user-unknown.jpg" width="150" />
              <button class="btn btn-sm btn-primary btn-block mt-1">Upload</button>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <textarea class="form-control" placeholder="Address"></textarea>
            </div>
          </div>
          <h4 class="h5 text-uppercase mt-3">Rider Details </h4>
          <div class="row">
            
            <div class="col-md-6">
              <select class="form-control">
                <option value="Motocycle">Motocycle</option>
                <option value="Tricycle">Tricycle</option>
                <option value="Mini Van">Mini Van</option>
              </select>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" placeholder="Make" />
            </div>

            <div class="col-md-6 mt-2">
              <input type="text" class="form-control" placeholder="Model" />
            </div>
            <div class="col-md-6 mt-2">
              <input type="text" class="form-control" placeholder="Year" />
            </div>

            <div class="col-md-6 mt-2">
              <input type="text" class="form-control" placeholder="VIN Number" />
            </div>
            <div class="col-md-6 mt-2">
              <input type="text" class="form-control" placeholder="Plate Number" />
            </div>

          </div>
          <h4 class="h5 text-uppercase mt-3">Emergency Contact </h4>
          <div class="row">
            
            <div class="col-md-4">
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" placeholder="Relationship" />
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" placeholder="Mobile" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Your component's styles go here */
</style>
