// src/router/github.ts

// Menggunakan Router Hash Mengatasi 404 Github
import { createRouter, createWebHashHistory } from 'vue-router'
import LazyLoading from '../../components/LazyLoadingComponents.vue'
import AboutView from '../../views/AboutView.vue'

// Start Auth Users
import AuthUsers from '../../stores/AuthUsers'
// End Auth Users

// Start Import RouteView
import MainLayout from '../Layout/MainLayout.vue'
import HomeView from '../../views/HomeView.vue'
import WishlistView from '../../views/WishlistView.vue'
import BasketCartView from '../../views/BasketCartView.vue'
import DetailProductView from '../../views/DetailProductView.vue'
import ShoppingView from '../../views/ShoppingView.vue'
import UsersSigninView from '../../views/UsersSigninView.vue'
import SearchView from '../../views/SearchView.vue'
// End Import RouteView

const routes = [
  // Start Routes Lazyload
  {
    path: '/',
    name: 'lazyloading',
    component: LazyLoading
  },
  // End Routes Lazyload

  // Start All Public Routes Apps
  {
    path: '/',
    name: 'mainlayout',
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
        component: WishlistView,
        meta: { requiresAuth: true }
      },

      {
        path: '/basketcart',
        name: 'basketcart',
        component: BasketCartView,
        meta: { requiresAuth: true }
      },

      {
        path: '/shopping/:id',
        name: 'detailproduct',
        component: DetailProductView
      },

      {
        path: '/shopping/',
        name: 'shopping',
        component: ShoppingView
      },

      {
        path: '/search/',
        name: 'search',
        component: SearchView
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !AuthUsers.state.isAuthenticated) {
    // Jika rute memerlukan login dan pengguna belum login, redirect ke halaman sign-in
    next('/signin')
  } else {
    next()
  }
})

export default router
