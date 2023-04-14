import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductView from '@/views/ProductView.vue'
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
      name: 'products',
      path: '/products',
      component: ProductView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return desired position
    // Here to and from is same as navigation guards
    // always scroll to top
    return { top: 0 }
  }
})

export default router
