// OtpServices.ts

import axios from 'axios'

// Fungsi untuk mengirim OTP via SMS
export async function sendOtpByMessage(phoneNumber: string, otp: string) {
  try {
    // Debug: Log request payload
    console.log('Sending OTP via SMS:', { phoneNumber, otp })

    const response = await axios.post('/api/v1/auth/phonenumber/otp', {
      phoneNumber,
      otp
    })
    return response.data
  } catch (error) {
    console.error('Error sending OTP via SMS:', error)
    throw error
  }
}

// Fungsi untuk mengirim OTP via email
export async function sendOtpByEmail(email: string, otp: string) {
  try {
    // Debug: Log request payload
    console.log('Sending OTP via Email:')

    const response = await axios.post('/api/v1/auth/email/otp', {
      email,
      otp
    })
    return response.data
  } catch (error) {
    console.error('Error sending OTP via Email:', error)
    throw error
  }
}

// Fungsi untuk verify OTP via email
export async function verifyOtpByEmail(email: string, otp: string) {
  try {
    // Debug: Log request payload
    console.log('Verifying OTP:')

    const response = await axios.get('/api/v1/auth/verify/otp', {
      params: {
        email,
        otp
      }
    })
    return response.data
  } catch (error) {
    console.error('Error verifying OTP:', error)
    throw error
  }
}
