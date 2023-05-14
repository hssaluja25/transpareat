import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductView from '@/views/ProductView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import SuccessView from '@/views/SuccessView.vue'
import SupportView from '@/views/SupportView.vue'
import TrackView from '@/views/TrackView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'about',
      path: '/about',
      component: AboutView,
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
    {
      name: 'success',
      path: '/success',
      component: SuccessView,
    },
    {
      name: 'track',
      path: '/track',
      component: TrackView,
    },
    {
      name: 'cart',
      path: '/cart',
      component: CartView,
    },
    {
      name: 'support',
      path: '/support',
      component: SupportView,
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
