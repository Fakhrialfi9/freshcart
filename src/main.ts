// main.ts

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import store from './stores/AuthUsers'
import VueApexCharts from 'vue3-apexcharts'

// Import konfigurasi App
import App from './main/app/App.vue'

// Import konfigurasi Router
import router from './main/router'

// Start Import Style Global
import './main/style/Framework.css'
import './main/style/Root.css'
import './main/style/Responsive.css'

const app = createApp(App)
app.use(store)
app.use(markRaw)
app.use(createPinia())
app.use(VueApexCharts)
app.component('VueApexCharts', VueApexCharts)
app.use(router)
app.mount('#app')
