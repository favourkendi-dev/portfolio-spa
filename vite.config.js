import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages =
  process.env.VITE_DEPLOY_TARGET === 'github-pages' ||
  process.env.GITHUB_ACTIONS === 'true'

const getBasePath = () => {
  if (isGitHubPages) {
    return '/portfolio-spa/'
  }
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
