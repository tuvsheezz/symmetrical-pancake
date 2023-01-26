import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        'offline.html',
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        "theme_color": "#fff",
        "background_color": "#fff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "pwa-test",
        "short_name": "PWAT",
        "description": "Weather PWA app",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png",
                "purpose": "any maskable"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any maskable"
            }
        ]
      }
    })
  ],
})
