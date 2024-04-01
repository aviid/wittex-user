<template>
  <div class="col-sm-6 col-xl-3 mb-4">
    <div class="card">
      <div class="card-body media align-items-center px-xl-3">
        <div class="u-doughnut u-doughnut--70 mr-3 mr-xl-2">
          <div class="u-doughnut__label text-info"><i class="fa fa-box"></i></div>
        </div>

        <div class="media-body">
          <h5 class="h6 text-muted text-uppercase mb-2">
            {{ label }} <i class="fa fa-arrow-up text-success ml-1"></i>
          </h5>
          <span class="h2 mb-0">{{ formatAmount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Doughnut",
  props: {
    label: String,
    amount: Number
  },
  computed: {
    formatAmount() {
      return new Intl.NumberFormat().format(this.amount);
    }
  }
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
