<template>
  <AuthLayout>
    <Logo />
    <SignupForm />
    <SignupFooter />
  </AuthLayout>
</template>

<script>
// Import child components
import AuthLayout from '../components/auth/AuthLayout.vue'
import Logo from '../components/signin/Logo.vue'
import SignupFooter from '../components/signup/SignupFooter.vue'
import SignupForm from '../components/signup/SignupForm.vue'

export default {
  components: {
    AuthLayout,
    Logo,
    SignupFooter,
    SignupForm
  }
}
</script>
