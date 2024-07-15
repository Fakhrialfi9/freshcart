// AuthGetUser.ts

import { ref } from 'vue'
import apiClient from '../services/MainAPi'

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
  role: string
}
export const user = ref<UserData | null>(null)

export const getUser = async () => {
  const { data } = await apiClient.get('/auth/getuser')
  console.log(data)
  user.value = data.user
}
