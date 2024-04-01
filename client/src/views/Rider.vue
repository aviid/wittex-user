<template>
  <Layout page="rider">
    <div class="row">
      <RiderCard />
      <RiderDetails />
    </div>
  </Layout>
  <RiderModal />
</template>

<script>
import Layout from "../components/Layout.vue";
import RiderCard from "../components/rider/RiderCard.vue";
import RiderDetails from "../components/rider/RiderDetails.vue";
import RiderModal from "../components/rider/RiderModal.vue";

export default {
  components: {
    Layout,
    RiderCard,
    RiderDetails,
    RiderModal,
  },
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
