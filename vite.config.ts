import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Alias para importar fácilmente desde la raíz del proyecto
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Configuración recomendada para aplicaciones de autoconocimiento
  server: {
    port: 3097,
    open: true,                    // Abre el navegador automáticamente
    host: true,                    // Permite acceso desde otros dispositivos en la red
  },

  // Optimizaciones de build
  build: {
    outDir: 'dist',
    sourcemap: true,               // Útil para debugging en producción
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar librerías pesadas
          vendor: ['react', 'react-dom'],
          charts: ['chart.js', 'react-chartjs-2'],
        },
      },
    },
  },

  // Configuración para Tailwind + CSS
  css: {
    devSourcemap: true,
  },

  // Definir variables de entorno públicas (si las necesitas en el futuro)
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
  },
});
