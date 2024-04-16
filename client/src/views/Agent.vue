<template>
  <Layout page="agent">
    <div class="row">
      <AgentCard />
      <AgentDetails />
    </div>
  </Layout>
  <AgentModal />
</template>

<script>
import Layout from "../components/Layout.vue";
import AgentCard from "../components/agent/AgentCard.vue";
import AgentDetails from "../components/agent/AgentDetails.vue";
import AgentModal from "../components/agent/AgentModal.vue";

export default {
  components: {
    Layout,
    AgentCard,
    AgentDetails,
    AgentModal,
  },
};
</script>

<style scoped>
/* Your component's styles go here */
</style>
