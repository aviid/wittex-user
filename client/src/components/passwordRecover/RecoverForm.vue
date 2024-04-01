<template>
  <div class="u-login-form">
    <form class="mt-3" action="/">
      <div class="mb-5">
        <h1 class="h2">Password Recovery</h1>
        <p class="small">Enter your email address below to reset your password.</p>
      </div>

      <div class="form-group mb-4">
        <label for="email">Your email</label>
        <input id="email" class="form-control" name="email" type="email" placeholder="john.doe@example.com" />
      </div>

      <button class="btn btn-primary btn-block mb-3" type="submit">Reset Password</button>
    </form>

    <p class="small">
      Remembered your password? <router-link to="/signin">Login here</router-link>
    </p>
  </div>
</template>

<script>
export default {
    name:"RecoverForm",
  // No methods or lifecycle hooks needed
};
</script>

<style scoped>
/* Add scoped CSS styles here */
</style>
