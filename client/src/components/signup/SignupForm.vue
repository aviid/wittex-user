<template>
  <div class="u-login-form">
    <form class="mb-3" action="/">
      <div class="mb-3">
        <h1 class="h2">Claim Your Free account!</h1>
        <p class="small">Login to your dashboard with your registered email address and password.</p>
      </div>

      <div class="form-group mb-4">
        <label for="name">Your name</label>
        <input id="name" class="form-control" name="name" type="text" placeholder="John Doe" />
      </div>

      <div class="form-group mb-4">
        <label for="email">Your email</label>
        <input id="email" class="form-control" name="email" type="email" placeholder="john.doe@example.com" />
      </div>

      <div class="form-group mb-4">
        <label for="country">Your country</label>
        <select class="custom-select" id="country" name="country">
          <option value="" selected disabled>Select your country</option>
          <option v-for="country in countries" :value="country.name" :key="country.name">{{ country.name }}</option>
        </select>
      </div>

      <div class="form-row">
        <div class="col-md-6">
          <div class="form-group mb-4">
            <label for="password">Password</label>
            <input id="password" class="form-control" name="password" type="password" placeholder="Enter your password" />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group mb-4">
            <label for="confirmPassword">Confirm password</label>
            <input id="confirmPassword" class="form-control" name="confirmPassword" type="password" placeholder="Re-enter your password" />
          </div>
        </div>
      </div>

      <div class="custom-control custom-checkbox mb-4">
        <input id="rememberMe" class="custom-control-input" name="rememberMe" type="checkbox" />
        <label class="d-block custom-control-label" for="rememberMe">I agree with <a href="terms.html">terms &amp; conditions</a></label>
      </div>

      <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
    </form>

    <p class="small">Already have an account? <a href="/signin">Login here</a></p>
  </div>
</template>

<script>
import countriesData from './countries.json';

export default {
  data() {
    return {
      countries: countriesData,
    };
  },
};
</script>

<style scoped>
/* Add scoped CSS styles here */
</style>
