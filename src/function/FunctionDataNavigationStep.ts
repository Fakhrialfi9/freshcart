import { ref } from 'vue'

export const dataSteps = ref({
  Steps: [
    {
      title: 'Basic Information',
      description: 'Name, email, create password',
      route: '/createaccount/basicinformation'
    },
    {
      title: 'Contact Information',
      description: 'Phone number, address, postal code',
      route: '/createaccount/contactinformation'
    },
    {
      title: 'Profile Setup',
      description: 'Upload picture, set display name',
      route: '/createaccount/profilesetup'
    },
    {
      title: 'Security Questions',
      description: 'Answer security questions',
      route: '/createaccount/securityquestions'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Setup 2FA: SMS, email, app',
      route: '/createaccount/authentication'
    },

    {
      title: 'Final Confirmation',
      description: 'Confirmation message, redirect to login',
      route: '/createaccount/finalconfirmation'
    }
  ],
  currentStep: 3,
  activeStep: '#0aad0a',
  passiveStep: '#f0f3f2'
})

export const data = ref(dataSteps)
