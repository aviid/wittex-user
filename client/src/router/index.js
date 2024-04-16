import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Dash from '@/views/Dash.vue'
import Shipment from '@/views/Shipment.vue'
import Tracking from '@/views/Tracking.vue'
import Agent from '@/views/Agent.vue'
import Staff from '@/views/Staff.vue'
import Warehouse from '@/views/Warehouse.vue'
import Transaction from '@/views/Transaction.vue'
import Profile from '@/views/Profile.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import RecoverPassword from '@/views/RecoverPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/dash',
      name: 'Dash',
      component: Dash
    },
    {
      path: '/shipment',
      name: 'Shipment',
      component: Shipment
    },
    {
      path: '/tracking',
      name: 'Tracking',
      component: Tracking
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/warehouse',
      name: 'Warehouse',
      component: Warehouse
    },
    {
      path: '/trans',
      name: 'Transaction',
      component: Transaction
    },
    { 
      path: '/profile', 
      name: 'Profile', 
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/recover_password',
      name: 'RecoverPassword',
      component: RecoverPassword
    }
  ]
})

export default router
