<template>
  <div>
    <Layout page="dashboard">
      <div class="row">
        <Doughnut label="Total Shipment" :amount="23000" />
        <Doughnut label="Total Amount" :amount="490000" />
        <Doughnut label="Delivered" :amount="34" />
        <Doughnut label="Warehouse" :amount="29" />
      </div>
      <div class="row">
        <DashShipmentCard />
        <DashBatchCard />
      </div>
    </Layout>
    <OutModal />
    <AddBatchModal />
    <ViewBatchModal />
    <DetailModal />
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';
import Doughnut from '@/components/dashboard/Doughnut.vue';
import DashShipmentCard from '@/components/dashboard/DashShipmentCard.vue';
import DashBatchCard from '@/components/dashboard/DashBatchCard.vue';
import OutModal from '@/components/dashboard/OutModal.vue';
import AddBatchModal from '@/components/dashboard/AddBatchModal.vue';
import ViewBatchModal from '@/components/dashboard/ViewBatchModal.vue';
import DetailModal from '@/components/shipments/DetailModal.vue';

export default {
  components: {
    Layout,
    Doughnut,
    DashShipmentCard,
    DashBatchCard,
    OutModal,
    AddBatchModal,
    ViewBatchModal,
    DetailModal,
  },

  name:"Dash"
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
