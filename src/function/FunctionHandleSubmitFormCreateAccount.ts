import router from '@/main/router/github'
import { dataSteps } from './FunctionDataNavigationStep'
import { isStepCompleteAuthentication } from '../function/FunctionStepIsComplete'
import { showAlert } from './FunctionAlert'
import {
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  phoneNumber,
  address,
  city,
  state,
  country,
  postalCode,
  profilePicture,
  userName,
  bio,
  textareaHeight,
  answers
} from '../function/FunctionDataState'
import { validatePassword } from '../function/FunctionPasswordValidate'

// Handle Submit Form Basic Information
export const handleSubmitBasicInformation = () => {
  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    validatePassword(password.value) &&
    password.value === confirmPassword.value
  ) {
    router.push('/createaccount/contactinformation')
  } else {
    showAlert('Please fill in all required fields or check password requirements.', 'error')
  }
}

// Handle Submit Form Contact Information
export const handleSubmitContactInformation = () => {
  if (
    phoneNumber.value &&
    address.value &&
    city.value &&
    state.value &&
    country.value &&
    postalCode.value
  ) {
    router.push('/createaccount/profilesetup')
  } else {
    showAlert('Please fill in all required fields.', 'error')
  }
}

// Handle Submit Form Profile Setup
export const handleSubmitProfileSetup = () => {
  if (profilePicture.value && userName.value && bio.value && textareaHeight.value) {
    router.push('/createaccount/authentication')
  } else {
    showAlert('Please fill in all required fields.', 'error')
  }
}
// Handle File Change
export const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    profilePicture.value = input.files[0]
  }
}
// Handle Submit Form Authentication

export const handleSubmitAuthentication = () => {
  if (isStepCompleteAuthentication(dataSteps.value.currentStep)) {
    const nextRoute =
      dataSteps.value.Steps[dataSteps.value.currentStep + 1]?.route ||
      '/createaccount/securityquestions'
    router.push(nextRoute)
  } else {
    alert('Please fill in all required fields.')
  }
}
// Handle Submit Form Question Security
export const handleSubmitQuestionSecurity = () => {
  if (answers.value) {
    router.push('/createaccount/finalconfirmation')
  } else {
    showAlert('Please fill in all required fields.', 'error')
  }
}
