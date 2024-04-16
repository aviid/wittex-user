<template>
  <div>
    <Layout page="shipment">
      <div class="row">
        <DetailCard />
        <OutCard />
        
      </div>
    </Layout>
    <DetailModal />
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
import DetailCard from "@/components/shipments/DetailCard.vue";
import DetailModal from "@/components/shipments/DetailModal.vue";
import OutCard from "@/components/shipments/OutCard.vue";

export default {
  name: "Shipment",
  components: {
    Layout,
    DetailCard,
    DetailModal,
    OutCard
  }
};
</script>

