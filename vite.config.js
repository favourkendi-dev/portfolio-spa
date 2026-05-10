import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine base path for deployment
const getBasePath = () => {
  // For GitHub Pages deployment, set VITE_DEPLOY_TARGET=github-pages
  if (process.env.VITE_DEPLOY_TARGET === 'github-pages') {
    return '/spa-portfolio/'
  }
  // Default: Firebase Hosting and dev server use root
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  }
})
