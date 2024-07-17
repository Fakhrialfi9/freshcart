// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router'

// Import Auth Store
import { useAuthUserStores } from '../../stores/AuthUserStores'

import LazyLoadingComponents from '../../components/LazyLoadingComponents.vue'
import AboutView from '../../views/AboutView.vue'

// Start Import Router Create Account
import BasicInformation from '../../views/Section/CreateAccount/BasicInformationView.vue'
import ContactInformation from '../../views/Section/CreateAccount/ContactInformationView.vue'
import AuthenticationView from '../../views/Section/CreateAccount/AuthenticationView.vue'
import ProfileSetupView from '../../views/Section/CreateAccount/ProfileSetupView.vue'
import SecurityQuestionsView from '../../views/Section/CreateAccount/SecurityQuestionsView.vue'
import FinalConfirmationView from '../../views/Section/CreateAccount/FinalConfirmationView.vue'
import CreateAccountLayout from '../../main/Layout/CreateAccountLayout.vue'

// import Dashboard Router
import DetailAccountView from '../../views/Section/ProfileUser/DetailAccountView.vue'
import DashboardUserView from '../../views/Section/ProfileUser/DashboardUserView.vue'

// Start Import RouteView
import MainLayout from '../Layout/MainLayout.vue'
import HomeView from '../../views/HomeView.vue'
import WishlistView from '../../views/WishlistView.vue'
import BasketCartView from '../../views/BasketCartView.vue'
import DetailProductView from '../../views/DetailProductView.vue'
import ShoppingView from '../../views/ShoppingView.vue'
import SearchView from '../../views/SearchView.vue'
import UsersSigninView from '../../views/UsersSigninView.vue'
import UsersSignupView from '../../views/UsersSignupView.vue'
import NotFoundComponents from '../../components/404NotFoundComponents.vue'
import ProfileUserView from '../../views/ProfileUserView.vue'

const routes = [
  // Start Routes Lazyload
  {
    path: '/',
    name: 'lazyloading',
    component: LazyLoadingComponents
  },
  // End Routes Lazyload

  //   Start 404 Route - Catch all other routes
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundComponents
  },
  //   End 404 Route - Catch all other routes

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
        path: '/shopping',
        name: 'shopping',
        component: ShoppingView
      },

      // Start Dashboard User Routes Apps

      {
        path: '/profileuser/:userName',
        name: 'profileuser',
        component: ProfileUserView,
        meta: { requiresAuth: true },
        children: [
          {
            path: '/profileuser/:userName/detailaccount',
            name: 'detailaccount',
            component: DetailAccountView,
            meta: { requiresAuth: true }
          },
          {
            path: '/profileuser/:userName/dashboarduser',
            name: 'dashboarduser',
            component: DashboardUserView,
            meta: { requiresAuth: true }
          }
        ]
      },

      // End Dashboard User Routes Apps

      {
        path: '/shopping/:id',
        name: 'detailproduct',
        component: DetailProductView
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
    component: UsersSigninView
  },

  {
    path: '/signup',
    name: 'signup',
    component: UsersSignupView
  },

  {
    path: '/createaccount',
    name: 'createaccount',
    component: CreateAccountLayout,
    children: [
      {
        path: '/createaccount/basicinformation',
        name: 'basicinformation',
        component: BasicInformation
      },
      {
        path: '/createaccount/contactinformation',
        name: 'contactinformation',
        component: ContactInformation
      },
      {
        path: '/createaccount/securityquestions',
        name: 'securityquestions',
        component: SecurityQuestionsView
      },

      {
        path: '/createaccount/profilesetup',
        name: 'profilesetup',
        component: ProfileSetupView
      },

      {
        path: '/createaccount/authentication',
        name: 'authentication',
        component: AuthenticationView
      },

      {
        path: '/createaccount/finalconfirmation',
        name: 'finalconfirmation',
        component: FinalConfirmationView
      }
    ]
  }
  // Start Routes Login Logic User
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ left: 0, top: 0 })
        }
      }, 500)
    })
  }
})

router.beforeEach(async (to, from) => {
  const authSignin = await useAuthUserStores()
  if (to.meta.requiresAuth && !authSignin.currentUser) {
    alert('This page requires sign in')
    return {
      path: '/signin'
    }
  }
})

export default router
