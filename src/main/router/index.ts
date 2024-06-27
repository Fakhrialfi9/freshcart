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
    path: 'freshcart/home',
    component: MainLayout,
    name: 'MainLayout',
    redirect: 'freshcart/home',
    children: [
      // Start Routes Tampilan Awal
      {
        path: 'freshcart/home',
        name: 'home',
        component: HomeView
      },
      // End Routes Tampilan Awal

      {
        path: 'freshcart/about',
        name: 'about',
        component: AboutView
      },

      // Start Routes Wishlist Page
      {
        path: 'freshcart/wishlist',
        name: 'wishlist',
        component: WishlistView
      },
      // End Routes Wishlist Page

      // Start Routes Wishlist Page
      {
        path: 'freshcart/detailproduct/:id',
        name: 'singleproduct',
        component: SingleProductView
      }
      // End Routes Wishlist Page
    ]
  },

  {
    path: 'freshcart/login',
    redirect: '/login',
    children: [
      // Start Routes Users Page
      {
        path: 'freshcart/signin',
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
