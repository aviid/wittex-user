<template>
  <AuthLayout>
    <Logo />
    <SigninForm />
    <SigninFooter />
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/auth/AuthLayout.vue'
import SigninFooter from '@/components/signin/SigninFooter.vue'
import SigninForm from '@/components/signin/SigninForm.vue'
import Logo from '@/components/signin/Logo.vue'

export default {
    name:"Signin",
    components: {
        AuthLayout,
        SigninForm,
        SigninFooter,
        Logo
    }
}
</script>
