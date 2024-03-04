import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag == 'hello-world'
        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'hello-world',
      fileName: 'hello-world'
    }
  },
  define: {
    'process.env': process.env
  }
})