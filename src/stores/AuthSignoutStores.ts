// AuthSignOut.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import apiClient from '../services/MainAPi'
import { useRouter } from 'vue-router'
import { showAlert } from '../function/FunctionAlert'

interface UserData {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  avatarUser: string
  userName: string
  bio: string
  role: string
}

export const useAuthSignout = defineStore('user', () => {
  const router = useRouter()
  const SuccessSignout = ref<string | null>(null)
  const currentUser = ref<UserData | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
  )

  /**
   * Fungsi untuk melakukan sign-out
   */

  const signOut = async () => {
    try {
      // Call signout API endpoint
      await apiClient.get('/auth/signout')

      // Remove all data from localStorage
      localStorage.removeItem('user')

      // Set currentUser to null
      currentUser.value = null

      SuccessSignout.value = 'Sign out successful!'
      showAlert(SuccessSignout.value, 'success')

      setTimeout(async () => {
        // Navigate to the home page after sign-out
        await router.push('/home')
        router.go(0)
      }, 1350)
    } catch (error) {
      console.error('Sign out error:', error)
      showAlert('Failed to sign out. Please try again later.', 'error')
    }
  }

  return {
    currentUser,
    SuccessSignout,
    signOut
  }
})
