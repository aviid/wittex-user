<template>
  <div>
    <Layout page="profile">
      <div class="row">
        <ProfileCard />
        <div class="col-md-5">
          <SubCard />
          <PasswordCard />
        </div>
      </div>  
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue'
import ProfileCard from '@/components/profile/ProfileCard.vue'
import PasswordCard from '@/components/profile/PasswordCard.vue'
import SubCard from '@/components/profile/SubCard.vue'

export default {
    name: 'Profile',
    components: {
        Layout,
        ProfileCard,
        PasswordCard,
        SubCard
    }
}
</script>

<style scoped>
/* Add any scoped styles here */
</style>
