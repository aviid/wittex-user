<template>
  <div class="mb-4">
    <div class="card h-100">
      <header class="card-header d-flex align-items-center">
        <h2 class="h3 card-header-title">Change Password Details</h2>
      </header>

      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <form>
              <input class="form-control mb-3" type="password" placeholder="Current Password" />
              <input class="form-control mb-3" type="password" placeholder="New Password" />
              <input class="form-control mb-3" type="password" placeholder="Confirm Password" />

              <button class="btn btn-primary">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordCard'
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
