<template>
  <Layout :page="'tracking'">
    <div class="row">
      <TrackingCard />
      <TrackDetails />
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import TrackingCard from "../components/tracking/TrackingCard.vue";
import TrackDetails from "../components/tracking/TrackDetails.vue";

export default {
    name:"Tracking",
  components: {
    Layout,
    TrackingCard,
    TrackDetails
  }
};
</script>

