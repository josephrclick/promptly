import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/', // Ensures assets are looked for at the root
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'ui': ['@headlessui/vue'],
          'icons': ['lucide-vue-next']
        },
        // Ensure asset filenames include hash
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        // Add hash to chunk filenames
        chunkFileNames: 'assets/js/[name]-[hash].js',
        // Add hash to entry point
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', '@headlessui/vue', 'lucide-vue-next']
  },
  server: {
    host: true,
    port: 3000
  }
})