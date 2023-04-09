import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MilkView from '@/views/MilkView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView,
    },
    {
      name: 'register',
      path: '/register',
      component: RegistrationView,
    },
    {
      name: 'milk',
      path: '/milk',
      component: MilkView,
    },
  ]
})

export default router
