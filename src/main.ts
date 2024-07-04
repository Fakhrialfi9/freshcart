import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Start Import konfigurasi App
import App from './main/app/App.vue'
// End Import konfigurasi App

// Start Import konfigurasi Router
import router from './main/router/github'
// End Import konfigurasi Router

// Start Import Style Global
import './main/style/Framework.css'
import './main/style/Root.css'
import './main/style/Responsive.css'
// End Import Style Global

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
