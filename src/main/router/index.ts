// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Start Import Lazyload
import LazyLoading from '../../components/LazyLoading.vue'
// End Import Lazyload

// Start Import RouteView
import MainLayout from '../Layout/MainLayout.vue'
import HomeView from '../../views/HomeView.vue'
import UsersSigninView from '../../views/UsersSigninView.vue'
import WishlistView from '../../views/WishlistView.vue'
import SingleProductView from '../../views/SingleProductView.vue'
import AboutView from '../../views/AboutView.vue'
// End Import RouteView

const routes = [
  {
    path: '/',
    name: 'LazyLoading',
    component: LazyLoading
  },

  {
    path: '/home',
    component: MainLayout,
    name: 'MainLayout',
    redirect: '/home',
    children: [
      // Start Routes Tampilan Awal
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      // End Routes Tampilan Awal

      {
        path: '/about',
        name: 'about',
        component: AboutView
      },

      // Start Routes Wishlist Page
      {
        path: '/wishlist',
        name: 'wishlist',
        component: WishlistView
      },
      // End Routes Wishlist Page

      // Start Routes Wishlist Page
      {
        path: '/detailproduct/:id',
        name: 'singleproduct',
        component: SingleProductView
      }
      // End Routes Wishlist Page
    ]
  },

  {
    path: '/login',
    redirect: '/login',
    children: [
      // Start Routes Users Page
      {
        path: '/signin',
        name: 'users',
        component: UsersSigninView
      }
      // End Routes Users Page
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
