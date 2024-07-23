import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "${resolve(process.cwd(), 'src/styles/variables.scss')}";`, 
      },
    },
  },
});