<template>
  <div class="col-md-5 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Rider Details</h2>
        <div class="ml-auto">
          <button class="btn btn-sm btn-danger"> Delete Rider</button>
        </div>
      </header>

      <div class="card-body">
        <div class="row">
          <div class="col-md-7">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Name</h4>
              <span>David Iruafeimi</span>
            </div>

            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Mobile</h4>
              <span>08020389811</span>
            </div>
                            
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Email</h4>
              <span>davidiruafeimi@gmail.com</span>
            </div>

            <div class="mb-2">
              <div class=" text-muted mb-0">Gender</div>
              <span>Female</span>
            </div>
          </div>
          <div class="col-md-5">
            <img class="img-responsive" src="@/assets/img/avatars/user-unknown.jpg" width="140" alt="Passport" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Address</h4>
              <span>23 Samson road, Ekinlin, Ado-Ekiti, Ekiti</span>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Types</h4>
              <span>Motocycle</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Make</h4>
              <span>Suzuki</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Model</h4>
              <span>Motocycle</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Year</h4>
              <span>2024</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">VIN Number</h4>
              <span>Motocycle</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Plate Number</h4>
              <span>2024</span>
            </div>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-4">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Name</h4>
              <span>Johnson</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Relationship</h4>
              <span>Sister</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-2">
              <h4 class="h4 text-muted mb-0">Mobile</h4>
              <span>+234803849839</span>
            </div>
          </div>
        </div>
      </div>       
    </div>
  </div>
</template>

<script>
export default {
    name:"RiderDetails",
};
</script>

