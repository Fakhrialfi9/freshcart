// vite.config.ts

import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd())

  return {
    base: '/',
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
          target: 'https://freshcartbackend.vercel.app/api',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/user/avatarUser': {
          target: 'http://localhost:3000/',
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
