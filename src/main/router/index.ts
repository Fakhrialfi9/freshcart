// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Start Import RouteView
import MainLayout from '../Layout/MainLayout.vue'
import HomeView from '../../views/HomeView.vue'
import AboutView from '../../views/AboutView.vue'
// End Import RouteView

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      // Start Routes Tampilan Awal
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      // End Routes Tampilan Awal

      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
