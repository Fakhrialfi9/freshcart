// import {
//   firstName,
//   lastName,
//   email,
//   password,
//   confirmPassword,
//   phoneNumber,
//   address,
//   city,
//   state,
//   country,
//   postalCode,
//   profilePicture,
//   userName,
//   bio,
//   textareaHeight,
//   answers
// } from '../function/FunctionDataState'

// // Start Function isStepCompleteBasicInformation
// export function isStepCompleteBasicInformation(stepIndex: number): boolean {
//   if (stepIndex === 0) {
//     return !!(
//       firstName.value &&
//       lastName.value &&
//       email.value &&
//       password.value &&
//       confirmPassword.value
//     )
//   }
//   return false
// }
// // End Function isStepCompleteBasicInformation

// // Start Function isStepCompleteContactInformation
// export function isStepCompleteContactInformation(stepIndex: number): boolean {
//   if (stepIndex === 0) {
//     return !!(
//       phoneNumber.value &&
//       address.value &&
//       city.value &&
//       state.value &&
//       country.value &&
//       postalCode.value
//     )
//   }

//   // Add more conditions for other steps as needed
//   return false
// }
// // End Function isStepCompleteContactInformation

// // Start Function isStepCompleteProfileSetup
// export function isStepCompleteProfileSetup(stepIndex: number): boolean {
//   if (stepIndex === 0) {
//     return !!(profilePicture.value && userName.value && bio.value && textareaHeight.value)
//   }
//   return false
// }
// // End Function isStepCompleteProfileSetup

// // Start Function isStepCompleteAuthentication

// // End Function isStepCompleteAuthentication

// // Start Function isStepCompleteQuestionSecurity
// export function isStepCompleteQuestionSecurity(stepIndex: number): boolean {
//   if (stepIndex === 0) {
//     return answers.value.every((answer) => answer.question !== '' && answer.answer !== '')
//   }

//   return false
// }
// // End Function isStepCompleteQuestionSecurity
