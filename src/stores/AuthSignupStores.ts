// AuthSignin.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { showAlert } from '../function/FunctionAlert'
import apiClient from '../services/MainAPi'

// Interface for user data
interface UserData {
  firstName: string
  lastName: string
  email: string
  password: string
}

// Define Pinia store for managing user-related state
export const useAuthSignup = defineStore('user', () => {
  const router = useRouter()
  const dialog = ref<boolean | string>(false)
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const SuccessSignin = ref<string | null>(null)
  const currentUser = ref<UserData | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
  )

  /**
   * Function to perform user sign-in
   * @param inputData - Object containing user email and password
   */

  const signUp = async (inputData: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) => {
    try {
      SuccessSignin.value = null
      loading.value = true

      // Validate email and password
      if (!inputData.email || !inputData.password) {
        error.value = 'Email and Password are required fields'
        loading.value = false
        showAlert(error.value, 'error')
        return
      }

      // Call API endpoint for sign-in
      const { data } = await apiClient.post<{ data: UserData }>('/auth/signup', {
        firstName: inputData.firstName,
        lastName: inputData.lastName,
        email: inputData.email,
        password: inputData.password
      })

      error.value = null
      SuccessSignin.value = 'Signup successful!'

      // Save user data to local storage
      currentUser.value = data.data
      localStorage.setItem('user', JSON.stringify(data.data))

      console.log(data)
      dialog.value = false

      showAlert(SuccessSignin.value, 'success')

      // Navigate to '/home' page after successful sign-in
      setTimeout(async () => {
        await router.replace('/home')
        router.go(0)
      }, 1350)
    } catch (err: any) {
      console.error('Signup error:', err)

      // Handle sign-in errors
      if (err.response && err.response.status === 400) {
        error.value = 'Invalid email or password.'
      } else {
        error.value = 'Failed to signup. Please try again later.'
      }

      showAlert(error.value, 'error')
    } finally {
      loading.value = false
    }
  }

  return {
    error,
    currentUser,
    loading,
    dialog,
    SuccessSignin,
    signUp
  }
})
