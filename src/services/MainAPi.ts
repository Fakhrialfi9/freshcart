// src/services/MainAPi.js

import axios, { type AxiosInstance } from 'axios'

// Create an instance of axios with a custom config
const apiClient: AxiosInstance = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
