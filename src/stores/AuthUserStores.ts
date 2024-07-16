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
  phoneNumber: string
  address: string
  city: string
  state: string
  country: string
  postalCode: string
  avatarUser: string
  userName: string
  bio: string
  securityQuestions: { question: string; answer: string }[]
  verifyotp: string
}

// Define Pinia store for managing user-related state
export const useAuthUserStores = defineStore('user', () => {
  const router = useRouter()
  const dialog = ref<boolean | string>(false)
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)
  const SuccessSignup = ref<string | null>(null)
  const SuccessSignin = ref<string | null>(null)
  const SuccessSignout = ref<string | null>(null)
  const user = ref<UserData | null>(null)
  const currentUser = ref<UserData | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
  )

  /**
   * Handle user signup with basicinformation
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                         SIGNUP PROCESS - BATCH  1                            |
  // |                                                                              |
  // |------------------------------------------------------------------------------|
  /**
   * Function to perform user sign-in
   * @param inputData - Object containing user email and password
   */

  const signUpbasicinformation = async (inputData: {
    firstName: string
    lastName: string
    email: string
    password: string
  }) => {
    try {
      loading.value = true
      error.value = null

      const { data } = await apiClient.post('/auth/signup/basicinformation', {
        firstName: inputData.firstName,
        lastName: inputData.lastName,
        email: inputData.email,
        password: inputData.password
      })

      // Handling success
      currentUser.value = data.data
      localStorage.setItem('user', JSON.stringify(data.data))
      SuccessSignup.value = 'Signup successful!'
      showAlert(SuccessSignup.value, 'success')

      return data
    } catch (err: any) {
      console.error('Signup error:', err)

      // Handling errors
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.message === 'Email already exists'
      ) {
        error.value = 'Email already exists. Please use a different email address.'
      } else {
        error.value = 'Failed to signup. Please try again later.'
      }

      showAlert(error.value, 'error')
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Handle user signup with contactinformation
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                         SIGNUP PROCESS - BATCH  2                            |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  /**
   * Function to perform user sign-in
   * @param inputData - Object containing user email and password
   */

  const signUpcontactinformation = async (inputData: {
    phoneNumber: string
    address: string
    city: string
    state: string
    country: string
    postalCode: string
  }) => {
    try {
      SuccessSignup.value = null
      loading.value = true

      // Call API endpoint for contact information sign-up
      const { data } = await apiClient.post('/auth/signup/contactinformation', {
        phoneNumber: inputData.phoneNumber,
        address: inputData.address,
        city: inputData.city,
        state: inputData.state,
        country: inputData.country,
        postalCode: inputData.postalCode
      })

      error.value = null
      SuccessSignup.value = 'Signup successful!'

      // Save user data to local storage
      currentUser.value = data.data
      localStorage.setItem('user', JSON.stringify(data.data))

      console.log(data)
      dialog.value = false

      showAlert(SuccessSignup.value, 'success')
    } catch (err: any) {
      console.error('Signup error:', err)

      // Handling errors
      if (err.response && err.response.status === 400) {
        if (err.response.data.message === 'Invalid phone number') {
          error.value = 'Invalid phone number. Please enter a valid phone number.'
        } else if (err.response.data.message === 'Address already exists') {
          error.value = 'Address already exists. Please use a different address.'
        } else {
          error.value = 'Failed to signup. Please try again later.'
        }
      } else {
        error.value = 'Failed to signup. Please try again later.'
      }

      showAlert(error.value, 'error')
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Handle user signup with profilesetup
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                         SIGNUP PROCESS - BATCH  3                            |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  /**
   * Function to perform user sign-in
   * @param inputData - Object containing user email and password
   */

  const signUpprofilesetup = async (formData: FormData) => {
    try {
      const { data } = await apiClient.post('/auth/signup/profilesetup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      // Handle success
      currentUser.value = data.data
      localStorage.setItem('user', JSON.stringify(data.data))
      SuccessSignup.value = 'Signup successful!'
      showAlert(SuccessSignup.value, 'success')

      return data
    } catch (err: any) {
      console.error('Signup error:', err)

      // Handle errors during sign-up
      if (err.response && err.response.status === 400) {
        if (err.response.data.message === 'Username already exists') {
          throw new Error('Username already exists')
        } else {
          throw new Error('Failed to signup. Please try again later.')
        }
      } else {
        throw new Error('Failed to signup. Please try again later.')
      }
    }
  }

  /**
   * Handle user signup with authentication
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                         SIGNUP PROCESS - BATCH  4                            |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  /**
   * Function to perform user sign-up
   * @param inputData - Object containing user security question
   */

  const signUpsecurityquestion = async (inputData: {
    securityQuestions: { question: string; answer: string }[]
  }) => {
    try {
      loading.value = true
      error.value = null

      // Validate input data
      if (!inputData.securityQuestions || inputData.securityQuestions.length === 0) {
        throw new Error(
          'Invalid security questions. Please provide valid security questions and answers.'
        )
      }

      // Call API endpoint for security questions
      const { data } = await apiClient.post('/auth/signup/securityquestion', {
        securityQuestions: inputData.securityQuestions
      })

      // Handling success
      currentUser.value = data.data
      localStorage.setItem('user', JSON.stringify(data.data))
      SuccessSignup.value = 'Signup successful!'
      showAlert(SuccessSignup.value, 'success')

      return data
    } catch (err: any) {
      console.error('Signup error:', err)

      // Handling errors
      switch (err.response?.status) {
        case 400:
          if (err.response.data.message === 'Invalid security questions') {
            error.value =
              'Invalid security questions. Please provide valid security questions and answers.'
          } else if (err.response.data.message === 'Security questions already exist') {
            error.value =
              'Security questions already exist. Please provide different security questions.'
          } else {
            error.value = 'Failed to signup. Please try again later.'
          }
          break
        default:
          error.value = 'Failed to signup. Please try again later.'
          break
      }

      showAlert(error.value, 'error')
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Handle user signup with securityquestion
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                         SIGNUP PROCESS - BATCH  5                            |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  /**
   * Function to perform user sign-in
   * @param inputData - Object containing authentication
   */

  const signUpauthentication = async (inputData: { verifyotp: string }) => {
    try {
      loading.value = true
      error.value = null

      // Call API endpoint for authentication
      const { data } = await apiClient.post('/auth/signup/authentication', {
        verifyotp: inputData.verifyotp
      })

      // Handling success
      currentUser.value = data.data
      localStorage.setItem('user', JSON.stringify(data.data))
      SuccessSignup.value = 'Signup successful!'
      showAlert(SuccessSignup.value, 'success')

      return data
    } catch (err: any) {
      console.error('Signup error:', err)

      // Handling errors
      if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.message === 'Invalid OTP'
      ) {
        error.value = 'Invalid OTP. Please enter the correct OTP sent to your email.'
      } else if (
        err.response &&
        err.response.status === 400 &&
        err.response.data.message === 'OTP expired'
      ) {
        error.value = 'OTP expired. Please request a new OTP.'
      } else {
        error.value = 'Failed to signup. Please try again later.'
      }

      showAlert(error.value, 'error')
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Handle user signin
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                                SIGNIN PROCESS                                |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  /**
   * Function to perform user sign-in
   * @param inputData - Object containing user email and password
   */

  const signIn = async (inputData: { email: string; password: string }) => {
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
      const { data } = await apiClient.post<{ data: UserData }>('/auth/signin', {
        email: inputData.email,
        password: inputData.password
      })

      error.value = null
      SuccessSignin.value = 'Signin successful!'

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
      console.error('Signin error:', err)

      // Handle sign-in errors
      if (err.response && err.response.status === 400) {
        error.value = 'Invalid email or password.'
      } else {
        error.value = 'Failed to sign in. Please try again later.'
      }

      showAlert(error.value, 'error')
    } finally {
      loading.value = false
    }
  }

  /**
   * Handle user signout
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                                SIGNOUT PROCESS                               |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  const signOut = async () => {
    try {
      // Call API endpoint for sign-out
      await apiClient.get('/auth/signout')

      // Remove all data from local storage
      localStorage.removeItem('user')

      // Set currentUser to null
      currentUser.value = null

      SuccessSignout.value = 'Sign out successful!'
      showAlert(SuccessSignout.value, 'success')

      // Navigate to '/home' page after successful sign-out
      setTimeout(async () => {
        await router.replace('/home')
        router.go(0)
      }, 1350)
    } catch (error) {
      console.error('Sign out error:', error)
      showAlert('Failed to sign out. Please try again later.', 'error')
    }
  }

  /**
   * Handle user getuser
   **/
  // |------------------------------------------------------------------------------|
  // |                                                                              |
  // |                                GETUSER PROCESS                               |
  // |                                                                              |
  // |------------------------------------------------------------------------------|

  const getUser = async () => {
    const { data } = await apiClient.get('/auth/getuser')
    console.log(data)
    user.value = data.user
  }

  return {
    error,
    currentUser,
    loading,
    SuccessSignin,
    SuccessSignout,
    SuccessSignup,
    dialog,
    signUpbasicinformation,
    signUpcontactinformation,
    signUpprofilesetup,
    signUpsecurityquestion,
    signUpauthentication,
    signIn,
    signOut,
    getUser
  }
})
