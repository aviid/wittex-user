<template>
  <main class="container-fluid w-100 card" role="main">
    <div class="row">
      <div class="d-flex flex-column 
                  justify-content-center 
                  align-items-center bg-white 
                  mnh-100vh mx-auto my-auto p-5">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
