<template>
  <div class="col-md-7 mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h3 class="h3 card-header-title">Profile</h3>
      </header>

      <div class="card-body">
        <div class="row">
          <div class="col-md-3 mx-auto mb-3">
            <img class="img-responsive rounded-circle" src="https://place-hold.it/100" alt="" align="center" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <label for="firstName">First Name</label>
            <input type="text" placeholder="First Name" class="form-control" /> 
          </div>
          <div class="col-md-6">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last Name" class="form-control" /> 
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mt-3">
            <label for="business_name">Business Name</label>
            <input type="text" id="business_name" placeholder="Company Name" class="form-control" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Email" class="form-control" /> 
          </div>
          <div class="col-md-6">
            <label for="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Mobile" class="form-control" /> 
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mt-3">
            <label for="address">Address</label>
            <input type="text" id="address" placeholder="Address" class="form-control" /> 
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mt-3">
            <label for="country">Country</label>
            <select id="country" class="form-control">
            <option v-for="country in countryOptions" :value="country.code">{{ country.name }}</option>
            </select>
          </div>
          <div class="col-md-6 mt-3">
            <label for="currency">Currency</label>
            <select id="currency" class="form-control">
              <option value="₦" selected>Naira (₦)</option>
              <option value="₵">Cedi (₵)</option>
              <option value="KSh">Kenya KSh</option>
              <option value="EGP">Egypt (EGP)</option>
              <option value="RF">Rwanda (RF)</option>
              <option value="ZAR">South Africa (ZAR)</option>
            </select>
          </div>
        </div>
      </div>

      <footer class="card-footer d-flex align-items-center">
        <div class="ml-auto">
          <button class="btn btn-primary mr-2">Edit</button>
          <button class="btn btn-primary">Save</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import countries from './countries.json';

export default {
  name: 'ProfileCard',
  data() {
    return {
      countryOptions: countries
    };
  }
}
</script>


<style scoped>
/* Add any scoped styles here */
</style>
