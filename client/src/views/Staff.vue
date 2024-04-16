<template>
  <Layout page="staff">
    <div class="row">
      <StaffCard />
      <StaffDetail />
    </div>
  </Layout>
  <StaffModal />
</template>

<script>
    import Layout from "@/components/Layout.vue"
    import StaffCard from "@/components/staff/StaffCard.vue"
    import StaffDetail from "@/components/staff/StaffDetail.vue"
    import StaffModal from "@/components/staff/StaffModal.vue"

    export default {
        components:{
            Layout,
            StaffCard,
            StaffDetail,
            StaffModal,
        }
    }

</script>