<template>
  <div class="mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Subscription</h2>
      </header>
      <div class="card-body">
        <div class="row">
          <div class="col-md-7">
            <p>Next Payment</p>
            <h2>November 20, 2020</h2>
            <button class="btn btn-success">Manage Payment</button>
          </div>
          <div class="col-md-5">
            <strong class="u-pricing__header-price display-4 font-weight-bold mb-2">
                <span class="h6 align-top">$</span>49<span class="h6">/ month</span>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"SubCard"
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
