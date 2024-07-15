import router from '@/main/router/github'
import { dataSteps } from './FunctionDataNavigationStep'
import { showAlert } from './FunctionAlert'
import {
  email,
  answers,
  selectedMethod,
  message,
  authenticator
} from '../function/FunctionDataState'

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

export const isStepCompleteAuthentication = (stepIndex: number): boolean => {
  switch (stepIndex) {
    case 0:
      // Basic Information step validation
      return !!email.value
    case 1:
      // Contact Information step validation
      return !!(selectedMethod.value !== '' && message.value)
    case 2:
      // Profile Setup step validation
      return !!email.value
    case 3:
      // Two-Factor Authentication step validation
      if (selectedMethod.value === 'sms' && message.value) return true
      if (selectedMethod.value === 'email' && email.value) return true
      if (selectedMethod.value === 'app' && authenticator.value) return true
      return false
    // Add more cases for additional steps as needed
    default:
      return false
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
