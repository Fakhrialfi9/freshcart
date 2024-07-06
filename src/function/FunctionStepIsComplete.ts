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
  answers,
  selectedMethod,
  message,
  authenticator
} from '../function/FunctionDataState'

// Start Function isStepCompleteBasicInformation
export function isStepCompleteBasicInformation(stepIndex: number): boolean {
  if (stepIndex === 0) {
    return !!(
      firstName.value &&
      lastName.value &&
      email.value &&
      password.value &&
      confirmPassword.value
    )
  }

  return false
}
// End Function isStepCompleteBasicInformation

// Start Function isStepCompleteContactInformation
export function isStepCompleteContactInformation(stepIndex: number): boolean {
  if (stepIndex === 0) {
    return !!(
      phoneNumber.value &&
      address.value &&
      city.value &&
      state.value &&
      country.value &&
      postalCode.value
    )
  }

  // Add more conditions for other steps as needed
  return false
}
// End Function isStepCompleteContactInformation

// Start Function isStepCompleteProfileSetup
export function isStepCompleteProfileSetup(stepIndex: number): boolean {
  if (stepIndex === 0) {
    return !!(profilePicture.value && userName.value && bio.value && textareaHeight.value)
  }
  return false
}
// End Function isStepCompleteProfileSetup

// Start Function isStepCompleteAuthentication
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
// End Function isStepCompleteAuthentication

// Start Function isStepCompleteQuestionSecurity
export function isStepCompleteQuestionSecurity(stepIndex: number): boolean {
  if (stepIndex === 0) {
    return answers.value.every((answer) => answer.question !== '' && answer.answer !== '')
  }

  return false
}
// End Function isStepCompleteQuestionSecurity
