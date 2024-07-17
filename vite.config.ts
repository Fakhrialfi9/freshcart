// vite.config.ts

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
      vueJsx(),
      VueDevTools(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Fresh Cart',
          short_name: 'Fresh Cart',
          description: 'Belanja makanan terbaik di Fresh Cart.',
          theme_color: '#0aad0a',
          icons: [
            {
              src: '/freshcart/src/assets/logo/logo-company/freshcart-logo.svg',
              sizes: '192x192',
              type: 'image/svg+xml'
            },
            {
              src: '/freshcart/src/assets/logo/logo-company/freshcart-logo.svg',
              sizes: '512x512',
              type: 'image/svg+xml'
            }
          ]
        }
      })
    ],
    optimizeDeps: {
      include: ['vue', 'vue-apexcharts']
    },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/user/avatarUser': {
          target: process.env.VITE_API_URL_IMAGE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/user\/avatarUser/, '/user/avatarUser')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
