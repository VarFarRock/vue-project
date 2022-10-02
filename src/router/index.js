import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.vue'
import regist from '@/views/registration-form.vue'
import preloader from '@/views/preloader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/regist',
      name: 'redist',
      component: regist
    },
    {
      path: '/preloader',
      name: 'load',
      component: preloader,
    }
  ]
})

export default router
