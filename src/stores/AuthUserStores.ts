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
      SuccessSignup.value = null
      loading.value = true

      // Call API endpoint for sign-in-basicinformation
      const { data } = await apiClient.post('/auth/signup/basicinformation', {
        firstName: inputData.firstName,
        lastName: inputData.lastName,
        email: inputData.email,
        password: inputData.password
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

      // Call API endpoint for sign-in-contactinformation
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

  const signUpprofilesetup = async (inputData: {
    avatarUser: string
    userName: string
    bio: string
  }) => {
    try {
      SuccessSignup.value = null
      loading.value = true

      // Call API endpoint for sign-in-profilesetup
      const { data } = await apiClient.post('/auth/signup/profilesetup', {
        avatarUser: inputData.avatarUser,
        userName: inputData.userName,
        bio: inputData.bio
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
      SuccessSignup.value = null
      loading.value = true

      // Call API endpoint for sign-in-securityquestion
      const { data } = await apiClient.post('/auth/signup/securityquestion', {
        securityQuestions: inputData.securityQuestions
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
      SuccessSignup.value = null
      loading.value = true

      // Call API endpoint for sign-in-authentication
      const { data } = await apiClient.post('/auth/signup/authentication', {
        verifyotp: inputData.verifyotp
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
