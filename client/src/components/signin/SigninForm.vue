<template>
  <div class="u-login-form">
    <form class="mb-3" action="/">
      <div class="mb-5 text-center">
        <h1 class="h2">Welcome Back!</h1>
        <p class="small">Login with your email and password</p>
      </div>

      <div class="form-group mb-4">
        <label for="email">Your email</label>
        <input id="email" 
               class="form-control" 
               name="email" 
               type="email" 
               placeholder="john.doe@example.com"
        />
      </div>

      <div class="form-group mb-4">
        <label for="password">Password</label>
        <input id="password" 
               class="form-control" 
               name="password" 
               type="password" 
               placeholder="Your password"
        />
      </div>

      <div class="form-group d-flex justify-content-between align-items-center mb-4">
        <div class="custom-control custom-checkbox">
          <input id="rememberMe" 
                 class="custom-control-input" 
                 name="rememberMe" 
                 type="checkbox"
          />
          <label class="custom-control-label" for="rememberMe">Remember me</label>
        </div>

        <a class="link-muted small" 
           href="recover_password"
        >
          Forgot Password?
        </a>
      </div>

      <button class="btn btn-primary btn-block" type="submit">Login</button>
    </form>

    <p class="small">
      Don't have an account? <a href="/signup">Sign Up here</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SigninForm'
}
</script>
