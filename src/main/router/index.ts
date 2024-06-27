// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Start Import RouteView
import MainLayout from '../Layout/MainLayout.vue'
import HomeView from '../../views/HomeView.vue'
import UsersSigninView from '../../views/UsersSigninView.vue'
import WishlistView from '../../views/WishlistView.vue'
import DetailProductView from '../../views/DetailProductView.vue'
import AboutView from '../../views/AboutView.vue'
// End Import RouteView

const routes = [
  // Start Routes Tampilan Awal
  {
    path: '/',
    name: 'initialview',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'homepage',
        component: HomeView
      }
    ]
  },
  // End Routes Tampilan Awal

  // Start All Public Routes Apps
  {
    path: '/home',
    name: 'mainLayout',
    component: MainLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },

      {
        path: '/wishlist',
        name: 'wishlist',
        component: WishlistView
      },

      {
        path: '/detailproduct/:id',
        name: 'singleproduct',
        component: DetailProductView
      }
    ]
  },
  // End All Public Routes Apps

  // Start Routes Login Logic User
  {
    path: '/signin',
    name: 'signin',
    component: UsersSigninView,
    children: []
  }
  // Start Routes Login Logic User
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
