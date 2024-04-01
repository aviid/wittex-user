<template>
  <Layout page="trans">
    <div class="row">
      <TransCard />

      <div class="col-md-3">
        <Doughnut label="Total Shipment" :amount="23000" />
        <Doughnut label="Total Amount" :amount="23040" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import TransCard from "@/components/trans/TransCard.vue";
import Doughnut from '@/components/trans/Doughnut.vue';

export default {
    name:"Transaction",
    components: {
        Layout,
        TransCard,
        Doughnut
    }
};
</script>