import router from '@/main/router/github'
import { useAuthUserStores } from '../stores/AuthUserStores'
import { validatePassword } from '../function/FunctionPasswordValidate'
import { inputData, DataSignup } from '../function/FunctionDataState'
import { showAlert } from './FunctionAlert'

const authSignin = useAuthUserStores()
const { signUpbasicinformation } = authSignin

// Handle Submit Form Basic Information
export const handleSubmitBasicInformation = async () => {
  if (!validatePassword(inputData.password)) {
    showAlert('Password does not meet the requirements.', 'error')
    return
  }

  if (inputData.password !== inputData.confirmPassword) {
    showAlert('Passwords do not match.', 'error')
    return
  }

  try {
    await signUpbasicinformation({
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      email: inputData.email,
      password: inputData.password
    })

    DataSignup()

    setTimeout(() => {
      router.push('/createaccount/contactinformation')
    }, 1500)
  } catch (error: any) {
    console.error('Signup error:', error)

    // Handling errors
    if (
      error.response &&
      error.response.status === 400 &&
      error.response.data.message === 'Email already exists'
    ) {
      showAlert('Email already exists. Please use a different email address.', 'error')
    } else {
      showAlert('Sign-up failed. Please try again later.', 'error')
    }
  }
}
