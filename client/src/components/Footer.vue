<template>
  <footer class="u-footer d-md-flex align-items-md-center text-center text-md-left text-muted text-muted">
    <p class="h5 mb-2 mb-md-0">More Apps on 
      <a class="link-muted p-1" href="https://aviidtechy.com/" target="_blank">AviidTechy</a>
    </p>

    <p class="h5 mb-0 pl-1 ml-auto">&copy; {{ currentYear }}
      <a class="link-muted p-1" href="https://aviidtechy.com/" target="_blank">AviidTechy.</a>
      All Rights Reserved.
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

