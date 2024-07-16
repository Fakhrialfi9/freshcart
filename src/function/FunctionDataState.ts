import { reactive } from 'vue'

export const inputData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

export const DataSignup = () => {
  inputData.firstName = ''
  inputData.lastName = ''
  inputData.email = ''
  inputData.password = ''
  inputData.confirmPassword = ''
}
