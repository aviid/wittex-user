<template>
  <div class="col-md-4 mb-4">
    <div class="card">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Tracking Details</h2>
      </header>
      <div class="mt-4">
        <div class="row">
          <div class="col-md-12">
            <div class="u-timeline">
              <div class="u-timeline__item">
                <div class="h4 font-weight-normal text-primary mb-2 text-uppercase">Warehouse</div>
                <h3 class="mb-0">Registered Package</h3>
              </div>
              <div class="u-timeline__item">
                <div class="h4 font-weight-normal text-primary mb-2 text-uppercase">Warehouse</div>
                <h3 class="mb-0">Ready for delivery</h3>
              </div>
              <div class="u-timeline__item">
                <div class="h5 font-weight-normal text-primary mb-2 text-uppercase">On Route</div>
                <h3 class="mb-0">Delivery process</h3>
              </div>
              <div class="u-timeline__item mb-3">
                <div class="h5 font-weight-normal text-primary mb-2 text-uppercase">Destination</div>
                <h3 class="mb-0">Delivered Successfully</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackDetails',
};
</script>