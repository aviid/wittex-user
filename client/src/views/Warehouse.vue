<template>
  <div>
    <Layout page="warehouse">
      <div class="row">
        <WarehouseCard />
        <WarehouseDetails />
      </div>
    </Layout>
    <ShipmentModal />
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
import WarehouseCard from "@/components/warehouse/WarehouseCard.vue";
import WarehouseDetails from "@/components/warehouse/WarehouseDetails.vue";
import ShipmentModal from "@/components/warehouse/ShipmentModal.vue";

export default {
  components: {
    Layout,
    WarehouseCard,
    WarehouseDetails,
    ShipmentModal
  }
};
</script>

<style scoped>
/* Add your scoped CSS styles here */
</style>
