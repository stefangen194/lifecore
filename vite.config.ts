import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Strip console.*/debugger from production bundles (dev keeps them).
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
