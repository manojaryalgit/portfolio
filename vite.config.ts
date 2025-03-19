import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      overlay: true
    },
    open: true,
    host: true,
    port: 8080,
    force: true, // Force dependency pre-bundling
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    modulePreload: {
      polyfill: false
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'es',
        inlineDynamicImports: true
      }
    }
  }
});
