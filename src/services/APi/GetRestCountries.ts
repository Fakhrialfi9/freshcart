// GetRestCountries.ts

import { ref } from 'vue'
import axios from 'axios'

// State untuk menyimpan data negara
const countries = ref<any[]>([])

// Fungsi untuk mengambil data negara dari API
const getCountriesData = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    countries.value = response.data
  } catch (error) {
    console.error('Error fetching countries data:', error)
  }
}

// Ekspor fungsi dan state
export { countries, getCountriesData }
