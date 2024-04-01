<template>
  <AuthLayout>
    <Logo />
    <RecoverForm />
    <RecoverFooter />
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/auth/AuthLayout.vue'
import RecoverFooter from '@/components/passwordRecover/RecoverFooter.vue'
import RecoverForm from '@/components/passwordRecover/RecoverForm.vue'
import Logo from '@/components/signin/Logo.vue'

export default {
    name:"RecoverPassword",
    components: {
        AuthLayout,
        RecoverForm,
        RecoverFooter,
        Logo
    }
}
</script>